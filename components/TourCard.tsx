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
        className="focus-ring group block h-full cursor-pointer overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds1 transition duration-200 ease-out hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-ds3"
        aria-label={`View details for ${tour.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={tour.heroImage} alt={`${tour.title} tour`} fill sizes="(min-width:1024px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-brand-primary shadow-ds1 backdrop-blur">{tour.duration}</span>
        </div>
        <div className="flex min-h-[230px] flex-col p-5">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-lexuzNeutral-100 transition group-hover:text-brand-primary">{tour.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-lexuzNeutral-60">
            <DesignIcon icon={MapPin} size="sm" tone="muted" />
            {tour.region}
          </p>
          <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-secondary px-3 py-1 text-xs font-bold text-brand-primary">
            <DesignIcon icon={CalendarDays} size="sm" tone="primary" />
            {tour.departure || "To be confirmed"}
          </div>
          <div className="mt-auto flex items-end justify-between gap-3 pt-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.06em] text-lexuzNeutral-60">From Islamabad</p>
              <DesignPrice amount={money(price.islamabadPrice)} qualifier={price.unit} />
            </div>
            <span className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-lexuzNeutral-line bg-white px-3 text-xs font-black text-brand-primary shadow-ds1 transition group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white" aria-hidden="true">
              View Details
              <ChevronRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
