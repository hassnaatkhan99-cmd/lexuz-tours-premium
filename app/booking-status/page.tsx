import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { getBookingByReference } from "@/lib/supabase/bookings";

export const metadata: Metadata = { title: "Booking Status", description: "Track your Lexuz Tours booking status by reference ID." };

function paymentDisplay(value: number | null | undefined) {
  return typeof value === "number" ? `PKR ${value.toLocaleString("en-PK")}` : "To be confirmed by our team";
}

export default async function BookingStatusPage({ searchParams }: { searchParams: Promise<{ reference?: string }> }) {
  const params = await searchParams;
  const reference = params.reference?.trim() || "";
  const booking = reference ? await getBookingByReference(reference) : null;

  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Booking Status" title="Track Your Booking" copy="Enter your booking reference ID to check the current booking status." />
      <form className="grid gap-3 rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium md:grid-cols-[1fr_auto]">
        <input name="reference" defaultValue={reference} className="rounded-md border border-neutral-200 px-4 py-3" placeholder="Example: LX-20260622-ABC123" />
        <button className="rounded-md bg-saffron-400 px-6 py-3 font-black text-forest-900">Check Status</button>
      </form>
      {reference ? (
        booking ? (
          <div className="mt-6 rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-black uppercase text-forest-700">Reference ID</p>
            <h2 className="mt-1 text-2xl font-black">{booking.reference_id}</h2>
            <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
              <p><span className="text-neutral-500">Tour:</span> <strong>{booking.tour_name}</strong></p>
              <p><span className="text-neutral-500">Departure:</span> <strong>{booking.departure}</strong></p>
              <p><span className="text-neutral-500">Travelers:</span> <strong>{booking.number_of_travelers}</strong></p>
              <p><span className="text-neutral-500">Status:</span> <strong className="text-forest-800">{booking.status}</strong></p>
              <p><span className="text-neutral-500">Total Amount:</span> <strong>{paymentDisplay(booking.total_amount)}</strong></p>
              <p><span className="text-neutral-500">Advance Paid:</span> <strong>{paymentDisplay(booking.advance_paid)}</strong></p>
              <p><span className="text-neutral-500">Remaining Amount:</span> <strong>{paymentDisplay(booking.remaining_amount)}</strong></p>
              <p><span className="text-neutral-500">Payment Status:</span> <strong>{booking.payments?.[0]?.status || "To be confirmed by our team"}</strong></p>
            </div>
          </div>
        ) : (
          <p className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5 font-bold text-red-700">No booking found for this reference ID.</p>
        )
      ) : null}
    </section>
  );
}
