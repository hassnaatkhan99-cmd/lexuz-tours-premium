"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CheckCircle2, ShieldCheck, UploadCloud } from "lucide-react";
import { paymentMethods } from "@/data/payments";
import { tripPhotos } from "@/data/tripPhotos";
import { lahorePrice, money, Tour } from "@/data/tours";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { DesignInput, DesignSelect, FeedbackNotice, FieldGroup, FieldHelp, FieldLabel, SegmentedControl } from "@/components/ui";

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
    formData.set("totalAmount", String(selectedPrice));
    formData.set("advancePaid", "");
    formData.set("remainingAmount", "");

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
      <form onSubmit={handleSubmit} className="rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds3 md:p-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">Secure booking</p>
          <h2 className="mt-2 text-3xl font-black text-lexuzNeutral-100">Booking details</h2>
          <p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">Submit your traveler details and payment screenshot. The Lexuz team will review everything before final confirmation.</p>
        </div>

        <section className="mt-8">
          <h3 className="flex items-center gap-2 text-lg font-black text-lexuzNeutral-100"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand-primary text-sm text-white">1</span>Your details</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <FieldGroup><FieldLabel htmlFor="fullName">Full Name</FieldLabel><DesignInput id="fullName" name="fullName" required placeholder="Full Name" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="phone">Phone Number</FieldLabel><DesignInput id="phone" name="phone" required placeholder="0300XXXXXXX" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="email">Email Address</FieldLabel><DesignInput id="email" name="email" required type="email" placeholder="you@example.com" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="cnic">CNIC / Passport Number</FieldLabel><DesignInput id="cnic" name="cnic" required placeholder="CNIC / Passport Number" /><FieldHelp>Required for hotel and checkpost registration. Kept private.</FieldHelp></FieldGroup>
          </div>
        </section>

        <section className="mt-10 border-t border-lexuzNeutral-line pt-8">
          <h3 className="flex items-center gap-2 text-lg font-black text-lexuzNeutral-100"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand-primary text-sm text-white">2</span>Trip details</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <FieldGroup><FieldLabel htmlFor="numberOfTravelers">Number Of Travelers</FieldLabel><DesignInput id="numberOfTravelers" name="numberOfTravelers" required type="number" min={1} placeholder="2" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="emergencyContact">Emergency Contact</FieldLabel><DesignInput id="emergencyContact" name="emergencyContact" required placeholder="Emergency contact number" /><FieldHelp>Only used during the trip if needed.</FieldHelp></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="pickupCity">Pickup City</FieldLabel><DesignInput id="pickupCity" name="pickupCity" required placeholder="Islamabad / Rawalpindi" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="pickupLocation">Pickup Location</FieldLabel><DesignInput id="pickupLocation" name="pickupLocation" required placeholder="Faizabad, 26 No, etc." /></FieldGroup>
            <FieldGroup className="md:col-span-2">
              <FieldLabel htmlFor="departureSelection">Departure Selection</FieldLabel>
              <DesignSelect id="departureSelection" required value={departureSelection} onChange={(event) => setDepartureSelection(event.target.value)}>
              <option value="islamabad">Islamabad / Rawalpindi</option>
              {tour.category !== "one-day" ? <option value="lahore">Lahore</option> : null}
              </DesignSelect>
            </FieldGroup>
          </div>
        </section>

        <section className="mt-10 border-t border-lexuzNeutral-line pt-8">
          <h3 className="flex items-center gap-2 text-lg font-black text-lexuzNeutral-100"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand-primary text-sm text-white">3</span>Payment</h3>
          <FieldGroup className="mt-5">
            <FieldLabel>Payment Method</FieldLabel>
            <SegmentedControl label="Payment method" className="grid gap-1 md:grid-cols-2">
              {paymentMethods.map((method) => (
                <button key={method.id} type="button" onClick={() => setPaymentMethod(method.id)} className={`min-h-11 rounded-dsSm px-4 py-2 text-sm font-black ${paymentMethod === method.id ? "bg-brand-primary text-white shadow-ds1" : "text-brand-primary hover:bg-brand-secondary"}`}>
                  {method.name}
                </button>
              ))}
            </SegmentedControl>
          </FieldGroup>
          <div className="mt-4">
            <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
              <figure className="overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds1">
                <Image src={tripPhotos.fleetThreeCoastersNight.src} alt={tripPhotos.fleetThreeCoastersNight.alt} width={tripPhotos.fleetThreeCoastersNight.width} height={tripPhotos.fleetThreeCoastersNight.height} className="h-56 w-full object-cover" />
                <figcaption className="px-4 py-3 text-xs font-black leading-5 text-brand-primary">{tripPhotos.fleetThreeCoastersNight.caption}</figcaption>
              </figure>
              {paymentMethods.filter((method) => method.id === paymentMethod).map((method) => <PaymentMethodCard key={method.id} method={method} />)}
            </div>
          </div>
          <label className="mt-6 grid cursor-pointer place-items-center rounded-dsLg border border-dashed border-brand-primary/40 bg-brand-secondary/60 p-8 text-center transition hover:bg-brand-secondary">
          <UploadCloud className="text-brand-primary" size={42} />
          <span className="mt-3 font-black text-lexuzNeutral-100">Upload Payment Screenshot</span>
          <span className="text-sm text-lexuzNeutral-60">PNG, JPG or JPEG required</span>
          <input
            required
            name="paymentScreenshot"
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            className="sr-only"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
          />
          {fileName ? <span className="mt-3 inline-flex items-center gap-2 rounded-dsSm bg-white px-3 py-2 text-sm font-bold text-brand-primary shadow-ds1"><CheckCircle2 size={16} />{fileName}</span> : null}
          </label>
        </section>

        <button disabled={submitting} className="focus-ring mt-8 w-full rounded-dsMd bg-brand-primary px-5 py-4 font-black text-white shadow-ds1 hover:bg-brand-primaryHover hover:shadow-ds2 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting..." : "Submit Booking"}</button>
        {bookingReference ? <div className="mt-4"><FeedbackNotice tone="success" title="Booking received">Your request is being reviewed. Reference ID: <strong>{bookingReference}</strong></FeedbackNotice></div> : null}
        {error ? <div className="mt-4"><FeedbackNotice tone="error" title="Booking could not be submitted">{error}</FeedbackNotice></div> : null}
      </form>
      <aside className="rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds3 lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">Trip Summary</p>
        <h2 className="mt-2 text-2xl font-black text-lexuzNeutral-100">{tour.title}</h2>
        <div className="mt-5 grid gap-3 text-sm">
          <p className="flex justify-between"><span>Duration</span><strong>{tour.duration}</strong></p>
          <p className="flex justify-between"><span>Departure</span><strong>{tour.departure}</strong></p>
          <p className="flex justify-between"><span>Departure City</span><strong>{departureSelection === "lahore" ? "Lahore" : "Islamabad / Rawalpindi"}</strong></p>
          <p className="flex justify-between"><span>Status</span><strong>Review by Lexuz team</strong></p>
        </div>
        <div className="mt-6 rounded-dsLg bg-brand-primary p-5 text-white">
          <p className="text-sm text-white/70">Starting Price</p>
          <p className="text-3xl font-black text-brand-accent">{money(selectedPrice)}</p>
          <p className="text-sm text-white/70">{price.unit}</p>
        </div>
        <div className="mt-5 flex gap-3 rounded-dsMd bg-brand-secondary p-4 text-sm leading-6 text-brand-primary">
          <ShieldCheck className="mt-1 shrink-0" size={18} />
          Your payment screenshot is reviewed before confirmation. Booking values are stored with your booking record.
        </div>
      </aside>
    </div>
  );
}
