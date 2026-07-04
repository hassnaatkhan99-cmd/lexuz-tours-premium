# LEXUZ TOURS — PREMIUM UI/UX DESIGN SPECIFICATION v1.0
## Based on a live review of lexuztours.com (homepage, tour product page, booking flow) — July 2026

**Scope discipline:** visual and experiential refinement only. No changes to booking logic, Supabase, admin, payment workflow, tour data, pricing, departure rules, SEO architecture, city-selector logic, anchors, sitemaps, robots, GA4/GSC. Where a finding touches *content* rather than pixels, it is flagged **[COPY FIX]** — these are text swaps inside existing components, not logic changes, and they are included because no amount of styling can make duplicated boilerplate feel premium.

**The overall diagnosis, honestly:** the site's bones are good — the architecture from our specs is visibly implemented (city selector, anchors, jeep disclosure, source-coded WhatsApp links, sticky bar). What makes it feel like a template rather than a brand is: (1) repetition — the same sentences, the same cards, the same taglines appearing multiple times per page; (2) density without hierarchy — everything is present but nothing is prioritized; (3) internal machinery leaking into customer-facing surfaces; (4) trust elements that undermine themselves. Premium is mostly subtraction.

---

# PART 1 — SECTION-BY-SECTION CRITIQUE

## 1.1 HEADER & NAVIGATION

**What is wrong.** The header carries 8 nav links + 4 icon links (call, WhatsApp, Instagram, Facebook) + a "Book on WhatsApp" button, and the call/WhatsApp pair then appears a *second* time immediately below (a duplicate contact strip renders on every page). That's 14+ interactive elements before the page begins.

**Why it feels unprofessional.** Crowding signals indecision. Duplicated contact links signal a component pasted twice rather than designed once. Social icons (Instagram, Facebook) in a header compete with the one action that earns money.

**How premium companies solve it.** Airbnb's header has 3–4 elements. Booking.com puts one primary action right-aligned. Nobody premium puts social icons in the header — social lives in the footer; the header is for navigation and one conversion action.

**What Codex should build.**
- Header contains exactly: logo (left) · 5 nav items (Tours, Destinations, Price List, Reviews, Contact) · one primary button ("Book on WhatsApp", brand-green, right-aligned). Corporate and University move under a "Tours" dropdown (or into the Tours index page sections) — they are segment products, not top-level destinations for most visitors.
- Remove Instagram/Facebook from the header entirely (footer keeps them). Remove the duplicated call/WhatsApp strip — the sticky mobile bar already owns persistent contact.
- Phone number: desktop shows it as text next to the button (tel-linked); mobile header shows only logo + hamburger + WhatsApp button.
- Sticky header on scroll with a subtle elevation shadow (shadow-2, §2.5) and reduced height (72px → 60px condensed).
- Mobile drawer: full-height, nav items at 18px/48px tap rows, contact block at the bottom of the drawer, no icons floating in the bar itself.

## 1.2 HERO (Homepage)

**What is wrong.** Generic slogan H1 ("Adventure Begins With Lexuz"), a decorative tagline ("Escape • Explore • Enjoy") that also repeats in the tour-page hero and the pre-footer CTA, and **three competing CTAs** (Explore Tours / Book Now / Book On WhatsApp).

**Why it feels unprofessional.** Three CTAs of equal weight means the design hasn't decided what it wants the user to do — measured conversion consistently drops when primary actions compete. A slogan-only H1 wastes the most valuable copy slot on the site. A tagline repeated three times per journey reads as filler.

**How premium companies solve it.** GetYourGuide and Klook lead with *what you can buy and from where* ("Tours from Islamabad & Lahore — fixed weekly departures") plus a single dominant action and a secondary ghost link. Stripe's rule: one hero, one job.

**What Codex should build.**
- H1 **[COPY FIX]**: value-first — "Northern Pakistan Tours from Islamabad & Lahore". Sub-line: fixed weekly departures + transparent pricing + WhatsApp support, one sentence.
- CTA hierarchy: primary = "Book on WhatsApp" (solid brand green); secondary = "Explore Tours" (outline/ghost). Delete the third button — "Book Now" duplicates the card-level and tour-page paths.
- The "Escape • Explore • Enjoy" tagline appears in at most ONE place sitewide (suggest: footer brand block) — everywhere else, delete.
- Hero image: one real Lexuz photograph (the branded-fleet images already on the site are genuinely good brand assets — a departure-morning shot with the branded coaster would beat any stock mountain), 40–55vh on mobile, subtle dark-to-transparent gradient overlay bottom 40% for text legibility, no carousel.
- Stats strip (see 1.9 for the credibility fix) moves *below* the hero as a slim band, not inside it.

