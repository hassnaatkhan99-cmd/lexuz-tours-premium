import type { Metadata } from "next";
import { BookingStatusLookup } from "@/components/BookingStatusLookup";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Booking Status",
  description: "Track your Lexuz Tours booking status by reference ID.",
  robots: { index: false, follow: false }
};

export default async function BookingStatusPage({ searchParams }: { searchParams: Promise<{ reference?: string }> }) {
  const params = await searchParams;
  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Booking Status" title="Track Your Booking" copy="Enter your booking reference ID to check the current booking status." level="h1" />
      <BookingStatusLookup initialReference={params.reference?.trim() || ""} />
    </section>
  );
}
