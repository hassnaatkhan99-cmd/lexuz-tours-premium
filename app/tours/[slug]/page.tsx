import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourDetail } from "@/components/TourDetail";
import { getTour, tours } from "@/data/tours";
import { canonical } from "@/lib/seo";

function metadataTitle(tour: NonNullable<ReturnType<typeof getTour>>) {
  const cityText = tour.category === "one-day" ? "from Islamabad" : "from Islamabad & Lahore";
  return `${tour.title} Tour ${tour.duration} ${cityText}`;
}

function metadataDescription(tour: NonNullable<ReturnType<typeof getTour>>) {
  const cityText = tour.category === "one-day" ? "Islamabad departure" : "Islamabad and Lahore departures";
  return `${tour.duration} ${tour.title} tour with ${cityText}, clear pricing, itinerary, inclusions, jeep disclosure and WhatsApp booking support.`;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  return tour ? {
    title: metadataTitle(tour),
    description: metadataDescription(tour),
    alternates: { canonical: canonical(`/tours/${tour.slug}`) },
    openGraph: {
      title: `${metadataTitle(tour)} | Lexuz Tours`,
      description: metadataDescription(tour),
      url: canonical(`/tours/${tour.slug}`),
      images: [tour.heroImage],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${metadataTitle(tour)} | Lexuz Tours`,
      description: metadataDescription(tour),
      images: [tour.heroImage]
    }
  } : {};
}

export default async function TourPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ from?: string }> }) {
  const { slug } = await params;
  const query = await searchParams;
  const tour = getTour(slug);
  if (!tour) notFound();
  const initialCity = query.from === "lahore" && tour.category !== "one-day" ? "lahore" : "islamabad";
  return <TourDetail tour={tour} initialCity={initialCity} />;
}
