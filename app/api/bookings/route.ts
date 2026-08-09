import { NextResponse } from "next/server";
import { resolveAuthoritativeBooking, isSubmissionId } from "@/lib/booking/validation";
import { notifyNewBooking } from "@/lib/email/notifications";
import { consumeRateLimit, rateLimitHeaders } from "@/lib/security/rateLimit";
import { createBookingReference } from "@/lib/security/bookingReference";
import { MAX_SCREENSHOT_BYTES, validatePaymentScreenshot } from "@/lib/security/upload";
import { getStorageBucket, getSupabaseAdmin, hasSupabaseConfig } from "@/lib/supabase/server";

const MAX_REQUEST_BYTES = MAX_SCREENSHOT_BYTES + 256 * 1024;

function asText(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function uploadErrorResponse(error: unknown) {
  const code = error instanceof Error ? error.message : "";
  if (code === "UPLOAD_REQUIRED") return NextResponse.json({ error: "Payment screenshot is required." }, { status: 400 });
  if (code === "UPLOAD_TOO_LARGE") return NextResponse.json({ error: "Payment screenshot must be 5 MB or smaller." }, { status: 413 });
  return NextResponse.json({ error: "Payment screenshot must be a valid PNG or JPEG image." }, { status: 400 });
}

export async function POST(request: Request) {
  const rateLimit = await consumeRateLimit(request, { namespace: "booking-create", limit: 6, windowSeconds: 10 * 60 });
  if (!rateLimit.allowed) return NextResponse.json({ error: "Too many booking attempts. Please try again later." }, { status: 429, headers: rateLimitHeaders(rateLimit) });
  if (!hasSupabaseConfig()) return NextResponse.json({ error: "Booking service is temporarily unavailable." }, { status: 503 });

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) return NextResponse.json({ error: "Payment screenshot must be 5 MB or smaller." }, { status: 413 });

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid booking submission." }, { status: 400 });
  }

  const screenshot = formData.get("paymentScreenshot");
  if (!(screenshot instanceof File)) return NextResponse.json({ error: "Payment screenshot is required." }, { status: 400 });

  let upload;
  try {
    upload = await validatePaymentScreenshot(screenshot);
  } catch (error) {
    return uploadErrorResponse(error);
  }

  const fullName = asText(formData, "fullName", 120);
  const phone = asText(formData, "phone", 40);
  const email = asText(formData, "email", 254).toLowerCase();
  const cnic = asText(formData, "cnic", 60);
  const travelers = Number(asText(formData, "numberOfTravelers", 4));
  const emergencyContact = asText(formData, "emergencyContact", 40);
  const pickupCity = asText(formData, "pickupCity", 100);
  const pickupLocation = asText(formData, "pickupLocation", 240);
  const submissionId = asText(formData, "submissionId", 36);
  const authoritative = resolveAuthoritativeBooking({
    tourSlug: asText(formData, "tourSlug", 100),
    departureCity: asText(formData, "departureCity", 20),
    priceTier: asText(formData, "priceTier", 30),
    paymentMethod: asText(formData, "paymentMethod", 40)
  });

  if (!fullName || !phone || !email || !cnic || !emergencyContact || !pickupCity || !pickupLocation || !Number.isInteger(travelers) || travelers < 1 || travelers > 100 || !isSubmissionId(submissionId) || !authoritative || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please review the booking details and try again." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const referenceId = createBookingReference();
  const screenshotPath = `${referenceId}/${submissionId}.${upload.extension}`;
  const { error: uploadError } = await supabase.storage.from(getStorageBucket()).upload(screenshotPath, upload.bytes, { contentType: upload.contentType, upsert: false, cacheControl: "private, max-age=0" });
  if (uploadError) {
    console.error("[Booking] Screenshot upload failed.", { code: uploadError.name });
    return NextResponse.json({ error: "Booking service is temporarily unavailable." }, { status: 503 });
  }

  const { data, error } = await supabase.rpc("create_booking_transaction", {
    p_submission_id: submissionId,
    p_reference_id: referenceId,
    p_full_name: fullName,
    p_phone: phone,
    p_email: email,
    p_cnic: cnic,
    p_emergency_contact: emergencyContact,
    p_tour_slug: authoritative.tourSlug,
    p_tour_name: authoritative.tourName,
    p_departure: authoritative.departure,
    p_departure_city: authoritative.departureCity,
    p_price_tier: authoritative.priceTier,
    p_pickup_city: pickupCity,
    p_pickup_location: pickupLocation,
    p_number_of_travelers: travelers,
    p_total_amount: authoritative.totalAmount,
    p_payment_method: authoritative.paymentMethod,
    p_screenshot_path: screenshotPath
  });

  const result = Array.isArray(data) ? data[0] : null;
  if (error || !result?.reference_id) {
    await supabase.storage.from(getStorageBucket()).remove([screenshotPath]);
    console.error("[Booking] Atomic database creation failed.", { code: error?.code });
    return NextResponse.json({ error: "Booking service is temporarily unavailable." }, { status: 503 });
  }
  if (!result.created) await supabase.storage.from(getStorageBucket()).remove([screenshotPath]);

  if (result.created) {
    await notifyNewBooking({
      referenceId: result.reference_id,
      customerName: fullName,
      customerEmail: email,
      phone,
      tourName: authoritative.tourName,
      travelers,
      departure: authoritative.departure,
      departureCity: authoritative.departureCity,
      pickupCity,
      pickupLocation,
      paymentMethod: authoritative.paymentMethod,
      totalAmount: authoritative.totalAmount,
      advancePaid: null,
      remainingAmount: null,
      status: "Pending Verification"
    });
  }

  return NextResponse.json({ referenceId: result.reference_id, status: result.status });
}
