"use client";

import { useMemo, useState } from "react";
import { UploadCloud } from "lucide-react";
import { paymentMethods } from "@/data/payments";
import { lahorePrice, money, Tour } from "@/data/tours";
import { PaymentMethodCard } from "./PaymentMethodCard";

export function BookingForm({ tour, departure }: { tour: Tour; departure: string }) {
  const [fileName, setFileName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
  const [departureSelection, setDepartureSelection] = useState(departure);
  const [submitting, setSubmitting] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  const [error, setError] = useState("");
  const price = tour.prices[0];
  const selectedPrice = useMemo(() => {
    if (departureSelection === "lahore") return lahorePrice(tour, price) ?? price.islamabadPrice;
    return price.islamabadPrice;
  }, [departureSelection, price, tour]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setBookingReference("");
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("tourName", tour.title);
    formData.set("departure", tour.departure);
    formData.set("departureCity", departureSelection);
    formData.set("paymentMethod", paymentMethod);

    try {
      const response = await fetch("/api/bookings", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not submit booking.");
      setBookingReference(result.referenceId);
      form.reset();
      setFileName("");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Could not submit booking.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-7 lg:grid-cols-[1fr_390px]">
      <form onSubmit={handleSubmit} className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium">
        <h2 className="text-2xl font-black">Booking Details</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">Full Name<input name="fullName" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="Full Name" /></label>
          <label className="grid gap-2 text-sm font-bold">Phone Number<input name="phone" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="0300XXXXXXX" /></label>
          <label className="grid gap-2 text-sm font-bold">Email Address<input name="email" required type="email" className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="you@example.com" /></label>
          <label className="grid gap-2 text-sm font-bold">CNIC Number<input name="cnic" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="CNIC / Passport Number" /></label>
          <label className="grid gap-2 text-sm font-bold">Number Of Travelers<input name="numberOfTravelers" required type="number" min={1} className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="2" /></label>
          <label className="grid gap-2 text-sm font-bold">Emergency Contact<input name="emergencyContact" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="Emergency contact number" /></label>
          <label className="grid gap-2 text-sm font-bold">Pickup City<input name="pickupCity" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="Islamabad / Rawalpindi" /></label>
          <label className="grid gap-2 text-sm font-bold">Pickup Location<input name="pickupLocation" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="Faizabad, 26 No, etc." /></label>
          <label className="grid gap-2 text-sm font-bold md:col-span-2">
            Departure Selection
            <select required value={departureSelection} onChange={(event) => setDepartureSelection(event.target.value)} className="rounded-md border border-neutral-200 px-4 py-3 font-normal">
              <option value="islamabad">Islamabad / Rawalpindi</option>
              {tour.category !== "one-day" ? <option value="lahore">Lahore</option> : null}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold md:col-span-2">
            Payment Method
            <select required value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)} className="rounded-md border border-neutral-200 px-4 py-3 font-normal">
              {paymentMethods.map((method) => <option key={method.id} value={method.id}>{method.name}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {paymentMethods.map((method) => <PaymentMethodCard key={method.id} method={method} />)}
        </div>
        <label className="mt-6 grid cursor-pointer place-items-center rounded-lg border border-dashed border-forest-800/40 p-8 text-center">
          <UploadCloud className="text-forest-800" size={42} />
          <span className="mt-3 font-black">Upload Payment Screenshot</span>
          <span className="text-sm text-neutral-500">PNG, JPG or JPEG required</span>
          <input
            required
            name="paymentScreenshot"
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            className="sr-only"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
          />
          {fileName ? <span className="mt-3 rounded-md bg-forest-50 px-3 py-2 text-sm font-bold text-forest-800">{fileName}</span> : null}
        </label>
        <button disabled={submitting} className="mt-6 w-full rounded-md bg-saffron-400 px-5 py-3 font-black text-forest-900 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting..." : "Submit Booking"}</button>
        {bookingReference ? <p className="mt-4 rounded-md bg-forest-50 p-4 text-sm font-bold text-forest-900">Booking submitted. Status: Pending Verification. Reference ID: {bookingReference}</p> : null}
        {error ? <p className="mt-4 rounded-md bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p> : null}
      </form>
      <aside className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-black uppercase text-forest-700">Trip Summary</p>
        <h2 className="mt-2 text-2xl font-black">{tour.title}</h2>
        <div className="mt-5 grid gap-3 text-sm">
          <p className="flex justify-between"><span>Duration</span><strong>{tour.duration}</strong></p>
          <p className="flex justify-between"><span>Departure</span><strong>{tour.departure}</strong></p>
          <p className="flex justify-between"><span>Departure City</span><strong>{departureSelection === "lahore" ? "Lahore" : "Islamabad / Rawalpindi"}</strong></p>
          <p className="flex justify-between"><span>Status</span><strong>Pending Verification</strong></p>
        </div>
        <div className="mt-6 rounded-lg bg-forest-900 p-5 text-white">
          <p className="text-sm text-white/70">Starting Price</p>
          <p className="text-3xl font-black text-saffron-300">{money(selectedPrice)}</p>
          <p className="text-sm text-white/70">{price.unit}</p>
        </div>
      </aside>
    </div>
  );
}
