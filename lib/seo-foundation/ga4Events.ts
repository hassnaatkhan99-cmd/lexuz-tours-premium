export type Ga4EventName = "whatsapp_click" | "phone_click" | "book_now_click" | "booking_submit";

export type Ga4EventParams = {
  page_path?: string;
  button_position?: string;
  tour_slug?: string;
  tour_name?: string;
  departure_city?: string;
  source_token?: string;
  booking_reference?: string;
};

declare global {
  interface Window {
    gtag?: (command: "event", eventName: Ga4EventName, params?: Ga4EventParams) => void;
  }
}

export function trackGa4Event(eventName: Ga4EventName, params: Ga4EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function trackWhatsAppClick(params: Ga4EventParams = {}) {
  trackGa4Event("whatsapp_click", params);
}

export function trackPhoneClick(params: Ga4EventParams = {}) {
  trackGa4Event("phone_click", params);
}

export function trackBookNowClick(params: Ga4EventParams = {}) {
  trackGa4Event("book_now_click", params);
}

export function trackBookingSubmit(params: Ga4EventParams = {}) {
  trackGa4Event("booking_submit", params);
}
