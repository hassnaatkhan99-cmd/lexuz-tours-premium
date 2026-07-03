import { NextResponse } from "next/server";
import { notifyNewBooking } from "@/lib/email/notifications";
import { getStorageBucket, getSupabaseAdmin, hasSupabaseConfig } from "@/lib/supabase/server";

function asText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function optionalAmount(value: string) {
  if (!value) return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : null;
}

function createReferenceId() {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `LX-${stamp}-${random}`;
}

export async function POST(request: Request) {
  if (!hasSupabaseConfig()) {
    return NextResponse.json({ error: "Supabase is not configured on this deployment." }, { status: 500 });
  }

  const formData = await request.formData();
  const screenshot = formData.get("paymentScreenshot");

  if (!(screenshot instanceof File) || screenshot.size === 0) {
    return NextResponse.json({ error: "Payment screenshot is required." }, { status: 400 });
  }

  if (!["image/png", "image/jpeg", "image/jpg"].includes(screenshot.type)) {
    return NextResponse.json({ error: "Payment screenshot must be PNG, JPG or JPEG." }, { status: 400 });
  }

  const fullName = asText(formData, "fullName");
  const phone = asText(formData, "phone");
  const email = asText(formData, "email");
  const cnic = asText(formData, "cnic");
  const travelers = Number(asText(formData, "numberOfTravelers"));
  const emergencyContact = asText(formData, "emergencyContact");
  const pickupCity = asText(formData, "pickupCity");
  const pickupLocation = asText(formData, "pickupLocation");
  const tourName = asText(formData, "tourName");
  const departure = asText(formData, "departure");
  const departureCity = asText(formData, "departureCity");
  const paymentMethod = asText(formData, "paymentMethod");
  const totalAmount = optionalAmount(asText(formData, "totalAmount"));
  const advancePaid = optionalAmount(asText(formData, "advancePaid"));
  const remainingAmount = optionalAmount(asText(formData, "remainingAmount"));

  if (!fullName || !phone || !email || !cnic || !travelers || !emergencyContact || !pickupCity || !pickupLocation || !tourName || !departure || !paymentMethod) {
    return NextResponse.json({ error: "Please complete all required booking fields." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const referenceId = createReferenceId();

  const { data: customer, error: customerError } = await supabase
    .from("customers")
    .insert({
      full_name: fullName,
      phone,
      email,
      cnic,
      emergency_contact: emergencyContact
    })
    .select("id")
    .single();

  if (customerError || !customer) {
    return NextResponse.json({ error: customerError?.message || "Could not create customer." }, { status: 500 });
  }

  const { data: booking, error: bookingError } = await supabase
    .from("bookings")
    .insert({
      reference_id: referenceId,
      customer_id: customer.id,
      tour_name: tourName,
      departure,
      departure_city: departureCity || null,
      pickup_city: pickupCity,
      pickup_location: pickupLocation,
      number_of_travelers: travelers,
      total_amount: totalAmount,
      advance_paid: advancePaid,
      remaining_amount: remainingAmount,
      status: "Pending Verification"
    })
    .select("id")
    .single();

  if (bookingError || !booking) {
    return NextResponse.json({ error: bookingError?.message || "Could not create booking." }, { status: 500 });
  }

  const extension = screenshot.name.split(".").pop()?.toLowerCase() || "jpg";
  const screenshotPath = `${referenceId}/${Date.now()}.${extension}`;
  const arrayBuffer = await screenshot.arrayBuffer();

  const { error: uploadError } = await supabase.storage
    .from(getStorageBucket())
    .upload(screenshotPath, arrayBuffer, {
      contentType: screenshot.type,
      upsert: false
    });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: signedUrl } = await supabase.storage.from(getStorageBucket()).createSignedUrl(screenshotPath, 60 * 60 * 24 * 7);

  const { error: paymentError } = await supabase.from("payments").insert({
    booking_id: booking.id,
    payment_method: paymentMethod,
    screenshot_path: screenshotPath,
    screenshot_url: signedUrl?.signedUrl || null,
    status: "Submitted"
  });

  if (paymentError) {
    return NextResponse.json({ error: paymentError.message }, { status: 500 });
  }

  await notifyNewBooking({
    referenceId,
    customerName: fullName,
    customerEmail: email,
    phone,
    tourName,
    travelers,
    departure,
    departureCity,
    pickupCity,
    pickupLocation,
    paymentMethod,
    totalAmount,
    advancePaid,
    remainingAmount,
    status: "Pending Verification"
  });

  return NextResponse.json({ referenceId, status: "Pending Verification" });
}
