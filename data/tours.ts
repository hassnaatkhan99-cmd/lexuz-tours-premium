export type PriceTier = {
  label: "Solo Traveler" | "Married Couple";
  unit: "Per Person" | "Per Couple";
  islamabadPrice: number;
};

export type TourCategory = "one-day" | "multi-day" | "featured";

export type Tour = {
  slug: string;
  title: string;
  durationDays: number;
  duration: string;
  departure: string;
  category: TourCategory;
  region: string;
  heroImage: string;
  gallery: string[];
  itineraryImage?: string;
  overview: string;
  highlights: string[];
  tripPlan: string;
  itinerary: string[];
  included: string[];
  excluded: string[];
  notes: string[];
  pickup: string[];
  faqs: { question: string; answer: string }[];
  prices: PriceTier[];
};

const destination = {
  swat: "/images/destinations/swat-mahodand.jpg",
  swatAlt: "/images/destinations/swat-mahodand-2.jpg",
  naran: "/images/destinations/naran-saiful-muluk.jpg",
  naranAlt: "/images/destinations/naran-saiful-muluk-2.jpg",
  kashmir: "/images/destinations/kashmir-arang-kel.jpg",
  kashmirAlt: "/images/destinations/kashmir-arang-kel-2.jpg",
  hunza: "/images/destinations/hunza-attabad.jpg",
  hunzaAlt: "/images/destinations/hunza-attabad-2.jpg",
  fairy: "/images/destinations/fairy-meadows.jpg",
  fairyAlt: "/images/destinations/fairy-meadows-2.jpg",
  skardu: "/images/destinations/skardu-shangrila.jpg",
  skarduAlt: "/images/destinations/skardu-shangrila-2.jpg",
  kumrat: "/images/destinations/kumrat-valley.jpg",
  kumratAlt: "/images/destinations/kumrat-valley-2.jpg",
  katora: "/images/destinations/katora-lake.jpg",
  jahazBanda: "/images/destinations/jahaz-banda.jpg",
  shogran: "/images/destinations/shogran-siri-paye.jpg",
  shogranAlt: "/images/destinations/shogran-siri-paye-2.jpg",
  sharaan: "/images/destinations/sharaan-forest.jpg",
  sharaanAlt: "/images/destinations/sharaan-forest-2.jpg",
  ganga: "/images/destinations/ganga-choti.jpg",
  gangaAlt: "/images/destinations/ganga-choti-2.jpg"
};

export const companyImages = {
  groupSnow: "/images/group-snow-banner-real.jpeg",
  groupLake: "/images/group-snow-lake-real.png",
  groupMalam: "/images/group-malam-real.jpeg",
  fleetBuses: "/images/fleet-founder-buses.jpeg",
  busFront: "/images/bus-yard-front.jpeg",
  busFounder: "/images/bus-founder-mountain.jpeg",
  office: "/images/office-real.jpeg"
};

export const commonExcluded = [
  "Jeep charges are not included.",
  "Personal expenses",
  "Entry tickets where applicable",
  "Extra meals",
  "Porter charges",
  "Anything not mentioned in included services"
];

const oneDayExcluded = ["Personal expenses", "Extra meals", "Entry tickets where applicable"];
const commonIncluded = ["Luxury Transport", "Fuel Charges", "Driver Expenses", "Hotel Accommodation", "Breakfast", "Dinner", "Bonfire", "BBQ Night", "Tour Management", "Basic First Aid Support"];
const oneDayIncluded = ["Luxury Transport", "Fuel Charges", "Driver Expenses", "Toll Taxes", "Dinner", "Tour Coordination"];
const pickup = ["Islamabad / Rawalpindi", "Lahore"];
const oneDayPickup = ["Islamabad / Rawalpindi"];
const tourFaqs = [
  { question: "Can the itinerary change?", answer: "Yes. Weather, road conditions and hotel availability can affect the final sequence of visits." },
  { question: "Is Lahore departure available?", answer: "Yes for multi-day tours. Lahore pricing is shown separately on each tour page." },
  { question: "How do I book?", answer: "Use Book Now for the website booking system or Book On WhatsApp for direct guidance." }
];
const oneDayFaqs = [
  { question: "Are one-day trips available from Lahore?", answer: "No. One-day trips currently operate from Islamabad / Rawalpindi only." },
  { question: "What is the usual return time?", answer: "Most one-day trips return around 10:30 PM, subject to traffic, weather and road conditions." },
  { question: "Do I need to upload payment proof?", answer: "Yes. A payment screenshot is required before booking submission." }
];

