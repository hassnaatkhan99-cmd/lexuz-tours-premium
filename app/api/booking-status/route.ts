import { NextResponse } from "next/server";
import { getBookingByReference } from "@/lib/supabase/bookings";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference")?.trim();

  if (!reference) {
    return NextResponse.json({ error: "Booking reference is required." }, { status: 400 });
  }

  const booking = await getBookingByReference(reference);
  if (!booking) {
    return NextResponse.json({ error: "Booking not found." }, { status: 404 });
  }

  return NextResponse.json({
    referenceId: booking.reference_id,
    tourName: booking.tour_name,
    departure: booking.departure,
    status: booking.status,
    travelers: booking.number_of_travelers,
    totalAmount: booking.total_amount,
    advancePaid: booking.advance_paid,
    remainingAmount: booking.remaining_amount,
    paymentStatus: booking.payments?.[0]?.status || null,
    customerName: booking.customers?.full_name || ""
  });
}
