import { MapPin, Star, Tag } from "lucide-react";
import type { Review } from "@/data/reviews";

const avatarStyles = [
  "bg-forest-900 text-saffron-300",
  "bg-saffron-400 text-forest-950",
  "bg-emerald-100 text-forest-900",
  "bg-neutral-900 text-white",
  "bg-forest-700 text-white"
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  return (
    <article className="luxury-card flex h-full flex-col rounded-[22px] border border-white/70 bg-white/88 p-5 shadow-[0_18px_48px_rgba(20,32,27,.1)] backdrop-blur transition hover:-translate-y-1 hover:shadow-premium">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-black ${avatarStyles[index % avatarStyles.length]}`}>
            {initials(review.name)}
          </div>
          <div>
            <h3 className="font-black text-forest-950">{review.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-xs font-bold text-neutral-500"><MapPin size={13} />{review.city}</p>
          </div>
        </div>
        <div className="flex text-saffron-500" aria-label={`${review.rating} star review`}>
          {Array.from({ length: 5 }).map((_, star) => (
            <Star key={star} size={15} fill={star < review.rating ? "currentColor" : "none"} className={star < review.rating ? "" : "text-neutral-300"} />
          ))}
        </div>
      </div>

      <p className="mt-5 flex-1 text-sm leading-6 text-neutral-700">&ldquo;{review.text}&rdquo;</p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-forest-900/10 pt-4">
        <p className="text-xs font-black uppercase tracking-wide text-forest-800">{review.tour}</p>
        <span className="inline-flex items-center gap-1 rounded-full border border-forest-900/10 bg-forest-50 px-3 py-1 text-xs font-black text-forest-800">
          <Tag size={14} />
          {review.badge}
        </span>
      </div>
    </article>
  );
}