## 1.3 TOUR CARDS

**What is wrong.** Cards compress seven data points into an unbroken visual run: departure-day line + title + region + duration + "Starting From" + price + "Per Person" + "View Details". The same tours also appear in multiple homepage sections (Swat Kalam and Hunza each render twice), and every card ends in an identical low-affordance text link.

**Why it feels unprofessional.** No visual hierarchy = the eye has to read everything to find anything. Duplicate cards on one page reads as inventory padding. "View Details" is the weakest CTA phrase in e-commerce.

**How premium companies solve it.** Booking.com/GetYourGuide cards have a strict scan order: image → title → one qualifier line → price anchored bottom-right in its own weight class → whole card clickable with a hover lift. Price is *the* secondary focal point after the image.

**What Codex should build.**
- Card anatomy (top→bottom): image (4:3, radius-2 top corners) with a small overlay chip top-left for duration ("5 Days") · body padding 16–20px · title (18px semibold, max 2 lines, ellipsis) · region (14px, ink-60) · departure schedule as a chip row (e.g., "Sat morning"), NOT a leading text line · divider space · bottom row: "From **PKR 30,000** / person" (price 18px bold brand-ink, qualifiers 12px ink-60) left, chevron affordance right.
- Entire card clickable (existing behavior preserved); hover: translate-Y −4px + shadow-2→shadow-3 + image scale 1.03 inside fixed frame, 200ms ease-out. Focus-visible ring for keyboard.
- Remove the "View Details" text button entirely — the card is the button; the chevron communicates it.
- Homepage de-duplication **[COPY FIX / curation]**: each tour appears ONCE. Restructure sections as: "Fixed Weekly Departures" (all multi-day, one grid) + "One Day Trips from Islamabad" (the three day trips). Two sections instead of three overlapping ones. (This changes which cards render where — curation, not logic.)
- Destination cards (the 3-item "Popular Destinations" row currently linking to the same tour pages as the cards above them): either give them a distinct visual language (full-bleed image, name overlay, taller ratio 3:4) or remove the section on the homepage until /destinations/ pillars ship — currently it duplicates the tour grid with less information. Recommendation: remove for now; reinstate when it can link to real destination guides.

## 1.4 CITY HUB PAGES

(Reviewed via the footer "Top Guides" links pattern — apply this spec to /hunza-tour-packages etc. and the future /tours/islamabad hubs.)

**What Codex should build (visual layer only, hub logic untouched):** same card component as 1.3 · anchor chip-row under the hub hero (Tours · Pickups · Reviews · FAQs) styled as pill buttons, horizontally scrollable on mobile · pickup points rendered as a clean two-column definition list with map-pin icons, not paragraphs · the hub hero uses the same gradient-overlay treatment as tour heroes for family resemblance.

## 1.5 TOUR PRODUCT PAGES

This page has the strongest structure on the site and three self-inflicted wounds:

**(a) Internal jargon leaks to customers.** The departures section literally displays: *"One canonical tour page serves both Islamabad and Lahore context."* That is a sentence from our SEO spec, rendered to travellers. **[COPY FIX — CRITICAL]** Replace with customer language: "Choose your departure city — same trip, two starting points." Audit every template string for architecture-speak ("canonical", "context", "workflow", "conversion").

**(b) Itinerary boilerplate.** Every one of the five day-blocks repeats the same ~70-word paragraph ("The Lexuz team keeps the group informed about road timing… goal remains to preserve the best possible travel experience"). Five identical paragraphs on one page is the single loudest "template site" signal to both users and quality raters. **[COPY FIX]** The repeated text renders ONCE as a short note above or below the itinerary ("How our days run: …"); each day-block keeps only its unique 2–3 sentences. Visually: day-blocks become an accordion (Day 1 open, rest collapsed — full text remains in DOM), each with day-number badge, 16px title, meals chips (B/D), overnight line, jeep-note icon-link where flagged.

**(c) Gallery mismatch.** The Hunza gallery shows Fairy Meadows and Skardu images. Wrong-destination imagery on a product page is a trust wound. **[COPY FIX / asset]** Gallery renders only destination-correct images; if fewer than 3 exist for a tour, render the hero image + fleet image instead of borrowing other valleys.

