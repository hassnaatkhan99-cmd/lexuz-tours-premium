import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AdminBookingActions } from "@/components/AdminBookingActions";
import { AdminWhatsAppActions } from "@/components/AdminWhatsAppActions";
import { SectionHeading } from "@/components/SectionHeading";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getBookingById, getPaymentScreenshotUrl } from "@/lib/supabase/bookings";
import { hasSupabaseConfig } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Booking Details",
  description: "Review Lexuz Tours booking details and payment screenshot."
};

function display(value: string | number | null | undefined) {
  return value || "-";
}

function paymentDisplay(value: number | null | undefined) {
  return typeof value === "number" ? `PKR ${value.toLocaleString("en-PK")}` : "To be confirmed by our team";
}

function DetailRow({ label, value }: { label: string; value: string | number | null | undefined }) {
  return (
    <div className="rounded-lg border border-forest-900/10 bg-white p-4">
      <p className="text-xs font-black uppercase tracking-wide text-forest-700">{label}</p>
      <p className="mt-1 font-bold text-forest-950">{display(value)}</p>
    </div>
  );
}

export default async function AdminBookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const { id } = await params;
  const configured = hasSupabaseConfig();

  if (!configured) {
    return (
      <section className="container-page py-14">
        <Link href="/admin/bookings" className="text-sm font-black text-forest-800">Back to bookings</Link>
        <SectionHeading eyebrow="Admin Booking" title="Booking Details" copy="Supabase is not configured locally, so booking details cannot be loaded." />
        <div className="rounded-lg border border-saffron-500/40 bg-saffron-100 p-5 text-sm font-bold text-forest-950">
          Supabase environment variables are missing. Add them locally to view live booking details.
        </div>
      </section>
    );
  }

  let booking = null;
  try {
    booking = await getBookingById(id);
  } catch {
    return (
      <section className="container-page py-14">
        <Link href="/admin/bookings" className="text-sm font-black text-forest-800">Back to bookings</Link>
        <SectionHeading eyebrow="Admin Booking" title="Booking Details" copy="The booking could not be loaded from Supabase." />
        <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-bold text-red-800">
          Supabase is configured, but this booking could not be loaded locally. Check your local Supabase URL and service role key.
        </div>
      </section>
    );
  }
  if (!booking) notFound();

  const payment = booking.payments?.[0] || null;
  const screenshotUrl = payment?.screenshot_path ? await getPaymentScreenshotUrl(payment.screenshot_path) : null;

  return (
    <section className="container-page py-14">
      <Link href="/admin/bookings" className="text-sm font-black text-forest-800">Back to bookings</Link>
      <SectionHeading eyebrow="Admin Booking" title={booking.reference_id} copy="Review customer details, trip information and payment proof before confirming." />

      <div className="grid gap-7 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <DetailRow label="Customer Name" value={booking.customers?.full_name} />
            <DetailRow label="Phone" value={booking.customers?.phone} />
            <DetailRow label="Email" value={booking.customers?.email} />
            <DetailRow label="CNIC / Passport" value={booking.customers?.cnic} />
            <DetailRow label="Emergency Contact" value={booking.customers?.emergency_contact} />
            <DetailRow label="Number Of Travelers" value={booking.number_of_travelers} />
            <DetailRow label="Tour Name" value={booking.tour_name} />
            <DetailRow label="Departure" value={booking.departure} />
            <DetailRow label="Departure City" value={booking.departure_city === "lahore" ? "Lahore" : "Islamabad / Rawalpindi"} />
            <DetailRow label="Pickup City" value={booking.pickup_city} />
            <DetailRow label="Pickup Location" value={booking.pickup_location} />
            <DetailRow label="Payment Method" value={payment?.payment_method} />
            <DetailRow label="Total Amount" value={paymentDisplay(booking.total_amount)} />
            <DetailRow label="Advance Paid" value={paymentDisplay(booking.advance_paid)} />
            <DetailRow label="Remaining Amount" value={paymentDisplay(booking.remaining_amount)} />
            <DetailRow label="Payment Status" value={payment?.status || "To be confirmed by our team"} />
          </div>

          <div className="rounded-lg border border-forest-900/10 bg-white p-5 shadow-premium">
            <h2 className="text-xl font-black text-forest-950">Payment Screenshot</h2>
            {screenshotUrl ? (
              <div className="mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={screenshotUrl} alt={`Payment screenshot for ${booking.reference_id}`} className="max-h-[620px] w-full rounded-lg border border-forest-900/10 object-contain" />
                <a href={screenshotUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-md bg-forest-800 px-4 py-2 text-sm font-black text-white">Open Full Screenshot</a>
              </div>
            ) : (
              <p className="mt-3 text-sm text-neutral-600">No screenshot is available for this booking.</p>
            )}
          </div>
        </div>

        <aside className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-black uppercase text-forest-700">Current Status</p>
          <p className="mt-2 rounded-full bg-saffron-300/40 px-4 py-2 text-center text-lg font-black text-forest-950">{booking.status}</p>
          <div className="mt-6">
            <AdminBookingActions
              bookingId={booking.id}
              currentStatus={booking.status}
              totalAmount={booking.total_amount}
              advancePaid={booking.advance_paid}
              remainingAmount={booking.remaining_amount}
            />
          </div>
          <p className="mt-5 text-sm text-neutral-600">Approving, rejecting or confirming payment will update Supabase and send the customer email notification when email settings are configured.</p>
          <AdminWhatsAppActions booking={booking} />
        </aside>
      </div>
    </section>
  );
}
