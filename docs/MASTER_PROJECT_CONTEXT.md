# Lexuz Tours Premium - Master Project Context

Last updated: 2026-08-06

Primary project folder:

```text
/Users/hassnaatkhan/Documents/Codex/2026-06-21/you-are-a-senior-full-stack/lexuz-tours-premium
```

Production website:

```text
https://www.lexuztours.com
```

GitHub repository:

```text
https://github.com/hassnaatkhan99-cmd/lexuz-tours-premium.git
```

Current production branch:

```text
main
```

Current recorded commit at time of writing:

```text
f56a8d6 Add legal business name to footer
```

This document is the permanent handover and context file for the Lexuz Tours Premium website. It is written so a new AI assistant, developer, designer, SEO specialist, or deployment engineer can understand the whole project without reading previous conversation history.

Important principle: this file documents the current project and the rules that protect it. If there is a conflict between this document and the live code, inspect the code before changing anything. If there is a conflict between public business claims and `docs/business/lexuz-source-facts.md`, use the source facts file as the factual authority and do not invent missing business information. The public footer currently includes the Meta Business Verification legal-name wording: `Operated by LEXUZ TOURS (SMC-PRIVATE) LIMITED.`

---

## Section 1 - Project Overview

### 1.1 What Lexuz Tours Is

Lexuz Tours & Adventures is a Pakistan-based travel and tourism company focused on public trips, private tours, corporate tours, university trips, honeymoon experiences, one-day trips, and custom travel planning across Pakistan. The company operates from Rawalpindi and serves travelers looking for organized trips to northern Pakistan and other scenic regions.

Lexuz Tours is positioned as a premium but approachable Pakistani tour operator. The brand should feel modern, trustworthy, adventure-focused, and practical. It should not feel like a generic travel template or a lightweight brochure site. The website is meant to operate as a real booking and lead-generation platform, not only as a design showcase.

The website supports:

- Public group trips.
- One-day trips from Islamabad / Rawalpindi.
- Multi-day public tours from Islamabad / Rawalpindi and selected tours from Lahore.
- Private and custom tours.
- Corporate retreats and staff trips.
- University and student trips.
- Honeymoon and couple-friendly trips.
- Booking form submissions with payment screenshot uploads.
- Supabase-backed booking records.
- Admin review, approval, rejection, and payment confirmation.
- Customer booking status tracking.
- SEO landing pages and blog content.
- WhatsApp-driven lead conversion.

### 1.2 Business Model

Lexuz Tours sells travel packages and managed tour services. The website supports two main commercial paths:

1. Direct booking of listed tours through the website booking system.
2. Lead generation through WhatsApp and phone calls for public trips, private tours, corporate groups, university groups, honeymoon packages, and custom plans.

The most important conversion actions are:

- Book on WhatsApp.
- Book Now on a tour page.
- Call Now.
- Submit the booking form.
- Track booking status.
- Request a quotation for service pages.

The website is optimized around the idea that many Pakistani travel customers prefer WhatsApp communication before final confirmation. Therefore, the WhatsApp CTA must remain visible, trustworthy, and easy to use across the site.

### 1.3 Target Audience

Primary audiences:

- Families from Rawalpindi, Islamabad, Lahore, and nearby cities.
- Solo travelers joining public trips.
- Married couples and honeymoon travelers.
- University and college groups.
- Corporate teams planning retreats.
- Student societies and department groups.
- Friends and private groups.
- Overseas Pakistanis or visitors researching northern Pakistan tours.
- Travelers comparing Pakistan tour packages, city departures, prices, routes, and inclusions.

The target customer cares about:

- Clear pricing.
- Real transport and fleet photos.
- Trustworthy contact details.
- WhatsApp support.
- Safe planning.
- Practical itineraries.
- Hotel coordination.
- Pickup guidance.
- Payment proof and booking reference.
- Cancellation and refund rules.
- Whether jeep charges are included or excluded.
- Whether Lahore departure is available.
- Whether a tour is family-friendly or suitable for couples/students/groups.

### 1.4 Brand Positioning

The brand positioning is:

```text
Premium adventure travel in Pakistan with transparent pricing, real trip photos, clear booking support, and trustworthy managed departures.
```

The design direction combines:

- Dark green.
- Saffron / gold accent.
- White and warm neutral surfaces.
- Black / deep forest accents.
- Mountain and adventure imagery.
- Real Lexuz fleet and trip photography.
- Cinematic but fast-loading visual polish.
- Premium spacing, typography, and card hierarchy.

The website should look significantly more premium than average Pakistani travel websites. It should take inspiration from modern travel platforms and luxury brands, including Airbnb, Booking.com, GetYourGuide, Klook, Aman Resorts, Apple-style polish, National Geographic travel storytelling, and luxury hotel websites. However, it must remain practical, local, and conversion-focused.

### 1.5 Countries Served

The company is based in Pakistan and currently markets tours across Pakistan. The site is written primarily for customers in Pakistan and people planning Pakistan travel.

Main areas served through the website:

- Rawalpindi.
- Islamabad.
- Lahore.
- Northern Pakistan.
- Gilgit Baltistan.
- Khyber Pakhtunkhwa.
- Azad Kashmir.
- Kaghan / Naran region.
- Upper Dir / Kumrat region.

### 1.6 Main Destinations

Current primary destinations and tour areas include:

- Hunza Valley.
- Skardu.
- Fairy Meadows.
- Swat Kalam Mahodand.
- Naran Kaghan.
- Kashmir Arang Kel.
- Kumrat Valley.
- Jahaz Banda and Katora Lake.
- Shogran Siri Paye.
- Sharaan Forest and Sharaan Waterfall.
- Ganga Choti.

The SEO content system also supports broader destination and topical expansion around:

- Pakistan tour packages.
- Northern Pakistan tours.
- Tours from Islamabad.
- Tours from Lahore.
- Honeymoon tours Pakistan.
- Corporate tours Pakistan.
- University tours Pakistan.
- Family tours.
- Road trips.
- Travel tips.

### 1.7 Public Tours

Public tours are the core listed products. They are stored in `data/tours.ts`. Each tour has:

- `slug`
- `title`
- `durationDays`
- `duration`
- `departure`
- `category`
- `region`
- `heroImage`
- `gallery`
- `overview`
- `highlights`
- `tripPlan`
- `itinerary`
- `included`
- `excluded`
- `notes`
- `pickup`
- `faqs`
- `prices`

The current active tour products are:

- Swat Kalam Mahodand - 3 days.
- Naran Kaghan - 3 days.
- Kashmir Arang Kel - 3 days.
- Kumrat Valley - 3 days.
- Jazz Banda & Katora Lake - 4 days.
- Hunza Valley - 5 days.
- Fairy Meadows - 5 days.
- Skardu - 6 days.
- Shogran Siri Paye - 1 day.
- Sharaan Forest & Sharaan Waterfall - 1 day.
- Ganga Choti - 1 day.

### 1.8 Private Tours

Private and service-oriented tours are represented by dedicated service pages:

- `/corporate-tours`
- `/university-tours`
- `/honeymoon-tours`
- `/custom-tours`

These pages are not separate booking logic. They are premium service landing pages that explain who the service is for, what Lexuz can arrange, how the quotation process works, and how to contact Lexuz through WhatsApp or phone.

Private/custom tours should not invent prices, dates, hotels, awards, or guarantees. They should route customers to WhatsApp or phone for a quote.

---

## Section 2 - Technology

### 2.1 Framework

The project is built with Next.js App Router.

From `package.json`:

```json
"next": "16.2.9"
```

The scripts use webpack:

```json
"dev": "next dev --webpack",
"build": "next build --webpack",
"start": "next start",
"lint": "eslint ."
```

### 2.2 Runtime Stack

Main technologies:

- Next.js 16.2.9.
- React 19.0.0.
- React DOM 19.0.0.
- TypeScript 5.7.2.
- Tailwind CSS 3.4.17.
- Supabase JavaScript client 2.108.2.
- Lucide React icons 0.468.0.
- ESLint 9 with Next.js config.
- Vercel deployment.
- GitHub source repository.

### 2.3 TypeScript

The project uses TypeScript throughout the app, components, data, and helper libraries. Most content data is typed in `data/*.ts`. Supabase booking types are in `lib/supabase/types.ts`.

### 2.4 Tailwind CSS

Styling is implemented with Tailwind utilities and global CSS. The site uses:

- Tailwind utility classes in components and pages.
- `app/globals.css` for global styles, visual effects, custom animation classes, and design system classes.
- Design tokens in `lib/design-system/tokens.ts`.
- Reusable UI components in `components/ui/*`.

### 2.5 Supabase

Supabase is used for the real booking system.

Supabase resources:

- `customers` table.
- `bookings` table.
- `payments` table.
- Private storage bucket `payment-screenshots`.

Schema file:

```text
supabase/schema.sql
```

Supabase admin/server helper:

```text
lib/supabase/server.ts
```

Supabase booking helper:

```text
lib/supabase/bookings.ts
```

Supabase types:

```text
lib/supabase/types.ts
```

Supabase must be configured through environment variables. If Supabase variables are missing, admin and booking surfaces should fail gracefully where implemented. Production booking requires Supabase configuration.

### 2.6 Deployment

The website is Vercel-ready. The intended production deployment flow is:

1. Work in local repo.
2. Run lint and build.
3. Merge into `main`.
4. Push `main` to GitHub.
5. Vercel builds and deploys production automatically.

Production URL:

```text
https://www.lexuztours.com
```

Vercel framework:

```text
Next.js
```

Install command:

```text
npm install
```

Build command:

```text
npm run build
```

### 2.7 GitHub Repository

Repository:

```text
https://github.com/hassnaatkhan99-cmd/lexuz-tours-premium.git
```

The clean repo root is:

