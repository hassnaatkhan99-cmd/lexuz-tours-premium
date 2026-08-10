import Image from "next/image";
import type { RealTripPhoto } from "@/data/realTripMedia";

export function RealTripCarousel({ photos, label = "Real Lexuz trip moments" }: { photos: RealTripPhoto[]; label?: string }) {
  return (
    <div className="relative">
      <div tabIndex={0} role="region" aria-label={label} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-saffron-300">
        {photos.map((photo) => (
          <figure key={photo.src} className="relative min-w-[82%] snap-center overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-ds2 sm:min-w-[46%] lg:min-w-[31%]">
            <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 82vw" className="h-72 w-full object-cover sm:h-80" />
            <figcaption className="px-5 py-4 text-sm font-black leading-6 text-brand-primary">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-2 text-xs font-bold text-lexuzNeutral-60">Swipe or scroll horizontally to explore more real trip moments.</p>
    </div>
  );
}
