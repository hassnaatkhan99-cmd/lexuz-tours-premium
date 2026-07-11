import type { Metadata } from "next";
import { CalendarCheck, Headphones, Hotel, Route, ShieldCheck, Users } from "lucide-react";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { tripPhotos } from "@/data/tripPhotos";

export const metadata: Metadata = { title: "Corporate Tours", description: "Premium corporate retreats and business tours by Lexuz." };

export default function CorporateToursPage() {
  return (
    <ServiceLandingPage
      eyebrow="Corporate Travel"
      title="Corporate Tours & Retreats"
      description="Managed company trips, staff retreats and executive travel plans across Pakistan with clear coordination, comfortable transport and practical scheduling."
      heroImage={tripPhotos.fleetThreeCoastersNight}
      supportImage={tripPhotos.groupDepartureSummer}
      overview={[
        "Corporate travel needs a different level of organisation from a normal public trip.",
        "Lexuz plans corporate tours for teams that need reliable transport, coordinated pickup, hotel support and a clear route plan. The goal is to keep the experience enjoyable for staff while reducing the planning pressure on company representatives.",
        "Whether the trip is a team retreat, annual staff tour, executive mountain escape or a private company movement, the team can shape the route, duration and comfort level around your group."
      ]}
      audienceTitle="Designed for teams and organisations"
      audiences={["Companies", "Team building groups", "Annual retreats", "Executive travel", "Conferences", "Staff trips"]}
      arrangements={["Comfortable transport", "Hotels & accommodation", "Breakfast & dinner", "Bonfire or BBQ where suitable", "Professional tour guide", "Driver expenses and toll taxes", "Route planning", "Pickup from Islamabad or Lahore"]}
      process={[
        { title: "Share your brief", text: "Tell us your destination, dates, group size and expected comfort level.", icon: Users },
        { title: "Receive a plan", text: "Our team prepares a practical itinerary and quotation for your organisation.", icon: Route },
        { title: "Confirm details", text: "Finalise transport, hotel preferences, pickup points and payment arrangements.", icon: CalendarCheck },
        { title: "Travel with support", text: "Lexuz coordinates the trip so your team can focus on the experience.", icon: Headphones }
      ]}
      whyChoose={[
        { title: "Professional Planning", text: "Trips are structured around group movement, timing and comfort.", icon: Route },
        { title: "Comfortable Transport", text: "Vehicle planning is matched with group size and route needs.", icon: ShieldCheck },
        { title: "Hotel Coordination", text: "Accommodation can be arranged according to the selected budget and comfort level.", icon: Hotel },
        { title: "Transparent Quotation", text: "Your company receives a clear plan before confirming.", icon: CalendarCheck },
        { title: "Dedicated Support", text: "A direct contact helps with planning and coordination.", icon: Headphones },
        { title: "Flexible Itinerary", text: "Schedules can be shaped for retreats, meetings or leisure.", icon: Users }
      ]}
      faqs={[
        { question: "Can we customise a corporate tour itinerary?", answer: "Yes. Corporate tours are planned around your dates, destination, group size and preferred pace." },
        { question: "Can Lexuz arrange hotels for our staff?", answer: "Yes. Hotel arrangements can be included based on the comfort level and budget agreed before confirmation." },
        { question: "Can a company trip start from Lahore?", answer: "Yes. Multi-day private and corporate tours can be planned from Islamabad / Rawalpindi or Lahore." },
        { question: "Can meals be upgraded for a corporate group?", answer: "Meal expectations can be discussed before quotation so the final plan matches your group requirements." },
        { question: "How many people can travel?", answer: "Group size depends on transport availability and route plan. Share your expected number and the team will guide you." }
      ]}
      ctaTitle="Let’s plan your company trip"
      ctaCopy="Send your destination, travel dates and staff count. The Lexuz team will prepare a customised itinerary and quotation."
      whatsappMessage={"Hello Lexuz Tours,\nI want to plan a corporate tour.\nPlease guide me with itinerary and quotation."}
    />
  );
}
