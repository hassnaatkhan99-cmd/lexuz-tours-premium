"use client";

import { useState } from "react";
import { lahorePrice, money, tours } from "@/data/tours";

export function PriceList() {
  const [tab, setTab] = useState<"Solo Traveler" | "Married Couple">("Solo Traveler");
  const rows = tours.map((tour) => ({ tour, price: tour.prices.find((price) => price.label === tab) })).filter((row) => row.price);
  return (
    <div className="rounded-lg border border-forest-900/10 bg-white p-5 shadow-premium">
      <div className="mb-5 flex gap-2">
        {(["Solo Traveler", "Married Couple"] as const).map((label) => <button key={label} onClick={() => setTab(label)} className={`rounded-md px-4 py-2 text-sm font-black ${tab === label ? "bg-forest-800 text-white" : "bg-forest-50 text-forest-900"}`}>{label}</button>)}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-forest-50 text-forest-900">
            <tr><th className="p-4">Tour</th><th className="p-4">Duration</th><th className="p-4">Departure</th><th className="p-4">From Islamabad / Rawalpindi</th><th className="p-4">From Lahore</th></tr>
          </thead>
          <tbody>
            {rows.map(({ tour, price }) => (
              <tr key={tour.slug} className="border-b border-forest-900/10">
                <td className="p-4 font-black">{tour.title}</td>
                <td className="p-4">{tour.duration}</td>
                <td className="p-4">{tour.departure}</td>
                <td className="p-4 font-black text-forest-800">{price ? money(price.islamabadPrice) : "-"}</td>
                <td className="p-4 font-black text-forest-800">{price && lahorePrice(tour, price) ? money(lahorePrice(tour, price) as number) : "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 rounded-md bg-saffron-300/30 p-3 text-sm font-bold text-forest-900">Prices are subject to change. Advance booking recommended. Terms & conditions apply.</p>
    </div>
  );
}
