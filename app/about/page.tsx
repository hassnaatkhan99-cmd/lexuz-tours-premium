import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "About Us", description: "About Lexuz Tours & Adventures." };

export default function AboutPage() {
  return <section className="container-page grid gap-8 py-14 lg:grid-cols-[.9fr_1.1fr]"><Image src="/images/office-real.jpeg" alt="Lexuz Tours office in Rawalpindi" width={800} height={700} className="h-full max-h-[620px] w-full rounded-lg object-cover shadow-premium" /><div><SectionHeading eyebrow="About Lexuz" title="Premium Pakistan Travel Since 2018" copy={company.mission} /><p className="text-lg leading-8 text-neutral-700">Lexuz Tours & Adventures is a Rawalpindi based tourism company focused on public tours, private custom packages, university trips, corporate travel and honeymoon tours. The brand is built around comfort, trust, clear pricing and strong WhatsApp support.</p></div></section>;
}
