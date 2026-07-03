import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminDashboardCards } from "@/components/AdminDashboardCards";
import { SectionHeading } from "@/components/SectionHeading";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { listBookings } from "@/lib/supabase/bookings";
import { hasSupabaseConfig } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Admin Dashboard", description: "Live admin dashboard for Lexuz bookings." };

export default async function AdminPage() {
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
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading eyebrow="Admin" title="Admin Dashboard" copy="Review real bookings, approvals and payment confirmations from Supabase." />
        <form action="/api/admin/logout" method="post">
          <button className="rounded-md border border-forest-900/15 px-4 py-2 text-sm font-black text-forest-900">Logout</button>
        </form>
      </div>
      {!configured ? <div className="mb-8 rounded-lg border border-saffron-500/40 bg-saffron-100 p-5 text-sm font-bold text-forest-950">Supabase environment variables are missing. Add them to enable live bookings.</div> : null}
      {supabaseError ? <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-bold text-red-800">Supabase is configured, but bookings could not be loaded locally: {supabaseError}</div> : null}
      <AdminDashboardCards bookings={bookings} />
      <Link href="/admin/bookings" className="mt-8 inline-flex rounded-md bg-forest-800 px-5 py-3 font-black text-white">View Bookings</Link>
    </section>
  );
}
