import { MessageCircle } from "lucide-react";
import type { Booking } from "@/lib/supabase/types";
import { createWhatsAppLink, formatPakistanWhatsAppNumber } from "@/lib/whatsapp";
import { tours } from "@/data/tours";

function cityLabel(value: string | null | undefined) {
  return value === "lahore" ? "Lahore" : "Islamabad / Rawalpindi";
}

function line(label: string, value: string | number | null | undefined) {
  return `${label}: ${value || "-"}`;
}

function findTour(booking: Booking) {
  const bookingTour = booking.tour_name.trim().toLowerCase();
  return tours.find((tour) => tour.title.trim().toLowerCase() === bookingTour);
}

function servicesText(items: string[] | undefined) {
  if (!items?.length) return "-";
  return items.map((item) => `- ${item}`).join("\n");
}

function paymentAmount(value: number | null | undefined) {
  return typeof value === "number" ? `PKR ${value.toLocaleString("en-PK")}` : "To be confirmed by our team";
}

function bookingReceivedMessage(booking: Booking) {
  return [
    "Hello from Lexuz Tours & Adventures,",
    "",
    "We have received your booking request.",
    "",
    line("Customer", booking.customers?.full_name),
    line("Booking Reference", booking.reference_id),
    line("Tour", booking.tour_name),
    line("Departure", booking.departure),
    line("Departure City", cityLabel(booking.departure_city)),
    line("Pickup Location", booking.pickup_location),
    line("Travelers", booking.number_of_travelers),
    "Status: Pending Verification",
    "",
    "Your payment screenshot has been received and will be reviewed by our team.",
    "",
    "Thank you for choosing Lexuz Tours & Adventures."
  ].join("\n");
}

function approvalMessage(booking: Booking) {
  return [
    "Hello from Lexuz Tours & Adventures,",
    "",
    line("Booking Reference", booking.reference_id),
    line("Tour", booking.tour_name),
    "Status: Approved",
    "",
    "Your booking has been approved. Your payment is now being verified by our team."
  ].join("\n");
}

function rejectionMessage(booking: Booking) {
  return [
    "Hello from Lexuz Tours & Adventures,",
    "",
    line("Booking Reference", booking.reference_id),
    line("Tour", booking.tour_name),
    "Status: Rejected",
    "",
    "Your booking request could not be approved at this time. If you believe this is a mistake, please contact Lexuz Tours on WhatsApp."
  ].join("\n");
}

function paymentConfirmedMessage(booking: Booking) {
  const payment = booking.payments?.[0] || null;
  return [
    "Hello from Lexuz Tours & Adventures,",
    "",
    "Your payment has been confirmed.",
    "",
    line("Booking Reference", booking.reference_id),
    line("Customer", booking.customers?.full_name),
    line("Tour", booking.tour_name),
    line("Departure", booking.departure),
    line("Departure City", cityLabel(booking.departure_city)),
    line("Pickup Location", booking.pickup_location),
    line("Travelers", booking.number_of_travelers),
    line("Payment Method", payment?.payment_method),
    line("Total Amount", paymentAmount(booking.total_amount)),
    line("Advance Paid", paymentAmount(booking.advance_paid)),
    line("Remaining Balance", paymentAmount(booking.remaining_amount)),
    line("Payment Status", payment?.status || "Confirmed"),
    "Status: Confirmed",
    "",
    "Thank you for booking with Lexuz Tours & Adventures.",
    "Please keep your CNIC and essential travel items ready for the trip."
  ].join("\n");
}

function invoiceMessage(booking: Booking) {
  const payment = booking.payments?.[0] || null;
  const tour = findTour(booking);
  return [
    "Lexuz Tours & Adventures",
    "Booking / Invoice Details",
    "",
    line("Booking / Invoice Reference", booking.reference_id),
    line("Customer", booking.customers?.full_name),
    line("Phone", booking.customers?.phone),
    line("Tour", booking.tour_name),
    line("Departure", booking.departure),
    line("Travelers", booking.number_of_travelers),
    line("Departure City", cityLabel(booking.departure_city)),
    line("Pickup Location", booking.pickup_location),
    line("Payment Method", payment?.payment_method),
    line("Total Amount", paymentAmount(booking.total_amount)),
    line("Advance Paid", paymentAmount(booking.advance_paid)),
    line("Remaining Balance", paymentAmount(booking.remaining_amount)),
    line("Payment Status", payment?.status),
    line("Booking Status", booking.status),
    "",
    "Included Services:",
    servicesText(tour?.included),
    "",
    "Excluded Services:",
    servicesText(tour?.excluded),
    "",
    "Important Note:",
    "Jeep charges are not included where applicable, especially Sharaan Forest.",
    "",
    "Contact:",
    "0309 9318249",
    "https://www.lexuztours.com"
  ].join("\n");
}

const whatsappActions = [
  ["Send Booking Received Message", bookingReceivedMessage],
  ["Send Approval Message", approvalMessage],
  ["Send Rejection Message", rejectionMessage],
  ["Send Payment Confirmed Message", paymentConfirmedMessage],
  ["Send Invoice / Trip Details Message", invoiceMessage]
] as const;

export function AdminWhatsAppActions({ booking }: { booking: Booking }) {
  const formattedPhone = formatPakistanWhatsAppNumber(booking.customers?.phone);

  return (
    <div className="mt-6 rounded-lg border border-forest-900/10 bg-forest-50 p-5">
      <div className="flex items-start gap-3">
        <MessageCircle className="mt-1 shrink-0 text-[#12a84f]" size={22} />
        <div>
          <h2 className="font-black text-forest-950">WhatsApp Customer</h2>
          <p className="mt-1 text-sm leading-6 text-neutral-600">
            Opens WhatsApp with a pre-filled message. The admin must review and send it manually.
          </p>
          <p className="mt-2 text-xs font-bold text-neutral-500">Formatted WhatsApp number: {formattedPhone || "No phone available"}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {whatsappActions.map(([label, createMessage]) => (
          <a
            key={label}
            href={createWhatsAppLink(booking.customers?.phone, createMessage(booking))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#12a84f] px-4 py-3 text-sm font-black text-white shadow-soft hover:bg-[#0d8b40]"
          >
            <MessageCircle size={16} />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export const adminWhatsAppMessagePreview = {
  bookingReceivedMessage,
  approvalMessage,
  rejectionMessage,
  paymentConfirmedMessage,
  invoiceMessage
};
