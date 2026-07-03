import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/tours";

export function DestinationCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="focus-ring group relative block min-h-72 cursor-pointer overflow-hidden rounded-lg border border-forest-900/10 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-saffron-400/70 hover:shadow-premium" aria-label={`View ${tour.title} tour details`}>
      <Image src={tour.heroImage} alt={tour.title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
      <div className="absolute bottom-0 p-5 text-white">
        <h3 className="text-2xl font-black">{tour.title}</h3>
        <p className="mt-2 text-sm text-white/80">{tour.region}</p>
      </div>
    </Link>
  );
}
