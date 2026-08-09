import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: canonical("/privacy-policy") } };

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" path="/privacy-policy" description="How customer booking information is used for trip operations and support." items={["Booking data is used to manage trip reservations and customer support.", "Payment screenshots are used for verification only.", "Customer information is not sold to third parties.", "Operational details may be shared with hotels, transport partners and tour managers only when needed."]} />;
}