```text
/Users/hassnaatkhan/Documents/Codex/2026-06-21/you-are-a-senior-full-stack/lexuz-tours-premium
```

Important historical note:

Earlier in the project, Git and Vercel root configuration had problems because parent folders were being treated as the root. The clean GitHub/Vercel repo is now `lexuz-tours-premium` only. Future assistants must not work from the parent folder as if it were the deployment root.

### 2.8 Folder Structure

Main structure:

```text
app/
components/
components/ui/
data/
docs/
docs/business/
docs/seo/
docs/uiux/
lib/
lib/design-system/
lib/email/
lib/seo-foundation/
lib/supabase/
public/
public/images/
public/images/destinations/
public/images/itineraries/
public/images/team/
public/images/trip/
supabase/
```

Important app files:

```text
app/layout.tsx
app/page.tsx
app/globals.css
app/sitemap.ts
app/robots.ts
app/icon.png
app/apple-icon.png
```

Core pages:

```text
app/about/page.tsx
app/contact/page.tsx
app/public-trips/page.tsx
app/destinations/page.tsx
app/price-list/page.tsx
app/reviews/page.tsx
app/blog/page.tsx
app/blog/[slug]/page.tsx
app/booking/page.tsx
app/booking-status/page.tsx
app/tours/[slug]/page.tsx
app/tours/islamabad/page.tsx
app/tours/lahore/page.tsx
app/corporate-tours/page.tsx
app/university-tours/page.tsx
app/honeymoon-tours/page.tsx
app/custom-tours/page.tsx
app/policies/page.tsx
app/terms-and-conditions/page.tsx
app/privacy-policy/page.tsx
app/cancellation-policy/page.tsx
app/admin/page.tsx
app/admin/login/page.tsx
app/admin/bookings/page.tsx
app/(seo)/[slug]/page.tsx
```

API routes:

```text
app/api/bookings/route.ts
app/api/booking-status/route.ts
app/api/admin/login/route.ts
app/api/admin/logout/route.ts
app/api/admin/bookings/[id]/status/route.ts
```

Reusable components:

```text
components/Header.tsx
components/Footer.tsx
components/WhatsAppFloating.tsx
components/TourCard.tsx
components/TourDetail.tsx
components/ServiceLandingPage.tsx
components/CityHubPage.tsx
components/BookingForm.tsx
components/AdminBookingActions.tsx
components/AdminBookingTable.tsx
components/AdminDashboardCards.tsx
components/AdminWhatsAppActions.tsx
components/PaymentMethodCard.tsx
components/PriceList.tsx
components/ReviewCard.tsx
components/PolicyPage.tsx
components/TrustSections.tsx
components/FAQ.tsx
components/CTASection.tsx
components/SectionHeading.tsx
components/SocialContactLinks.tsx
components/ui/*
```

Data files:

```text
data/company.ts
data/tours.ts
data/cityHubs.ts
data/seoLandingPages.ts
data/blogPosts.ts
data/reviews.ts
data/faqs.ts
data/payments.ts
data/tripPhotos.ts
data/trust.ts
data/imageCredits.ts
```

Helpers:

```text
lib/seo.ts
lib/tourContent.ts
lib/utils.ts
lib/whatsapp.ts
lib/adminAuth.ts
lib/email/notifications.ts
lib/supabase/server.ts
lib/supabase/bookings.ts
lib/supabase/types.ts
lib/design-system/*
lib/seo-foundation/*
```

---

## Section 3 - Business Rules

This section is critical. Future AI or developers must not change these rules unless the owner explicitly requests it.

### 3.1 Source of Truth for Business Facts

The factual business source file is:

```text
docs/business/lexuz-source-facts.md
```

Confirmed facts from that file include:

- Lexuz started in 2018.
- Founder: Hassnaat Khan.
- Founder role: Owner, CEO & Founder.
- First trip destination: Miranjani Top.
- First trip was marketed with a few hand-printed posters/flyers.
- First trip drew 110 participants.
- Lexuz has weekly departures.
- SECP and FBR registration claims are owner-confirmed.
- Office address is in Rawalpindi.
- Call number: `+923183395090`.
- WhatsApp number: `+923099318249`.
- Facebook: `https://www.facebook.com/Lexuztours/`.
- Instagram: `https://www.instagram.com/lexuz_tours_adventures/`.

Do not invent:

- Traveler counts.
- Awards.
- License numbers.
- Hotel names.
- Departure dates.
- Tour guides.
- Team bios.
- Years of experience beyond confirmed facts.
- Payment policy details not confirmed by owner.

### 3.2 Company Contact Information

From `data/company.ts`:

```text
Company: Lexuz Tours & Adventures
Short name: Lexuz Tours
Phone display: 0309 9318249
Call phone: +923183395090
Call link: tel:+923183395090
WhatsApp: 923099318249
WhatsApp link: https://wa.me/923099318249
Email: info@lexuztours.com
Website: https://www.lexuztours.com
Facebook: https://www.facebook.com/Lexuztours/
Instagram: https://www.instagram.com/lexuz_tours_adventures/
Maps: https://maps.app.goo.gl/SmeRxsERfqpMbcz58?g_st=ic
Address: Office No 6, 1st Floor, Mustafa Plaza, 6th Road, D Block, Satellite Town, Rawalpindi, Pakistan
Founded: 2018
```

Note: The display phone and call phone differ. Do not casually normalize them. The website intentionally uses `0309 9318249` for WhatsApp display and `+923183395090` for phone calls.

### 3.3 Tour Pricing Rules

Tour prices are stored in `data/tours.ts`.

Pricing tiers:

- Solo Traveler, usually per person.
- Married Couple, per couple, where available.

Never invent prices. If a price is missing, show "Price on request" or "To be confirmed" based on existing component conventions.

Active Islamabad / Rawalpindi base pricing:

Solo Traveler:

- Swat Kalam Mahodand - 3 Days - PKR 15,500.
- Naran Kaghan - 3 Days - PKR 15,500.
- Kashmir Arang Kel - 3 Days - PKR 15,500.
- Kumrat Valley - 3 Days - PKR 15,500.
- Jazz Banda & Katora Lake - 4 Days - PKR 24,000.
- Hunza Valley - 5 Days - PKR 30,000.
- Fairy Meadows - 5 Days - PKR 27,000.
- Skardu - 6 Days - PKR 33,000.
- Shogran Siri Paye - 1 Day - PKR 4,500.
- Sharaan Forest & Sharaan Waterfall - 1 Day - PKR 4,500.
- Ganga Choti - 1 Day - PKR 4,500.

Married Couple:

- Swat Kalam Mahodand - 3 Days - PKR 39,800.
- Naran Kaghan - 3 Days - PKR 39,800.
- Kashmir Arang Kel - 3 Days - PKR 39,800.
- Hunza Valley - 5 Days - PKR 74,500.
- Fairy Meadows - 5 Days - PKR 74,500.
- Skardu - 6 Days - PKR 76,000.

### 3.4 Lahore Pricing Rules

Lahore departure pricing is calculated by supplement rules in `data/tours.ts`:

```text
3-day tours: Islamabad price + PKR 2,000
4-day tours: Islamabad price + PKR 2,000
5-day tours: Islamabad price + PKR 3,500
6-day tours: Islamabad price + PKR 5,000
```

Implementation helper:

```text
lahoreSupplement(days: number)
lahorePrice(tour, tier)
```

Examples:

- PKR 15,500 -> PKR 17,500.
- PKR 24,000 -> PKR 26,000.
- PKR 30,000 -> PKR 33,500.
- PKR 27,000 -> PKR 30,500.
- PKR 33,000 -> PKR 38,000.

One-day trips are not available from Lahore.

### 3.5 Departure Schedules

Departure schedules are stored in `data/tours.ts`.

Three-day tours:

- Swat Kalam Mahodand - Tuesday Morning / Friday Morning.
- Naran Kaghan - Tuesday Morning / Friday Morning.
- Kashmir Arang Kel - Tuesday Morning / Friday Morning.
- Kumrat Valley - Tuesday Morning / Friday Morning.

Four-day tour:

- Jazz Banda & Katora Lake - Thursday Morning.

Five-day tours:

- Hunza Valley - Saturday Morning.
- Fairy Meadows - Saturday Morning.

Six-day tour:

- Skardu - Saturday Morning.

One-day trips:

- Shogran Siri Paye - Every Sunday.
- Sharaan Forest & Sharaan Waterfall - Every Sunday.
- Ganga Choti - Every Sunday.

Future seven-day tours:

- Should use Saturday Morning unless owner changes the rule.

### 3.6 Departure City Rules

Operations available from:

- Islamabad / Rawalpindi.
- Lahore for eligible multi-day tours.

Rules:

- One-day trips operate only from Islamabad / Rawalpindi.
- Lahore one-day trips must not be shown.
- Multi-day pages can show both Islamabad / Rawalpindi and Lahore pricing where supported.
- There must be one canonical tour page per tour. Do not create duplicate Lahore tour pages per destination.
- City hubs link into tour pages with anchors:
  - `#from-islamabad`
  - `#from-lahore`

### 3.7 Booking Workflow

The booking workflow is real and backed by Supabase.

Customer flow:

```text
Tour page
-> Book Now
-> Booking form
-> Payment method selection
-> Payment screenshot upload
-> Submit booking
-> Booking reference ID created
-> Status: Pending Verification
```

Admin flow:

```text
Admin login
-> Admin dashboard / bookings
-> Open booking detail
-> Review customer, booking, and payment screenshot
-> Approve / Reject / Confirm Payment / Cancel
```

Customer tracking:

```text
/booking-status
```

Booking API:

```text
app/api/bookings/route.ts
```

Booking status API:

```text
app/api/booking-status/route.ts
```

Admin status API:

```text
app/api/admin/bookings/[id]/status/route.ts
```

### 3.8 Required Booking Fields

