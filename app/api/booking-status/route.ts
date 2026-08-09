import { NextResponse } from "next/server";
import { getBookingByReference } from "@/lib/supabase/bookings";
import { consumeRateLimit, rateLimitHeaders } from "@/lib/security/rateLimit";

export async function GET(request: Request) {
  const rateLimit = await consumeRateLimit(request, { namespace: "booking-status", limit: 12, windowSeconds: 10 * 60 });
  if (!rateLimit.allowed) return NextResponse.json({ error: "Too many lookup attempts. Please try again later." }, { status: 429, headers: rateLimitHeaders(rateLimit) });

  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference")?.trim();

  if (!reference || reference.length > 64 || !/^LX-[A-Z0-9_-]+$/i.test(reference)) {
    return NextResponse.json({ error: "Booking reference is required." }, { status: 400 });
  }

  let booking;
  try {
    booking = await getBookingByReference(reference);
  } catch (error) {
    console.error("[Booking Status] Lookup failed.", { error: error instanceof Error ? error.name : "UnknownError" });
    return NextResponse.json({ error: "Booking status is temporarily unavailable." }, { status: 503 });
  }
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
    paymentStatus: booking.payments?.[0]?.status || null
  });
}
