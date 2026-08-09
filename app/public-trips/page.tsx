import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Public Trips",
  description: "Book Lexuz public trips with Islamabad and Lahore pricing.",
  alternates: { canonical: canonical("/public-trips") },
  openGraph: {
    title: "Lexuz Public Trips",
    description: "Browse Lexuz public departures with clear pricing, schedules and booking links.",
    images: ["/images/trip/lexuz-fleet-three-coasters-night.webp"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/trip/lexuz-fleet-three-coasters-night.webp"]
  }
};

export default function PublicTripsPage() {
  return (
    <>
      <section className="night-sky py-20 text-white">
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Public trips</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Fixed departures across Pakistan</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Browse one day, three day, four day, five day and six day Lexuz Tours with clear pricing, departure rules and booking links.</p>
        </div>
      </section>
      <section className="border-b border-brand-primary/10 bg-white py-12 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Departure cities"
            title="Browse by departure city"
            copy="See the public tours currently available from your preferred starting city, with city-specific trip options and booking guidance."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                href: "/tours/islamabad",
                title: "Tours from Islamabad",
                copy: "Explore one-day and multi-day public trips departing from Islamabad and Rawalpindi."
              },
              {
                href: "/tours/lahore",
                title: "Tours from Lahore",
                copy: "Compare the multi-day public trips currently offered with departure from Lahore."
              }
            ].map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="focus-ring group flex min-h-40 items-start justify-between gap-5 rounded-[26px] border border-brand-primary/10 bg-brand-secondary/65 p-6 shadow-ds1 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/55 hover:bg-white hover:shadow-ds2 md:p-7"
              >
                <div>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-ds1">
                    <MapPin size={19} aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-xl font-black text-lexuzNeutral-100 md:text-2xl">{city.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-lexuzNeutral-60">{city.copy}</p>
                </div>
                <ArrowRight className="mt-1 shrink-0 text-brand-primary transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="cinematic-band py-16"><div className="container-page"><SectionHeading eyebrow="Tour Catalog" title="All public departures" copy="Choose a tour card to open the full product page with itinerary, inclusions, city pricing and booking options." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></div></section>
    </>
  );
}
