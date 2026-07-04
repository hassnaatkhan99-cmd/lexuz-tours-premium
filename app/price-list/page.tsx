import type { Metadata } from "next";
import { PriceList } from "@/components/PriceList";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Price List", description: "Official Lexuz Tours price list for Islamabad and Lahore departures." };

export default function PriceListPage() {
  return (
    <>
      <section className="bg-brand-primary py-16 text-white">
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Official prices</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Lexuz Tours price list</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Compare Islamabad / Rawalpindi and Lahore pricing for eligible public tours using the current Lexuz tour data.</p>
        </div>
      </section>
      <section className="container-page py-14"><SectionHeading eyebrow="Price Table" title="Solo traveler and married couple tabs" copy="Prices remain subject to change. Advance booking is recommended." /><PriceList /></section>
    </>
  );
}
