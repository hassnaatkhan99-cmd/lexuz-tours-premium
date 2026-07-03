import type { Metadata } from "next";
import { DestinationCard } from "@/components/DestinationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { tours } from "@/data/tours";

export const metadata: Metadata = { title: "Destinations", description: "Explore Pakistan destinations with Lexuz Tours." };

export default function DestinationsPage() {
  return <section className="container-page py-14"><SectionHeading eyebrow="Destinations" title="Explore Pakistan With Lexuz" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tours.slice(0, 9).map((tour) => <DestinationCard key={tour.slug} tour={tour} />)}</div></section>;
}