**Also build:**
- Booking card (top) becomes the visually dominant module: contained surface, shadow-2, radius-3, price at 28px bold, "per person · Islamabad" qualifier 13px, city selector as a proper segmented control (see §2.6 forms) — selected state solid brand-green with white text, unselected outline. Three CTAs currently equal → primary WhatsApp (solid), Book Now (secondary outline), Call (text link with phone icon). *Do not touch link targets, params, or tokens.*
- The trust trio ("Trusted operator / Transparent exclusions / Booking workflow") — currently three H2s with body lines — restyle as a compact 3-up icon strip (20px icons, 14px text), and retitle the third **[COPY FIX]**: "Booking workflow" is internal language → "Track your booking" ("Reference ID and live status after you submit").
- Inclusions/exclusions: two-column card pair, green check icons vs neutral minus icons (never red X — exclusions are honest, not alarming), jeep line links to the disclosure block.
- Jeep disclosure block: distinct but calm treatment — sand-tint background (§2.1), 1px border, info icon, radius-2. Not a warning-yellow alert; it's transparency, not danger.
- Sticky mobile bar (exists — refine): three slots [WhatsApp 55%·solid green] [Call·icon+label] [Dates→#departures]; 64px height incl. safe-area inset, top hairline border, shadow-3 upward; hide on keyboard focus. The current bare "#departures" link gets a proper "Dates" label.
- "Why choose this tour?" checklist and Tour Summary table: merge into one summary card in the right rail (desktop) to reduce page length; on mobile it sits after the itinerary.

## 1.6 BOOKING PAGE & FORMS

**What is wrong.** One flat run of 8+ fields (Name, Phone, Email, CNIC, Travelers, Emergency Contact, Pickup City, Pickup Location, Departure radio, Payment radio, upload). Both payment methods' account details render simultaneously. The receiving account displays a personal name ("Account Name: Hasnat Khaliq") with no framing. CNIC — a sensitive ID — is requested with zero reassurance. No visible field states, grouping, or progress cues in the markup.

**Why it feels unprofessional.** Long undifferentiated forms feel like paperwork and raise abandonment. Showing both accounts at once creates transfer-to-wrong-account errors. A bare personal account name at the exact moment of payment is the highest-anxiety pixel on the entire site — this is where Pakistani customers decide whether you're real. Asking for CNIC without explaining why reads as data-grabbing.

**How premium companies solve it.** Stripe's checkout doctrine: group fields into meaningful steps, show only what the current choice requires, and surround the payment moment with identity, security, and recourse signals. Booking.com labels every sensitive field with a one-line "why we need this".

**What Codex should build (presentation only — same fields, same submission, same statuses):**
- Visually group the existing form into 3 labeled sections with numbered step headers (styling, not a wizard — no logic change): **1. Your details** (Name, Phone, Email, CNIC) · **2. Trip details** (Travelers, Emergency contact, Pickup city/location, Departure) · **3. Payment** (method, account details, upload). Generous 32px inter-group spacing, 16px intra-group.
- Payment method as segmented control; **only the selected method's account details render** (conditional display of existing content — the accepted UI pattern, no workflow change).
- Account-details card gets trust framing **[COPY FIX + owner input]**: "Official Lexuz Tours receiving account" header, copy-to-clipboard affordance on the account number, and beneath it: "You'll receive a booking reference immediately, and our team verifies every payment within [X] hours — you can track status anytime on the Booking Status page." If the account genuinely is a proprietor personal account, add the honest line "Account is held by [Name], proprietor, Lexuz Tours & Adventures" — framing the fact is trust; hiding it is not. **[LEXUZ POLICY REQUIRED: confirm account framing wording with owner.]**
- CNIC field microcopy: "Required for hotel and checkpost registration on tour. Kept private." Emergency contact: "Only used during the trip."
- Upload zone: proper dropzone visual (dashed border radius-2, upload icon, "PNG/JPG, max [X]MB"), thumbnail preview + remove after selection, distinct uploading/success states (§2.9).
- Field states per §2.6; inline validation on blur (visual layer of existing validation); Submit button full-width mobile, right-aligned desktop, with loading spinner state and disabled-until-required-complete styling.
- Trip Summary card (right rail): sticky on desktop, collapsible summary bar on mobile above the form ("Hunza Valley · 5 Days · from PKR 30,000 ▾"); "Pending Verification" status renders as a neutral-blue chip with an info tooltip ("What happens after I submit?") — currently it reads as a cold system label at the moment of maximum commitment.
- Post-submit success state: see §2.9 — reference ID huge and copyable, next-steps timeline, WhatsApp button prefilled with the reference **(reuse existing token pattern; no new logic)**.

## 1.7 TRUST SECTIONS & REVIEWS

**What is wrong.** (a) The homepage "Why Choose Lexuz" section renders SIX cards with the *identical* description sentence repeated six times. (b) The stats bar claims "100,000+ Happy Travelers" alongside "500+ Successful Tours" — that arithmetic implies 200 travellers per departure; any thoughtful visitor (or competitor) will do that math. (c) The footer's public Quick Links include **"Admin"** — a link to the admin dashboard on every public page.

**Why it feels unprofessional.** Repeated placeholder text ×6 is the most visible template artifact on the site. Implausible numbers don't inflate trust — they *convert existing trust into suspicion*, and they contradict the brand doctrine ("the operator that tells you the truth"). A public Admin link looks amateur and invites probing of the login surface.

**How premium companies solve it.** Airbnb's trust modules each make ONE distinct, concrete claim. Numbers are conservative and verifiable. Admin surfaces are never linked publicly.

**What Codex should build.**
- **Remove the Admin link from the footer.** (Navigation edit, not a system change — the route itself is untouched.)
- "Why Choose Lexuz" → 4 cards max, each with a UNIQUE concrete sentence **[COPY FIX]**: Since 2018 ("Operating fixed weekly departures for seven years"); Own branded fleet ("You travel in Lexuz coasters, not rented mystery vehicles" — supported by the real fleet photos); Transparent pricing ("Public price list, Lahore supplements shown, jeep charges disclosed before you pay"); Real support ("WhatsApp answered by the team that runs the trips"). Icons 24px line-style, single accent color.
- Stats strip **[COPY FIX + owner verification]**: replace "100,000+ Happy Travelers" with numbers that survive arithmetic — e.g., "500+ departures · Since 2018 · 4.9★ rating · Own branded fleet". **[LEXUZ POLICY REQUIRED: owner confirms defensible traveller count; if it's ~15–25k, "15,000+ travellers" is MORE persuasive than an implausible 100k.]**
- Reviews: current initials-avatar cards are decent — refine with 15px/1.6 quote text, chip pair (destination + "Verified Trip") in brand-tint, and add the missing layer: a Google-rating badge linking to the GBP listing once review volume supports it. Fleet photos section: keep and elevate (it's the site's best trust asset) — larger imagery, one-line captions, radius-3.

## 1.8 FOOTER & CONTACT

**What is wrong.** Four link groups + duplicated contact icon rows (footer block AND floating bar render the same four links) + Admin link (above) + the brand tagline again. Contact page (from patterns observed) is a bare form.

**What Codex should build.** Four columns desktop / accordion-free stack mobile: Brand (logo, one sentence, social icons — the ONLY social placement sitewide, 20px monochrome ink-60 icons that adopt brand colors on hover: WhatsApp #25D366, Facebook #1877F2, Instagram gradient on hover only; flat single-color at rest keeps the footer calm) · Explore (tours/destinations/price list/reviews/blog) · Company (about, booking status, contact — Admin removed) · Contact (phone, email, full Rawalpindi address, Maps link, office hours **[owner input]**). 48px top padding, 13–14px links at 44px tap spacing on mobile, hairline divider above the © row. The floating contact bar renders only where the sticky tour bar doesn't (never both).

## 1.9 GLOBAL: TYPOGRAPHY, COLOR, SPACING, ICONS — diagnosed

Observed: heading case inconsistency (Title Case и sentence case mixed), decorative section-eyebrows everywhere ("Featured Tours", "Reviews", "Questions" — fine as a device, currently unstyled), price typography identical to body text, and no consistent icon family (brand-colored social glyphs sit next to line icons). All resolved by Part 2.

---

# PART 2 — DESIGN SYSTEM (tokens in words; Codex translates to the styling layer)

## 2.1 Color palette
- **Brand green (primary):** deep forest **#1B4D3E** — buttons, links, selected states, price emphasis. Hover shade #163F33; pressed #11332A.
- **Brand tint:** #E8F1EE — chip backgrounds, selected-row tints, jeep-disclosure surface base.
- **Accent (sparingly):** warm sand **#D9A441** — ratings stars, one highlight chip max per viewport. Never for buttons.
- **Ink scale:** ink-100 #14201B (headings) · ink-80 #33403A (body) · ink-60 #5C6B64 (secondary) · ink-30 #A9B5AF (placeholders/disabled) · line #E3E8E5 (borders/dividers) · surface #FFFFFF · canvas #F7F9F8 (page background — cards float on it).
- **Semantic:** success #1E7F4F · error #C0392B · info #2C6E9B · warning reserved for genuine safety notices only (never jeep disclosure).
- **WhatsApp #25D366 is reserved exclusively for WhatsApp actions** — it must never be the generic primary, or the brand dissolves into WhatsApp's.
- Contrast rule: all text ≥ WCAG AA (ink-60 is the minimum for text on white).

## 2.2 Typography scale (single family)
One variable font family with strong Latin + future Urdu support — **recommendation: Inter (or Plus Jakarta Sans) for UI/body; optional display serif (Fraunces) for H1/H2 only if the brand wants warmth — decide once.** Scale (size/line-height/weight): Display 40/1.15/700 (homepage H1; 32 on mobile) · H1 32/1.2/700 (page titles; 26 mobile) · H2 24/1.3/600 · H3 18/1.4/600 · Body 16/1.6/400 · Small 14/1.5/400 · Caption 12/1.4/500 (uppercase +0.06em tracking — this is the "eyebrow" style) · **Price 20/1.2/700 in brand green, "PKR" and "/person" at Small ink-60** — price gets its own token because it's the most-scanned string on the site. Casing law: headings sentence case sitewide; buttons Title Case; eyebrows uppercase caption.

## 2.3 Spacing & grid
4px base unit. Scale: 4·8·12·16·24·32·48·64·96. Section rhythm: 96px between homepage sections desktop, 64px mobile; 24px heading-to-content; card grid gap 24 desktop/16 mobile. Grid: 12-col, max-width 1200px, 24px gutters; content prose max-width 720px. Breakpoints: 640/1024. Mobile edge padding: 16px minimum, 20px preferred.

## 2.4 Border radius
radius-1 6px (chips, inputs) · radius-2 10px (buttons, small cards) · radius-3 16px (cards, modals, booking module) · radius-full (avatars, pills). One family, no mixing 4/8/12/20 randomly.

## 2.5 Shadows (elevation, cool-tinted, never gray mud)
shadow-1: 0 1px 2px rgba(20,32,27,.06) — resting cards · shadow-2: 0 4px 12px rgba(20,32,27,.08) — hover, sticky header · shadow-3: 0 12px 32px rgba(20,32,27,.14) — modals, sticky bar, active booking card. Rule: elevation communicates interactivity; static text sections get NO shadow.

## 2.6 Buttons, forms, controls
**Buttons:** Primary (solid brand green, white text, radius-2, 48px height mobile/44 desktop, 16px semibold, hover shade + shadow-2, pressed scale .98) · Secondary (1.5px brand-green outline, transparent, green text) · Tertiary (text + icon, no border) · WhatsApp variant (solid #25D366, white text + white WA glyph — the ONLY non-brand-green solid button allowed). Disabled: ink-30 on line-color. Max ONE primary per viewport.
**Inputs:** 48px height, radius-1, 1px line border, white surface; label above (14px medium ink-80), never placeholder-as-label; focus = brand-green border + 3px brand-tint ring; error = error-color border + 13px message with icon below; helper microcopy 13px ink-60. Segmented controls (city, payment): container radius-2 line-border; selected segment solid brand-green white-text; 44px height.
**Chips:** radius-full, 12–13px, brand-tint bg + brand-green text (informational) or line-border neutral (metadata).

## 2.7 Icons
One line-icon family sitewide (Lucide-class), 1.5px stroke, sizes 16/20/24 only, color inherits text (ink-60 default). Brand-colored icons permitted ONLY for: WhatsApp actions (#25D366) and footer-social hover states. No filled/line mixing; no emoji as icons.

## 2.8 Motion
Durations 150ms (state)/200ms (hover)/300ms (entrance). Easing ease-out; nothing bounces. Permitted: card hover lift, accordion expand, image scale-in-frame, sticky-bar slide-up, button press. Forbidden: parallax, auto-carousels, scroll-jacking, animated counters (a fake count-up on a credibility-questionable stat doubles the damage). `prefers-reduced-motion` honored globally.

## 2.9 States
**Loading:** skeleton screens (canvas-color blocks, subtle shimmer) for cards/summary — never spinners for content; spinners only inside buttons ("Submitting…"). **Empty:** every list has a designed empty state — icon 32px ink-30 + one sentence + one action (e.g., no Lahore departures → existing "confirmed by team" message styled as a proper empty-state card with WhatsApp action). **Success:** booking submitted → full-screen success panel: check icon in brand-tint circle, "Booking received", reference ID at 24px bold with copy button, 3-step vertical timeline (Submitted ✓ → Verification in progress → Confirmation on WhatsApp), primary WhatsApp CTA. **Error:** field-level inline; page-level via a single toast/banner pattern (error tint, icon, plain-language message, retry affordance); never raw technical strings.

---

# PART 3 — PHASE 3 UI IMPLEMENTATION PLAN

Order rationale: tokens must exist before components (everything else inherits them); revenue-adjacent surfaces before decorative ones; the booking page carries the most anxiety per pixel so it gets dedicated focus.

**Phase 3-zero (prerequisite, ships with 3A): Design tokens.** Implement §2 as the shared styling foundation + the icon family swap. Difficulty: Medium. Priority: P0 — everything below consumes it.

| Phase | Scope | Business impact | User impact | Difficulty | Priority |
|---|---|---|---|---|---|
| **3A — Header + Navigation** | §1.1: de-crowd header, kill duplicate contact strip, social→footer, nav consolidation, mobile drawer, sticky behavior. Plus footer Admin-link removal (one-line, do it here). | High — first impression on 100% of sessions; header quality is the fastest "premium vs template" tell. | High — clearer wayfinding, one obvious action. | Low–Medium | **P0** |
| **3B — Homepage** | §1.2 hero + CTA hierarchy, §1.7 trust fixes (6→4 unique cards, stats credibility, review polish), §1.3 section de-duplication, price-table restyle (zebra rows, sticky first column mobile, price token), tagline cull. | Very high — homepage is the brand statement; the ×6 duplicate text and 100k stat are the two most damaging artifacts on the site. | High — scannable, credible, decisive. | Medium | **P0** |
| **3C — Tour + Destination Cards** | §1.3 card component rebuild (hierarchy, hover, price token, chip system, whole-card affordance), applied everywhere cards render (home, /public-trips, hubs, related-tours). Destination-card decision executed. | High — cards are the product shelf; card quality directly moves click-through into tour pages. | High — comparison at a glance. | Medium (one component, many consumers) | **P1** |
| **3D — Tour Product Pages** | §1.5 all items: jargon purge, itinerary boilerplate collapse + accordion, gallery correctness, booking-card dominance, segmented city control, CTA hierarchy, jeep-block styling, inclusions/exclusions, sticky-bar refinement, rail consolidation. *All links, params, tokens, anchors untouched.* | Very high — this is where money decides; the jargon leak and boilerplate are actively costing trust today. | Very high — the page becomes half as long and twice as clear. | Medium–High | **P0** (the [COPY FIX] items in 1.5a–c are same-day fixes — do them immediately even ahead of full 3D) |
| **3E — Booking Experience** | §1.6 everything: visual grouping, conditional payment display, account trust framing, sensitive-field microcopy, upload dropzone, field states, summary card, success state. *Fields, validation logic, submission, statuses unchanged.* | Very high — last step before payment; every abandonment here is a lost verified booking. Trust framing at the account block is the single highest-leverage fix in this entire document. | Very high — anxiety→confidence at the commitment moment. | Medium–High | **P0** |
| **3F — Footer + Contact** | §1.8: footer restructure, social treatment, floating-bar de-duplication, contact page (split layout: form left / office card right with photo, map link, hours, response-time promise if SLA-true). | Medium — trust floor on every page; contact page matters for corporate/university buyers who vet before calling. | Medium. | Low | **P2** |

**Recommended execution order:** tokens+3A → 3D copy-fixes (same day) → 3B → 3E → 3D full → 3C → 3F. Each phase is a separate branch/PR against the acceptance rule below.

**Universal acceptance rule for every phase:** after implementation, click through hub-card → tour page → city selector → WhatsApp/Book Now/booking form → submit path, and verify every existing link target, URL param, WhatsApp prefill token, anchor, and GA4 event fires exactly as before. Visual PRs that alter any of those are rejected regardless of how good they look.

**Owner inputs required (blocking specific items only):** defensible traveller count (3B stats) · payment-account framing wording (3E) · office hours + response SLA truth-check (3F) · confirmation that day-trip photography exists per destination (3D gallery). Everything else proceeds without waiting.