export function lahoreSupplement(days: number) {
  if (days === 3 || days === 4) return 2000;
  if (days === 5) return 3500;
  if (days === 6) return 5000;
  return 0;
}

export function lahorePrice(tour: Tour, tier: PriceTier) {
  if (tour.category === "one-day") return null;
  return tier.islamabadPrice + lahoreSupplement(tour.durationDays);
}

export function money(value: number) {
  return `PKR ${value.toLocaleString("en-PK")}`;
}

export const tours: Tour[] = [
  {
    slug: "swat-kalam-mahodand",
    title: "Swat Kalam Mahodand",
    durationDays: 3,
    duration: "3 Days",
    departure: "Tuesday Morning / Friday Morning",
    category: "featured",
    region: "Swat Valley, Khyber Pakhtunkhwa",
    heroImage: destination.swat,
    gallery: [destination.swatAlt, destination.swat],
    overview: "A premium short escape into Swat, Kalam and Mahodand Lake for travelers who want riverside views, cool weather, mountain roads and a comfortable managed group experience.",
    highlights: ["Kalam Bazaar", "Ushu Forest", "Mahodand Lake", "Swat Expressway route", "Family-friendly hotel stays"],
    tripPlan: "The journey starts from Islamabad / Rawalpindi or Lahore, continues through Swat Expressway and reaches Kalam for hotel stay, valley sightseeing and a scenic return.",
    itinerary: ["Departure from Islamabad / Rawalpindi or Lahore early morning. Travel through Motorway and Swat Expressway with a breakfast stop and short sightseeing breaks. Continue toward Kalam, check in at the hotel, enjoy dinner and night stay.", "Breakfast at hotel followed by full-day sightseeing around Kalam, Ushu Forest and Mahodand Lake subject to weather and access. Enjoy photography points, riverside views and free time in the valley. Dinner, bonfire or BBQ where arranged, and night stay in Kalam.", "Breakfast and check out from the hotel. Begin return journey with scenic stops through Bahrain, Mingora and Swat Expressway. Dinner or refreshment break en route and arrival back at the selected departure city."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Carry warm clothing.", "Mahodand access can depend on weather and local road conditions."],
    pickup,
    faqs: tourFaqs,
    prices: [
      { label: "Solo Traveler", unit: "Per Person", islamabadPrice: 15500 },
      { label: "Married Couple", unit: "Per Couple", islamabadPrice: 39800 }
    ]
  },
  {
    slug: "naran-kaghan",
    title: "Naran Kaghan",
    durationDays: 3,
    duration: "3 Days",
    departure: "Tuesday Morning / Friday Morning",
    category: "featured",
    region: "Kaghan Valley, Pakistan",
    heroImage: destination.naran,
    gallery: [destination.naranAlt, destination.naran],
    overview: "A classic northern Pakistan trip covering the Kaghan Valley, Kunhar River and alpine scenery with Lexuz managed transport, hotel coordination and clear trip support.",
    highlights: ["Kunhar River", "Naran Bazaar", "Saif-ul-Malook region", "Balakot route", "Family-friendly plan"],
    tripPlan: "Travel from your selected departure city toward Balakot and Naran with planned breaks, hotel stay and valley sightseeing.",
    itinerary: ["Departure from Islamabad / Rawalpindi or Lahore early morning. Travel through Hazara Motorway with breakfast and comfort stops before continuing through Balakot and Kaghan Valley. Arrival at Naran, hotel check-in, dinner and night stay.", "Breakfast at hotel followed by sightseeing around Naran and the Saif-ul-Malook region subject to road and seasonal access. Enjoy photography, valley viewpoints and free time at Naran Bazaar. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast and hotel check-out. Begin return journey through Kaghan Valley with short stops for views, refreshments and photography. Continue toward the selected city with expected evening/night arrival."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Lake access depends on season.", "Pack a jacket even in summer."],
    pickup,
    faqs: tourFaqs,
    prices: [
      { label: "Solo Traveler", unit: "Per Person", islamabadPrice: 15500 },
      { label: "Married Couple", unit: "Per Couple", islamabadPrice: 39800 }
    ]
  },
  {
    slug: "kashmir-arang-kel",
    title: "Kashmir Arang Kel",
    durationDays: 3,
    duration: "3 Days",
    departure: "Tuesday Morning / Friday Morning",
    category: "featured",
    region: "Neelum Valley, Azad Kashmir",
    heroImage: destination.kashmir,
    gallery: [destination.kashmirAlt, destination.kashmir],
    overview: "A scenic Kashmir journey through Muzaffarabad and Neelum Valley with views of Keran, Sharda and Arang Kel.",
    highlights: ["Neelum Valley", "Keran", "Sharda", "Arang Kel viewpoint", "Mountain village experience"],
    tripPlan: "Travel from Islamabad / Rawalpindi or Lahore toward Muzaffarabad and continue along the Neelum River for valley exploration.",
    itinerary: ["Departure from Islamabad / Rawalpindi or Lahore early morning. Travel toward Muzaffarabad with breakfast and sightseeing stops, then continue along the Neelum River route. Hotel check-in, dinner and night stay in the valley.", "Breakfast at hotel followed by Neelum Valley sightseeing including Keran, Sharda and Arang Kel access subject to weather and local conditions. Enjoy photography, village views and free exploration time. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast and check-out. Start return journey via Muzaffarabad with scenic breaks and comfort stops. Continue toward the selected departure city with expected late evening arrival."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Local chairlift or transfer costs are not included.", "Network coverage can be limited in valley areas."],
    pickup,
    faqs: tourFaqs,
    prices: [
      { label: "Solo Traveler", unit: "Per Person", islamabadPrice: 15500 },
      { label: "Married Couple", unit: "Per Couple", islamabadPrice: 39800 }
    ]
  },
  {
    slug: "kumrat-valley",
    title: "Kumrat Valley",
    durationDays: 3,
    duration: "3 Days",
    departure: "Tuesday Morning / Friday Morning",
    category: "multi-day",
    region: "Upper Dir, Pakistan",
    heroImage: destination.kumrat,
    gallery: [destination.kumratAlt, destination.kumrat],
    overview: "A forest and river focused adventure into Kumrat Valley for travelers who want raw natural beauty and a stronger adventure feel.",
    highlights: ["Kumrat Forest", "Panjkora River", "Upper Dir route", "Adventure-style sightseeing", "Cool mountain climate"],
    tripPlan: "Start in the morning and travel toward Upper Dir, then continue toward Kumrat with local conditions managed by the tour lead.",
    itinerary: ["Departure from Islamabad / Rawalpindi or Lahore in the morning. Travel toward Upper Dir with breakfast and comfort stops on the route. Continue toward the Kumrat region, check in at the arranged stay, dinner and night stay.", "Breakfast followed by sightseeing around Kumrat Forest, Panjkora River and nearby valley viewpoints subject to road conditions. Enjoy nature walks, photography and free time by the river. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast and check-out. Begin return journey from Kumrat with scenic breaks through Upper Dir and motorway sections. Arrival back at the selected departure city by evening/night."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Road conditions can require local transport.", "Keep luggage light."],
    pickup,
    faqs: tourFaqs,
    prices: [{ label: "Solo Traveler", unit: "Per Person", islamabadPrice: 15500 }]
  },
  {
    slug: "kumrat-jahaz-banda-katora-lake",
    title: "Jazz Banda & Katora Lake",
    durationDays: 4,
    duration: "4 Days",
    departure: "Thursday Morning",
    category: "multi-day",
    region: "Upper Dir, Pakistan",
    heroImage: destination.katora,
    gallery: [destination.jahazBanda, destination.kumrat, destination.kumratAlt],
    overview: "A stronger adventure plan combining Kumrat Valley with Jahaz Banda meadows and the Katora Lake route.",
    highlights: ["Jahaz Banda", "Katora Lake route", "Kumrat Valley", "Mountain meadows", "Adventure trekking feel"],
    tripPlan: "Travel from the selected departure city to Upper Dir, then proceed toward the Jahaz Banda and Kumrat region with local support.",
    itinerary: ["Morning departure from Islamabad / Rawalpindi or Lahore toward Upper Dir with breakfast and comfort stops en route. Arrival in the Dir region, transfer/check-in at arranged accommodation, dinner and night stay.", "Breakfast followed by movement toward Jazz Banda meadows subject to local access and weather. Enjoy meadow views, photography and free time in the highland setting. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast and guided excursion toward Katora Lake route for travelers who are comfortable with the terrain. Enjoy mountain viewpoints, photography and nature time before returning to the stay area for dinner and night stay.", "Breakfast, check-out and return journey toward Islamabad / Rawalpindi or Lahore with scenic stops and refreshment breaks. Arrival back by evening/night depending on traffic and road conditions."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["This tour requires better fitness than standard sightseeing tours.", "Jeep charges are not included."],
    pickup,
    faqs: tourFaqs,
    prices: [{ label: "Solo Traveler", unit: "Per Person", islamabadPrice: 24000 }]
  },
  {
    slug: "hunza-valley",
    title: "Hunza Valley",
    durationDays: 5,
    duration: "5 Days",
    departure: "Saturday Morning",
    category: "featured",
    region: "Gilgit Baltistan, Pakistan",
    heroImage: destination.hunza,
    gallery: [destination.hunzaAlt, destination.hunza],
    overview: "A signature premium road journey through the Karakoram Highway toward Hunza, Attabad Lake, Karimabad, ancient forts and high mountain views.",
    highlights: ["Karakoram Highway", "Attabad Lake", "Altit Fort", "Baltit Fort", "Khunjerab Pass subject to access"],
    tripPlan: "Travel through northern highways with overnight stops, reach Hunza for sightseeing, then return with managed comfort stops.",
    itinerary: ["Saturday morning departure from Islamabad / Rawalpindi or Lahore. Travel on the northern route with breakfast and sightseeing stops, continue toward Besham or Chilas, dinner and night stay.", "Breakfast and continuation toward Gilgit and Hunza through dramatic Karakoram Highway landscapes. Short photography stops at selected viewpoints, arrival in Hunza, hotel check-in, dinner and night stay.", "Breakfast at hotel followed by Hunza sightseeing including Karimabad, Altit Fort, Baltit Fort surroundings, local bazaar and Eagle Nest viewpoint where accessible. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast followed by excursion toward Attabad Lake and the upper Hunza route. Optional boating or local activities can be managed separately. Khunjerab route is subject to weather and road permissions. Return to hotel for dinner and night stay.", "Breakfast and check-out. Begin return journey with managed comfort stops, photography breaks and meal stop en route. Arrival back at the selected departure city depending on road timing."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Long road travel is part of the Hunza experience.", "Khunjerab access depends on weather and border route conditions."],
    pickup,
    faqs: tourFaqs,
    prices: [
      { label: "Solo Traveler", unit: "Per Person", islamabadPrice: 30000 },
      { label: "Married Couple", unit: "Per Couple", islamabadPrice: 74500 }
    ]
  },
  {
    slug: "fairy-meadows",
    title: "Fairy Meadows",
    durationDays: 5,
    duration: "5 Days",
    departure: "Saturday Morning",
    category: "featured",
    region: "Nanga Parbat Region, Gilgit Baltistan",
    heroImage: destination.fairy,
    gallery: [destination.fairyAlt, destination.fairy],
    overview: "A bucket-list northern Pakistan adventure with Nanga Parbat views, meadow stays and a memorable mountain route.",
    highlights: ["Nanga Parbat views", "Fairy Meadows huts", "Raikot route", "Adventure trail", "Optional viewpoint walks"],
    tripPlan: "Travel toward Chilas and Raikot, transfer toward Fairy Meadows and experience one of Pakistan's most iconic mountain landscapes.",
    itinerary: ["Saturday morning departure from Islamabad / Rawalpindi or Lahore toward Chilas with breakfast, comfort stops and scenic views along the northern route. Dinner and night stay in the Chilas/Raikot region.", "Breakfast followed by movement toward Raikot and onward transfer toward Fairy Meadows route subject to local access. Trek or local transfer continues as per conditions, arrival at the meadow area, dinner and night stay.", "Breakfast with Nanga Parbat views followed by full-day exploration of Fairy Meadows, photography points and optional viewpoint walk for interested travelers. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast and return from Fairy Meadows toward the Chilas/Raikot region. Rest stops and scenic breaks on the way, dinner and night stay.", "Breakfast and check-out. Begin return journey to Islamabad / Rawalpindi or Lahore with meal and comfort stops en route. Arrival back depending on traffic and road conditions."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Jeep charges are not included.", "This tour includes uneven terrain and adventure-style travel."],
    pickup,
    faqs: tourFaqs,
    prices: [
      { label: "Solo Traveler", unit: "Per Person", islamabadPrice: 27000 },
      { label: "Married Couple", unit: "Per Couple", islamabadPrice: 74500 }
    ]
  },
  {
    slug: "skardu",
    title: "Skardu",
    durationDays: 6,
    duration: "6 Days",
    departure: "Saturday Morning",
    category: "featured",
    region: "Baltistan, Pakistan",
    heroImage: destination.skardu,
    gallery: [destination.skarduAlt, destination.skardu],
    overview: "A premium six-day northern journey into Skardu's lakes, deserts, waterfalls and dramatic Baltistan landscapes.",
    highlights: ["Shangrila", "Upper Kachura Lake", "Cold Desert", "Manthoka Waterfall", "Baltistan scenery"],
    tripPlan: "Travel through the northern highway system toward Skardu, stay in comfortable hotels and explore lakes, desert and waterfall routes.",
    itinerary: ["Saturday morning departure from Islamabad / Rawalpindi or Lahore toward Chilas with breakfast and comfort stops. Enjoy northern route viewpoints before dinner and night stay in the Chilas region.", "Breakfast and departure toward Skardu through mountain road sections and scenic valleys. Arrival in Skardu, hotel check-in, dinner and night stay.", "Breakfast followed by sightseeing around Shangrila Resort area, Lower Kachura and Upper Kachura Lake. Enjoy photography, lakeside views and free time. Dinner, bonfire or BBQ where arranged, and night stay.", "Breakfast followed by Cold Desert, local viewpoints and Skardu town sightseeing subject to route timing. Return to hotel for dinner and night stay.", "Breakfast and excursion toward Manthoka Waterfall or available Baltistan sightseeing route depending on weather and access. Return to hotel, dinner and final night stay in Skardu.", "Breakfast, check-out and return journey from Skardu toward the selected departure city with comfort and meal stops. Arrival timing depends on road and traffic conditions."],
    included: commonIncluded,
    excluded: commonExcluded,
    notes: ["Skardu is a long road journey.", "Sightseeing order can change due to weather and road timing."],
    pickup,
    faqs: tourFaqs,
    prices: [
      { label: "Solo Traveler", unit: "Per Person", islamabadPrice: 33000 },
      { label: "Married Couple", unit: "Per Couple", islamabadPrice: 76000 }
    ]
  },
  {
    slug: "shogran-siri-paye",
    title: "Shogran Siri Paye",
    durationDays: 1,
    duration: "1 Day",
    departure: "Every Sunday",
    category: "one-day",
    region: "Kaghan Valley, Pakistan",
    heroImage: destination.shogran,
    gallery: [destination.shogranAlt, destination.shogran],
    itineraryImage: "/images/itineraries/shogran-siri-paye-itinerary.png",
    overview: "A one-day mountain escape from Islamabad / Rawalpindi toward Shogran and Siri Paye with scenic road travel, fresh mountain air and same-day return.",
    highlights: ["Shogran Valley", "Siri Paye Meadows", "Kiwai Waterfall", "Hazara Expressway route", "Islamabad return"],
    tripPlan: "The trip starts early from Islamabad / Rawalpindi, travels through Hazara Expressway and Balakot, continues toward Shogran and Siri Paye where access allows, then returns to Islamabad / Rawalpindi around late evening.",
    itinerary: ["Depart from Islamabad / Rawalpindi and travel via Hazara Expressway.", "Short comfort stop near Balakot before continuing toward Kiwai.", "Visit Kiwai Waterfall and continue toward Shogran Valley.", "Explore Shogran Valley and Siri Paye Meadows subject to weather and access.", "Dinner break during the return journey.", "Arrive back in Islamabad / Rawalpindi around 10:30 PM, subject to traffic and road conditions."],
    included: oneDayIncluded,
    excluded: oneDayExcluded,
    notes: ["One-day trips are available only from Islamabad / Rawalpindi.", "Jeep charges are not included.", "Departure is usually around 5:30 AM."],
    pickup: oneDayPickup,
    faqs: oneDayFaqs,
    prices: [{ label: "Solo Traveler", unit: "Per Person", islamabadPrice: 4500 }]
  },
  {
    slug: "sharaan-forest-waterfall",
    title: "Sharaan Forest & Sharaan Waterfall",
    durationDays: 1,
    duration: "1 Day",
    departure: "Every Sunday",
    category: "one-day",
    region: "Kaghan Region, Pakistan",
    heroImage: destination.sharaan,
    gallery: [destination.sharaanAlt, destination.sharaan],
    itineraryImage: "/images/itineraries/sharaan-forest-itinerary.png",
    overview: "A refreshing one-day forest and waterfall journey from Islamabad / Rawalpindi for travelers who want a quick nature break.",
    highlights: ["Sharaan Forest", "Sharaan Waterfall", "Nature trails", "Hazara Expressway route", "Same-day return"],
    tripPlan: "The journey starts from Islamabad / Rawalpindi, follows the Hazara Expressway route toward Balakot and Sharaan, includes forest and waterfall sightseeing, then returns the same day.",
    itinerary: ["Depart from Islamabad / Rawalpindi and travel via Hazara Expressway.", "Enjoy scenic drive sections through mountain valleys with a short comfort stop en route.", "Arrive at Sharaan Forest for nature exploration and photography.", "Visit Sharaan Waterfall where access and conditions allow.", "Dinner break during the return journey.", "Travel back to Islamabad / Rawalpindi with expected late evening arrival."],
    included: oneDayIncluded,
    excluded: oneDayExcluded,
    notes: ["Available only from Islamabad / Rawalpindi.", "Wear comfortable shoes.", "Jeep charges are not included."],
    pickup: oneDayPickup,
    faqs: oneDayFaqs,
    prices: [{ label: "Solo Traveler", unit: "Per Person", islamabadPrice: 4500 }]
  },
  {
    slug: "ganga-choti",
    title: "Ganga Choti",
    durationDays: 1,
    duration: "1 Day",
    departure: "Every Sunday",
    category: "one-day",
    region: "Bagh, Azad Kashmir",
    heroImage: destination.ganga,
    gallery: [destination.gangaAlt, destination.ganga],
    itineraryImage: "/images/itineraries/ganga-choti-itinerary.png",
    overview: "A one-day Kashmir mountain trip from Islamabad / Rawalpindi toward Ganga Choti with scenic landscapes, peaceful highland views and same-day return.",
    highlights: ["Ganga Choti", "Azad Kashmir views", "Muzaffarabad Expressway route", "Mountain road trip", "Same-day return"],
    tripPlan: "The journey starts early from Islamabad / Rawalpindi, travels toward the Bagh and Ganga Choti region through scenic Kashmir routes, gives travelers time to enjoy the views and returns by late evening.",
    itinerary: ["Depart from Islamabad / Rawalpindi in the early morning via Muzaffarabad Expressway.", "Short refreshment stop during the journey.", "Continue the scenic drive toward Ganga Choti through winding mountain roads.", "Arrive near Ganga Choti and enjoy panoramic views, photography and free time.", "Lunch or dinner stop during the return journey.", "Return toward Islamabad / Rawalpindi with expected late evening arrival."],
    included: oneDayIncluded,
    excluded: oneDayExcluded,
    notes: ["Available only from Islamabad / Rawalpindi.", "Road and weather conditions can affect access.", "Jeep charges are not included."],
    pickup: oneDayPickup,
    faqs: oneDayFaqs,
    prices: [{ label: "Solo Traveler", unit: "Per Person", islamabadPrice: 4500 }]
  }
];

export const featuredTours = tours.filter((tour) => ["hunza-valley", "skardu", "fairy-meadows", "swat-kalam-mahodand"].includes(tour.slug));
export const oneDayTours = tours.filter((tour) => tour.category === "one-day");
export const multiDayTours = tours.filter((tour) => tour.category !== "one-day");

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
