export type CityHubCode = "islamabad" | "lahore";

export type CityHubFaq = {
  question: string;
  answer: string;
};

export type CityHubLink = {
  label: string;
  href: string;
  description: string;
};

export type CityHub = {
  code: CityHubCode;
  token: "HUB-ISB" | "HUB-LHR";
  name: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  availableDepartures: string[];
  pickupPoints: string[];
  whyChoose: string[];
  travelFormat?: string[];
  faqs: CityHubFaq[];
  relatedLinks: CityHubLink[];
};

export const cityHubs: Record<CityHubCode, CityHub> = {
  islamabad: {
    code: "islamabad",
    token: "HUB-ISB",
    name: "Islamabad",
    path: "/tours/islamabad",
    title: "Tours from Islamabad | Northern Pakistan Trips by Lexuz Tours",
    description:
      "Book premium tours from Islamabad and Rawalpindi with Lexuz Tours. Explore one-day trips, weekend getaways and multi-day northern Pakistan tours with managed transport, pickup guidance and WhatsApp support.",
    eyebrow: "Islamabad / Rawalpindi Departures",
    heroTitle: "Tours from Islamabad",
    heroLead:
      "Start close to the northern routes with premium public trips, one-day escapes and multi-day adventures planned from Islamabad and Rawalpindi.",
    heroImage: "/images/fleet-line.jpeg",
    heroAlt: "Lexuz Tours vehicles ready for northern Pakistan departures from Islamabad and Rawalpindi",
    intro: [
      "Islamabad and Rawalpindi are the most practical starting points for many northern Pakistan tours because the motorway network connects quickly toward Hazara, Swat, Kashmir, Naran, Hunza and Skardu routes. Lexuz Tours uses this advantage to keep departures organized, realistic and comfortable for families, couples, student groups and private travelers.",
      "This hub brings together all current trips available from Islamabad / Rawalpindi, including Sunday one-day trips and longer journeys toward the north. Each tour links to its main product page with the Islamabad departure section highlighted, so travelers can check pricing, inclusions, pickup information and the booking option without moving through duplicate city pages."
    ],
    availableDepartures: [
      "One-day trips depart every Sunday from Islamabad / Rawalpindi.",
      "Three-day tours depart Tuesday Morning and Friday Morning where listed on the tour page.",
      "Four-day tours depart Thursday Morning where listed on the tour page.",
      "Five-day and six-day tours depart Saturday Morning where listed on the tour page."
    ],
    pickupPoints: [
      "Islamabad / Rawalpindi pickup guidance is shared before departure after booking verification.",
      "Common meeting areas may include Faizabad, motorway access points and approved pickup points on the active route.",
      "Wah Cantt / Taxila route assistance is available where the tour route supports it.",
      "Final pickup timing depends on traffic, route conditions and the confirmed trip plan."
    ],
    whyChoose: [
      "Shorter access to Hazara Motorway, Murree Expressway, Swat Expressway and Kashmir routes.",
      "Better suited for one-day trips because northern day-trip destinations are closer than from Lahore.",
      "Efficient pickup coordination for travelers from Islamabad, Rawalpindi, Wah Cantt and nearby areas.",
      "WhatsApp support before departure so route expectations, luggage guidance and pickup details stay clear."
    ],
    faqs: [
      {
        question: "Which tours are available from Islamabad?",
        answer:
          "All current Lexuz public trips are available from Islamabad / Rawalpindi, including one-day trips, three-day tours, four-day tours, five-day tours and six-day tours shown on this page."
      },
      {
        question: "Are one-day trips available from Islamabad?",
        answer:
          "Yes. Shogran Siri Paye, Sharaan Forest and Sharaan Waterfall, and Ganga Choti are currently listed as one-day trips from Islamabad / Rawalpindi."
      },
      {
        question: "Where is the final pickup point?",
        answer:
          "The final pickup point is confirmed by the Lexuz team before departure. It depends on the active route, traffic plan and the number of travelers joining from different areas."
      },
      {
        question: "Do prices change for Islamabad departures?",
        answer:
          "Islamabad / Rawalpindi prices are the base prices shown on the tour pages. Prices are subject to change, so advance booking and direct confirmation are recommended."
      }
    ],
    relatedLinks: [
      {
        label: "Popular Destinations",
        href: "/destinations",
        description: "Explore Hunza, Skardu, Swat, Naran, Kashmir, Kumrat and more northern destinations."
      },
      {
        label: "Public Trips",
        href: "/public-trips",
        description: "Compare all active public tours with price, duration and departure information."
      },
      {
        label: "Pakistan Tour Packages Guide",
        href: "/blog/top-places-to-visit-in-northern-pakistan",
        description: "Read the planning guide for choosing the right Pakistan tour package."
      }
    ]
  },
  lahore: {
    code: "lahore",
    token: "HUB-LHR",
    name: "Lahore",
    path: "/tours/lahore",
    title: "Tours from Lahore | Northern Pakistan Trips by Lexuz Tours",
    description:
      "Explore Lexuz Tours multi-day departures from Lahore for Swat, Naran, Kashmir, Kumrat, Hunza, Fairy Meadows and Skardu with clear travel format, pickup guidance and WhatsApp booking support.",
    eyebrow: "Lahore Multi-Day Departures",
    heroTitle: "Tours from Lahore",
    heroLead:
      "Join managed multi-day northern Pakistan tours from Lahore with clear pickup coordination, motorway travel planning and direct Lexuz support.",
    heroImage: "/images/fleet-road.jpeg",
    heroAlt: "Lexuz Tours fleet on the road for multi-day northern Pakistan departures from Lahore",
    intro: [
      "Lahore departures require a longer road approach before travelers reach the main northern routes, so the best fit is a multi-day trip rather than a one-day escape. Lexuz Tours keeps Lahore travelers on the same official tour product pages while showing the Lahore departure context, pricing logic and travel format clearly.",
      "This hub lists only tours that support Lahore departure. One-day trips are not shown here because they are currently available from Islamabad / Rawalpindi only. For Lahore travelers, the focus is organized weekend and extended tours where the additional travel time is planned into the route."
    ],
    availableDepartures: [
      "Three-day tours depart Tuesday Morning and Friday Morning where listed on the tour page.",
      "Four-day tours depart Thursday Morning where listed on the tour page.",
      "Five-day and six-day tours depart Saturday Morning where listed on the tour page.",
      "One-day trips are not available from Lahore."
    ],
    pickupPoints: [
      "Lahore pickup guidance is shared before departure after booking verification.",
      "Common pickup planning focuses on practical motorway access areas and confirmed group meeting points.",
      "Travelers should expect a longer approach toward Islamabad / Rawalpindi and northern motorway routes.",
      "Final pickup timing and meeting instructions are confirmed by the Lexuz team before the trip."
    ],
    travelFormat: [
      "Lahore departures usually include additional road time before reaching the main northern route, so travelers should pack light, keep essentials accessible and expect comfort stops on the motorway.",
      "For longer northern trips, Lahore travelers join the same managed tour plan after route alignment. This keeps pricing, inclusions, cancellation rules and booking workflow consistent with the official tour product page."
    ],
    whyChoose: [
      "Lahore travelers can join selected multi-day northern Pakistan tours without needing to self-arrange transport to Islamabad.",
      "Clear city-specific pricing is shown where Lahore departure is available through the official tour page.",
      "WhatsApp guidance helps travelers understand the route, pickup coordination and expected travel format before booking.",
      "Lexuz keeps one canonical tour page per destination, reducing confusion and duplicate city versions."
    ],
    faqs: [
      {
        question: "Which tours are available from Lahore?",
        answer:
          "Selected multi-day tours are available from Lahore, including three-day, four-day, five-day and six-day tours shown on this page. One-day trips are currently not available from Lahore."
      },
      {
        question: "Why are one-day trips not listed for Lahore?",
        answer:
          "One-day trips are designed around Islamabad / Rawalpindi travel distance. Lahore adds too much road time for a comfortable same-day mountain trip, so those trips are not offered from Lahore."
      },
      {
        question: "How is Lahore pricing shown?",
        answer:
          "The tour page displays Lahore pricing where available. The amount is pulled from the existing tour data and rules; no separate duplicate Lahore tour page is created."
      },
      {
        question: "When will I receive the Lahore pickup details?",
        answer:
          "Pickup location and timing are shared by the Lexuz team before departure after your booking is reviewed and verified."
      }
    ],
    relatedLinks: [
      {
        label: "Public Trips",
        href: "/public-trips",
        description: "Review all current public tours before choosing your departure city."
      },
      {
        label: "Honeymoon Tours",
        href: "/honeymoon-tours",
        description: "Explore private and couple-friendly northern Pakistan travel options."
      },
      {
        label: "Northern Pakistan Travel Guide",
        href: "/blog/road-trip-guide-northern-areas",
        description: "Plan routes, seasons and destinations for northern Pakistan tours."
      }
    ]
  }
};
