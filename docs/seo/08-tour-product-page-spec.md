# LEXUZ TOURS — TOUR PRODUCT PAGE SPECIFICATION v1.0
## Field-by-field template for Codex (Next.js implementation, no code in this doc)

**Applies to:** all 16 tour product URLs (T1–T16 in the Master Blueprint).
**Governing rules:** one URL per tour product. No city-duplicate pages — city context is handled on-page by the Departure City Selector. No hardcoded prices, dates, or hotel names anywhere in content: these render ONLY from admin-managed data fields, and every such field supports an "unset" state with a defined fallback display. If a rule here conflicts with a design preference, this spec wins.

---

# 0. DATA MODEL OVERVIEW

Each tour page renders from one **Tour** record plus related collections. Codex should treat these as CMS content types:

- **Tour** (1 per page) — identity, content, settings
- **Departure** (many per Tour) — date, city, seat status, price
- **ItineraryDay** (many per Tour)
- **Review** (many per Tour, shared pool filterable by tour)
- **TourLead** (many-to-many with Tour)
- **FAQ** (4–6 per Tour, unique site-wide)
- **RelatedTour / RelatedGuide** (curated references, with auto-fallback)

All admin-editable fields are consolidated in §20. Everything in §§1–19 describes how those fields render.

---

# 1. PAGE STRUCTURE — TOP TO BOTTOM

Desktop and mobile share one DOM order (mobile-first; desktop enhances layout, never reorders content):

1. Breadcrumb
2. **Hero** (H1, media, summary strip)
3. **Tour Summary Card** + **Price/Departure Module** + **Primary CTA cluster** — together these MUST complete within the first two mobile viewports
4. Departure City Selector (embedded in the departure module)
5. Trust strip (badges + review stars)
6. Itinerary (day-by-day, collapsible)
7. Inclusions / Exclusions (side-by-side desktop, stacked mobile)
8. Jeep Charges Disclosure (conditional block)
9. Route & Logistics summary (short — links out to canonical pages)
10. Reviews (3 featured + link to all)
11. Meet Your Tour Leads (compact)
12. FAQs (4–6)
13. Secondary CTA block (full-width)
14. Related Tours (3 cards)
15. Related Destination Guide + Plan links
16. Policies strip (links to /policies/)
17. Footer
18. **Sticky mobile action bar** (persistent, all scroll positions)

Rationale: a user who reads nothing below fold #2 can still book; everything below exists to resolve objections in descending order of frequency (what do I get → what's not included → can I trust you → questions → alternatives).

---

# 2. HERO SECTION

| Field | Type | Rules |
|---|---|---|
| `hero_h1` | text, required | One H1 per page. Format: product-led, not article-led. Pattern: "[Destination] Tour — [duration] from Islamabad & Lahore" (drop "& Lahore" if `departure_cities` = ISB only). Primary keyword present naturally. Max ~65 chars. |
| `hero_media` | image (required) + optional 20–40s muted looping video | Image: real Lexuz-departure photo only (rule from Blueprint §5). 16:9. Serve AVIF/WebP ≤120KB at largest breakpoint, explicit width/height (CLS), fetchpriority high — this is the LCP element and owns the LCP <2.5s budget. Video: lazy, never autoplays on data-saver, poster = hero image. |
| `hero_caption` | text, required | Dated evidence caption over/under media: "Our [month year] group at [location]". This is E-E-A-T surface, not decoration. |
| `hero_summary_strip` | auto-rendered from Tour fields | Icon row: duration (`duration_days`/`duration_nights`), departure cities, group type tags, difficulty (`difficulty_level`: Easy / Moderate / Trek), next departure date (from Departure records — see §4 fallback). |

No text overlay carousel, no auto-sliding hero. One strong image outperforms five rotating ones.

---

# 3. TOUR SUMMARY CARD

Rendered immediately after hero (mobile) / right column (desktop ≥1024px, sticky).

| Field | Type | Rules |
|---|---|---|
| `summary_bullets` | 4–6 short lines, required | What the trip IS: signature moments only ("Boat ride on Attabad Lake", "Sunrise at Eagle's Nest"). No adjectives-only lines ("amazing views" is banned). |
| `best_for_tags` | multi-select | Families / Couples / Friends / Solo joiners / Corporate / Students. Renders as chips. Drives internal filters on /tours/ index too. |
| `physical_note` | short text, conditional | Required if difficulty ≠ Easy: one honest sentence ("Includes a 2–3 hour hike from Tattu village; reasonable fitness needed"). |
| `altitude_flag` | boolean + max altitude | If any itinerary point >3,500m: auto-renders "High altitude: reaches [X]m — see our altitude guide" linking /plan/altitude/. |

