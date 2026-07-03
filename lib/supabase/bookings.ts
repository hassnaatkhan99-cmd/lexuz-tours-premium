import { getStorageBucket, getSupabaseAdmin, hasSupabaseConfig } from "./server";
import type { Booking } from "./types";

const bookingSelect = `
  *,
  customers (*),
  payments (*)
`;

export async function listBookings(): Promise<Booking[]> {
  if (!hasSupabaseConfig()) return [];
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("bookings").select(bookingSelect).order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data || []) as Booking[];
}

export async function getBookingById(id: string): Promise<Booking | null> {
  if (!hasSupabaseConfig()) return null;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("bookings").select(bookingSelect).eq("id", id).single();
  if (error) return null;
  return data as Booking;
}

export async function getBookingByReference(referenceId: string): Promise<Booking | null> {
  if (!hasSupabaseConfig()) return null;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("bookings").select(bookingSelect).eq("reference_id", referenceId).single();
  if (error) return null;
  return data as Booking;
}

export async function getPaymentScreenshotUrl(path: string) {
  if (!path || !hasSupabaseConfig()) return null;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.storage.from(getStorageBucket()).createSignedUrl(path, 60 * 30);
  if (error) return null;
  return data.signedUrl;
}
