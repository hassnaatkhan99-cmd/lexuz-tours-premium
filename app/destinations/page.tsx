import type { Metadata } from "next";
import { DestinationCard } from "@/components/DestinationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { tours } from "@/data/tours";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore Pakistan destinations with Lexuz Tours.",
  alternates: { canonical: canonical("/destinations") },
  openGraph: {
    title: "Lexuz Tours Destinations",
    description: "Explore valleys, forests and mountain journeys available through Lexuz.",
    images: ["/images/destinations/hunza-attabad.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/destinations/hunza-attabad.jpg"]
  }
};

export default function DestinationsPage() {
  return (
    <>
      <section className="night-sky py-20 text-white">
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Destinations</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Explore Pakistan with Lexuz</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Discover the places Lexuz visits and compare valleys, mountain landscapes, forests and one-day escapes by destination and trip style.</p>
        </div>
      </section>
      <section className="cinematic-band py-16"><div className="container-page"><SectionHeading eyebrow="Places to explore" title="Compare destinations and trip styles" copy="Use this page to discover where each journey leads and whether its setting and duration suit the experience you want. For the complete catalog of available public tour products and departure details, visit Public Trips." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tours.map((tour) => <DestinationCard key={tour.slug} tour={tour} />)}</div></div></section>
    </>
  );
}
