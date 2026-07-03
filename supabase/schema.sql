create extension if not exists "pgcrypto";

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  cnic text not null,
  emergency_contact text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  reference_id text not null unique,
  customer_id uuid not null references public.customers(id) on delete cascade,
  tour_name text not null,
  departure text not null,
  departure_city text,
  pickup_city text not null,
  pickup_location text not null,
  number_of_travelers integer not null check (number_of_travelers > 0),
  total_amount numeric(12,2),
  advance_paid numeric(12,2),
  remaining_amount numeric(12,2),
  status text not null default 'Pending Verification' check (status in ('Pending Verification', 'Approved', 'Confirmed', 'Rejected', 'Cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.bookings
  add column if not exists total_amount numeric(12,2),
  add column if not exists advance_paid numeric(12,2),
  add column if not exists remaining_amount numeric(12,2);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  payment_method text not null,
  screenshot_path text not null,
  screenshot_url text,
  status text not null default 'Submitted' check (status in ('Submitted', 'Verified', 'Confirmed', 'Rejected')),
  created_at timestamptz not null default now()
);

do $$
begin
  alter table public.payments drop constraint if exists payments_status_check;
  alter table public.payments add constraint payments_status_check check (status in ('Submitted', 'Verified', 'Confirmed', 'Rejected'));
end $$;

create index if not exists bookings_reference_id_idx on public.bookings(reference_id);
create index if not exists bookings_status_idx on public.bookings(status);
create index if not exists payments_booking_id_idx on public.payments(booking_id);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_bookings_updated_at on public.bookings;
create trigger set_bookings_updated_at
before update on public.bookings
for each row execute function public.set_updated_at();

alter table public.customers enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;

insert into storage.buckets (id, name, public)
values ('payment-screenshots', 'payment-screenshots', false)
on conflict (id) do nothing;
