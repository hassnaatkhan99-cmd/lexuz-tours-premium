import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = { title: "Public Trips", description: "Book Lexuz public trips with Islamabad and Lahore pricing." };

export default function PublicTripsPage() {
  return (
    <>
      <section className="bg-brand-primary py-16 text-white">
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Public trips</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Fixed departures across Pakistan</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Browse one day, three day, four day, five day and six day Lexuz Tours with clear pricing, departure rules and booking links.</p>
        </div>
      </section>
      <section className="container-page py-14"><SectionHeading eyebrow="Tour Catalog" title="All public departures" copy="Choose a tour card to open the full product page with itinerary, inclusions, city pricing and booking options." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>
    </>
  );
}
