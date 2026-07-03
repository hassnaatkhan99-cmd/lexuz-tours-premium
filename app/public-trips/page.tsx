import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = { title: "Public Trips", description: "Book Lexuz public trips with Islamabad and Lahore pricing." };

export default function PublicTripsPage() {
  return <section className="container-page py-14"><SectionHeading eyebrow="Public Trips" title="All Public Departures" copy="Browse one day, three day, four day, five day and six day Pakistan tours." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>;
}