---

# 4. PRICE / DEPARTURE MODULE

The commercial heart of the page. Renders ONLY from live Departure records — zero hardcoded values.

**Departure record fields:** `date` (required) · `city` (ISB | LHR) · `price_per_person` (number, admin-set) · `seats_status` (Available / Limited [with optional exact seats-left count] / Full / Closed) · `notes` (optional: "via Babusar, pass permitting").

**Display rules:**
- Show the **next 3 upcoming departures** for the currently selected city, as rows: date · price · seat status · [Reserve via WhatsApp] micro-CTA per row.
- "From" price shown in summary card = lowest price among upcoming departures for selected city, labelled "from PKR [x] / person". If price field unset on all departures → display "Price on request — message us" (never zero, never blank, never a placeholder number).
- **No upcoming departures for selected city** → fallback block: "No fixed departures scheduled from [city] right now. Message us for the next date or a private departure." + CTA. The page never looks dead.
- **Seat scarcity is displayed only when true** (`seats_status = Limited`): "3 seats left". Fabricated scarcity is banned at spec level — the field is admin-set per departure, and marketing may not hardcode it into templates.
- Past-dated departures auto-hide. A departure marked Full stays visible (struck through, "Full — join waitlist" CTA) for social proof, max 1 shown.
- "View all dates" expands the full departure calendar inline (no navigation away).

---

# 5. DEPARTURE CITY SELECTOR

Purpose: one URL serves both city intents without doorway pages.

- **Control:** segmented toggle at top of the departure module — [ Islamabad ] [ Lahore ]. Hidden entirely if `departure_cities` contains only one city.
- **Default state:** Islamabad, unless (a) URL contains `?from=lahore`, or (b) user arrived from the Lahore city hub (referrer/param set by hub links — hubs always link with the param). City hubs L1/L2 thus deep-link users into their city context.
- **What toggling changes:** departure rows (§4), pickup details block (below), day-1 itinerary variant if defined (§8), and the WhatsApp prefill token (§7). Nothing else — content is otherwise shared, which is exactly why this is not a doorway.
- **Pickup details block (per city):** `pickup_points_isb` / `pickup_points_lhr` (repeatable: location name + time note), `travel_format_note_lhr` (e.g., "Lahore departures travel overnight via M-2; you sleep on the coach and wake up in the mountains"). Lahore's block must be genuinely Lahore-specific — this content is the on-page answer to "…from Lahore" queries.
- **SEO handling:** the toggle is client-side state; both cities' pickup blocks and a compact "Departures from Islamabad / from Lahore" summary exist in the rendered HTML (toggle controls visibility, not existence) so crawlers see both city contexts on the canonical URL. `?from=` parameter is canonicalized to the clean URL. No indexable city-variant URLs, ever.
- **H2 anchors:** "Departures from Islamabad" and "Departures from Lahore" as linkable section anchors (`#from-islamabad`, `#from-lahore`) — city hubs and any external mentions can deep-link.

---

# 6. BOOKING CTA MODULE

**Primary CTA cluster** (in first two viewports, and repeated in §13):

| Element | Spec |
|---|---|
| **WhatsApp button** (primary) | Label: "Book / Ask on WhatsApp". Highest-contrast button on page. Behavior per §7. |
| **Request Callback** (secondary) | Opens inline mini-form: name, phone, preferred month, city (pre-set from selector). One screen, ≤4 fields, no account, no email required. Submissions land in the inquiry log with source token. Serves users who won't open WhatsApp (office workers, some diaspora users). |
| **Call button** (tertiary, mobile-visible) | tel: link to the tracked number matching selected city. Desktop: shows number as text with copy affordance. |

**Rules:** exactly ONE primary action visually; never stack three equally-loud buttons. No "Book Now" leading to a dead form or payment page that doesn't exist — every CTA leads to a channel a human answers. Response-time promise displayed beside CTA only if the SLA is actually met ("We reply within 15 minutes, 9am–9pm") — this string is admin-toggleable and must be turned off if the ops team misses SLA (Blueprint dateline-honesty rule applied to promises).

