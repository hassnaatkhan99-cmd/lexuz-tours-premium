import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { notifyBookingStatus } from "@/lib/email/notifications";
import { getBookingById } from "@/lib/supabase/bookings";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { BookingStatus } from "@/lib/supabase/types";

const allowedStatuses: BookingStatus[] = ["Approved", "Confirmed", "Rejected", "Cancelled"];

function optionalAmount(value: unknown) {
  if (value === "" || value === null || typeof value === "undefined") return null;
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount < 0) return undefined;
  return amount;
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const status = body.status as BookingStatus;

  if (!allowedStatuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const bookingUpdate: {
    status: BookingStatus;
    total_amount?: number | null;
    advance_paid?: number | null;
    remaining_amount?: number | null;
  } = { status };

  if (status === "Approved") {
    const totalAmount = optionalAmount(body.totalAmount);
    const advancePaid = optionalAmount(body.advancePaid);
    const remainingAmount = optionalAmount(body.remainingAmount);

    if (typeof totalAmount === "undefined" || typeof advancePaid === "undefined" || typeof remainingAmount === "undefined") {
      return NextResponse.json({ error: "Payment amounts must be valid zero or positive numbers." }, { status: 400 });
    }

    bookingUpdate.total_amount = totalAmount;
    bookingUpdate.advance_paid = advancePaid;
    bookingUpdate.remaining_amount = remainingAmount;
  }

  const { error } = await supabase.from("bookings").update(bookingUpdate).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (status === "Confirmed") {
    await supabase.from("payments").update({ status: "Confirmed" }).eq("booking_id", id);
  }

  if (status === "Rejected") {
    await supabase.from("payments").update({ status: "Rejected" }).eq("booking_id", id);
  }

  const booking = await getBookingById(id);
  if (booking?.customers) {
    const payment = booking.payments?.[0];
    await notifyBookingStatus({
      customerEmail: booking.customers.email,
      customerName: booking.customers.full_name,
      phone: booking.customers.phone,
      referenceId: booking.reference_id,
      tourName: booking.tour_name,
      travelers: booking.number_of_travelers,
      departure: booking.departure,
      departureCity: booking.departure_city,
      pickupCity: booking.pickup_city,
      pickupLocation: booking.pickup_location,
      paymentMethod: payment?.payment_method,
      totalAmount: booking.total_amount,
      advancePaid: booking.advance_paid,
      remainingAmount: booking.remaining_amount,
      paymentStatus: status === "Confirmed" ? "Confirmed" : payment?.status,
      status
    });
  }

  return NextResponse.json({ status });
}
