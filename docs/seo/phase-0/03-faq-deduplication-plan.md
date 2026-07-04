# Phase 0 FAQ Deduplication Plan

Status: Planning only.

Source document: `docs/seo/07-faq-clusters-200.md`

## Goal

Create one canonical answer for each recurring customer question before building `/help/` cluster pages or expanding FAQs across tour, destination, plan, and policy pages.

## Rules

- Every answer should exist in one primary location.
- Tour pages may include short product-specific FAQs only.
- Destination pages may include destination-specific travel FAQs only.
- Policy questions should live in `/policies/`.
- Booking/payment/support questions should live in `/help/booking-and-payments/`.
- Jeep questions should live in `/help/jeeps/` and link to `/plan/jeep-tracks-and-charges/` when that page exists.
- Do not publish policy answers with placeholders.

## Proposed Help Clusters

| Future cluster | Canonical answer types |
|---|---|
| `/help/booking-and-payments/` | Booking, advance payment, screenshots, status tracking, invoices, payment verification. |
| `/help/on-tour/` | Transport, hotels, meals, seating, luggage, tour manager support. |
| `/help/families-and-groups/` | Families, children, women travelers, university groups, corporate groups. |
| `/help/weather-and-seasons/` | Weather, road delays, seasonal access, winter/summer expectations. |
| `/help/jeeps/` | Jeep exclusions, local operators, route-specific access requirements. |
| `/help/foreign-visitors/` | Passport, visa, foreign tourist expectations, permits, communication. |

## Deduplication Workflow

1. Export all current FAQs from data files and pages.
2. Tag each FAQ by intent, not wording.
3. Choose one canonical location for each intent.
4. Rewrite duplicates into short contextual links.
5. Keep only 4-6 unique FAQs on product pages.
6. Add FAQ schema only where the visible FAQ appears on the page.
7. Recheck after every new page launch.

## Risks

- Duplicate FAQ answers can create thin/repetitive pages.
- Policy answers must not be guessed.
- FAQ schema must match visible content exactly.
- Help pages should not compete with product pages for commercial queries.
