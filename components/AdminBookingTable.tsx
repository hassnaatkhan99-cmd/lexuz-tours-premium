import Link from "next/link";
import type { Booking } from "@/lib/supabase/types";
import { AdminBookingActions } from "./AdminBookingActions";

function formatDepartureCity(city: string | null) {
  if (city === "lahore") return "Lahore";
  if (city === "islamabad") return "Islamabad / Rawalpindi";
  return city || "-";
}

function paymentDisplay(value: number | null | undefined) {
  return typeof value === "number" ? `PKR ${value.toLocaleString("en-PK")}` : "To be confirmed by our team";
}

export function AdminBookingTable({ bookings }: { bookings: Booking[] }) {
  if (!bookings.length) {
    return (
      <div className="rounded-lg border border-forest-900/10 bg-white p-8 text-center shadow-premium">
        <h2 className="text-xl font-black text-forest-950">No bookings yet</h2>
        <p className="mt-2 text-sm text-neutral-600">New website bookings will appear here after Supabase is connected.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-forest-900/10 bg-white shadow-premium">
      <table className="w-full min-w-[1420px] text-left text-sm">
        <thead className="bg-forest-900 text-white">
          <tr>
            {["Reference", "Customer Name", "Tour Name", "Travelers", "Departure City", "Pickup Location", "Payment Method", "Total Amount", "Advance Paid", "Remaining", "Payment Status", "Status", "Actions"].map((head) => <th key={head} className="p-4">{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b border-forest-900/10">
              <td className="p-4 font-black text-forest-900">{booking.reference_id}</td>
              <td className="p-4 font-bold">{booking.customers?.full_name || "Unknown"}</td>
              <td className="p-4">{booking.tour_name}</td>
              <td className="p-4">{booking.number_of_travelers}</td>
              <td className="p-4">{formatDepartureCity(booking.departure_city)}</td>
              <td className="p-4">{booking.pickup_location}</td>
              <td className="p-4">{booking.payments?.[0]?.payment_method || "-"}</td>
              <td className="p-4 font-bold">{paymentDisplay(booking.total_amount)}</td>
              <td className="p-4 font-bold">{paymentDisplay(booking.advance_paid)}</td>
              <td className="p-4 font-bold">{paymentDisplay(booking.remaining_amount)}</td>
              <td className="p-4">{booking.payments?.[0]?.status || "To be confirmed by our team"}</td>
              <td className="p-4"><span className="rounded-full bg-saffron-300/40 px-3 py-1 font-bold text-forest-900">{booking.status}</span></td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Link href={`/admin/bookings/${booking.id}`} className="rounded-md bg-forest-50 px-3 py-2 text-xs font-black text-forest-900">View Details</Link>
                  <AdminBookingActions bookingId={booking.id} currentStatus={booking.status} allowApproval={false} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
