import Image from "next/image";
import type { RealTripPhoto } from "@/data/realTripMedia";

export function RealTripGallery({ photos }: { photos: RealTripPhoto[] }) {
  return (
    <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className={`group relative overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-ds2 ${index === 0 || index === 5 ? "sm:row-span-2" : ""}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pb-5 pt-14">
            <figcaption className="text-sm font-bold leading-6 text-white">{photo.caption}</figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
