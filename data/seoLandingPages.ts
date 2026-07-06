import { tours } from "./tours";

export type SeoLandingPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keyword: string;
  relatedTours: string[];
  audience: string;
  region: string;
  image: string;
};

export type LandingSection = {
  title: string;
  paragraphs: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  { slug: "hunza-tour-packages", title: "Hunza Tour Packages From Islamabad & Lahore", h1: "Hunza Tour Packages", description: "Premium Hunza tour packages with managed transport, hotels, Attabad Lake, Karimabad, forts and Karakoram Highway sightseeing.", keyword: "Hunza tour packages", relatedTours: ["hunza-valley"], audience: "families, couples, students and adventure travelers", region: "Gilgit Baltistan", image: "/images/destinations/hunza-attabad.jpg" },
  { slug: "skardu-tour-packages", title: "Skardu Tour Packages From Islamabad & Lahore", h1: "Skardu Tour Packages", description: "Book Skardu tour packages covering Kachura Lakes, Shangrila, Cold Desert, waterfalls and premium Baltistan road journeys.", keyword: "Skardu tour packages", relatedTours: ["skardu"], audience: "travelers who want lakes, deserts, waterfalls and dramatic mountain scenery", region: "Baltistan", image: "/images/destinations/skardu-shangrila.jpg" },
  { slug: "swat-kalam-tours", title: "Swat Kalam Tours | Mahodand Lake Packages", h1: "Swat Kalam Tours", description: "Short Swat Kalam tours with Kalam Bazaar, Ushu Forest, Mahodand Lake access and comfortable public trip management.", keyword: "Swat Kalam tours", relatedTours: ["swat-kalam-mahodand"], audience: "families, first-time northern travelers and weekend groups", region: "Khyber Pakhtunkhwa", image: "/images/destinations/swat-mahodand.jpg" },
  { slug: "kumrat-valley-tours", title: "Kumrat Valley Tours & Jahaz Banda Packages", h1: "Kumrat Valley Tours", description: "Adventure-style Kumrat Valley tours with forests, rivers, Jahaz Banda, Katora Lake route guidance and managed transport.", keyword: "Kumrat Valley tours", relatedTours: ["kumrat-valley", "kumrat-jahaz-banda-katora-lake"], audience: "nature lovers and adventure travelers", region: "Upper Dir", image: "/images/destinations/kumrat-valley.jpg" },
  { slug: "kashmir-tour-packages", title: "Kashmir Tour Packages | Neelum Valley & Arang Kel", h1: "Kashmir Tour Packages", description: "Azad Kashmir tour packages for Neelum Valley, Keran, Sharda and Arang Kel with trusted Lexuz trip coordination.", keyword: "Kashmir tour packages", relatedTours: ["kashmir-arang-kel", "ganga-choti"], audience: "families, groups and travelers looking for green valleys", region: "Azad Kashmir", image: "/images/destinations/kashmir-arang-kel.jpg" },
  { slug: "naran-kaghan-tours", title: "Naran Kaghan Tours | Saif-ul-Malook Valley Trips", h1: "Naran Kaghan Tours", description: "Naran Kaghan tours with Kunhar River, Balakot route, Naran Bazaar and Saif-ul-Malook region travel support.", keyword: "Naran Kaghan tours", relatedTours: ["naran-kaghan", "shogran-siri-paye"], audience: "families, couples and first-time mountain travelers", region: "Kaghan Valley", image: "/images/destinations/naran-saiful-muluk.jpg" },
  { slug: "fairy-meadows-tours", title: "Fairy Meadows Tours | Nanga Parbat Adventure Trips", h1: "Fairy Meadows Tours", description: "Fairy Meadows tours for Nanga Parbat views, meadow stays, Raikot route travel and premium adventure management.", keyword: "Fairy Meadows tours", relatedTours: ["fairy-meadows"], audience: "adventure travelers, photographers and trekking-minded groups", region: "Nanga Parbat Region", image: "/images/destinations/fairy-meadows.jpg" },
  { slug: "honeymoon-tours-pakistan", title: "Honeymoon Tours Pakistan | Private Couple Trips", h1: "Honeymoon Tours Pakistan", description: "Premium honeymoon tours in Pakistan with private planning, scenic hotels, flexible routes and couple-friendly support.", keyword: "honeymoon tours Pakistan", relatedTours: ["hunza-valley", "skardu", "naran-kaghan"], audience: "married couples and honeymoon travelers", region: "Northern Pakistan", image: "/images/group-snow-lake-real.png" },
  { slug: "corporate-tours-pakistan", title: "Corporate Tours Pakistan | Company Retreats", h1: "Corporate Tours Pakistan", description: "Corporate tours in Pakistan for team retreats, company trips, branded transport, hotel coordination and group logistics.", keyword: "corporate tours Pakistan", relatedTours: ["swat-kalam-mahodand", "naran-kaghan", "hunza-valley"], audience: "companies, teams, offices and corporate groups", region: "Pakistan", image: "/images/fleet-founder-buses.jpeg" },
  { slug: "university-tours-pakistan", title: "University Tours Pakistan | Student Trips", h1: "University Tours Pakistan", description: "University tours in Pakistan for student groups with safe transport, managed itineraries, group coordination and clear pricing.", keyword: "university tours Pakistan", relatedTours: ["shogran-siri-paye", "swat-kalam-mahodand", "hunza-valley"], audience: "universities, colleges and student societies", region: "Pakistan", image: "/images/group-snow-banner-real.jpeg" }
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getRelatedTours(page: SeoLandingPage) {
  return page.relatedTours.map((slug) => tours.find((tour) => tour.slug === slug)).filter(Boolean);
}

export function buildLandingSections(page: SeoLandingPage): LandingSection[] {
  const related = getRelatedTours(page);
  const names = related.map((tour) => tour?.title).join(", ") || page.h1;
  return [
    {
      title: `${page.h1} Overview`,
      paragraphs: [
        `${page.keyword} by Lexuz Tours & Adventures are designed for travelers who want the excitement of Pakistan's mountain routes with the confidence of a managed travel company. The experience is built around clear pricing, trusted transport, practical itineraries, responsive WhatsApp support and a premium travel style that still feels friendly and personal. Whether you are planning from Islamabad, Rawalpindi, Lahore or arranging a private group, this guide explains what the destination offers, what is included, how the journey works and why Lexuz is a strong choice for ${page.audience}.`,
        `${page.region} has its own rhythm. Some routes are known for long scenic drives and dramatic viewpoints, while others are ideal for weekend escapes, family holidays, honeymoon travel, university trips or corporate retreats. Lexuz plans each route around realistic road timing, hotel availability, daylight, meal breaks, weather windows and group comfort. That practical planning matters in northern Pakistan, where mountain roads, local transfers and seasonal access can shape the final travel experience.`
      ]
    },
    {
      title: "Why Visit",
      paragraphs: [
        `${page.h1} gives travelers a complete northern Pakistan experience: mountain views, local hospitality, fresh air, photography points, roadside tea stops and a welcome pause from city routines. The route works especially well for travelers who want a managed tour without losing the natural feeling of the journey. Lexuz keeps the experience structured enough for safety and timing, but flexible enough for real mountain conditions such as weather changes, traffic pauses and spontaneous scenic stops.`,
        `A strong ${page.keyword} plan should not only show a price. It should help you understand what you will actually see, how long the journey feels, what to pack, which expectations are realistic and how the booking will be handled. Related Lexuz options include ${names}. Each package keeps the rules clear: jeep charges are not included, personal expenses remain separate, and inclusions are displayed before booking so customers can compare packages confidently before paying an advance.`
      ]
    },
    {
      title: "Best Time To Visit",
      paragraphs: [
        `The best travel season depends on your style. Spring brings softer weather and cleaner valley colors, summer is ideal for families and first-time mountain travelers, autumn is excellent for photography, and winter gives snow lovers a completely different atmosphere on routes that remain accessible. Lexuz reviews seasonal access before operating trips and communicates route changes when mountain conditions require adjustments.`,
        `For public trips, customers should book early around long weekends, school holidays and peak summer departures because vehicle seats and hotel rooms can fill quickly. Honeymoon and private family travelers should plan even earlier if they want better room categories or quieter travel dates. Corporate and university groups benefit from early coordination because group approvals, pickup points, meal planning and seat allocation need more time.`
      ]
    },
    {
      title: "Weather And Road Conditions",
      paragraphs: [
        `Weather in northern Pakistan can change quickly. Sunny mornings may turn into cold evenings, and high-altitude areas can feel significantly cooler than Islamabad, Rawalpindi or Lahore. Travelers should carry layered clothing, comfortable shoes and a compact rain or wind layer even during warmer months. Lexuz keeps itineraries practical so that sightseeing can continue comfortably when weather is normal and can be adjusted when safety or access requires a change.`,
        `Road conditions vary by region and season. Some destinations have smooth highway sections followed by mountain roads, while others include narrower valley routes or local access sections. Lexuz plans pickup timing, rest stops and return windows around real travel behavior instead of unrealistic map estimates. This is one reason customers searching for a tour operator Rawalpindi, travel agency Islamabad or Pakistan tour packages often prefer a company that understands public trip operations on the ground.`
      ]
    },
    {
      title: "Things To Pack",
      paragraphs: [
        `Pack light but thoughtfully. A small backpack, warm layer, comfortable shoes, phone charger, power bank, personal medicine, CNIC or passport, sunglasses, sunscreen and reusable water bottle are useful on most trips. Families should carry basic snacks for children, while couples and photographers may want extra batteries, a small tripod and clothing suitable for both sightseeing and colder evenings.`,
        `Avoid overpacking because luggage space in group travel is shared and mountain hotel rooms can be compact. For one-day or short tours, keep essentials close instead of placing everything in the vehicle luggage area. For longer routes, carry a separate small bag for overnight basics so check-ins and early morning departures remain easy.`
      ]
    },
    {
      title: "Photography Locations",
      paragraphs: [
        `${page.h1} is highly rewarding for photography because the route offers changing light, mountain backgrounds, rivers, forests, villages, lakes and travel moments with real character. The best photos often come early in the morning or late afternoon when the light is softer. Travelers should keep phones charged and be ready for quick scenic pauses because the strongest memories often happen between planned stops.`,
        `Lexuz encourages responsible photography. Ask before photographing local people, avoid stepping into unsafe road edges for a picture and follow the tour manager's guidance at viewpoints. For groups, keeping photography stops disciplined helps everyone enjoy the route without delaying hotel check-in, meals or return timing.`
      ]
    },
    {
      title: "Local Culture And Food",
      paragraphs: [
        `Every region has its own hospitality style, food habits and local rhythm. Travelers should expect simple mountain meals on some routes and more developed hotel or restaurant options on others. Breakfast and dinner are included in eligible multi-day tours according to package details, while extra meals, entry tickets and personal expenses remain separate. One-day trips include dinner with the listed services.`,
        `Respect for local culture improves the trip for everyone. Dress modestly in villages and bazaars, avoid littering, follow hotel rules and be patient with mountain service timing. Lexuz works with travelers from different backgrounds, including families, university groups, honeymoon couples and corporate teams, so the tone of each trip stays friendly, organized and respectful.`
      ]
    },
    {
      title: "Family, Honeymoon And Adventure Suitability",
      paragraphs: [
        `${page.h1} can suit different travelers when expectations are matched correctly. Families usually value comfortable transport, simple hotel check-ins, safe stops and predictable meal timing. Honeymoon couples often prefer privacy, scenic hotels and flexible photography stops. Adventure travelers may enjoy longer road sections, rougher access and a more active travel pace. Lexuz helps customers choose the right tour style before booking.`,
        `Adventure level depends on the selected package. Some tours are relaxed and suitable for first-time travelers, while others require patience with altitude, road duration or local transfers. If a traveler has health concerns, motion sickness, mobility limitations or very young children, they should discuss suitability with Lexuz before final confirmation.`
      ]
    },
    {
      title: "Booking With Lexuz",
      paragraphs: [
        `Booking a ${page.keyword} plan with Lexuz is straightforward. Open the tour page, review the itinerary, compare Islamabad and Lahore pricing where applicable, submit the booking form with traveler details, select a payment method and upload the payment screenshot. The Lexuz team then reviews the details and confirms the next step.`,
        `Customers can use the booking status page to track progress with their reference ID. For fast guidance, the WhatsApp button connects directly with Lexuz support. This gives travelers a cleaner path from research to confirmation while preserving the human support that matters when planning northern Pakistan travel.`
      ]
    }
  ];
}

export function buildLandingContent(page: SeoLandingPage) {
  return buildLandingSections(page).flatMap((section) => section.paragraphs);
}

export function landingFaqs(page: SeoLandingPage) {
  return [
    { question: `What is included in ${page.keyword}?`, answer: "Eligible multi-day packages include luxury transport, fuel charges, driver expenses, hotel accommodation, breakfast, dinner, bonfire, BBQ night, tour management and basic first aid support. One-day trips include luxury transport, fuel charges, driver expenses, toll taxes and dinner." },
    { question: "Can I book on WhatsApp?", answer: "Yes. Lexuz provides direct WhatsApp booking support for quick package guidance, seat availability and booking instructions." },
    { question: "Are Lahore departures available?", answer: "Lahore departures are available for eligible multi-day tours. One-day trips operate from Islamabad / Rawalpindi only." },
    { question: "Are jeep charges included?", answer: "No. Jeep charges are not included and are handled separately where local access requires them." },
    { question: "How do I track my booking?", answer: "After submitting the booking form, you receive a reference ID that can be used on the booking status page." },
    { question: "Is this destination suitable for families?", answer: `${page.h1} can be suitable for families when the right package and travel season are selected. Lexuz can guide you based on children's ages, hotel expectations and road comfort.` },
    { question: "Is this destination suitable for honeymoon couples?", answer: "Many northern Pakistan routes work well for couples when planned privately or with the right public group. Lexuz can recommend a comfortable route and room plan." },
    { question: "What should I pack?", answer: "Carry layered clothing, comfortable shoes, CNIC or passport, personal medicine, charger, power bank and a compact rain or wind layer." },
    { question: "When should I book?", answer: "Advance booking is recommended, especially for weekend departures, summer season, holidays, honeymoon travel and larger groups." },
    { question: "What is the cancellation policy?", answer: "Confirmed paid bookings are fully refundable when the customer cancels more than 7 days before departure. Cancellations less than 7 days before departure are non-refundable." },
    { question: "Why choose Lexuz Tours?", answer: "Lexuz combines a Rawalpindi office, branded transport, clear pricing, organized public trips and responsive WhatsApp support." }
  ];
}
