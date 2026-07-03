import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { money, Tour } from "@/data/tours";

export function TourCard({ tour }: { tour: Tour }) {
  const price = tour.prices[0];
  return (
    <article>
      <Link
        href={`/tours/${tour.slug}`}
        className="focus-ring group block h-full cursor-pointer overflow-hidden rounded-lg border border-forest-900/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-forest-800/30 hover:shadow-premium"
        aria-label={`View details for ${tour.title}`}
      >
        <div className="relative h-52 overflow-hidden">
          <Image src={tour.heroImage} alt={`${tour.title} tour`} fill sizes="(min-width:1024px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-full bg-saffron-400 px-3 py-1 text-xs font-black text-forest-900">{tour.departure}</span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-black transition group-hover:text-forest-800">{tour.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-neutral-600"><MapPin size={16} />{tour.region}</p>
          <p className="mt-3 flex items-center gap-2 text-sm font-bold text-forest-800"><CalendarDays size={16} />{tour.duration}</p>
          <div className="mt-5 flex items-end justify-between gap-3">
            <div><p className="text-xs font-bold text-neutral-500">Starting From</p><p className="text-xl font-black text-forest-800">{money(price.islamabadPrice)}</p><p className="text-xs text-neutral-500">{price.unit}</p></div>
            <span className="rounded-md bg-forest-800 px-4 py-2 text-sm font-black text-white transition group-hover:bg-saffron-400 group-hover:text-forest-900">View Details</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
