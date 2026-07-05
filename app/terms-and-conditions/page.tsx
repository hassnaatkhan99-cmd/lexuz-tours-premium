import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return <PolicyPage title="Terms & Conditions" path="/terms-and-conditions" description="The core booking terms that apply when customers reserve a Lexuz Tours departure." items={[
    "Seats are confirmed after booking approval and payment verification.",
    "Tour plans may change due to weather, road closures, hotel availability, safety concerns, government restrictions or unavoidable operational reasons.",
    "If Lexuz Tours cancels a trip, customers may choose a full refund or transfer to another available departure.",
    "If a customer cancels more than 7 days before departure, 100% payment will be refunded. If a customer cancels less than 7 days before departure, no refund will be given.",
    "Refunds only apply to confirmed paid bookings and may require customer bank/account details for processing.",
    "Jeep charges paid directly to local jeep operators are not refundable through Lexuz Tours.",
    "Personal expenses, entry tickets, extra meals, porter charges, and anything not mentioned in included services are not refundable.",
    "Travelers must provide accurate personal and pickup information.",
    "Lexuz is not responsible for personal belongings."
  ]} />;
}