The booking form saves:

- Full Name.
- Phone Number.
- Email.
- CNIC / Passport Number.
- Number of Travelers.
- Emergency Contact.
- Pickup City.
- Pickup Location.
- Tour Name.
- Departure.
- Departure City.
- Payment Method.
- Payment Screenshot.
- Payment amount values where provided.

Do not add or remove required booking fields unless explicitly requested.

### 3.9 Payment Workflow

Payment methods are centralized in:

```text
data/payments.ts
```

Current payment methods:

```text
EasyPaisa
Account Number: 03115119111
Account Name: Hasnat Khaliq

JS Bank Transfer
Account Number: 03115119111
Account Name: Hasnat Khaliq
```

Important:

- Payment details intentionally live in one file so they do not drift between pages.
- If EasyPaisa and JS Bank share the same receiving details, do not change this automatically. It may be intentional. Highlight it to the owner only if reviewing payment setup.
- Payment screenshot upload is required.
- Valid file types: PNG, JPG, JPEG.
- Upload target: Supabase Storage bucket `payment-screenshots`.
- Bucket is private.
- Signed URLs are generated for admin viewing.

### 3.10 Payment Amount Source of Truth

The project has support for exact payment fields:

- `total_amount`
- `advance_paid`
- `remaining_amount`

These values are stored in the `bookings` table. The admin can approve with exact amounts. Emails and invoice-style confirmations use stored database values and must not estimate or calculate missing amounts.

Critical rule:

```text
Never estimate payment values in customer emails, invoices, admin pages, WhatsApp admin messages, or booking status pages.
```

If payment values are missing, show:

```text
To be confirmed by our team
```

### 3.11 Booking Statuses

Current booking statuses in Supabase:

- Pending Verification.
- Approved.
- Confirmed.
- Rejected.
- Cancelled.

Payment statuses in Supabase:

- Submitted.
- Verified.
- Confirmed.
- Rejected.

The public/customer language should be friendly and should not expose raw technical internals.

### 3.12 Admin Authentication

Admin login route:

```text
/admin/login
```

Admin pages:

```text
/admin
/admin/bookings
```

Admin session helper:

```text
lib/adminAuth.ts
```

Admin cookie:

```text
lexuz_admin_session
```

Environment variables:

```text
ADMIN_PASSWORD
ADMIN_SESSION_SECRET
```

Rules:

- Do not expose admin links publicly.
- Public navigation and footer must not link to Admin.
- If admin auth is not configured locally, admin pages should show a friendly warning rather than crashing.
- Admin pages are not public marketing pages and should not be indexed.

### 3.13 Email Workflow

Email notification helper:

```text
lib/email/notifications.ts
```

Email provider:

```text
Resend
```

Required variables for email delivery:

```text
RESEND_API_KEY
EMAIL_FROM
ADMIN_NOTIFICATION_EMAIL
```

Email triggers:

- New booking submitted:
  - Admin notification email.
  - Customer "Booking Received / Pending Verification" email.
- Admin approves booking:
  - Customer "Booking Approved" email.
  - Uses exact stored payment values.
- Admin rejects booking:
  - Customer rejection email.
- Admin confirms payment:
  - Customer booking confirmed email.
  - Includes invoice-style payment confirmation.

If email variables are missing:

- Booking submission must not break.
- Admin status updates must not break.
- Server logs a warning and skips email.

### 3.14 WhatsApp Workflow

WhatsApp is central to conversion.

Global WhatsApp number:

```text
923099318249
```

Main WhatsApp link:

```text
https://wa.me/923099318249
```

Helpers:

```text
data/company.ts -> whatsappUrl(message)
lib/whatsapp.ts
lib/seo-foundation/whatsappTokens.ts
```

Admin manual WhatsApp actions exist in:

```text
components/AdminWhatsAppActions.tsx
```

Admin WhatsApp actions should:

- Use the customer's phone number.
- Convert Pakistani numbers starting with `0` to `92` format.
- Open WhatsApp with a prefilled message.
- Not send automatically.
- Keep approve/reject/confirm payment buttons separate.

### 3.15 Refund and Cancellation Policy

Current source facts:

- Customer cancellation less than 7 days before departure: no refund.
- Customer cancellation more than 7 days before departure: 100% refund.
- Refunds only apply to confirmed paid bookings.
- Refund processing may require customer bank/account details.
- Lexuz Tours may adjust, postpone, or cancel trips due to weather, road closures, safety concerns, government restrictions, or unavoidable operational reasons.
- If Lexuz Tours cancels a trip, customers may choose a full refund or transfer to another available departure.
- Jeep charges are not included and are not refundable through Lexuz Tours if paid directly to local jeep operators.
- Personal expenses, entry tickets, extra meals, porter charges, and anything not mentioned in inclusions are not refundable.

Policy pages:

- `/policies`
- `/terms-and-conditions`
- `/privacy-policy`
- `/cancellation-policy`

### 3.16 Jeep Policy

Jeep charges policy:

- Jeep charges are not included where applicable.
- Sharaan Forest jeep charges are not included.
- Fairy Meadows and Jahaz Banda / Katora Lake routes may require jeep/local access disclosures.
- Do not mention jeep pricing unless owner provides it.
- Do not show global jeep warnings on tours that do not require jeep transport.
- Display jeep disclosures as small information cards, not alarming warning banners.

Helpers in `data/tours.ts`:

```text
hasJeepNotice(tour)
isJeepIncluded(tour)
```

### 3.17 Inclusions and Exclusions

Multi-day tour inclusions:

- Luxury Transport.
- Fuel Charges.
- Driver Expenses.
- Hotel Accommodation.
- Breakfast.
- Dinner.
- Bonfire.
- BBQ Night.
- Tour Management.
- Basic First Aid Support.

One-day tour inclusions:

- Luxury Transport.
- Fuel Charges.
- Driver Expenses.
- Toll Taxes.
- Dinner.
- Tour Coordination.

Current simplified service not included section on tour pages should use:

- Jeep Charges where applicable.
- Personal Expenses.

Where more detailed exclusions exist in data, be careful before changing. Recent visual/content instructions reduced tour page "Services Not Included" presentation, but business rules still preserve accurate disclosure.

---

## Section 4 - Website Architecture

### 4.1 Global Layout

The global layout is in:

```text
app/layout.tsx
```

It includes:

- Metadata.
- Favicon and icon metadata.
- Google Search Console verification.
- Open Graph metadata.
- Twitter card metadata.
- Organization and TravelAgency / LocalBusiness JSON-LD.
- GA4 script.
- Header.
- Footer.
- Floating WhatsApp widget.

Do not duplicate header/footer/contact strips in pages. All public pages should use the shared header and footer.

### 4.2 Homepage - `/`

File:

```text
app/page.tsx
```

Purpose:

- Primary brand and conversion page.
- Premium hero.
- Featured tours.
- One-day trips.
- Multi-day/public trip highlights.
- Popular destinations / storytelling sections.
- Trust sections.
- Fleet/real photography sections.
- Reviews/testimonials preview.
- Price list preview.
- FAQ.
- Contact CTA.

The homepage should feel like a journey, not a stack of unrelated cards. It should use real photography, premium typography, clear CTA hierarchy, and avoid unsupported statistics.

### 4.3 Public Trips - `/public-trips`

File:

```text
app/public-trips/page.tsx
```

Purpose:

- Show active tour inventory.
- Let customers compare duration, departure, pricing, and tour type.
- Tour cards should be fully clickable.
- Cards should keep visible "View Details" or clear affordance.
- Book Now buttons must continue to work where present.

### 4.4 Tours Index and Tour Architecture

Future architecture includes `/tours/`, but current implemented city hubs and tour pages are:

```text
/tours/islamabad
/tours/lahore
/tours/[slug]
```

Tour details file:

```text
app/tours/[slug]/page.tsx
```

Tour data:

```text
data/tours.ts
```

Tour product pages include:

- Premium hero.
- Breadcrumbs.
- Tour overview.
- Summary.
- Pricing and departure city selector.
- Islamabad and Lahore anchors.
- Itinerary.
- Inclusions.
- Exclusions.
- Jeep disclosure where applicable.
- Gallery.
- FAQs.
- Reviews/testimonials or general trust content.
- Related tours.
- Related destination/SEO links.
- Sticky booking/WhatsApp actions.
- FAQ schema.
- TouristTrip schema.
- WhatsApp tracking/source tokens.

Canonical strategy:

- One canonical URL per tour.
- Do not create `/tours/islamabad/hunza` or `/tours/lahore/hunza` duplicates.
- City context should use anchors and query/CTA messaging, not duplicate pages.

### 4.5 City Hubs

Files:

```text
app/tours/islamabad/page.tsx
app/tours/lahore/page.tsx
components/CityHubPage.tsx
data/cityHubs.ts
```

City hubs:

- `/tours/islamabad`
- `/tours/lahore`

Islamabad hub purpose:

- Explain tours from Islamabad / Rawalpindi.
- Include one-day trips and multi-day trips.
- Link to official tour pages using `#from-islamabad`.
- Show pickup guidance and departure format.

Lahore hub purpose:

- Explain multi-day tours from Lahore.
- Show only eligible multi-day departures.
- Exclude one-day trips.
- Link to official tour pages using `#from-lahore`.
- Explain the longer road approach and pickup guidance.

Rules:

- No doorway pages.
- No duplicated city content.
- No invented prices.
- No invented pickup locations or exact departure dates.

### 4.6 Destinations - `/destinations`

File:

```text
app/destinations/page.tsx
```

Purpose:

- Show destinations and link customers toward relevant tour/detail pages.
- Should use destination-relevant imagery.
- Must not show incorrect destination photos.
- Should support future destination pillar expansion.

### 4.7 SEO Landing Pages - `app/(seo)/[slug]/page.tsx`

Data:

