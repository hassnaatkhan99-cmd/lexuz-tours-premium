import type { Booking } from "@/lib/supabase/types";

export function AdminDashboardCards({ bookings }: { bookings: Booking[] }) {
  const cards = [
    ["Total Bookings", bookings.length],
    ["Pending Verification", bookings.filter((booking) => booking.status === "Pending Verification").length],
    ["Approved", bookings.filter((booking) => booking.status === "Approved").length],
    ["Confirmed Bookings", bookings.filter((booking) => booking.status === "Confirmed").length]
  ];
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {cards.map(([label, value]) => (
        <div key={label} className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
          <p className="text-sm font-black uppercase text-forest-700">{label}</p>
          <p className="mt-3 text-4xl font-black">{value}</p>
        </div>
      ))}
    </div>
  );
}
