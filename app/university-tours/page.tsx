import type { Metadata } from "next";
import { CalendarCheck, GraduationCap, Headphones, Route, ShieldCheck, Users } from "lucide-react";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { tripPhotos } from "@/data/tripPhotos";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "University & Student Group Tours Pakistan",
  description: "Plan a university or student group tour in Pakistan with practical route planning, transport coordination and clear communication for authorised group leaders.",
  alternates: { canonical: canonical("/university-tours") },
  openGraph: {
    title: "Lexuz University Tours",
    description: "Student group trips with transport, hotels, coordination and custom routes.",
    images: [tripPhotos.studentGroupCoaster.src]
  },
  twitter: {
    card: "summary_large_image",
    images: [tripPhotos.studentGroupCoaster.src]
  }
};

export default function UniversityToursPage() {
  return (
    <ServiceLandingPage
      eyebrow="Student Travel"
      title="University Tours"
      description="Organised student trips for classes, societies and departments with transport coordination, practical route planning and clear communication for group leaders."
      heroImage={tripPhotos.studentGroupCoaster}
      supportImage={tripPhotos.groupMeadowBanner}
      overview={[
        "Student trips need strong coordination because groups move together, timing matters and communication must stay simple.",
        "Lexuz plans university and college tours for class representatives, student societies and departments that want a managed travel experience. The team helps shape the route, transport plan, pickup points, meals, accommodation and sightseeing flow.",
        "The focus is practical: keep the group comfortable, keep the schedule realistic and keep expectations clear before departure.",
        "The institution remains responsible for its own approvals, consent, safeguarding and supervision requirements. One authorised coordinator should manage the final participant count and communicate dietary, mobility and room-allocation needs through an appropriate private process."
      ]}
      audienceTitle="Built for student groups"
      audiences={["University classes", "College students", "Educational departments", "Student societies", "Graduation trips", "Freshers trips"]}
      arrangements={["Comfortable transport", "Hotels & accommodation", "Breakfast & dinner", "Bonfire or BBQ where suitable", "Professional tour guide", "Route planning", "Pickup from Islamabad or Lahore", "Photography stops"]}
      process={[
        { title: "Share group details", text: "Tell us your destination, dates, group size and pickup city.", icon: GraduationCap },
        { title: "Plan the route", text: "Lexuz prepares a student-friendly itinerary with realistic travel timing.", icon: Route },
        { title: "Confirm seats", text: "Finalise the group count, payment plan and pickup instructions.", icon: CalendarCheck },
        { title: "Travel together", text: "The group travels with coordinated support from departure to return.", icon: Users }
      ]}
      whyChoose={[
        { title: "Group Coordination", text: "Plans are built for group movement, not individual travel.", icon: Users },
        { title: "Clear Communication", text: "Pickup and route details are kept easy for class representatives.", icon: Headphones },
        { title: "Comfortable Transport", text: "Transport planning is matched with group size and route requirements.", icon: ShieldCheck },
        { title: "Flexible Routes", text: "Routes can be adjusted around time, budget and destination preference.", icon: Route },
        { title: "Student-Friendly Planning", text: "Schedules are made practical for young groups and societies.", icon: GraduationCap },
        { title: "Managed Experience", text: "Lexuz handles the travel structure so organisers can focus on the group.", icon: CalendarCheck }
      ]}
      faqs={[
        { question: "Can university students customise the itinerary?", answer: "Yes. Student trips can be customised based on destination, available days, group size and budget." },
        { question: "Can female student groups book a private tour?", answer: "Yes. Private group planning can be discussed for female groups, departments and societies." },
        { question: "Can the trip start from Lahore?", answer: "Yes. Multi-day student tours can be planned from Lahore or Islamabad / Rawalpindi." },
        { question: "Can meals be upgraded?", answer: "Meal preferences can be discussed before quotation and included where practical." },
        { question: "How many students can travel?", answer: "Capacity depends on vehicle availability and route plan. Share your expected group size for guidance." },
        { question: "Does Lexuz replace university approval or supervision?", answer: "No. The institution remains responsible for its own approvals, consent, safeguarding and supervision requirements." }
      ]}
      ctaTitle="Plan a student trip with Lexuz"
      ctaCopy="Share your university name, destination, dates and estimated group size. The team will prepare a practical quotation."
      whatsappMessage={"Hello Lexuz Tours,\nI want to plan a university trip.\nPlease guide me with itinerary and quotation."}
    />
  );
}