```text
data/seoLandingPages.ts
```

Current SEO landing pages include:

- `/hunza-tour-packages`
- `/skardu-tour-packages`
- `/swat-kalam-tours`
- `/kumrat-valley-tours`
- `/kashmir-tour-packages`
- `/naran-kaghan-tours`
- `/fairy-meadows-tours`
- `/honeymoon-tours-pakistan`
- `/corporate-tours-pakistan`
- `/university-tours-pakistan`

Purpose:

- Commercial SEO pages that target high-intent Pakistan travel queries.
- Link internally to relevant tour pages.
- Explain destination overview, best time, weather, road conditions, packing, photography, local culture, suitability, and booking.
- Include FAQs and schema where implemented.

Rules:

- Keep content original.
- Avoid keyword stuffing.
- Avoid duplicate paragraphs.
- Do not invent facts, hotels, prices, or dates.

### 4.8 Blog

Files:

```text
app/blog/page.tsx
app/blog/[slug]/page.tsx
data/blogPosts.ts
```

Purpose:

- SEO content and traveler education.
- Support the broader topical authority strategy.
- Target queries around Hunza, Skardu, Swat, Kumrat, Fairy Meadows, Kashmir, Naran Kaghan, Pakistan tour packages, northern Pakistan travel, family tours, honeymoon tours, corporate tours, university tours, road trips, and travel tips.

Future article strategy is documented in:

```text
docs/seo/03-content-inventory-100-articles.md
docs/seo/04-article-template-and-page-metadata-spec.md
docs/seo/05-sample-articles.md
```

### 4.9 Service Pages

Files:

```text
app/corporate-tours/page.tsx
app/university-tours/page.tsx
app/honeymoon-tours/page.tsx
app/custom-tours/page.tsx
components/ServiceLandingPage.tsx
```

Purpose:

- Premium landing pages for service categories.
- Educate visitors about the service.
- Explain who it is for.
- Explain what Lexuz can arrange.
- Show a 4-step "How it works" process.
- Add Why Choose Lexuz cards.
- Add FAQs.
- End with strong WhatsApp and Call CTAs.

These pages do not change booking logic and do not directly calculate prices.

### 4.10 Booking Page - `/booking`

File:

```text
app/booking/page.tsx
components/BookingForm.tsx
```

Purpose:

- Customer booking submission.
- Reads selected tour/departure from query parameters.
- Shows trip summary.
- Collects customer/traveler information.
- Accepts payment method.
- Requires payment screenshot.
- Sends multipart form data to `/api/bookings`.

Important direct booking URL examples:

```text
/booking?tour=hunza-valley
/booking?tour=hunza-valley&departure=islamabad
/booking?tour=hunza-valley&departure=lahore
/booking?tour=skardu
/booking?tour=shogran-siri-paye
```

### 4.11 Booking Status - `/booking-status`

File:

```text
app/booking-status/page.tsx
app/api/booking-status/route.ts
```

Purpose:

- Customer enters booking reference ID.
- Site returns status and booking details from Supabase.
- Payment values should use database values only.
- Missing payment values should show "To be confirmed by our team".

This page should not be indexed in sitemap.

### 4.12 Admin

Files:

```text
app/admin/login/page.tsx
app/admin/page.tsx
app/admin/bookings/page.tsx
app/api/admin/login/route.ts
app/api/admin/logout/route.ts
app/api/admin/bookings/[id]/status/route.ts
components/AdminBookingActions.tsx
components/AdminBookingTable.tsx
components/AdminDashboardCards.tsx
components/AdminWhatsAppActions.tsx
```

Purpose:

- Admin login.
- Dashboard cards.
- Real Supabase bookings table.
- Booking detail/review.
- Payment screenshot viewing through signed URLs.
- Approve, reject, confirm payment, cancel.
- Manual WhatsApp messages to customers.

Rules:

- Do not expose admin links publicly.
- Do not index admin pages.
- Do not weaken admin auth.
- Do not log secrets.

### 4.13 About - `/about`

File:

```text
app/about/page.tsx
components/FounderImage.tsx
components/TrustSections.tsx
```

Purpose:

- Company story.
- Founder section.
- Trust and company proof.
- Real photography.
- Customer promise.
- Booking process.
- Payment/cancellation/jeep/safety/contact guidance where relevant.

Founder image:

```text
public/images/team/founder-hassnaat-khan.jpg
```

Source facts:

```text
docs/business/lexuz-source-facts.md
```

### 4.14 Contact - `/contact`

File:

```text
app/contact/page.tsx
```

Purpose:

- Contact details.
- WhatsApp CTA.
- Call CTA.
- Office address.
- Google Maps link.
- Social links.

If a contact form does not have a real backend, do not make it look like a fake submit workflow. Prefer clear WhatsApp/call/email CTAs.

### 4.15 Reviews - `/reviews`

File:

```text
app/reviews/page.tsx
data/reviews.ts
components/ReviewCard.tsx
```

Purpose:

- Show natural, believable testimonials.
- Avoid repeated company images across every review card.
- Avoid unsupported "Verified" claims unless backed by a genuine method.
- Use initials or simple avatar circles where appropriate.

### 4.16 Price List - `/price-list`

File:

```text
app/price-list/page.tsx
components/PriceList.tsx
```

Purpose:

- Clear price comparison.
- Solo traveler and married couple tabs/sections.
- Islamabad / Rawalpindi and Lahore rules where relevant.
- Price note:

```text
Prices are subject to change. Advance booking recommended. Terms & conditions apply.
```

### 4.17 Policies

Files:

```text
app/policies/page.tsx
app/terms-and-conditions/page.tsx
app/privacy-policy/page.tsx
app/cancellation-policy/page.tsx
components/PolicyPage.tsx
```

Purpose:

- Terms and conditions.
- Privacy policy.
- Cancellation/refund policy.
- Payment policy.
- Jeep charges policy.
- Safety and travel guidelines.
- Contact and complaints.

Policy pages should be written in clear customer-facing language, not legal filler or internal notes.

### 4.18 Header and Footer

Files:

```text
components/Header.tsx
components/Footer.tsx
components/SocialContactLinks.tsx
components/WhatsAppFloating.tsx
```

Purpose:

- Premium global navigation.
- Clean logo area.
- Public routes only.
- No public admin link.
- Social/contact icons.
- Floating WhatsApp/contact access.

Header rules:

- Do not overcrowd.
- Keep primary CTA clear.
- Mobile navigation must work.
- Use accessible labels and focus states.

Footer rules:

- Include contact info, social links, map link, quick links.
- No admin link.
- Use consistent premium styling.

---

## Section 5 - SEO

### 5.1 SEO Strategy

SEO planning documents live in:

```text
docs/seo/
```

Key docs:

```text
00-README-start-here.md
01-master-strategy-topical-map.md
02-keyword-research.md
03-content-inventory-100-articles.md
04-article-template-and-page-metadata-spec.md
05-sample-articles.md
06-landing-comparison-supporting-pages.md
07-faq-clusters-200.md
08-tour-product-page-spec.md
09-city-hub-spec.md
10-master-blueprint-v2-2026-2029.md
```

Phase 0 foundation docs:

```text
docs/seo/phase-0/01-url-page-inventory.md
docs/seo/phase-0/02-redirect-planning.md
docs/seo/phase-0/03-faq-deduplication-plan.md
docs/seo/phase-0/04-content-freshness-register.md
docs/seo/phase-0/05-image-alt-text-audit.md
docs/seo/phase-0/06-phase-1-risk-register.md
```

SEO goal:

- Build topical authority for Pakistan tours and northern Pakistan destinations.
- Target high-intent city/departure and destination package searches.
- Support commercial pages with blog and guide content.
- Maintain clean internal linking.
- Avoid duplicate city doorway pages.
- Avoid invented facts, duplicated content, and keyword stuffing.

### 5.2 Metadata

Global metadata is in:

```text
app/layout.tsx
```

Includes:

- Metadata base: `https://www.lexuztours.com`.
- Title template.
- Description.
- Keywords.
- Manifest.
- Icons.
- Google Search Console verification.
- Open Graph.
- Twitter card.

Many page files define page-specific metadata. Future SEO work should continue using App Router metadata and should not add ad-hoc `<head>` tags unless necessary.

### 5.3 Google Search Console

Verification code:

```text
b-8Z_3m32ZPgYpeQnvjOgOfQk1QmORNYK2iBVjnP8W0
```

Configured in:

```text
app/layout.tsx
metadata.verification.google
```

### 5.3.1 Meta / Facebook Domain Verification

Facebook domain verification code:

```text
k0srnh62oggwhxncg0zyb75usylqtd
```

Configured in:

```text
app/layout.tsx
metadata.verification.other["facebook-domain-verification"]
```

The tag must remain in the global server-rendered `<head>`:

```html
<meta name="facebook-domain-verification" content="k0srnh62oggwhxncg0zyb75usylqtd" />
```

Meta Business Verification also requires the exact legal business name to be publicly visible on the website. The footer currently renders:

```text
© 2026 Lexuz Tours. Operated by LEXUZ TOURS (SMC-PRIVATE) LIMITED.
```

Do not remove this line unless the owner provides a replacement legal-name display that still satisfies Meta's business verification requirements.

### 5.4 Google Analytics 4

Measurement ID:

```text
G-SC66P828CX
```

Configured in:

```text
app/layout.tsx
```

GA4 event helper:

```text
lib/seo-foundation/ga4Events.ts
```

Tracked event categories include:

- WhatsApp clicks.
- Phone clicks.
- Book Now clicks.
- Booking submissions.

Do not remove GA4 scripts or break event helpers.

### 5.5 Schema

Global schema in `app/layout.tsx`:

- Organization.
- TravelAgency.
- LocalBusiness.

Schema helpers:

```text
lib/seo-foundation/schema.ts
lib/seo.ts
```