---

# 7. WHATSAPP SOURCE TRACKING MESSAGE

Every WhatsApp button prefills a message built from three parts:

**Pattern:** `Hi Lexuz! I'm interested in the [tour_name] ([tour_code] · [city_code] · [source_slot]).`

**Example:** `Hi Lexuz! I'm interested in the Hunza Valley 5-Day (HZ5 · ISB · hero).`

| Token | Source | Values |
|---|---|---|
| `tour_code` | Tour field, admin-set, registry-unique (2–4 chars) | HZ5, SK7, NK3, FM4, SHF… |
| `city_code` | current selector state | ISB / LHR |
| `source_slot` | button position constant per placement | hero · deprow-[date] · sticky · footer · faq |

Rules: human-readable (customers see it — it must not look like tracking spyware; the parenthetical reads like a booking reference), tokens registered in the central token registry sheet (Blueprint §9), reps copy the token into the inquiry log on first reply. Buttons on OTHER page types referencing this tour use their own page token (e.g., `via hunza-vs-skardu`) per the registry — this spec only governs tour-page buttons.

---

# 8. ITINERARY SECTION

| Field | Type | Rules |
|---|---|---|
| `ItineraryDay.day_number` | int | — |
| `ItineraryDay.title` | text | "Day 2 — Chilas to Hunza via Rakaposhi viewpoint" |
| `ItineraryDay.body` | rich text, 60–120 words | Concrete: places, drive segments, what's included that day. No filler prose. |
| `ItineraryDay.meals_included` | tags | B / L / D chips per day |
| `ItineraryDay.overnight` | text | "Hotel in Karimabad (category per package — named on your booking confirmation)". Hotel names NEVER in page content; category tier only. |
| `ItineraryDay.day1_city_variant` | optional rich text | If set, Day 1 body swaps with selector city (handles Lahore overnight-travel day-1 difference). Only Day 1 may vary. |
| `ItineraryDay.jeep_flag` | boolean | Marks days involving jeep excursions → renders jeep icon + anchors to §9 disclosure. |
| `itinerary_disclaimer` | global constant, always rendered | "Sequence may adjust for weather or road conditions — safety decisions override the plan." Links /status/roads/. |

Display: Day 1 expanded, rest collapsed (accordion), "expand all" control. Each day is crawlable HTML regardless of collapse state.

---

# 9. INCLUSIONS / EXCLUSIONS + 10. JEEP CHARGES DISCLOSURE

**Inclusions** (`inclusions[]`, repeatable, icon + short line) and **Exclusions** (`exclusions[]`, same) render as two columns (desktop) / stacked with clear headers (mobile). Rules: concrete and complete — this section prevents disputes and is a trust asset. "Anything not listed in inclusions" is auto-appended as final exclusion line.

