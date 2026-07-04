"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { company, whatsappUrl } from "@/data/company";
import { lahorePrice, money, Tour } from "@/data/tours";
import { trackBookNowClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/seo-foundation";

type City = "islamabad" | "lahore";

function cityCode(city: City) {
  return city === "lahore" ? "LHR" : "ISB";
}

function cityLabel(city: City) {
  return city === "lahore" ? "Lahore" : "Islamabad / Rawalpindi";
}

function tourCode(tour: Tour) {
  return tour.slug
    .split("-")
    .map((part) => part[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

function trackedMessage(tour: Tour, city: City, slot: string) {
  return `Hi Lexuz! I'm interested in the ${tour.title} (${tourCode(tour)} · ${cityCode(city)} · ${slot}).`;
}

export function TourProductActions({ tour, sourceSlot = "hero", initialCity = "islamabad" }: { tour: Tour; sourceSlot?: string; initialCity?: City }) {
  const hasLahore = tour.category !== "one-day";
  const [city, setCity] = useState<City>(initialCity === "lahore" && hasLahore ? "lahore" : "islamabad");
  const price = tour.prices[0];
  const selectedPrice = useMemo(() => {
    if (city === "lahore") return lahorePrice(tour, price);
    return price?.islamabadPrice ?? null;
  }, [city, price, tour]);

  function eventParams(slot = sourceSlot) {
    return {
      page_path: `/tours/${tour.slug}`,
      tour_slug: tour.slug,
      tour_name: tour.title,
      departure_city: city,
      source_token: `${tourCode(tour)}-${cityCode(city)}-${slot}`,
      button_position: slot
    };
  }

  return (
    <div className="rounded-dsLg border border-lexuzNeutral-line bg-white p-5 shadow-ds3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">Book this tour</p>
          <p className="mt-2 text-3xl font-black text-lexuzNeutral-100">{selectedPrice ? money(selectedPrice) : "Price on request"}</p>
          <p className="mt-1 text-sm font-bold text-lexuzNeutral-60">{price?.unit ?? "To be confirmed"} · {cityLabel(city)}</p>
        </div>
        <span className="rounded-full bg-brand-secondary px-3 py-1 text-xs font-black text-brand-primary">{tour.duration}</span>
      </div>

      {hasLahore ? (
        <div className="mt-5 grid grid-cols-2 rounded-dsMd border border-lexuzNeutral-line bg-white p-1" aria-label="Departure city selector">
          {(["islamabad", "lahore"] as City[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCity(option)}
              className={`rounded-dsSm px-3 py-3 text-sm font-black ${city === option ? "bg-brand-primary text-white shadow-ds1" : "text-brand-primary hover:bg-brand-secondary"}`}
            >
              {option === "lahore" ? "Lahore" : "Islamabad"}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-5 grid gap-3">
        <Link
          href={`/booking?tour=${tour.slug}&departure=${city}`}
          onClick={() => trackBookNowClick(eventParams("booking-card"))}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd border border-brand-primary bg-white px-5 py-3 text-sm font-black text-brand-primary shadow-ds1 hover:bg-brand-secondary"
        >
          <CalendarDays size={18} />
          Book Now
        </Link>
        <Link
          href={whatsappUrl(trackedMessage(tour, city, sourceSlot))}
          target="_blank"
          onClick={() => trackWhatsAppClick(eventParams(sourceSlot))}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd bg-brand-whatsapp px-5 py-3 text-sm font-black text-white shadow-ds1 hover:brightness-95 hover:shadow-ds2"
        >
          <MessageCircle size={18} />
          Book / Ask on WhatsApp
        </Link>
        <Link
          href={company.callHref}
          onClick={() => trackPhoneClick(eventParams("call"))}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd border border-lexuzNeutral-line bg-white px-5 py-3 text-sm font-black text-brand-primary hover:bg-brand-secondary"
        >
          <Phone size={18} />
          Call Lexuz Tours
        </Link>
      </div>

      <p className="mt-4 text-xs leading-5 text-lexuzNeutral-60">
        Prices and fixed departures use the current Lexuz tour data. Seats, final timings and room details are confirmed by the team after booking verification.
      </p>
    </div>
  );
}

export function StickyTourActions({ tour }: { tour: Tour }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-primary/95 p-3 text-white shadow-ds3 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1fr_auto_auto] gap-2">
        <Link
          href={whatsappUrl(trackedMessage(tour, "islamabad", "sticky"))}
          target="_blank"
          onClick={() => trackWhatsAppClick({ page_path: `/tours/${tour.slug}`, tour_slug: tour.slug, tour_name: tour.title, departure_city: "islamabad", source_token: `${tourCode(tour)}-ISB-sticky`, button_position: "sticky" })}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd bg-brand-whatsapp px-4 py-3 text-sm font-black"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Link>
        <Link
          href={company.callHref}
          onClick={() => trackPhoneClick({ page_path: `/tours/${tour.slug}`, tour_slug: tour.slug, tour_name: tour.title, departure_city: "islamabad", source_token: `${tourCode(tour)}-ISB-call`, button_position: "sticky" })}
          className="focus-ring grid h-12 w-12 place-items-center rounded-dsMd border border-white/15 bg-white/10"
          aria-label="Call Lexuz Tours"
        >
          <Phone size={18} />
        </Link>
        <a href="#departures" className="focus-ring grid h-12 w-12 place-items-center rounded-dsMd border border-white/15 bg-white/10" aria-label="View departure details">
          <CalendarDays size={18} />
        </a>
      </div>
    </div>
  );
}