Tour pages should support:

- TouristTrip schema.
- Offer schema attached to `TouristTrip.offers`.
- FAQ schema.
- Breadcrumb schema.

City hubs should support:

- Breadcrumbs.
- LocalBusiness / TravelAgency relevance.
- FAQ schema where appropriate.

Review schema must only be used if visible content supports it. Do not invent aggregate ratings or review counts.

Important schema decision: tour product pages should not emit `Product` JSON-LD. Earlier versions emitted Product schema for tours, which can trigger Google Product Snippet warnings such as missing `review` and `aggregateRating`. Current tour pages use `TouristTrip` with `Offer` entries instead. This is more appropriate for travel packages and avoids adding fake ratings or reviews. Do not reintroduce Product schema for tours unless there is a deliberate SEO decision backed by genuine review and aggregate rating data.

### 5.6 Sitemap

Sitemap file:

```text
app/sitemap.ts
```

Sitemap includes:

- Home.
- Public trips.
- Destinations.
- Price list.
- Reviews.
- Blog index.
- About.
- Contact.
- Corporate tours.
- University tours.
- Honeymoon tours.
- Custom tours.
- Booking.
- Policies.
- Terms and conditions.
- Privacy policy.
- Cancellation policy.
- City hubs.
- Every tour page.
- SEO landing pages.
- Blog posts.

Sitemap excludes:

- Admin.
- API.
- Authentication.
- Booking status.
- Private pages.

Important: `/tours/islamabad` and `/tours/lahore` are included through `cityHubs`.

### 5.7 Robots

Robots file:

```text
app/robots.ts
```

Expected output:

```text
User-agent: *
Allow: /
Host: https://www.lexuztours.com
Sitemap: https://www.lexuztours.com/sitemap.xml
```

Do not remove or break `app/robots.ts`.

### 5.8 Canonical Strategy

Core canonical principles:

- One canonical URL per tour.
- City hubs are unique pages for city-specific discovery.
- Tour pages handle Islamabad/Lahore departure context via anchors, selectors, and links.
- Do not create duplicate tour pages for each city.
- Avoid doorway pages.
- SEO landing pages should have unique content and intent.
- Blog content should support internal linking into commercial pages.

### 5.9 Internal Linking

Internal link registry:

```text
lib/seo-foundation/internalLinks.ts
```

Page registry:

```text
lib/seo-foundation/pageRegistry.ts
```

Internal linking should connect:

- Homepage to public trips and key tour pages.
- City hubs to eligible tour pages.
- SEO landing pages to related tour pages.
- Blog posts to destination/tour/commercial pages.
- Service pages to WhatsApp and relevant tour categories.
- Tour pages to related tours and related destination/SEO pages.

### 5.10 Blog Strategy

Blog strategy is in:

```text
docs/seo/03-content-inventory-100-articles.md
docs/seo/04-article-template-and-page-metadata-spec.md
docs/seo/05-sample-articles.md
```

Future blog work should:

- Follow the article template.
- Include unique title, meta description, H1, H2/H3 hierarchy.
- Use helpful traveler content.
- Link to commercial pages.
- Avoid duplicated boilerplate.
- Avoid claims that are not confirmed.
- Refresh time-sensitive content.

### 5.11 Content Freshness

Freshness tracking:

```text
docs/seo/phase-0/04-content-freshness-register.md
```

Topics that need periodic review:

- Road conditions.
- Seasonal openings.
- Babusar and Deosai access.
- Permit/foreigner restrictions.
- Drone regulations.
- Pricing and departure schedules.
- Hotel availability.
- Route closures and safety notices.

Because these are time-sensitive, future AI should browse or ask owner confirmation before updating public claims.

---

## Section 6 - Design System

### 6.1 Design System Source

UI/UX source document:

```text
docs/uiux/01-premium-ui-ux-spec.md
```

Design tokens:

```text
lib/design-system/tokens.ts
```

UI components:

```text
components/ui/button.tsx
components/ui/card.tsx
components/ui/form.tsx
components/ui/icon.tsx
components/ui/states.tsx
components/ui/index.ts
```

Global styling:

```text
app/globals.css
```

### 6.2 Color System

Current design tokens:

```text
Primary: #1B4D3E
Primary hover: #163F33
Primary pressed: #11332A
Secondary tint: #E8F1EE
Accent: #D9A441
WhatsApp: #25D366
Success: #1E7F4F
Warning: #B7791F
Error: #C0392B
Info: #2C6E9B
Ink 100: #14201B
Ink 80: #33403A
Ink 60: #5C6B64
Ink 30: #A9B5AF
Line: #E3E8E5
Surface: #FFFFFF
Canvas: #F7F9F8
```

Rules:

- WhatsApp green is for WhatsApp actions only.
- Accent/gold is used sparingly for highlights.
- Primary green is the brand anchor.
- White sections should be balanced with premium neutral, forest, stone, and mist sections.
- Maintain readable contrast.

### 6.3 Typography

Token classes:

```text
Hero: text-[2rem] leading-[1.15] font-black md:text-[2.5rem]
H1: text-[1.625rem] leading-[1.2] font-black md:text-[2rem]
H2: text-2xl leading-[1.3] font-bold
H3: text-lg leading-[1.4] font-bold
Body: text-base leading-[1.6] font-normal
Small: text-sm leading-[1.5] font-normal
Caption: text-xs leading-[1.4] font-bold uppercase tracking-[0.06em]
Price: text-xl leading-[1.2] font-black text-brand-primary
```

Design principle:

- Strong hierarchy.
- Premium whitespace.
- Avoid shouting every label.
- Avoid using huge hero-scale type inside small cards.
- Prices should be easy to scan.

### 6.4 Spacing

Spacing token concepts:

- Section spacing: `py-16 md:py-24`.
- Compact section: `py-12 md:py-16`.
- Card spacing: `p-5 md:p-6`.
- Mobile gutters: `px-4`.
- Desktop gutters: `md:px-6`.
- Grid gaps: `gap-4 md:gap-6`.

Rules:

- Mobile first.
- Avoid cramped cards.
- Avoid disconnected stacked sections.
- Use consistent section rhythm.

### 6.5 Radius and Shadows

Radius:

- Small, medium, large, and full tokens.
- Premium card radius is often 22-34px in current luxury sections.

Shadows:

- Resting: `shadow-ds1`.
- Raised: `shadow-ds2`.
- Overlay: `shadow-ds3`.

Visual style:

- Premium layered cards.
- Soft cinematic shadows.
- Glassmorphism used carefully.
- No cheap, heavy, muddy gray shadows.

### 6.6 Buttons

Button variants:

- Primary.
- Secondary.
- Outline.
- Ghost.
- WhatsApp.
- Call.

Rules:

- One clear primary CTA per section where possible.
- WhatsApp button should be green.
- Call action can use dark green or clean outline.
- Buttons need visible focus states.
- Hover should feel premium, not jumpy.

### 6.7 Cards

Card types:

- Tour cards.
- Destination cards.
- Information cards.
- Trust cards.
- Review cards.
- Pricing cards.
- Fleet cards.

Rules:

- Tour cards should be fully clickable.
- Keep "View Details" visible or ensure clear card affordance.
- Avoid nested invalid links.
- Hover: lift, shadow, image zoom, border highlight.
- Cards must not display wrong destination images.
- Cards should not use fake verified badges.

### 6.8 Animations and Visual Effects

Current luxury visual direction includes:

- Soft mountain mist.
- Ambient green/gold glows.
- Layered gradients.
- Glass navigation.
- Premium hover lift.
- Button shine.
- Magnetic hover feel.
- Card image zoom.
- Reveal animations.
- Night sky/footer visual effects.

Rules:

- Respect `prefers-reduced-motion`.
- No scroll-jacking.
- No animation jank.
- Avoid excessive JavaScript.
- Maintain performance and no layout shift.

### 6.9 Brand Rules

Do:

- Use real Lexuz images where possible.
- Keep logo crisp.
- Keep favicon simplified for browser/search clarity.
- Use premium travel imagery.
- Keep social/contact icons accessible.
- Keep WhatsApp prominent but not visually cheap.

Do not:

- Use unsupported big statistics.
- Use repeated placeholder-like copy.
- Show admin links publicly.
- Mix stock and real photos in a way that makes real brand assets feel fake.
- Use wrong valley/destination images.
- Overcrowd the header.

---

## Section 7 - Completed Work

This timeline summarizes major work completed in the project. It is based on repository history and project docs.

### 7.1 Initial Website Build

Completed:

- New Next.js App Router project.
- TypeScript.
- Tailwind CSS.
- Reusable components.
- Data-driven tours.
- Home, Public Trips, Destinations, Tour Details, Booking, Reviews, Blog, Contact, About, Policies.
- Price list.
- Footer and header.
- WhatsApp CTA.
- Real assets imported.
- README and deployment guidance.

### 7.2 Pricing and Tour Data

Completed:

- Official price list implemented.
- Solo and married couple pricing.
- One-day trip pricing.
- Lahore supplement rules.
- Departure schedules corrected.
- Inclusions/exclusions standardized.
- Jeep charges disclosed where applicable.

### 7.3 Supabase Booking System

Completed:

- Supabase schema with customers, bookings, payments.
- Payment screenshot upload to private storage.
- Booking form saves real records.
- Admin can view bookings.
- Admin can view payment screenshots with signed URLs.
- Admin can approve, reject, confirm payment, cancel.
- Customer booking status page.
- Booking reference IDs.
- Payment amount source of truth fields.

### 7.4 Admin Authentication

Completed:

- Admin login page.
- Admin session cookie.
- `ADMIN_PASSWORD`.
- `ADMIN_SESSION_SECRET`.
- Admin pages protected.
- Friendly local warning when admin auth is not configured.

### 7.5 Email Notifications

Completed:

