import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPage() {
  return <PolicyPage title="Cancellation Policy" path="/cancellation-policy" description="Refund and cancellation rules for confirmed paid bookings." items={[
    "If a customer cancels less than 7 days before departure, no refund will be given.",
    "If a customer cancels more than 7 days before departure, 100% payment will be refunded.",
    "Refunds only apply to confirmed paid bookings.",
    "Refund processing may require customer bank/account details.",
    "Lexuz Tours may adjust, postpone, or cancel trips due to weather, road closures, safety concerns, government restrictions, or unavoidable operational reasons.",
    "If Lexuz Tours cancels a trip, customers may choose a full refund or transfer to another available departure.",
    "Jeep charges are not included and are not refundable through Lexuz Tours if paid directly to local jeep operators.",
    "Personal expenses, entry tickets, extra meals, porter charges, and anything not mentioned in inclusions are not refundable."
  ]} />;
}
