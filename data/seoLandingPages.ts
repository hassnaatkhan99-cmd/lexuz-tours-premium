import { tours } from "./tours";

export type LandingSection = { title: string; paragraphs: string[] };
type Faq = { question: string; answer: string };
export type SeoLandingPage = {
  slug: string; title: string; h1: string; description: string; keyword: string;
  searchIntent: string; relatedTours: string[]; image: string; sections: LandingSection[]; faqs: Faq[];
};

const commonFaqs: Faq[] = [
  { question: "Are jeep charges included?", answer: "No. Jeep charges are excluded where local access requires them. Check the selected tour page for all current inclusions and exclusions." },
  { question: "How can I check a Lexuz booking?", answer: "A submitted booking receives a reference ID. Use it on the booking-status page to view the current status." },
  { question: "What is the customer cancellation policy?", answer: "A confirmed paid booking cancelled more than 7 days before departure is fully refundable. A customer cancellation less than 7 days before departure is non-refundable." }
];
const page = (data: Omit<SeoLandingPage, "faqs"> & { faqs: Faq[] }): SeoLandingPage => ({ ...data, faqs: [...data.faqs, ...commonFaqs] });

export const seoLandingPages: SeoLandingPage[] = [
  page({ slug: "hunza-tour-packages", title: "Hunza Tour Packages: Compare the Lexuz Route", h1: "Hunza Tour Packages", description: "Compare the current Lexuz Hunza route, journey style, key stops and practical booking details before choosing your trip.", keyword: "Hunza tour packages", searchIntent: "Compare and book a managed Hunza package", relatedTours: ["hunza-valley"], image: "/images/destinations/hunza-attabad.jpg", sections: [
    { title: "What a Hunza package should help you decide", paragraphs: ["Hunza is a long northern journey built around the Karakoram Highway corridor, valley viewpoints and time in the Karimabad and upper-Hunza areas. A useful package page should make the travel days, sightseeing days and access-dependent stops easy to distinguish.", "Lexuz publishes one current Hunza public-tour record. Its tour page—not this guide—is the authority for current duration, departure, itinerary, price and inclusions."] },
    { title: "The Lexuz route at a glance", paragraphs: ["The published route includes travel through the northern corridor, Hunza sightseeing around Karimabad, the Altit and Baltit Fort surroundings and Eagle Nest where accessible, followed by Attabad Lake and the upper-Hunza route. Khunjerab access remains subject to weather and road permission.", "This style suits travellers who accept substantial road time in exchange for a varied valley journey. Optional boating or local activities are handled separately where stated."] },
    { title: "Compare before you book", paragraphs: ["Check whether your available days match the full road itinerary and whether every traveller is comfortable with the pace. Review room, meal and transport inclusions on the tour page, then use WhatsApp only for points the published record does not answer."] }
  ], faqs: [
    { question: "Does the Hunza package guarantee Khunjerab Pass?", answer: "No. The upper route is subject to weather, road conditions and permission. Confirm the latest position before travel." },
    { question: "Is Attabad Lake part of the published Hunza route?", answer: "Yes, the current Hunza itinerary includes an excursion toward Attabad Lake. Optional activities are separate unless the tour page states otherwise." }
  ]}),
  page({ slug: "skardu-tour-packages", title: "Skardu Tour Packages: Compare the Lexuz Itinerary", h1: "Skardu Tour Packages", description: "Review the current Lexuz Skardu road itinerary, sightseeing priorities and access-dependent options before booking.", keyword: "Skardu tour packages", searchIntent: "Compare and book a managed Skardu package", relatedTours: ["skardu"], image: "/images/destinations/skardu-shangrila.jpg", sections: [
    { title: "What makes a Skardu package different", paragraphs: ["Skardu’s attractions are spread across a broad mountain region rather than concentrated in one centre. Lakes, cultivated valleys and dry landscapes require sensible grouping, while the road journey itself occupies a meaningful part of a tour.", "Lexuz-specific dates, prices and inclusions are maintained on the linked Skardu tour page so this comparison does not become an outdated second product listing."] },
    { title: "What the current route covers", paragraphs: ["The published Lexuz itinerary includes the Shangrila area, Lower and Upper Kachura, Shigar Valley and Cold Desert sightseeing, with additional route details shown on the tour page. Conditions can change the order or accessibility of outdoor stops.", "Travellers should choose this route for the contrast between lakes, valleys and dry mountain scenery—not because every possible Baltistan attraction can fit into one departure."] },
    { title: "Questions to settle", paragraphs: ["Confirm the road-travel commitment, room basis, departure city and the status of any optional local excursion. Carry layers and sun protection, and leave post-trip commitments flexible in case mountain travel affects arrival time."] }
  ], faqs: [
    { question: "Does every Skardu package include Deosai?", answer: "No. Deosai is seasonal and requires specific access and time. Only treat it as included when the current itinerary says so." },
    { question: "Where are current Skardu prices shown?", answer: "Use the linked Skardu tour page or the official price list. Those records are maintained as the current source." }
  ]}),
  page({ slug: "swat-kalam-tours", title: "Swat Kalam Tours: Route and Package Comparison", h1: "Swat Kalam Tours", description: "Understand the Swat-to-Kalam route, local excursions and current Lexuz tour before booking a shorter northern trip.", keyword: "Swat Kalam tours", searchIntent: "Compare and book a Swat Kalam package", relatedTours: ["swat-kalam-mahodand"], image: "/images/destinations/swat-mahodand.jpg", sections: [
    { title: "A shorter trip with two road types", paragraphs: ["The motorway and expressway sections make Swat approachable, but the onward valley journey to Kalam is a separate mountain-road experience. Excursions beyond Kalam can require local access and more variable conditions.", "This makes the route attractive for a shorter break while still requiring realistic expectations about drive time."] },
    { title: "Current Lexuz sightseeing focus", paragraphs: ["The published tour travels toward Kalam and plans sightseeing around Kalam, Ushu Forest and Mahodand Lake subject to weather and access. Return routing includes valley stops shown in the current itinerary.", "Mahodand should be treated as conditional; the destination name does not guarantee local road access on every departure."] },
    { title: "Who it suits", paragraphs: ["First-time northern travellers and families may find the duration more manageable than far-north routes. Ask about local transfers and walking if children, older adults or mobility needs are part of the group."] }
  ], faqs: [
    { question: "Is Mahodand Lake guaranteed?", answer: "No. The published visit is subject to weather and local access." },
    { question: "Where can I see the current departure days?", answer: "The linked Swat Kalam Mahodand tour page holds the current departure and price data." }
  ]}),
  page({ slug: "kumrat-valley-tours", title: "Kumrat Valley Tours: Choose Valley or Highland", h1: "Kumrat Valley Tours", description: "Compare Lexuz’s Kumrat Valley and Jahaz Banda–Katora Lake routes by access, pace and physical demand.", keyword: "Kumrat Valley tours", searchIntent: "Choose and book the appropriate Kumrat-area tour", relatedTours: ["kumrat-valley", "kumrat-jahaz-banda-katora-lake"], image: "/images/destinations/kumrat-valley.jpg", sections: [
    { title: "Two routes, two levels of effort", paragraphs: ["The Kumrat Valley tour prioritises forest, river and nearby valley viewpoints. The Jahaz Banda and Katora Lake tour moves into a more active highland setting and is intended for travellers comfortable with terrain and access conditions.", "Keeping these products separate prevents a gentle valley visit from being confused with a more demanding lake route."] },
    { title: "Expect a rustic destination", paragraphs: ["Local roads and simpler facilities are part of the Kumrat experience. Conditions affect final transfers and sightseeing, and jeep charges are excluded where needed. Confirm accommodation and physical expectations before booking."] },
    { title: "Choose safely", paragraphs: ["Use the valley route if forest time matters more than a demanding excursion. Consider the highland option only after reviewing every day of its current itinerary. Travellers with health or mobility concerns should seek appropriate advice and discuss suitability."] }
  ], faqs: [
    { question: "Are Kumrat Valley and Katora Lake the same tour?", answer: "No. Lexuz lists a valley-focused tour and a separate longer Jahaz Banda and Katora Lake route." },
    { question: "Is the Katora Lake route suitable for everyone?", answer: "It involves more active terrain and access uncertainty. Review the itinerary and discuss personal suitability before booking." }
  ]}),
  page({ slug: "kashmir-tour-packages", title: "Kashmir Tour Packages: Neelum Valley or Ganga Choti", h1: "Kashmir Tour Packages", description: "Compare Lexuz’s Neelum Valley–Arang Kel and Ganga Choti routes without treating them as one interchangeable itinerary.", keyword: "Kashmir tour packages", searchIntent: "Choose and book an Azad Kashmir route", relatedTours: ["kashmir-arang-kel", "ganga-choti"], image: "/images/destinations/kashmir-arang-kel.jpg", sections: [
    { title: "Choose the correct Kashmir route", paragraphs: ["The Neelum Valley journey follows the river corridor toward places such as Keran, Sharda and Arang Kel access. Ganga Choti is approached through the Bagh side on a distinct route. They answer different time and travel-style needs."] },
    { title: "Neelum Valley and Arang Kel", paragraphs: ["The current multi-day itinerary travels via Muzaffarabad into Neelum Valley and plans Keran, Sharda and Arang Kel subject to local conditions. Valley-road timing and final access must remain flexible."] },
    { title: "Ganga Choti", paragraphs: ["The Ganga Choti product is the more focused mountain outing. Check its tour page for departure, duration, local access and walking expectations instead of importing details from the Neelum itinerary."] }
  ], faqs: [
    { question: "Is Ganga Choti in the Neelum Valley package?", answer: "No. Lexuz lists Ganga Choti and Kashmir Arang Kel as separate tour products." },
    { question: "Is Arang Kel access guaranteed?", answer: "No. The itinerary states that access is subject to weather and local conditions." }
  ]}),
  page({ slug: "naran-kaghan-tours", title: "Naran Kaghan Tours: Compare Naran and Shogran Routes", h1: "Naran Kaghan Tours", description: "Compare Lexuz’s Naran Kaghan and Shogran Siri Paye options by route, local access and available time.", keyword: "Naran Kaghan tours", searchIntent: "Choose and book a Kaghan Valley route", relatedTours: ["naran-kaghan", "shogran-siri-paye"], image: "/images/destinations/naran-saiful-muluk.jpg", sections: [
    { title: "Two ways to experience the valley", paragraphs: ["The Naran Kaghan product follows the longer valley route toward Naran. The Shogran Siri Paye product focuses on the Kiwai–Shogran side and a local upper-meadow excursion. Choose by available days rather than assuming they cover the same places."] },
    { title: "Seasonal and local access", paragraphs: ["Naran and high-valley roads are seasonal. Saif-ul-Malook and Siri Paye can involve separate local transport and conditions. The current tour page identifies the planned stops; recent access should still be confirmed close to departure."] },
    { title: "Best fit", paragraphs: ["Naran suits travellers wanting a multi-day valley journey. Shogran can fit a shorter break, though the upper road may be rough. Families should ask about the local transfer before choosing."] }
  ], faqs: [
    { question: "Are Saif-ul-Malook and Siri Paye on the same tour?", answer: "No. They belong to separate Lexuz products listed on this page." },
    { question: "Is Babusar Pass included?", answer: "Only rely on the current itinerary. Babusar is seasonal and should never be assumed from a Naran package title." }
  ]}),
  page({ slug: "fairy-meadows-tours", title: "Fairy Meadows Tours: Access and Suitability Guide", h1: "Fairy Meadows Tours", description: "Review Fairy Meadows access, trek expectations and the current Lexuz itinerary before choosing this Nanga Parbat journey.", keyword: "Fairy Meadows tours", searchIntent: "Assess suitability and book a Fairy Meadows tour", relatedTours: ["fairy-meadows"], image: "/images/destinations/fairy-meadows.jpg", sections: [
    { title: "Not a drive-up mountain stop", paragraphs: ["Fairy Meadows access typically combines the northern road journey with a local jeep section and onward walking from the Raikot side. Conditions determine the exact operation. This is central to the product, not a small optional detail."] },
    { title: "What the Lexuz itinerary plans", paragraphs: ["The published route includes travel to the Chilas or Raikot region, movement toward Fairy Meadows subject to local access, meadow time and an optional viewpoint walk for interested travellers before returning.", "Review every day of the itinerary and budget excluded local jeep charges separately."] },
    { title: "Who should pause before booking", paragraphs: ["Uneven terrain, altitude, simple stays and compact luggage make this different from a relaxed valley tour. Discuss mobility or health concerns and obtain appropriate professional advice where needed."] }
  ], faqs: [
    { question: "Can the main tour vehicle drive to Fairy Meadows?", answer: "No. The route requires local access and onward movement as conditions allow." },
    { question: "Is the viewpoint walk compulsory?", answer: "The current itinerary describes it as optional for interested travellers." }
  ]})
];

export function getSeoLandingPage(slug: string) { return seoLandingPages.find((item) => item.slug === slug); }
export function getRelatedTours(item: SeoLandingPage) { return item.relatedTours.map((slug) => tours.find((tour) => tour.slug === slug)).filter(Boolean); }
export function buildLandingSections(item: SeoLandingPage) { return item.sections; }
export function buildLandingContent(item: SeoLandingPage) { return item.sections.flatMap((section) => section.paragraphs); }
export function landingFaqs(item: SeoLandingPage) { return item.faqs; }