- Resend integration.
- New booking email to admin.
- Booking received email to customer.
- Booking approved email.
- Booking rejected email.
- Booking confirmed invoice-style email.
- Missing email variables skip delivery without breaking booking flow.

### 7.6 WhatsApp Admin Workflow

Completed:

- Admin booking detail page includes manual WhatsApp action buttons.
- Phone number formatting for Pakistani numbers.
- Booking received, approval, rejection, payment confirmed, and invoice/trip detail WhatsApp messages.
- Admin must click and send manually; no WhatsApp Business API yet.

### 7.7 SEO Foundation - Phase 0

Completed:

- URL/page inventory.
- Redirect planning file.
- Page registry.
- Breadcrumb helper.
- Schema helper.
- WhatsApp source token helper.
- GA4 event helper.
- Internal link registry.
- FAQ deduplication plan.
- Content freshness register.
- Image/alt-text audit.
- Phase 1 risk register.

### 7.8 Tour Product Pages - Phase 1A

Completed:

- Rebuilt `/tours/[slug]` pages using tour product specification.
- Improved hero.
- Summary and pricing.
- Departure city selector.
- Islamabad/Lahore anchors.
- Better itinerary layout.
- Inclusions/exclusions.
- Jeep charge disclosure.
- Trust badges.
- Reviews/testimonials placement.
- FAQ section.
- Related tours and links.
- Breadcrumbs.
- FAQ schema and tourist trip schema.
- Better metadata.
- WhatsApp source tracking.

### 7.9 City Hubs - Phase 1B

Completed:

- `/tours/islamabad`.
- `/tours/lahore`.
- Premium hero.
- Available departures.
- Pickup information.
- Why choose city departures.
- FAQs.
- Related links.
- Internal links using anchors.
- Breadcrumbs.
- Schema.
- Sitemap includes city hubs.

### 7.10 SEO Documentation

Completed:

- Claude SEO documents imported into `/docs/seo`.
- Tour product page specification.
- City hub specification.
- Master blueprint v2 2026-2029.
- Business source facts file.
- Premium UI/UX specification.

### 7.11 Trust and Company Pages - Phase 4

Completed:

- About page improved.
- Founder section.
- Founder image support and fallback.
- Why Choose Lexuz.
- Customer Promise.
- Booking Process.
- Payment Policy.
- Cancellation and Refund Policy.
- Jeep Charges Policy.
- Safety and Travel Guidelines.
- Contact and Complaints.
- Breadcrumbs/schema where appropriate.
- Real photography prioritized.

### 7.12 Design System Foundation - Sprint 2

Completed:

- Design tokens.
- UI components.
- Button variants.
- Card styles.
- Form states.
- Icon system.
- Animations and state components.

### 7.13 Premium Header and Navigation

Completed:

- Premium sticky/glass header.
- Better logo alignment.
- Balanced navigation spacing.
- Cleaner social/contact area.
- Mobile navigation.
- Accessible labels and focus states.

### 7.14 Premium UI Overhaul and Visual Polish

Completed:

- Homepage visual improvements.
- Tour card polish.
- Destination and city hub polish.
- Tour product visual polish.
- Booking page visual polish.
- Contact page polish.
- Footer redesign.
- Premium CTA hierarchy.
- Better spacing, typography, colors, shadows, buttons, hover states, icons, mobile experience, accessibility, loading/empty/success/error states.
- Cinematic hero and visual effects.
- Final production luxury polish.

### 7.15 Production Audit Fixes

Completed:

- Template consistency fixes.
- Internal/developer wording removed from public pages.
- Public admin links removed.
- Payment information centralized.
- Itinerary duplication reduced.
- Gallery relevance improved.
- Copywriting cleaned.
- Unsupported verified claims removed.
- Metadata improvements.
- Real trip photos placed according to approved placement sheet.

### 7.16 Favicon and Branding Icons

Completed:

- Dedicated favicon assets.
- Simplified icon concept for browser/search clarity.
- Main company logo preserved.
- Manifest icons updated.
- Metadata icon references updated.
- Organization schema logo uses official logo URL.

### 7.17 Service Page Content Expansion

Completed:

- Corporate Tours page expanded.
- University Tours page expanded.
- Honeymoon Tours page expanded.
- Custom Tours page expanded.
- Shared `ServiceLandingPage` component.
- Premium hero.
- Overview.
- Who it is for.
- What Lexuz can arrange.
- 4-step process.
- Why choose Lexuz.
- FAQs.
- WhatsApp CTA.
- Call CTA.
- Relevant imagery.

### 7.18 Structured Data Cleanup

Completed:

- Removed tour-page `Product` JSON-LD.
- Preserved `TouristTrip` schema for bookable tour pages.
- Moved price/availability information into `TouristTrip.offers`.
- Avoided adding fake `review` or `aggregateRating` fields.
- Preserved FAQ and breadcrumb schema.
- Kept LocalBusiness / TravelAgency schema intact.

Reason:

- Google Search Console can report Product Snippet warnings for Product schemas that lack review or aggregate rating fields.
- Lexuz tours are better represented as `TouristTrip` with `Offer` data than as generic products.
- Reviews and aggregate ratings must never be invented.

### 7.19 Meta Business Verification Support

Completed:

- Added exact legal business name to the shared footer:
  `LEXUZ TOURS (SMC-PRIVATE) LIMITED`.
- Confirmed Facebook domain verification meta tag is defined in `app/layout.tsx`.
- Confirmed the footer legal name and Meta verification tag are server-rendered.
- Preserved all booking, admin, Supabase, payment, SEO, route and analytics functionality.

---

## Section 8 - Current Assets

### 8.1 Logo Assets

Logo files:

```text
public/logo.png
public/logo-lexuz-white-20260627.png
public/images/logo.png
public/images/logo-lexuz-white-20260627.png
```

Main schema logo:

```text
https://www.lexuztours.com/logo.png
```

Rules:

- Main company logo should remain unchanged unless owner provides new final source.
- Favicon should be simplified and not rely on tiny text.
- Browser/search assets should be crisp at small sizes.

### 8.2 Favicon and Manifest Icons

Files:

```text
public/favicon.ico
public/favicon-16x16.png
public/favicon-32x32.png
public/favicon-48x48.png
public/favicon-64x64.png
public/apple-touch-icon.png
public/android-chrome-192x192.png
public/android-chrome-512x512.png
public/icon-512.png
public/site.webmanifest
app/icon.png
app/apple-icon.png
```

### 8.3 Hero and Brand Images

Files:

```text
public/images/hero-lexuz-premium.png
public/images/hero.png
public/images/brand-home.png
public/images/booking-reference.png
public/images/tour-detail-reference.png
```

### 8.4 Founder and Office Photos

Files:

```text
public/images/team/founder-hassnaat-khan.jpg
public/images/office-real.jpeg
public/images/office.jpeg
```

Founder image should be used in the About page founder section. If it fails, use a Lexuz logo fallback rather than a black rectangle.

### 8.5 Fleet Photos

Files:

```text
public/images/fleet-bus.png
public/images/fleet-founder-buses.jpeg
public/images/fleet-line.jpeg
public/images/fleet-road.jpeg
public/images/bus-yard-front.jpeg
public/images/bus-founder-mountain.jpeg
public/images/trip/lexuz-fleet-three-coasters-night.webp
```

Approved caption for night fleet photo:

```text
Three of our branded coasters ready for overnight departures
```

Alt text:

```text
Three Lexuz Tours & Adventures branded coasters parked at night before departure
```

### 8.6 Real Customer and Group Photos

Files:

```text
public/images/group-snow-banner-real.jpeg
public/images/group-snow-lake-real.png
public/images/group-malam-real.jpeg
public/images/trip/lexuz-group-departure-summer.webp
public/images/trip/lexuz-student-group-coaster.webp
public/images/trip/lexuz-group-meadow-banner.webp
public/images/trip/lexuz-malam-jabba-winter-group.webp
```

Approved placement/captions:

- `lexuz-group-departure-summer.webp`
  - Place: About page evidence wall, position 1.
  - Caption: "A Lexuz group with our coaster on a summer departure"
  - Alt: "Large Lexuz Tours group standing beside their tour coaster among trees on a summer trip"

- `lexuz-student-group-coaster.webp`
  - Place: About page and university tours imagery.
  - Caption: "One of our student groups with the Lexuz branded coaster"
  - Alt: "University student group in front of a Lexuz Tours & Adventures branded coaster in a hill town"

- `lexuz-group-meadow-banner.webp`
  - Place: Homepage group tours/reviews/trust storytelling.
  - Caption: "A Lexuz group at a meadow stop, banner and all"
  - Alt: "Lexuz Tours group of around thirty travellers sitting on a green meadow holding the company banner"

- `lexuz-fleet-three-coasters-night.webp`
  - Place: About page fleet section and booking page trust strip.
  - Caption: "Three of our branded coasters ready for overnight departures"
  - Alt: "Three Lexuz Tours & Adventures branded coasters parked at night before departure"

- `lexuz-malam-jabba-winter-group.webp`
  - Place: Swat/Malam Jabba tour gallery and Swat winter content only.
  - Caption: "Our winter group at Malam Jabba ski resort"
  - Alt: "Lexuz Tours winter group holding the company banner in front of the Malam Jabba sign with the snowy ski slope and chairlift behind"

Important image rule:

```text
Photo 5 must not appear on non-Swat destination pages.
```

### 8.7 Destination Images

Destination images:

