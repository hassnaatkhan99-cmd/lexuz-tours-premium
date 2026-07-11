import type { Metadata } from "next";
import { CalendarCheck, Camera, Headphones, MapPin, Route, ShieldCheck, Users } from "lucide-react";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { tripPhotos } from "@/data/tripPhotos";

export const metadata: Metadata = { title: "Custom Tours", description: "Custom private tours across Pakistan by Lexuz Tours." };

export default function CustomToursPage() {
  return (
    <ServiceLandingPage
      eyebrow="Private Travel"
      title="Custom Tours"
      description="Private Pakistan tour planning for families, friends, overseas visitors and groups who want flexible destinations, dates, transport and itinerary style."
      heroImage={tripPhotos.groupMeadowBanner}
      supportImage={tripPhotos.groupDepartureSummer}
      overview={[
        "Custom tours are for travellers who do not want to fit into a fixed public departure.",
        "Lexuz can help plan the destination, route, pickup city, vehicle, hotel preference, meal plan and sightseeing flow around your group. The quotation is prepared after understanding your dates, group size and comfort expectations.",
        "This is useful for families, private groups, overseas guests and travellers who want a more personal schedule than a standard package."
      ]}
      audienceTitle="Made for private groups and flexible plans"
      audiences={["Families", "Friends", "Solo travellers", "Large groups", "Overseas visitors", "Private events"]}
      arrangements={["Comfortable transport", "Hotels & accommodation", "Breakfast & dinner", "Bonfire or BBQ where suitable", "Professional tour guide", "Private itinerary", "Flexible schedule", "Pickup from Islamabad or Lahore"]}
      process={[
        { title: "Tell us your idea", text: "Share your destination, dates, group size and pickup city.", icon: Users },
        { title: "Shape the route", text: "Lexuz prepares a route plan based on your travel style and time.", icon: Route },
        { title: "Review quotation", text: "Confirm the itinerary, services, pickup details and payment steps.", icon: CalendarCheck },
        { title: "Travel your way", text: "Enjoy a private journey planned around your group.", icon: MapPin }
      ]}
      whyChoose={[
        { title: "Flexible Itineraries", text: "The route can be built around your dates, comfort level and interests.", icon: Route },
        { title: "Private Transport", text: "Transport can be planned around group size and destination access.", icon: ShieldCheck },
        { title: "Family-Friendly Planning", text: "Routes can be paced for families, elders and children where needed.", icon: Users },
        { title: "Photography Stops", text: "Scenic stops can be added when timing and route conditions allow.", icon: Camera },
        { title: "Clear Quotation", text: "Services are discussed before confirmation so expectations stay clear.", icon: CalendarCheck },
        { title: "Direct Support", text: "You can speak with the team before finalising the plan.", icon: Headphones }
      ]}
      faqs={[
        { question: "Can we fully customise the itinerary?", answer: "Yes. Custom tours are built around your destination, dates, group size, pickup city and preferred travel style." },
        { question: "Can we choose hotels?", answer: "Hotel preferences can be discussed before quotation and included based on availability and budget." },
        { question: "Can overseas visitors book a private tour?", answer: "Yes. Private tours can be planned for overseas visitors, families and groups travelling in Pakistan." },
        { question: "Can the tour start from Lahore?", answer: "Yes. Multi-day custom tours can be planned from Lahore or Islamabad / Rawalpindi." },
        { question: "How do we get a quotation?", answer: "Send your dates, destination, group size and preferred comfort level on WhatsApp. The team will prepare a quotation." }
      ]}
      ctaTitle="Request your custom quote"
      ctaCopy="Send your destination, dates, pickup city and group size. Lexuz will prepare a private itinerary and quotation."
      whatsappMessage={"Hello Lexuz Tours,\nI want to plan a custom private tour.\nPlease guide me with itinerary and quotation."}
    />
  );
}
