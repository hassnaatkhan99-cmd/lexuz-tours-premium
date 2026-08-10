import Image from "next/image";
import { tripEvidenceFor } from "@/data/realTripMedia";

export function RealTripStrip({ seed, title = "Moments from real Lexuz trips" }: { seed: string; title?: string }) {
  const photos = tripEvidenceFor(seed);
  return (
    <section className="mt-12" aria-labelledby={`real-trip-${seed}`}>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div><p className="text-xs font-black uppercase tracking-[0.2em] text-forest-700">Real trip evidence</p><h2 id={`real-trip-${seed}`} className="mt-2 text-2xl font-black text-forest-950">{title}</h2></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {photos.map((photo) => <figure key={photo.src} className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-soft"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 640px) 33vw, 100vw" className="h-52 w-full object-cover" /><figcaption className="px-4 py-3 text-xs font-bold leading-5 text-forest-900">{photo.caption}</figcaption></figure>)}
      </div>
    </section>
  );
}
