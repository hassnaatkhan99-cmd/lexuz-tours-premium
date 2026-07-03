import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Corporate Tours", description: "Premium corporate retreats and business tours by Lexuz." };

export default function CorporateToursPage() {
  return <><section className="container-page py-14"><SectionHeading eyebrow="Corporate Travel" title="Corporate Tours & Retreats" copy="Premium staff trips with transport, hotel coordination, schedule planning, safety support and professional communication." /><div className="grid gap-4 md:grid-cols-3">{["Team retreats", "Annual dinners in the mountains", "Executive travel coordination"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-soft"><h2 className="font-black">{item}</h2><p className="mt-2 text-sm text-neutral-600">Custom route planning and managed execution by Lexuz.</p></div>)}</div></section><CTASection title="Plan A Corporate Tour" /></>;
}
