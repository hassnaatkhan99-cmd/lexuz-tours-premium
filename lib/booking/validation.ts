import { paymentMethods } from "@/data/payments";
import { getTour, lahorePrice } from "@/data/tours";

export type AuthoritativeBooking = {
  tourSlug: string;
  tourName: string;
  departure: string;
  departureCity: "islamabad" | "lahore";
  priceTier: "solo-traveler" | "married-couple";
  totalAmount: number;
  paymentMethod: string;
};

export function resolveAuthoritativeBooking(input: {
  tourSlug: string;
  departureCity: string;
  priceTier: string;
  paymentMethod: string;
}): AuthoritativeBooking | null {
  const tour = getTour(input.tourSlug);
  if (!tour) return null;
  if (input.departureCity !== "islamabad" && input.departureCity !== "lahore") return null;
  if (input.departureCity === "lahore" && tour.category === "one-day") return null;
  if (!paymentMethods.some((method) => method.id === input.paymentMethod)) return null;

  const priceTier = input.priceTier === "married-couple" || input.priceTier === "solo-traveler" ? input.priceTier : null;
  if (!priceTier) return null;
  const tierLabel = priceTier === "married-couple" ? "Married Couple" : priceTier === "solo-traveler" ? "Solo Traveler" : null;
  if (!tierLabel) return null;
  const tier = tour.prices.find((price) => price.label === tierLabel);
  if (!tier) return null;
  const totalAmount = input.departureCity === "lahore" ? lahorePrice(tour, tier) : tier.islamabadPrice;
  if (totalAmount === null) return null;

  return {
    tourSlug: tour.slug,
    tourName: tour.title,
    departure: tour.departure,
    departureCity: input.departureCity,
    priceTier,
    totalAmount,
    paymentMethod: input.paymentMethod
  };
}

export function isSubmissionId(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