```text
public/images/destinations/fairy-meadows.jpg
public/images/destinations/fairy-meadows-2.jpg
public/images/destinations/ganga-choti.jpg
public/images/destinations/ganga-choti-2.jpg
public/images/destinations/hunza-attabad.jpg
public/images/destinations/hunza-attabad-2.jpg
public/images/destinations/jahaz-banda.jpg
public/images/destinations/kashmir-arang-kel.jpg
public/images/destinations/kashmir-arang-kel-2.jpg
public/images/destinations/katora-lake.jpg
public/images/destinations/kumrat-valley.jpg
public/images/destinations/kumrat-valley-2.jpg
public/images/destinations/naran-saiful-muluk.jpg
public/images/destinations/naran-saiful-muluk-2.jpg
public/images/destinations/sharaan-forest.jpg
public/images/destinations/sharaan-forest-2.jpg
public/images/destinations/shogran-siri-paye.jpg
public/images/destinations/shogran-siri-paye-2.jpg
public/images/destinations/skardu-shangrila.jpg
public/images/destinations/skardu-shangrila-2.jpg
public/images/destinations/swat-mahodand.jpg
public/images/destinations/swat-mahodand-2.jpg
```

Rule:

- Do not show wrong destination images in galleries.
- If there are not enough correct destination images, show fewer images instead of borrowing incorrect valleys.

### 8.8 Itinerary Poster Images

Files:

```text
public/images/itineraries/shogran-siri-paye-itinerary.png
public/images/itineraries/sharaan-forest-itinerary.png
public/images/itineraries/ganga-choti-itinerary.png
```

These support one-day trips and should be used carefully so they do not overwhelm mobile pages.

---

## Section 9 - Future Roadmap

### 9.1 SEO Content Expansion

Future SEO roadmap:

- Produce the planned 100-article blog inventory.
- Build destination pillar pages.
- Build comparison pages.
- Build planning pages.
- Build road status pages.
- Build help/FAQ hub.
- Build policies hub improvements.
- Build team/about subpages when source facts are available.

Use:

```text
docs/seo/03-content-inventory-100-articles.md
docs/seo/04-article-template-and-page-metadata-spec.md
docs/seo/06-landing-comparison-supporting-pages.md
docs/seo/07-faq-clusters-200.md
docs/seo/10-master-blueprint-v2-2026-2029.md
```

### 9.2 Destination Pillars

Planned:

- `/destinations/[place]`

Potential destination pages:

- Hunza.
- Skardu.
- Swat.
- Naran Kaghan.
- Kashmir / Neelum.
- Kumrat.
- Fairy Meadows.
- Shogran.
- Sharaan Forest.
- Ganga Choti.

Each should include:

- Overview.
- Best time to visit.
- Weather.
- Road conditions.
- Things to pack.
- Photography locations.
- Local culture.
- Food.
- Family suitability.
- Honeymoon suitability.
- Adventure level.
- FAQs.
- Booking CTA.
- Related tours.
- Internal links.

### 9.3 More Real Photography

Needed:

- More destination-specific galleries.
- Real hotel/stay photos if owner approves.
- More group departure photos.
- More office/team photos.
- More fleet photos in daylight and departure scenes.
- Corporate group photos.
- University/students photos.
- Couple-friendly/honeymoon scenery photos without fake stock style.
- Seasonal content: winter, spring, summer, autumn.

### 9.4 Google Reviews and Trust

Potential future work:

- Link to Google Business Profile reviews if available.
- Add Google review badge only if it reflects real public reviews.
- Import or embed verified Google reviews if technically and legally appropriate.
- Add customer video testimonials if owner provides permission.
- Add customer gallery with consent.

### 9.5 Marketing and Ads

The site is prepared for Facebook and Instagram ads, but future work could add:

- Campaign-specific landing pages.
- UTM-aware WhatsApp source tokens.
- Conversion event reporting.
- Better GA4 funnel dashboards.
- Meta Pixel if owner requests it.
- Landing pages for seasonal campaigns.
- WhatsApp lead tracking sheets or CRM integration.

### 9.6 Booking System Future Enhancements

Do not implement without explicit request:

- WhatsApp Business API.
- SMS notifications.
- PDF invoices.
- Customer account login.
- Online card payments.
- Automated meeting point emails.
- Admin role management.
- Full CRM.
- Calendar/date inventory.
- Seat availability automation.
- Refund workflow automation.

### 9.7 Performance Future Work

Future performance improvements:

- Audit image sizes and convert remaining large PNG/JPEG assets to optimized WebP/AVIF.
- Add explicit width/height to every non-fill image.
- Review LCP image priority on each major page.
- Run Lighthouse on mobile and desktop.
- Audit animation performance.
- Reduce CSS duplication if needed.
- Ensure no large unused client bundles.

### 9.8 Content Governance

Future process:

- Use `docs/business/lexuz-source-facts.md` for claims.
- Keep pricing in `data/tours.ts`.
- Keep payment details in `data/payments.ts`.
- Keep company/contact info in `data/company.ts`.
- Add owner-confirmed facts before publishing claims.
- Review time-sensitive SEO pages quarterly.
- Avoid duplicate paragraphs.
- Avoid "AI-sounding" copy and generic superlatives.

---

## Section 10 - Rules For Future AI

This is the most important section for any future AI assistant.

### 10.1 Locked Systems

Never change the following unless the user explicitly requests that exact system:

- Booking workflow.
- Booking forms.
- Booking validation.
- Booking APIs.
- Supabase.
- Database schema.
- SQL.
- Storage buckets.
- Admin dashboard.
- Admin authentication.
- Payment workflow.
- Payment screenshot upload.
- Payment methods.
- Pricing logic.
- Departure logic.
- Lahore supplement rules.
- Tour availability logic.
- Customer records.
- Email notifications.
- WhatsApp admin workflow.
- Environment variables.
- API routes.
- Google Analytics.
- Google Search Console.
- Schema markup.
- Sitemap.
- Robots.
- Metadata and canonical URLs.
- SEO architecture.
- Tour URLs.
- City hub URLs.
- Blog URLs.
- Redirects.
- Vercel deployment configuration.
- GitHub repository/root configuration.

Visual/UI tasks should only modify presentation, styling, spacing, typography, imagery, and customer-facing layout.

### 10.2 Never Invent Business Facts

Do not invent:

- Traveler counts.
- Successful trip counts.
- Awards.
- Registration numbers.
- Years of experience beyond 2018.
- License claims.
- Team member bios.
- Hotel names.
- Route guarantees.
- Exact pickup times unless data exists.
- Exact departure dates unless data exists.
- Refund terms beyond the policy.
- Jeep prices.
- Payment policies not confirmed by owner.
- Child pricing.

If information is missing:

```text
Information will be updated.
```

or hide the section if public display would feel unfinished.

### 10.3 Protect Pricing and Departure Rules

Pricing lives in:

```text
data/tours.ts
```

Payment details live in:

```text
data/payments.ts
```

Contact details live in:

```text
data/company.ts
```

Never hard-code repeated prices/payment/contact details in pages.

### 10.4 Protect SEO Architecture

Do not:

- Create duplicate city-specific tour pages.
- Redirect pages without a redirect plan.
- Remove pages from sitemap casually.
- Add noindex without reason.
- Break `/tours/islamabad`.
- Break `/tours/lahore`.
- Break `/tours/[slug]`.
- Break SEO landing pages.
- Remove schema.
- Add unsupported review schema.

### 10.5 Public Language Rules

Public pages must never show internal or developer wording such as:

- Supabase.
- Source facts.
- Placeholder.
- Owner confirmation.
- Developer.
- Internal.
- Implementation.
- Canonical.
- Booking workflow.
- Database.
- API.

Exceptions:

- Documentation files can contain these words.
- Admin-only pages can contain admin-related wording.
- README and docs can contain technical wording.

### 10.6 Admin Link Rule

Public site must not visibly link to:

```text
/admin
/admin/login
/admin/bookings
```

Admin pages can still exist and work. They are private operational surfaces.

### 10.7 Image Rules

Do:

- Use real Lexuz photos where possible.
- Use destination-correct images.
- Use approved captions and alt text where provided.
- Lazy-load non-hero images.
- Use Next.js Image.

Do not:

- Show Malam Jabba image on non-Swat pages.
- Show Hunza pages with Skardu images.
- Use stock-like images next to real photos in a confusing way.
- Display black rectangles or broken image boxes.
- Stretch photos.

### 10.8 Accessibility Rules

Maintain:

- Accessible labels for icons.
- Keyboard focus states.
- Sufficient contrast.
- Proper link targets.
- No invalid nested links.
- Mobile tap targets.
- `target="_blank"` with `rel="noopener noreferrer"` for external links.
- Reduced motion support.

### 10.9 Git Rules

Branching pattern for feature work:

```text
feature/descriptive-name
```

The Codex environment may prefer `codex/` prefix by policy, but the owner has historically requested `feature/...` branches for this project. Follow the explicit user branch name when provided.

Before merging:

```text
npm run lint
npm run build
```

Only push/deploy when owner approves or explicitly asks.

### 10.10 Deployment Rules

Do not deploy automatically if the user says not to deploy.

If user says "APPROVED FOR PRODUCTION" or explicitly requests deploy/merge/push, then:

1. Run lint.
2. Run build.
3. Merge if requested.
4. Push `main`.
5. Verify Vercel deployment if network/auth allows.

If network or Vercel auth blocks deployment, clearly report the blocker and provide exact commands for the owner.

---

## Section 11 - Current Project Status

### 11.1 Current State

The website is production-ready and considered version 1.0 from a product standpoint.

Current core systems implemented:

- Premium public website.
- Real Supabase booking system.
- Admin dashboard.
- Payment screenshot upload.
- Customer booking status tracking.
- Email notification integration.
- Manual WhatsApp admin messaging.
- SEO landing pages.
- Blog system.
- City hubs.
- Tour product pages.
- Service pages.
- Trust/company pages.
- Premium UI/UX design system.
- Google Analytics 4.
- Google Search Console verification.
- Meta / Facebook domain verification.
- Public legal business-name footer line for Meta Business Verification.
- Sitemap.
- Robots.
- Favicon and icon assets.

