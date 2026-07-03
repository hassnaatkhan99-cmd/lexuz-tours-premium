import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Honeymoon Tours", description: "Private honeymoon tour packages across Pakistan by Lexuz." };

export default function HoneymoonToursPage() {
  return <><section className="container-page py-14"><SectionHeading eyebrow="Couple Travel" title="Honeymoon Tours" copy="Private, comfortable and elegant honeymoon plans for Hunza, Skardu, Kashmir, Swat and other scenic destinations." /><div className="grid gap-4 md:grid-cols-3">{["Private transport", "Romantic stays", "Flexible itinerary"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-soft"><h2 className="font-black">{item}</h2><p className="mt-2 text-sm text-neutral-600">Premium couple-focused planning with privacy and comfort.</p></div>)}</div></section><CTASection title="Plan A Honeymoon Tour" /></>;
}
