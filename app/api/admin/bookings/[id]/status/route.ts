import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { notifyBookingStatus } from "@/lib/email/notifications";
import { getBookingById } from "@/lib/supabase/bookings";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { BookingStatus } from "@/lib/supabase/types";
import { consumeRateLimit, rateLimitHeaders } from "@/lib/security/rateLimit";

const allowedStatuses: BookingStatus[] = ["Approved", "Confirmed", "Rejected", "Cancelled"];
const allowedTransitions: Record<BookingStatus, BookingStatus[]> = {
  "Pending Verification": ["Approved", "Rejected", "Cancelled"],
  Approved: ["Confirmed", "Rejected", "Cancelled"],
  Confirmed: ["Cancelled"],
  Rejected: [],
  Cancelled: []
};

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

  const rateLimit = await consumeRateLimit(request, { namespace: "admin-booking-mutation", limit: 60, windowSeconds: 10 * 60 });
  if (!rateLimit.allowed) return NextResponse.json({ error: "Too many update attempts. Please try again later." }, { status: 429, headers: rateLimitHeaders(rateLimit) });

  const { id } = await params;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const status = body.status as BookingStatus;

  if (!allowedStatuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const currentBooking = await getBookingById(id);
  if (!currentBooking) return NextResponse.json({ error: "Booking not found." }, { status: 404 });
  if (!allowedTransitions[currentBooking.status].includes(status)) return NextResponse.json({ error: "This status change is not allowed." }, { status: 409 });
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

  const { data: updated, error } = await supabase.rpc("update_booking_status_transaction", {
    p_booking_id: id,
    p_status: status,
    p_total_amount: bookingUpdate.total_amount ?? null,
    p_advance_paid: bookingUpdate.advance_paid ?? null,
    p_remaining_amount: bookingUpdate.remaining_amount ?? null
  });
  if (error || !updated) {
    console.error("[Admin] Booking status transaction failed.", { code: error?.code, status });
    return NextResponse.json({ error: "The booking could not be updated. Please try again." }, { status: 500 });
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
