import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminBookingTable } from "@/components/AdminBookingTable";
import { SectionHeading } from "@/components/SectionHeading";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { listBookings } from "@/lib/supabase/bookings";
import { hasSupabaseConfig } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Admin Bookings", description: "Live admin bookings table." };

export default async function AdminBookingsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const configured = hasSupabaseConfig();
  let bookings: Awaited<ReturnType<typeof listBookings>> = [];
  let supabaseError = "";

  if (configured) {
    try {
      bookings = await listBookings();
    } catch (error) {
      supabaseError = error instanceof Error ? error.message : "Could not load bookings from Supabase.";
    }
  }

  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Admin" title="Bookings" copy="Review booking screenshots, approve, reject or confirm payments." />
      {!configured ? <div className="mb-8 rounded-lg border border-saffron-500/40 bg-saffron-100 p-5 text-sm font-bold text-forest-950">Supabase environment variables are missing. Add them to enable live bookings.</div> : null}
      {supabaseError ? <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-bold text-red-800">Supabase is configured, but bookings could not be loaded locally: {supabaseError}</div> : null}
      <AdminBookingTable bookings={bookings} />
    </section>
  );
}
