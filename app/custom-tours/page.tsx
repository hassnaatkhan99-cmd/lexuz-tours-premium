import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Custom Tours", description: "Custom private tours across Pakistan by Lexuz Tours." };

export default function CustomToursPage() {
  return <><section className="container-page py-14"><SectionHeading eyebrow="Private Travel" title="Custom Tours" copy="Build your own Pakistan tour with Lexuz: destination, dates, hotels, transport, pickup city and travel style." /><div className="grid gap-4 md:grid-cols-3">{["Family packages", "Private group tours", "Luxury road trips"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-soft"><h2 className="font-black">{item}</h2><p className="mt-2 text-sm text-neutral-600">Flexible packages designed around your budget and comfort needs.</p></div>)}</div></section><CTASection title="Request A Custom Tour" /></>;
}