### 11.2 Current Branch and Commit

At time of writing:

```text
Branch: main
Commit: f56a8d6 Add legal business name to footer
```

Git status before this document update was committed:

```text
main may be ahead of origin depending on whether the latest local commits have been pushed.
```

After this document is added or updated, the working tree will contain:

```text
docs/MASTER_PROJECT_CONTEXT.md
```

unless committed separately by the owner or future assistant.

### 11.3 Deployment Status

Production URL:

```text
https://www.lexuztours.com
```

Expected production deployment:

- Vercel connected to GitHub.
- Pushes to `main` trigger production deployment.
- Latest local committed state at time of writing is `f56a8d6`.
- Confirm production deployment in Vercel or by checking the live site after pushing.

Because deployment status can change, future assistants should verify in Vercel or via the live URL before making claims about the currently deployed build.

### 11.4 Version 1.0 Scope

Version 1.0 includes:

- Public marketing website.
- Tour browsing.
- City departure hubs.
- Booking form.
- Supabase storage and database.
- Admin dashboard.
- Booking status page.
- Email and manual WhatsApp workflows.
- Core SEO architecture.
- Premium visual polish.

Version 1.0 does not include:

- Online card payments.
- WhatsApp Business API automation.
- CRM.
- Customer accounts.
- PDF invoice generation.
- Live seat inventory.
- Calendar-based departure inventory.
- Full Google Reviews integration.

---

## Section 12 - Known Improvements

### 12.1 Business Facts Still Needed

Owner should confirm:

- SECP incorporation number if the owner wants it public.
- NTN/FBR number if the owner wants it public.
- Defensible traveler count.
- Defensible successful departures/trips count.
- Team member roles, photos, consent, experience, languages, trips handled, bios.
- Office hours.
- Response time SLA.
- Payment policy wording.
- Child pricing policy.

### 12.2 Content Improvements

Future content work:

- Expand blog articles from SEO inventory.
- Add destination pillar pages.
- Add comparison pages.
- Add planning guides.
- Add help center.
- Add road status content if maintained.
- Add more detailed attraction sections for each tour.
- Add family, honeymoon, university, and corporate route-specific guides.

### 12.3 Image Improvements

Future image needs:

- More real Hunza photos.
- More real Skardu photos.
- More real Naran/Kaghan photos.
- More real Kumrat photos.
- More real Fairy Meadows photos.
- More real Kashmir/Neelum photos.
- More day-trip photos.
- More university group photos.
- More corporate group photos.
- More couple-friendly scenic photos.
- Office exterior photo.
- Team portraits.
- Founder photo updates if owner wants a more formal portrait.

### 12.4 Trust Improvements

Future trust work:

- Add Google Business Profile link.
- Add Google reviews if available.
- Add verified customer gallery with consent.
- Add short customer video clips if provided.
- Add safety/process details with owner confirmation.
- Add SECP/FBR badges only with exact owner-approved claims.

### 12.5 Marketing Improvements

Future marketing work:

- Meta Pixel.
- Conversion API.
- Seasonal campaign landing pages.
- UTM dashboard.
- WhatsApp lead source reporting.
- Offer pages for Eid, summer, winter, university season, corporate retreat season.
- Retargeting landing pages.

### 12.6 Booking Improvements

Future booking enhancements:

- PDF invoices.
- Automated meeting point messages.
- Admin notes.
- Payment verification uploads/multiple screenshots.
- Customer-side edit/cancel request.
- Seat inventory.
- Calendar/departure dates.
- CRM export.
- WhatsApp Business API.
- SMS notifications.

### 12.7 SEO Improvements

Future SEO enhancements:

- Complete 100-article roadmap.
- Add destination pillar pages.
- Add FAQ hub.
- Improve internal link graph.
- Add image sitemap if useful.
- Add seasonal content freshness workflow.
- Add structured data only where supported by visible content.
- Monitor Search Console query data.
- Improve CTR through title/meta testing.

### 12.8 Performance Improvements

Future performance work:

- Re-audit all image sizes.
- Convert large PNG/JPEG assets to WebP/AVIF where safe.
- Reduce oversized hero images.
- Review scripts and bundle size.
- Run Lighthouse and WebPageTest.
- Check Core Web Vitals after every visual sprint.
- Ensure all animations remain GPU-friendly and respect reduced motion.

### 12.9 Documentation Improvements

Future documentation:

- Add `docs/DEPLOYMENT.md`.
- Add `docs/SUPABASE_SETUP.md`.
- Add `docs/BOOKING_SYSTEM.md`.
- Add `docs/ADMIN_GUIDE.md`.
- Add `docs/CONTENT_GUIDE.md`.
- Add `docs/IMAGE_GUIDE.md`.
- Keep this master context updated after major phases.

---

## Appendix A - Required Environment Variables

Required for Supabase booking system:

```text
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
SUPABASE_PAYMENT_BUCKET=payment-screenshots
```

Required for admin:

```text
ADMIN_PASSWORD
ADMIN_SESSION_SECRET
```

Required for emails:

```text
RESEND_API_KEY
EMAIL_FROM
ADMIN_NOTIFICATION_EMAIL
```

Google Analytics and Search Console are currently hardcoded in metadata/scripts:

```text
GA4 Measurement ID: G-SC66P828CX
Google verification: b-8Z_3m32ZPgYpeQnvjOgOfQk1QmORNYK2iBVjnP8W0
```

Potential future improvement:

- Move GA4 ID and Search Console verification into environment variables only if the owner wants environment-specific tracking.

---

## Appendix B - Supabase Schema Summary

Schema file:

```text
supabase/schema.sql
```

Tables:

```text
customers
bookings
payments
```

Customers:

- `id`
- `full_name`
- `phone`
- `email`
- `cnic`
- `emergency_contact`
- `created_at`

Bookings:

- `id`
- `reference_id`
- `customer_id`
- `tour_name`
- `departure`
- `departure_city`
- `pickup_city`
- `pickup_location`
- `number_of_travelers`
- `total_amount`
- `advance_paid`
- `remaining_amount`
- `status`
- `created_at`
- `updated_at`

Payments:

- `id`
- `booking_id`
- `payment_method`
- `screenshot_path`
- `screenshot_url`
- `status`
- `created_at`

Storage bucket:

```text
payment-screenshots
```

The bucket is private. Admin screenshot access uses signed URLs.

---

## Appendix C - Current Public Routes

Static public routes:

```text
/
/public-trips
/destinations
/price-list
/reviews
/blog
/about
/contact
/corporate-tours
/university-tours
/honeymoon-tours
/custom-tours
/booking
/policies
/terms-and-conditions
/privacy-policy
/cancellation-policy
/tours/islamabad
/tours/lahore
```

Dynamic tour routes:

```text
/tours/swat-kalam-mahodand
/tours/naran-kaghan
/tours/kashmir-arang-kel
/tours/kumrat-valley
/tours/kumrat-jahaz-banda-katora-lake
/tours/hunza-valley
/tours/fairy-meadows
/tours/skardu
/tours/shogran-siri-paye
/tours/sharaan-forest-waterfall
/tours/ganga-choti
```

SEO landing routes:

```text
/hunza-tour-packages
/skardu-tour-packages
/swat-kalam-tours
/kumrat-valley-tours
/kashmir-tour-packages
/naran-kaghan-tours
/fairy-meadows-tours
/honeymoon-tours-pakistan
/corporate-tours-pakistan
/university-tours-pakistan
```

Private/operational routes:

```text
/admin
/admin/login
/admin/bookings
/booking-status
/api/*
```

Note: `/booking` is included in sitemap. `/booking-status` is excluded because it is customer-specific tracking.

---

## Appendix D - Quality Checklist Before Any Merge

Before merging or deploying:

```text
npm run lint
npm run build
```

Manual checks:

- Homepage loads.
- Header navigation works.
- Mobile menu works.
- Footer links work.
- WhatsApp links open correct number.
- Phone links open `tel:+923183395090`.
- Public trips cards click through.
- Book Now links preserve query parameters.
- Tour pages show correct price/departure/inclusions.
- City hubs show correct eligible tours.
- One-day trips are not shown from Lahore.
- Booking page loads and does not expose technical language.
- Admin login is protected.
- Supabase missing env does not crash local admin pages if friendly fallback exists.
- Contact page uses real contact actions.
- Images load and are destination-relevant.
- No public admin links.
- No placeholder/internal/developer wording on public pages.
- No unsupported review/rating claims.
- Sitemap includes public indexable pages.
- Robots returns 200.

---

## Appendix E - Commands

Install:

```bash
npm install
```

Local development:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

Start production build locally:

```bash
npm run start
```

Push main:

```bash
git push origin main
```

---

## Appendix F - Final Guidance

Lexuz Tours Premium is now a real production website with real booking infrastructure. Treat it like a live business system, not an experiment.

When improving the project:

1. Read this file.
2. Read `docs/business/lexuz-source-facts.md`.
3. Read relevant SEO/UI docs.
4. Inspect the current code.
5. Make the smallest safe change that satisfies the task.
6. Preserve locked systems.
7. Run lint and build.
8. Do not deploy unless explicitly approved.

The website's strongest current assets are:

- Real Lexuz fleet photos.
- Real group photos.
- Clear public tour inventory.
- Real Supabase booking system.
- Strong WhatsApp conversion flow.
- City hubs and SEO landing architecture.
- Premium visual direction.

The biggest future growth opportunities are:

- More real destination photography.
- More owner-confirmed trust claims.
- Google reviews integration.
- Blog/content expansion.
- Destination pillar pages.
- Stronger analytics and ad tracking.
- Better customer gallery and video proof.

Keep the brand premium, truthful, practical, and local. The best version of Lexuz Tours is not the loudest website. It is the clearest, most trustworthy, and most confidently organized travel brand in its category.
