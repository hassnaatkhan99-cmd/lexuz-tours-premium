"use client";

import { useState } from "react";
import { lahorePrice, money, tours } from "@/data/tours";

export function PriceList() {
  const [tab, setTab] = useState<"Solo Traveler" | "Married Couple">("Solo Traveler");
  const rows = tours.map((tour) => ({ tour, price: tour.prices.find((price) => price.label === tab) })).filter((row) => row.price);
  return (
    <div className="luxury-card rounded-[24px] border border-white/70 bg-white/88 p-5 shadow-[0_24px_70px_rgba(20,32,27,.12)] backdrop-blur">
      <div className="mb-5 grid gap-2 rounded-dsMd border border-lexuzNeutral-line bg-white/90 p-1 shadow-ds1 sm:inline-grid sm:grid-cols-2">
        {(["Solo Traveler", "Married Couple"] as const).map((label) => <button key={label} onClick={() => setTab(label)} className={`rounded-dsSm px-4 py-3 text-sm font-black ${tab === label ? "bg-brand-primary text-white shadow-ds1" : "text-brand-primary hover:bg-brand-secondary"}`}>{label}</button>)}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] overflow-hidden rounded-dsMd text-left text-sm">
          <thead className="bg-brand-secondary text-brand-primary">
            <tr><th className="p-4">Tour</th><th className="p-4">Duration</th><th className="p-4">Departure</th><th className="p-4">From Islamabad / Rawalpindi</th><th className="p-4">From Lahore</th></tr>
          </thead>
          <tbody>
            {rows.map(({ tour, price }) => (
              <tr key={tour.slug} className="border-b border-lexuzNeutral-line odd:bg-white even:bg-lexuzNeutral-canvas/60">
                <td className="p-4 font-black text-lexuzNeutral-100">{tour.title}</td>
                <td className="p-4">{tour.duration}</td>
                <td className="p-4">{tour.departure}</td>
                <td className="p-4 font-black text-brand-primary">{price ? money(price.islamabadPrice) : "-"}</td>
                <td className="p-4 font-black text-brand-primary">{price && lahorePrice(tour, price) ? money(lahorePrice(tour, price) as number) : "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 rounded-dsMd bg-brand-secondary p-3 text-sm font-bold text-brand-primary">Prices are subject to change. Advance booking recommended. Terms & conditions apply.</p>
    </div>
  );
}
