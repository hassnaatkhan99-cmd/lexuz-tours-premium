"use client";

import { useState } from "react";
import { FeedbackNotice } from "@/components/ui";

type StatusResult = {
  referenceId: string;
  tourName: string;
  departure: string;
  status: string;
  travelers: number;
  totalAmount: number | null;
  advancePaid: number | null;
  remainingAmount: number | null;
  paymentStatus: string | null;
};

function paymentDisplay(value: number | null) {
  return typeof value === "number" ? `PKR ${value.toLocaleString("en-PK")}` : "To be confirmed by our team";
}

export function BookingStatusLookup({ initialReference = "" }: { initialReference?: string }) {
  const [reference, setReference] = useState(initialReference);
  const [result, setResult] = useState<StatusResult | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function lookup(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setResult(null);
    try {
      const response = await fetch(`/api/booking-status?reference=${encodeURIComponent(reference.trim())}`, { cache: "no-store" });
      const body = await response.json();
      if (!response.ok) {
        setMessage(response.status === 404 ? "No booking was found for this reference ID." : body.error || "We couldn’t complete that request. Please try again.");
        return;
      }
      setResult(body);
    } catch {
      setMessage("We couldn’t complete that request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={lookup} className="grid gap-3 rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium md:grid-cols-[1fr_auto]">
        <div>
          <label htmlFor="booking-reference" className="sr-only">Booking reference ID</label>
          <input id="booking-reference" value={reference} onChange={(event) => setReference(event.target.value)} required maxLength={64} aria-describedby="booking-reference-help" className="focus-ring w-full rounded-md border border-neutral-200 px-4 py-3" placeholder="Example: LX-20260622-ABC123" />
          <p id="booking-reference-help" className="mt-2 text-xs text-neutral-500">Use the reference ID supplied after your booking request.</p>
        </div>
        <button disabled={loading} className="focus-ring rounded-md bg-saffron-400 px-6 py-3 font-black text-forest-900 disabled:opacity-60">{loading ? "Checking…" : "Check Status"}</button>
      </form>
      <div aria-live="polite" aria-atomic="true">
        {message ? <div className="mt-6"><FeedbackNotice tone="error" title="Status unavailable">{message}</FeedbackNotice></div> : null}
        {result ? (
          <div className="mt-6 rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-black uppercase text-forest-700">Reference ID</p>
            <h2 className="mt-1 text-2xl font-black">{result.referenceId}</h2>
            <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
              <p><span className="text-neutral-500">Tour:</span> <strong>{result.tourName}</strong></p>
              <p><span className="text-neutral-500">Departure:</span> <strong>{result.departure}</strong></p>
              <p><span className="text-neutral-500">Travelers:</span> <strong>{result.travelers}</strong></p>
              <p><span className="text-neutral-500">Status:</span> <strong className="text-forest-800">{result.status}</strong></p>
              <p><span className="text-neutral-500">Total Amount:</span> <strong>{paymentDisplay(result.totalAmount)}</strong></p>
              <p><span className="text-neutral-500">Advance Paid:</span> <strong>{paymentDisplay(result.advancePaid)}</strong></p>
              <p><span className="text-neutral-500">Remaining Amount:</span> <strong>{paymentDisplay(result.remainingAmount)}</strong></p>
              <p><span className="text-neutral-500">Payment Status:</span> <strong>{result.paymentStatus || "To be confirmed by our team"}</strong></p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
