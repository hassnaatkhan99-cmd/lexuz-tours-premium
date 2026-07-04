import type { Tour } from "@/data/tours";

export function detailedOverview(tour: Tour) {
  const base = tour.overview;
  return [
    `${base} This ${tour.duration.toLowerCase()} experience is planned for travelers who want a managed journey rather than a confusing self-arranged road trip. Lexuz focuses on transport coordination, hotel handling, route guidance, meal planning and realistic sightseeing so customers understand both the beauty of ${tour.region} and the practical nature of mountain travel in Pakistan.`,
    `The route is part of the experience. Guests travel from the listed pickup cities with planned comfort stops, scenic pauses and guidance from the tour team. Depending on the destination, the journey may include motorway sections, mountain roads, riverside valleys, forest tracks, lakeside viewpoints, bazaars and hotel stays. The schedule is designed for families, couples, student groups and public-trip travelers who want clear communication and a safer, more organized travel flow.`,
    `This tour suits travelers who enjoy photography, changing landscapes and shared group experiences. Mountain weather, local traffic, seasonal road access and hotel availability can affect the final order of sightseeing, so the Lexuz team keeps the plan flexible while protecting the main experience. Customers should review inclusions and exclusions before booking, especially the note that jeep charges are not included where local transfers are required.`
  ];
}

export function expandedItinerary(tour: Tour) {
  if (tour.category === "one-day") {
    return [
      `The journey begins from Islamabad / Rawalpindi with coordinated pickup and departure toward ${tour.region}. The first part of the route gives travelers time to settle into the trip, enjoy the changing scenery and experience the gradual move from city roads into greener mountain sections. The tour lead manages the group flow, comfort stops and basic coordination so the day starts in an organized way.`,
      `As the vehicle moves deeper into the scenic route, travelers pass through valleys, roadside villages and natural viewpoints connected with ${tour.title}. The focus is not a rushed hourly schedule but a smooth day trip with enough space for photography, fresh air and short pauses. Weather and traffic can shape the exact pace, so the team keeps the journey practical while protecting the main sightseeing experience.`,
      `At the destination area, guests enjoy the key attraction points, nature views and relaxation time. This is the main memory window of the trip: photography, walking around accessible viewpoints, enjoying the mountain atmosphere and spending time with friends or family. Local access and road conditions may affect the exact stopping points, especially on hill routes.`,
      `The return journey includes a dinner stop and a managed drive back toward Islamabad / Rawalpindi. Travelers should expect late evening arrival subject to road conditions, traffic and weather. Lexuz keeps communication clear during the return so guests know what to expect and can complete the day with a comfortable, well-coordinated finish.`
    ];
  }

  return tour.itinerary.map((item, index) => {
    const day = index + 1;
    const opening = day === 1
      ? `Day ${day} starts with traveler check-in, luggage loading and coordinated movement from the selected pickup city.`
      : day === tour.itinerary.length
        ? `Day ${day} focuses on a managed return after breakfast and check-out, with practical breaks on the way back.`
        : `Day ${day} is planned around the main destination experience, with breakfast first and sightseeing shaped by weather and road access.`;
    const close = day === 1
      ? "The team shares route updates during the first travel leg so guests know when to expect meal, rest and photography stops."
      : day === tour.itinerary.length
        ? "Return timing can shift with traffic and mountain-road conditions, so the team keeps travelers informed until arrival."
        : "Evening arrangements normally include dinner and rest time, with bonfire or BBQ included where conditions and hotel arrangements allow.";
    return `${opening} ${item} ${close}`;
  });
}

export function whyChooseTour(tour: Tour) {
  return [
    `Managed ${tour.duration.toLowerCase()} plan with clear departure information`,
    "Trusted Lexuz transport coordination and tour management",
    "Transparent inclusions, exclusions and booking steps",
    "Suitable for public trips, families and private groups",
    `Destination-focused sightseeing across ${tour.region}`,
    "WhatsApp support before booking and during planning",
    "Balanced pace with comfort stops and photography opportunities",
    "Booking reference and status tracking after form submission"
  ];
}

export function travelInformation(tour: Tour) {
  return [
    { label: "Weather", text: `${tour.region} can shift between sunny, windy, rainy and cold conditions depending on season and altitude. Carry layers and check latest guidance before departure.` },
    { label: "Road Conditions", text: "Mountain routes can include long drives, traffic delays, construction patches and seasonal access changes. Final sightseeing order may adjust for safety and timing." },
    { label: "What To Pack", text: "Pack warm clothing, comfortable shoes, CNIC/passport, phone charger, power bank, personal medicine, sunglasses and a small day bag." },
    { label: "Fitness Level", text: tour.category === "one-day" ? "Basic fitness is enough for most one-day sightseeing, but travelers should be comfortable with long road travel." : "Moderate fitness is recommended because multi-day tours involve long drives, hotel transfers, uneven viewpoints and optional walking." },
    { label: "Photography", text: `${tour.title} offers strong photography moments through valleys, roads, viewpoints, lakes, forests or mountain landscapes. Keep devices charged and storage free.` }
  ];
}

export function expandedFaqs(tour: Tour) {
  const extras = [
    { question: `What is included in the ${tour.title} tour?`, answer: tour.included.join(", ") + "." },
    { question: "Are jeep charges included?", answer: "No. Jeep charges are not included and are handled separately where local access requires them." },
    { question: "Can the sightseeing order change?", answer: "Yes. Weather, traffic, hotel timing and road conditions can change the final order while keeping the main experience intact." },
    { question: "Is this tour suitable for families?", answer: `${tour.title} is suitable for families who are comfortable with ${tour.category === "one-day" ? "same-day road travel" : "multi-day mountain travel and hotel stays"}.` },
    { question: "How do I confirm my booking?", answer: "Submit the booking form, select payment method, upload payment screenshot and wait for pending verification to be reviewed." },
    { question: "Can I book on WhatsApp?", answer: "Yes. Use the Book On WhatsApp button for direct guidance from Lexuz Tours & Adventures." },
    { question: "What should I pack?", answer: "Carry warm layers, comfortable shoes, CNIC/passport, personal medicine, charger, power bank and a compact day bag." },
    { question: "What is the refund policy?", answer: "Confirmed paid bookings are fully refundable if the customer cancels more than 7 days before departure. Cancellations less than 7 days before departure are non-refundable." }
  ];
  return [...tour.faqs, ...extras].slice(0, 10);
}
