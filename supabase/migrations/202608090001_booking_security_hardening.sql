-- Additive production hardening migration. Apply through the Supabase SQL editor
-- after reviewing against a current backup. It does not delete existing data.

create table if not exists public.api_rate_limits (
  key_hash text primary key,
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0)
);

alter table public.api_rate_limits enable row level security;

create or replace function public.consume_rate_limit(p_key text, p_limit integer, p_window_seconds integer)
returns table(allowed boolean, remaining integer, reset_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  current_entry public.api_rate_limits%rowtype;
  v_current_time timestamptz := clock_timestamp();
begin
  if p_limit < 1 or p_window_seconds < 1 then
    raise exception 'Invalid rate limit configuration';
  end if;

  insert into public.api_rate_limits as limits (key_hash, window_started_at, request_count)
  values (p_key, v_current_time, 1)
  on conflict (key_hash) do update
    set window_started_at = case
          when limits.window_started_at + make_interval(secs => p_window_seconds) <= v_current_time then v_current_time
          else limits.window_started_at
        end,
        request_count = case
          when limits.window_started_at + make_interval(secs => p_window_seconds) <= v_current_time then 1
          else limits.request_count + 1
        end
  returning * into current_entry;

  return query select
    current_entry.request_count <= p_limit,
    greatest(0, p_limit - current_entry.request_count),
    current_entry.window_started_at + make_interval(secs => p_window_seconds);
end;
$$;

revoke all on function public.consume_rate_limit(text, integer, integer) from public, anon, authenticated;
grant execute on function public.consume_rate_limit(text, integer, integer) to service_role;

alter table public.bookings
  add column if not exists submission_id uuid,
  add column if not exists tour_slug text,
  add column if not exists price_tier text;

create unique index if not exists bookings_submission_id_unique
  on public.bookings(submission_id)
  where submission_id is not null;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'bookings_non_negative_amounts') then
    alter table public.bookings add constraint bookings_non_negative_amounts
      check (
        (total_amount is null or total_amount >= 0) and
        (advance_paid is null or advance_paid >= 0) and
        (remaining_amount is null or remaining_amount >= 0)
      ) not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select booking_id from public.payments group by booking_id having count(*) > 1 limit 1
  ) then
    create unique index if not exists payments_one_per_booking_unique on public.payments(booking_id);
  else
    raise notice 'payments_one_per_booking_unique not created: existing duplicate payment rows require owner review.';
  end if;
end $$;

create or replace function public.create_booking_transaction(
  p_submission_id uuid,
  p_reference_id text,
  p_full_name text,
  p_phone text,
  p_email text,
  p_cnic text,
  p_emergency_contact text,
  p_tour_slug text,
  p_tour_name text,
  p_departure text,
  p_departure_city text,
  p_price_tier text,
  p_pickup_city text,
  p_pickup_location text,
  p_number_of_travelers integer,
  p_total_amount numeric,
  p_payment_method text,
  p_screenshot_path text
)
returns table(reference_id text, status text, created boolean)
language plpgsql
security definer
set search_path = public
as $$
declare
  existing_booking public.bookings%rowtype;
  new_customer_id uuid;
  new_booking_id uuid;
begin
  perform pg_advisory_xact_lock(hashtextextended(p_submission_id::text, 0));
  select * into existing_booking from public.bookings where submission_id = p_submission_id;
  if found then
    return query select existing_booking.reference_id, existing_booking.status, false;
    return;
  end if;

  insert into public.customers (full_name, phone, email, cnic, emergency_contact)
  values (p_full_name, p_phone, p_email, p_cnic, p_emergency_contact)
  returning id into new_customer_id;

  insert into public.bookings (
    submission_id, reference_id, customer_id, tour_slug, tour_name, departure,
    departure_city, price_tier, pickup_city, pickup_location,
    number_of_travelers, total_amount, advance_paid, remaining_amount, status
  ) values (
    p_submission_id, p_reference_id, new_customer_id, p_tour_slug, p_tour_name, p_departure,
    p_departure_city, p_price_tier, p_pickup_city, p_pickup_location,
    p_number_of_travelers, p_total_amount, null, null, 'Pending Verification'
  ) returning id into new_booking_id;

  insert into public.payments (booking_id, payment_method, screenshot_path, screenshot_url, status)
  values (new_booking_id, p_payment_method, p_screenshot_path, null, 'Submitted');

  return query select p_reference_id, 'Pending Verification'::text, true;
end;
$$;

revoke all on function public.create_booking_transaction(uuid, text, text, text, text, text, text, text, text, text, text, text, text, text, integer, numeric, text, text) from public, anon, authenticated;
grant execute on function public.create_booking_transaction(uuid, text, text, text, text, text, text, text, text, text, text, text, text, text, integer, numeric, text, text) to service_role;

create or replace function public.update_booking_status_transaction(
  p_booking_id uuid,
  p_status text,
  p_total_amount numeric default null,
  p_advance_paid numeric default null,
  p_remaining_amount numeric default null
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_status text;
begin
  select status into current_status from public.bookings where id = p_booking_id for update;
  if not found then return false; end if;

  if not (
    (current_status = 'Pending Verification' and p_status in ('Approved', 'Rejected', 'Cancelled')) or
    (current_status = 'Approved' and p_status in ('Confirmed', 'Rejected', 'Cancelled')) or
    (current_status = 'Confirmed' and p_status = 'Cancelled')
  ) then
    raise exception using errcode = '22023', message = 'INVALID_STATUS_TRANSITION';
  end if;

  update public.bookings set
    status = p_status,
    total_amount = case when p_status = 'Approved' then p_total_amount else total_amount end,
    advance_paid = case when p_status = 'Approved' then p_advance_paid else advance_paid end,
    remaining_amount = case when p_status = 'Approved' then p_remaining_amount else remaining_amount end
  where id = p_booking_id;

  if p_status = 'Confirmed' then
    update public.payments set status = 'Confirmed' where booking_id = p_booking_id;
    if not found then raise exception 'PAYMENT_NOT_FOUND'; end if;
  elsif p_status = 'Rejected' then
    update public.payments set status = 'Rejected' where booking_id = p_booking_id;
    if not found then raise exception 'PAYMENT_NOT_FOUND'; end if;
  end if;

  return true;
end;
$$;

revoke all on function public.update_booking_status_transaction(uuid, text, numeric, numeric, numeric) from public, anon, authenticated;
grant execute on function public.update_booking_status_transaction(uuid, text, numeric, numeric, numeric) to service_role;
