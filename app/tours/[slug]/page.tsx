import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourDetail } from "@/components/TourDetail";
import { getTour, tours } from "@/data/tours";
import { canonical } from "@/lib/seo";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  return tour ? {
    title: `${tour.title} Tour`,
    description: tour.overview,
    alternates: { canonical: canonical(`/tours/${tour.slug}`) },
    openGraph: {
      title: `${tour.title} Tour | Lexuz Tours & Adventures`,
      description: tour.overview,
      url: canonical(`/tours/${tour.slug}`),
      images: [tour.heroImage],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} Tour | Lexuz Tours & Adventures`,
      description: tour.overview,
      images: [tour.heroImage]
    }
  } : {};
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  return <TourDetail tour={tour} />;
}
