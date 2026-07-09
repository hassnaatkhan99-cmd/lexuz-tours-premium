import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { money, Tour } from "@/data/tours";
import { DesignIcon } from "@/components/ui/icon";
import { DesignPrice } from "@/components/ui/card";

export function TourCard({ tour }: { tour: Tour }) {
  const price = tour.prices[0];
  return (
    <article>
      <Link
        href={`/tours/${tour.slug}`}
        className="focus-ring luxury-card brochure-card group block h-full cursor-pointer overflow-hidden rounded-[26px] border border-white/75 bg-white/86 shadow-[0_20px_58px_rgba(20,32,27,.12)] backdrop-blur transition duration-300 ease-out hover:-translate-y-2 hover:border-brand-accent/55 hover:shadow-[0_34px_92px_rgba(20,32,27,.22)]"
        aria-label={`View details for ${tour.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={tour.heroImage} alt={`${tour.title} tour`} fill sizes="(min-width:1024px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(217,164,65,.22),transparent_12rem)] opacity-0 transition duration-300 group-hover:opacity-100" />
          <span className="absolute left-3 top-3 rounded-full border border-white/45 bg-white/92 px-3 py-1 text-xs font-black text-brand-primary shadow-ds1 backdrop-blur">{tour.duration}</span>
          <span className="absolute bottom-3 right-3 rounded-full border border-white/30 bg-forest-950/72 px-3 py-1 text-xs font-black text-white shadow-ds1 backdrop-blur">{tour.category === "one-day" ? "One Day" : "Multi Day"}</span>
        </div>
        <div className="flex min-h-[242px] flex-col p-5">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-lexuzNeutral-100 transition group-hover:text-brand-primary">{tour.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-lexuzNeutral-60">
            <DesignIcon icon={MapPin} size="sm" tone="muted" />
            {tour.region}
          </p>
          <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-secondary px-3 py-1 text-xs font-bold text-brand-primary shadow-[inset_0_1px_0_rgba(255,255,255,.75)]">
            <DesignIcon icon={CalendarDays} size="sm" tone="primary" />
            {tour.departure || "To be confirmed"}
          </div>
          <div className="mt-auto flex items-end justify-between gap-3 pt-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.06em] text-lexuzNeutral-60">From Islamabad</p>
              <DesignPrice amount={money(price.islamabadPrice)} qualifier={price.unit} />
            </div>
            <span className="premium-shine inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-brand-primary/10 bg-white px-3 text-xs font-black text-brand-primary shadow-ds1 transition group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white" aria-hidden="true">
              View Details
              <ChevronRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
