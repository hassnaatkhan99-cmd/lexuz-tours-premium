import type { Metadata } from "next";
import { BedDouble, CalendarCheck, Camera, Heart, Hotel, MapPin, Route, ShieldCheck } from "lucide-react";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = { title: "Honeymoon Tours", description: "Private honeymoon tour packages across Pakistan by Lexuz." };

export default function HoneymoonToursPage() {
  return (
    <ServiceLandingPage
      eyebrow="Couple Travel"
      title="Honeymoon Tours"
      description="Private couple-focused travel plans for Hunza, Skardu, Kashmir, Swat and other scenic destinations with relaxed pacing, comfort and personal coordination."
      heroImage={{ src: "/images/destinations/hunza-attabad.jpg", width: 1200, height: 800, alt: "Scenic lake and mountain view suitable for a honeymoon tour" }}
      supportImage={{ src: "/images/destinations/skardu-shangrila.jpg", width: 1200, height: 800, alt: "Beautiful mountain resort scenery for a private couple tour" }}
      overview={[
        "A honeymoon tour should feel private, calm and thoughtfully paced.",
        "Lexuz helps couples plan scenic routes, comfortable transport, accommodation preferences and sightseeing stops without turning the trip into a rushed checklist. The plan can be shaped around privacy, photography, rest time and the destinations you want to experience.",
        "Whether you want a short romantic escape or a longer northern areas trip, the team can prepare a route and quotation based on your dates and comfort expectations."
      ]}
      audienceTitle="Designed for private couple travel"
      audiences={["Newly married couples", "Anniversary trips", "Private romantic getaways", "Luxury couple experiences", "Relaxed scenic holidays", "Photography-focused trips"]}
      arrangements={["Private transport", "Hotels & accommodation", "Breakfast & dinner", "Flexible itinerary", "Photography stops", "Pickup from Islamabad or Lahore", "Route planning", "Family-friendly planning if required"]}
      process={[
        { title: "Share your dates", text: "Tell us your preferred destination, travel dates and comfort level.", icon: Heart },
        { title: "Choose the style", text: "We help shape the pace, route, hotel category and sightseeing flow.", icon: Route },
        { title: "Confirm the plan", text: "Review the quotation, pickup details and payment steps before confirmation.", icon: CalendarCheck },
        { title: "Travel privately", text: "Enjoy the journey with a plan built around comfort and privacy.", icon: BedDouble }
      ]}
      whyChoose={[
        { title: "Private Planning", text: "The route is planned around the couple, not a public group schedule.", icon: Heart },
        { title: "Comfort First", text: "Transport and hotel choices can be discussed before confirmation.", icon: ShieldCheck },
        { title: "Scenic Stops", text: "Photography and rest stops can be included in the travel flow.", icon: Camera },
        { title: "Flexible Pace", text: "The itinerary can stay relaxed instead of overloaded.", icon: Route },
        { title: "Hotel Guidance", text: "Accommodation preferences are handled during quotation planning.", icon: Hotel },
        { title: "Pickup Options", text: "Private multi-day tours can be planned from Islamabad / Rawalpindi or Lahore.", icon: MapPin }
      ]}
      faqs={[
        { question: "Can we customise a honeymoon itinerary?", answer: "Yes. Honeymoon tours are private and can be shaped around your dates, destination and preferred pace." },
        { question: "Can we choose our hotel?", answer: "Hotel preferences can be discussed before quotation so the plan matches your comfort level." },
        { question: "Can a honeymoon tour start from Lahore?", answer: "Yes. Private multi-day tours can be planned from Lahore or Islamabad / Rawalpindi." },
        { question: "Can we add photography stops?", answer: "Yes. Scenic and photography stops can be included where the route and timing allow." },
        { question: "Is the tour private for the couple?", answer: "Private honeymoon plans are arranged separately from public group departures." }
      ]}
      ctaTitle="Request your honeymoon quote"
      ctaCopy="Tell us your destination, dates and comfort preference. Lexuz will prepare a private couple-focused itinerary and quotation."
      whatsappMessage={"Hello Lexuz Tours,\nI want to plan a honeymoon tour.\nPlease guide me with itinerary and quotation."}
    />
  );
}
