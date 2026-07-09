import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/tours";

export function DestinationCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="focus-ring group relative block min-h-80 cursor-pointer overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_20px_54px_rgba(20,32,27,.12)] transition duration-300 hover:-translate-y-2 hover:border-brand-accent/50 hover:shadow-[0_34px_90px_rgba(20,32,27,.2)]" aria-label={`View ${tour.title} tour details`}>
      <Image src={tour.heroImage} alt={tour.title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/28 to-transparent" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_30%,rgba(217,164,65,.2),transparent_22rem)]" />
      <div className="absolute bottom-0 p-5 text-white">
        <p className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white/85 backdrop-blur">{tour.duration}</p>
        <h3 className="text-2xl font-black leading-tight">{tour.title}</h3>
        <p className="mt-2 text-sm text-white/80">{tour.region}</p>
      </div>
    </Link>
  );
}
