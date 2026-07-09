import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getTour, tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Booking",
  description: "Book a Lexuz tour online with payment screenshot upload.",
  openGraph: {
    title: "Book With Lexuz Tours",
    description: "Submit traveler details, select payment method and upload payment proof for team review.",
    images: ["/images/trip/lexuz-fleet-three-coasters-night.webp"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/trip/lexuz-fleet-three-coasters-night.webp"]
  }
};

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ tour?: string; departure?: string }> }) {
  const params = await searchParams;
  const tour = getTour(params.tour ?? "") ?? tours[0];
  const departure = params.departure === "lahore" && tour.category !== "one-day" ? "lahore" : "islamabad";
  return <section className="cinematic-band py-16"><div className="container-page"><SectionHeading eyebrow="Online booking" title="Book Your Adventure" copy="Fill the form, select payment method, upload your payment screenshot and submit your request for team review." /><BookingForm tour={tour} departure={departure} /></div></section>;
}
