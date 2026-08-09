import { describe, expect, it } from "vitest";
import { resolveAuthoritativeBooking } from "@/lib/booking/validation";

describe("server booking authority", () => {
  it("derives official tour facts and Islamabad pricing", () => {
    const booking = resolveAuthoritativeBooking({ tourSlug: "hunza-valley", departureCity: "islamabad", priceTier: "solo-traveler", paymentMethod: "easypaisa" });
    expect(booking).toMatchObject({ tourName: "Hunza Valley", departure: "Saturday Morning", totalAmount: 30000 });
  });

  it("derives the existing Lahore supplement", () => {
    const booking = resolveAuthoritativeBooking({ tourSlug: "hunza-valley", departureCity: "lahore", priceTier: "solo-traveler", paymentMethod: "js-bank" });
    expect(booking?.totalAmount).toBe(33500);
  });

  it("rejects Lahore for one-day tours", () => {
    expect(resolveAuthoritativeBooking({ tourSlug: "ganga-choti", departureCity: "lahore", priceTier: "solo-traveler", paymentMethod: "easypaisa" })).toBeNull();
  });

  it("rejects unknown tours, tiers, and payment methods", () => {
    expect(resolveAuthoritativeBooking({ tourSlug: "unknown", departureCity: "islamabad", priceTier: "solo-traveler", paymentMethod: "easypaisa" })).toBeNull();
    expect(resolveAuthoritativeBooking({ tourSlug: "hunza-valley", departureCity: "islamabad", priceTier: "child", paymentMethod: "easypaisa" })).toBeNull();
    expect(resolveAuthoritativeBooking({ tourSlug: "hunza-valley", departureCity: "islamabad", priceTier: "solo-traveler", paymentMethod: "cash" })).toBeNull();
  });
});
