import type { Metadata } from "next";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Realistic traveler reviews for Lexuz Tours & Adventures public trips, family tours, university trips and corporate travel.",
  alternates: { canonical: canonical("/reviews") },
  openGraph: {
    title: "Lexuz Tours Reviews",
    description: "Traveler feedback about timing, transport, hotels, communication and planning.",
    url: canonical("/reviews"),
    images: ["/images/trip/lexuz-group-meadow-banner.webp"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/trip/lexuz-group-meadow-banner.webp"]
  }
};

export default function ReviewsPage() {
  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

  return (
    <>
      <section className="night-sky py-20 text-white">
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Traveler Reviews</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Customer experiences with Lexuz</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Short, practical feedback from travelers who care about timing, transport, hotels, communication and safe planning.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              [averageRating.toFixed(1), "Average Rating"],
              [reviews.length.toString(), "Review Highlights"],
              ["2018", "Operating Since"]
            ].map(([value, label]) => (
              <div key={label} className="luxury-glass rounded-dsLg p-5">
                <p className="text-3xl font-black text-brand-accent">{value}</p>
                <p className="mt-1 text-sm text-forest-950/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-band py-16">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => <ReviewCard key={`${review.name}-${review.tour}`} review={review} index={index} />)}
        </div>
      </section>
    </>
  );
}