**Jeep Charges Disclosure — conditional block, spec-level rules:**
- Renders if `jeep_required = true` (Tour field). Auto-true if any ItineraryDay has `jeep_flag`.
- Fields: `jeep_track_name` ("Paras → Sharaan track"), `jeep_duration_note` ("~1–1.5 hrs each way"), `jeep_rate_note` (optional, seasonal RANGE only, pulled from the same source as /plan/jeep-tracks-and-charges/, with last-verified date; if unverified this field stays empty and only the policy line shows), `jeep_disclosure_text` (per-tour unique wording — the audit's anti-boilerplate rule; the POLICY is constant, the sentence is written fresh per tour).
- Constant policy line always present: jeep charges are paid locally to jeep operators, are not included in the package price, and are shared per jeep among passengers.
- Placement: within exclusions section AND anchored from every jeep-flagged itinerary day. Also echoed as one FAQ where relevant.
- The block links to /plan/jeep-tracks-and-charges/ ("how jeep costs work everywhere in the north").

---

# 11. REVIEWS PLACEMENT

- **Trust strip (top, §1 item 5):** star average + count for THIS tour ("4.9 ★ · 47 verified reviews") linking to the reviews section anchor. Hidden below a threshold (`min 5 reviews`) — showing "2 reviews" is worse than showing none; threshold admin-configurable.
- **Featured reviews section (mid-page):** 3 curated Review records: reviewer first name + city, trip + month ("Hunza 5-Day, October 2026"), 40–80 word excerpt, optional group photo (with permission flag required = true in the record before any photo renders). Selection is admin-curated per tour, auto-fallback to 3 most recent 5★ for this tour.
- **Link out:** "Read all [n] reviews →" to /reviews/ pre-filtered to this tour.
- Review source labelling honest ("via Google") — never present curated quotes as if independently hosted ratings.

# 12. TRUST BADGES

Single horizontal strip, small, near the top CTA — not a wall of icons:
1. Registration badge — "Registered tour operator · [reg no.]" linking /about/ (renders only when the registration field on /about/ is populated — no empty claims).
2. Review badge — stars + count (per §11 threshold).
3. Experience badge — "[n]+ departures on this route" where `route_departure_count` is an admin-maintained honest number, updated quarterly; hidden if unset.
4. "No hidden charges" badge → anchors to inclusions/exclusions + jeep disclosure.
Banned: fake security padlocks, award badges we didn't win, partner logos without partnership.

---

# 13. FAQs (per audit: 4–6, unique)

`FAQ.question` / `FAQ.answer` (≤80 words each). Rules: only questions NOT answered by page sections above; unique site-wide (checked against the central FAQ bank — the bank sheet marks each FAQ's single home URL); at least one FAQ per page addresses the top pre-sale objection logged by reps for this tour (fed from inquiry log quarterly — FAQs evolve from real questions). Accordion UI; full text in HTML. FAQPage schema on exactly these 4–6 (no schema inflation).

# 14. RELATED TOURS

3 cards: image, name, duration, "from" price (live, same fallback rules as §4), city chips. `related_tours[]` admin-curated (logic: 1 same-region alternative, 1 different-region same-traveller-type, 1 comparison bridge — e.g., Hunza page shows Skardu, Neelum, and Hunza+Skardu Combined). Auto-fallback: same `best_for_tags` overlap, most recent departures first. Card links fire `related_tour_click` event.

# 15. RELATED GUIDE LINKS

Compact link block, max 4, fixed slots:
1. Destination pillar — anchor: "Read the full [destination] travel guide" → /destinations/<place>/
2. Live status — "Check live [road/pass] status" → relevant /status/ page
3. One /plan/ page most relevant to this tour (packing for treks, family for family-tagged, altitude for high tours)
4. One /compare/ page featuring this tour
Anchor text follows Blueprint anchor governance (≤20% exact-match rule is managed at site level in the keyword map; these four slots use natural anchors by default).

---

# 16. SCHEMA REQUIREMENTS (JSON-LD, one graph per page)

- **TouristTrip** — name, description, itinerary (ItemList of ItineraryDay names), provider → Organization reference, touristType from `best_for_tags`.
- **Product + Offer(s)** — one Offer per upcoming Departure that has a price: price, priceCurrency PKR, availability mapped from seats_status (InStock / LimitedAvailability / SoldOut), validFrom. **If no priced departures exist, omit Offers entirely** — never emit price 0 or placeholder offers (spam-policy safety).
- **AggregateRating + Review** — only when review threshold met; values must match visible on-page content exactly (rating/count mismatches are a manual-action vector).
- **FAQPage** — the 4–6 on-page FAQs only.
- **BreadcrumbList** — matches visible breadcrumb.
- Organization is referenced by @id from the sitewide entity (defined once on homepage), not redefined per page.
- Validation is merge-blocking: no page ships with schema errors (Rich Results test clean).

# 17. SEO METADATA FIELDS

| Field | Rules |
|---|---|
| `seo_title` | ≤60 chars. Anti-templating rule (audit finding): title formulas must vary across the 16 tours — registry sheet tracks all 16 titles side-by-side; no two share the same syntactic pattern beyond 4 tours. Include primary keyword + one differentiator (duration, signature sight, or "Islamabad & Lahore departures"). |
| `meta_description` | 140–158 chars, includes a concrete detail + soft CTA ("WhatsApp us for dates"). Admin-editable, never auto-generated from first paragraph. |
| `canonical` | self, clean URL; `?from=` param canonicalized. |
| `og_title` / `og_description` / `og_image` | OG image = hero at 1200×630 with no text overlay (WhatsApp link previews are a primary share surface in Pakistan — the OG image IS marketing). |
| `slug` | locked at creation (`/tours/<slug>/`); changes require 301 + registry update. |
| Indexing | index,follow; all internal filter/param variants noindexed or canonicalized. |

---

# 18. MOBILE LAYOUT (majority of traffic — mobile decisions win conflicts)

- **Sticky bottom action bar**, all scroll positions: [WhatsApp] (60% width, primary) · [Call] · [Dates] (scrolls to §4). Hides while keyboard is open. This bar is expected to drive the plurality of conversions.
- First two viewports contain: H1, hero image, summary strip, from-price, next departure, primary CTA. Verified on a 360×740 viewport as an acceptance criterion.
- Accordions for itinerary + FAQs; inclusions/exclusions stacked with sticky mini-headers.
- Tap targets ≥44px; departure rows are full-width tappable.
- Performance budget (merge-blocking): LCP <2.5s and INP <200ms on mid-range Android, throttled 4G, tested from Pakistani network conditions; total JS on this template minimized — no chat widget script loads until CTA interaction (click-to-load).
- Image discipline: hero eager, everything else lazy with dimension attributes; gallery (if included) max 6 images, swipe, lazy.

# 19. CONVERSION TRACKING EVENTS (GA4)

| Event | Trigger | Params |
|---|---|---|
| `whatsapp_click` | any WA button | tour_code, city_code, source_slot |
| `call_click` | tel: taps | tour_code, city_code, source_slot |
| `callback_submit` | callback form success | tour_code, city_code, preferred_month |
| `departure_view_all` | calendar expand | tour_code |
| `city_toggle` | selector change | tour_code, to_city |
| `itinerary_expand_all` | control tap | tour_code |
| `review_readall_click` | reviews link | tour_code |
| `related_tour_click` | related card | from_tour, to_tour |
| `faq_open` | accordion open | tour_code, question_id |
| `scroll_50` (this template only) | 50% depth | tour_code |

`whatsapp_click`, `call_click`, `callback_submit` are marked GA4 key events and feed the revenue-per-URL join (Blueprint §9). Event schema is registry-documented so names never drift.

---

# 20. ADMIN-EDITABLE FIELDS (consolidated CMS spec)

**Design principle:** ops staff update departures, prices, and seat status from a phone in under 2 minutes; nothing operational requires a developer.

**Tour record:** name · tour_code (registry-unique) · slug (locked) · hero_h1 · seo_title · meta_description · og fields · hero_media + caption · summary_bullets · best_for_tags · difficulty_level · physical_note · altitude max/flag · departure_cities (ISB/LHR/both) · pickup_points per city · travel_format_note_lhr · inclusions[] · exclusions[] · jeep_required + jeep fields (track, duration, rate_note+verified_date, disclosure_text) · route_departure_count · sla_promise_toggle · related_tours[] · related_guide_links (4 slots) · featured_review_ids[] · faq set (4–6) · tour_leads[] · status (draft/live/paused — paused shows "not currently running; message us" instead of departures).

**Departure record (the daily-touched object):** date · city · price_per_person · seats_status (+ seats_left) · notes. Bulk-add UI for a season's calendar. Past dates auto-archive.

**Review record:** name, city, tour, trip month, excerpt, photo + permission flag, source, featured flag.

**Global constants (single source, not per-page):** itinerary disclaimer · jeep policy line · WhatsApp numbers per city · phone numbers per city · review display threshold · SLA promise text.

**Guardrails baked into admin:** price fields numeric-only with confirmation on values >20% different from the tour's median (fat-finger protection) · seats_left required when status = Limited · publishing blocked if any required field empty · every save stamps modified-by + date (feeds freshness reporting).

---

# ACCEPTANCE CHECKLIST (merge-blocking, per page)

☐ One URL, no city variants, `?from=` canonicalized ☐ First-two-viewports content verified at 360×740 ☐ No hardcoded price/date/hotel anywhere ☐ All fallback states render correctly (no departures / no price / <5 reviews / paused tour) ☐ Schema validates clean; ratings match visible content; no Offers without real prices ☐ All 10 events fire with correct params ☐ WA prefill matches token registry ☐ LCP/INP budget passes on throttled 4G ☐ Jeep disclosure present + unique wording where jeep_required ☐ FAQ uniqueness verified against central bank ☐ Breadcrumb + related-link slots populated ☐ Entry created in freshness register if any dated claims present.
