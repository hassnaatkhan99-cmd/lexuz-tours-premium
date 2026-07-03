import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getTour, tours } from "@/data/tours";

export const metadata: Metadata = { title: "Booking", description: "Book a Lexuz tour online with payment screenshot upload." };

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ tour?: string; departure?: string }> }) {
  const params = await searchParams;
  const tour = getTour(params.tour ?? "") ?? tours[0];
  const departure = params.departure === "lahore" && tour.category !== "one-day" ? "lahore" : "islamabad";
  return <section className="container-page py-14"><SectionHeading eyebrow="Booking System" title="Book Your Adventure" copy="Fill the form, select payment method, upload payment screenshot and submit. Status starts as Pending Verification." /><BookingForm tour={tour} departure={departure} /></section>;
}
