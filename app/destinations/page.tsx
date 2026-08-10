import type { Metadata } from "next";
import Image from "next/image";
import { DestinationCard } from "@/components/DestinationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { realTripMedia } from "@/data/realTripMedia";
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
      <section className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Travel moments" title="Destination discovery with real trip context" copy="Scenic tour cards help you compare places; these genuine Lexuz photographs show the group-travel setting around the journey. They are presented as general trip imagery where the exact location is not confirmed." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src={realTripMedia.bannerRiverside.src} alt={realTripMedia.bannerRiverside.alt} width={realTripMedia.bannerRiverside.width} height={realTripMedia.bannerRiverside.height} sizes="(min-width: 1024px) 22vw, 50vw" className="h-72 w-full rounded-[26px] object-cover shadow-ds2" />
          <Image src={realTripMedia.snowBannerGroup.src} alt={realTripMedia.snowBannerGroup.alt} width={realTripMedia.snowBannerGroup.width} height={realTripMedia.snowBannerGroup.height} sizes="(min-width: 1024px) 22vw, 50vw" className="mt-8 h-72 w-full rounded-[26px] object-cover shadow-ds3" />
        </div>
      </section>
    </>
  );
}
