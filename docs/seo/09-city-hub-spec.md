# LEXUZ TOURS — CITY HUB PAGE SPECIFICATION v1.0
## Field-by-field template for Codex — Islamabad & Lahore departure hubs

**Applies to:** exactly 2 pages. One hub per departure city, forever. No third city hub without a Blueprint amendment; no per-tour city pages, ever (Never-Create list, Blueprint §3.8).

---

# 0. URL DECISION (must be locked before build)

You proposed `/tour-packages-from-islamabad`. The Master Blueprint locked `/tours/islamabad/`. Both can rank; only one can exist. My recommendation as architect:

**Use `/tours/islamabad/` and `/tours/lahore/`.** Reasons: (1) exact-match URLs add negligible ranking value in 2026 while pattern-consistent architecture strengthens sitewide crawl logic and breadcrumbs (Home → Tours → Islamabad reads as a clean hierarchy; a root-level keyword URL floats outside it); (2) the H1, title, and on-page content carry the "tour packages from Islamabad" relevance — the URL doesn't need to; (3) short URLs survive rebrands and re-architecture; keyword URLs calcify.

If you overrule this, the spec works identically at your URLs — but decide once, now, and record it in the slug registry. **Everything below assumes the Blueprint URLs.** Rule regardless of choice: if any legacy URL pattern exists or gets indexed, 301 to the canonical hub.

---

# 1. PAGE PURPOSE (one sentence each)

- **/tours/islamabad/** — win the map pack and organic result for every Islamabad-modified commercial query ("tour packages from islamabad", "one day trips from islamabad", "weekend trips from islamabad", "islamabad travel agency for northern areas") and route users into tour product pages in Islamabad context.
- **/tours/lahore/** — same for Lahore-modified queries, PLUS resolve the Lahore-specific objection (distance/overnight travel) that Islamabad users don't have.

These two pages are the **only** pages on the site allowed to target city-modified generic queries. The GBP for each city links here (not the homepage). Success metrics: map pack position, hub → tour-page click-through, whatsapp_click/callback events with hub source tokens.

**Anti-doorway test (the standard this page must pass):** could a user land here and get genuine, city-specific value that no other page provides — real pickup points, real departure logistics, real local answers? If any section could be copy-pasted between the two hubs with only the city name swapped, that section fails spec and must be rewritten. The two hubs share a *template*, never *content*.

---

# 2. SEO METADATA

| Field | Islamabad hub | Lahore hub | Rules |
|---|---|---|---|
| `seo_title` | "Tour Packages from Islamabad — Hunza, Skardu, Naran & More \| Lexuz" | "Tour Packages from Lahore — Northern Pakistan Trips \| Lexuz" | ≤60 chars target; the two titles must not share the same syntactic pattern verbatim (anti-templating rule) — note ISB lists destinations, LHR uses the category phrase. Admin-editable. |
| `meta_description` | 140–158 chars; must include: city name, 2–3 destination names, one trust element (reviews or departures count — real numbers only), soft CTA ("Message us on WhatsApp for dates."). Unique per city, hand-written. | | |
| `canonical` | self, clean URL. All UTM/param variants canonicalized. | | |
| `og_image` | City-specific: a real Lexuz group photo AT a departure point or en route from that city (e.g., coaster at the Islamabad pickup, Lahore group at an M-2 rest stop). 1200×630, no text overlay. Never share one OG image between hubs. | | |
| Indexing | index,follow. This page must appear in the tours sitemap with high priority. | | |

---

# 3. H1/H2 STRUCTURE (fixed skeleton, city-unique content)

- **H1** (one): "Tour Packages from Islamabad" / "Tour Packages from Lahore" — exact city-commercial head term; this is the one place exact-match is correct.
- **H2 sequence** (anchored, linkable):
  1. `#tours` — "All Tours Departing [City]"
  2. `#day-trips` — Islamabad only: "One Day Trips from Islamabad". Lahore replaces with `#weekend` — "Weekend Trips from Lahore" (reflecting real product reality: ISB has day-trip products; LHR's shortest viable format is a weekend — this asymmetry is itself anti-doorway evidence).
  3. `#weekend` (ISB) / `#travel-format` (LHR — "How Overnight Departures from Lahore Work")
  4. `#pickup` — "Pickup Points & Departure Times in [City]"
  5. `#why-lexuz` — trust section
  6. `#reviews` — "Reviews from [City] Travellers"
  7. `#faqs`
- H2 anchors are stable contract: GBP posts, /plan/ pages, and tour pages deep-link to them. Changing an anchor requires registry update + redirect handling for fragment links in GBP posts.

---

# 4. HERO SECTION

| Field | Rules |
|---|---|
| `hero_h1` | As above. |
| `hero_subline` | One sentence, city-specific, factual: ISB — "Group and private departures to Hunza, Skardu, Naran, Swat, Kashmir and more — leaving from Islamabad and Rawalpindi pickup points." LHR — "Overnight coach departures from Lahore to the northern areas — sleep on the motorway, wake up in the mountains." Admin-editable text field. |
| `hero_media` | ONE real photo (rules identical to tour page spec §2: AVIF/WebP ≤120KB, dimensions set, LCP-optimized, dated caption). Must be city-relevant, not a generic mountain shot — the mountain photos live on tour pages; the hub photo proves *local operational presence*. |
| `hero_trust_strip` | Auto-rendered: Google rating + review count for THIS city's GBP (threshold rule: hide below 5) · "[n]+ departures from [city]" (admin-maintained honest counter) · registration badge. |
| Hero CTA | Single WhatsApp button (see §10 for prefill) + phone number as text (the city's tracked number, matching GBP NAP exactly — see §12). |

---

# 5. CITY-SPECIFIC INTRO (the anti-doorway core)

`city_intro` — rich text, 120–180 words, hand-written per city, publish-blocked if either hub's intro shares >30% shingled text with the other (Codex: a simple similarity check in the CMS publish hook, or an editorial checklist item if that's over-engineered for v1).

**Required content, Islamabad:** departure geography (which sectors/Rawalpindi points we pick from), the route reality (M-15/Hazara Motorway as the gateway north), what's uniquely close (day trips exist BECAUSE Islamabad is 1–5 hrs from Galiyat/Kaghan/AJK edges), typical departure time bands (morning/overnight — bands, never specific clock times hardcoded; those live in Departure records).

**Required content, Lahore:** the honest distance framing (4–5 hrs further from the mountains — and how overnight M-2 travel absorbs it), what that means for trip formats (why 3-day ISB trips become 3-day-with-overnight-travel from LHR), pickup geography (which Lahore points), and one sentence on when flying-to-Islamabad-and-joining makes sense for premium customers. This paragraph is the single most important anti-doorway asset on the Lahore hub: it answers the question only Lahore searchers have.

---

# 6. AVAILABLE TOURS MODULE (`#tours`)

**Data source:** auto-generated from Tour records where `departure_cities` includes this hub's city AND status = live. Zero manual curation of the list itself (manual = stale = the #1 hub failure mode).

**Card fields (per tour):** image · tour name · duration · "from PKR [x]" = lowest upcoming Departure price *for this city* (fallback: "Price on request") · next departure date *for this city* (fallback: "Message for dates") · seat-status chip if Limited (real data only) · best_for tags.

**Card link behavior — the anchor system:** every card links to the tour product page **with city context**: `/tours/hunza-valley-5-day/?from=lahore#from-lahore`. The `?from=` param presets the tour page's city selector (tour page spec §5), the `#from-[city]` fragment lands the user at that tour's city departure section, and the tour page canonicalizes the param away. This is the mechanism that lets ONE tour URL serve city intent while hubs pass perfect context — implement it exactly.

**Ordering:** admin-set `hub_rank` per city (flagships first), fallback = soonest next departure. Tours with zero upcoming departures for this city sink to a collapsed "Also available on request from [city]" strip — visible (they still earn the city-query relevance) but not competing with bookable products.

**Sections within the module:** group cards under sub-headers matching real formats — ISB: Day Trips / Weekend Trips / 3–5 Day Tours / 6+ Day Expeditions. LHR: Weekend Trips / 3–5 Day / 6+ Day. These sub-headers + card lists are what makes the hub rank for "one day trips from islamabad" etc. without satellite pages.

---

# 7. DEPARTURE RULES + 8. PICKUP INFORMATION (`#pickup`)

**Departure rules block (`departure_rules`, rich text per city):** plain-language, city-specific operational truths — how boarding works, luggage rule (one bag + daypack), CNIC requirement, what happens if you're late (the "call the tour lead, catchable at next point en route" reality), children/ID notes. No clock times, no prices. Links /policies/ for the formal versions.

**Pickup points (`pickup_points[]`, repeatable per city, admin-editable):** point name (e.g., "Faizabad Metro stop", "Kalma Chowk") · area label · time_band note ("morning departures" / "overnight departures") · optional map link · `active` flag. Rendered as a list + optional embedded map (lazy-loaded, click-to-activate — maps JS is heavy and this page has a CWV budget).

**Single-source rule:** tour pages' per-city pickup blocks (tour spec §5) REFERENCE these same records — pickup points are defined once, rendered in two places. Codex: shared collection, not duplicated fields. When ops moves a pickup point, every page updates at once.

# 9. LAHORE vs ISLAMABAD TRAVEL DIFFERENCES

Rendered ONLY on the Lahore hub as `#travel-format` (ISB hub omits it — asymmetric sections are healthy). Content fields: `travel_format_body` (150–250 words: overnight coach format, M-2 → M-15 route, rest stops, what sleep quality to expect — honest, per brand doctrine), a small comparison strip (added travel hours, trip-format implications, "fly to Islamabad + join" option) — descriptive, no prices. One link to /compare/private-vs-group-tour/ and one to the ISB hub ("travelling from Islamabad instead? →" — the two hubs cross-link exactly once, here and in ISB's footer note, no more).

---

# 10. WHATSAPP TRACKING (hub-specific tokens)

Pattern per token registry: `Hi Lexuz! I'm looking at tours from [City] ([HUB-ISB|HUB-LHR] · [source_slot]).`

| source_slot | Placement |
|---|---|
| `hero` | hero CTA |
| `tours` | button under tours module ("Not sure which trip? Ask us") |
| `pickup` | pickup section ("Confirm your nearest pickup point") |
| `sticky` | mobile sticky bar |
| `faq` | after FAQs |

Note: tour CARDS on the hub do NOT carry WhatsApp buttons — they link to tour pages (where the tour-coded buttons live). Hub buttons are for undecided users; keeping token semantics clean means hub tokens = "browsing city inventory", tour tokens = "specific product intent". Reps learn to read intent from the token itself.

Events: `whatsapp_click` / `call_click` / `callback_submit` with `page: hub`, `city_code`, `source_slot` — same GA4 schema as tour pages, joined in the same revenue-per-URL report.

---

# 11. FAQ RULES (`#faqs`)

4–6 per hub, subject to the site-wide uniqueness bank. **Hub FAQs must be city-logistics questions only** — anything about a destination or a specific tour belongs on that page, anything about policy belongs on /policies/ or /help/. Qualifying examples: "Where exactly do Islamabad pickups happen?" · "Can you pick up from Rawalpindi?" · "Do Lahore trips really travel overnight — will I sleep?" · "Can I board at a motorway stop between Lahore and Islamabad?" · "Which tours don't run from Lahore, and why?" The two hubs may not share a single FAQ. FAQPage schema on exactly these.

# 12. LOCAL SEO SCHEMA + 13. GBP INTEGRATION

**Schema graph on each hub:**
- **TravelAgency** (LocalBusiness subtype) — @id-linked to the sitewide Organization; name, url (this hub), telephone (this city's tracked number), address (this city's office — street-level, matching GBP character-for-character), geo coordinates, openingHoursSpecification, areaServed, `hasMap` → the GBP Maps URL, sameAs → socials.
- **ItemList** of the tours module (position, name, url per card).
- **FAQPage** (the 4–6), **BreadcrumbList**.
- **NAP law:** name/address/phone strings on this page, in schema, on GBP, and in every citation are byte-identical. One registry sheet holds the canonical NAP strings; nobody types them from memory.

**GBP integration contract:**
- GBP website field → this hub with UTM (`utm_source=gbp&utm_medium=organic&utm_campaign=isb|lhr`) so hub sessions attribute to map-pack.
- GBP "products/services" entries deep-link to tour pages with `?from=` context; GBP posts deep-link to hub anchors (`#day-trips`, `#pickup`).
- The hub renders GBP-sourced trust data (rating, count) via the review pipeline — displayed numbers must reconcile with the live profile monthly (dashboard health row).
- Embedded map on the hub = our own GBP listing pin (click-to-load).

# 14. REVIEW PLACEMENT (`#reviews`)

3 curated Review records filtered `reviewer_city = this city` — the social proof logic is "people from YOUR city, on trips from YOUR city": name + area ("Ahmed, DHA Lahore"), tour + month, excerpt, source label ("via Google"). Fallback if <3 city-tagged reviews: most recent site-wide, WITHOUT city framing (never fake locality). Link: "Read all reviews from [city] travellers →" → /reviews/ filtered. AggregateRating schema here only if the displayed aggregate genuinely corresponds to on-page representation — otherwise ratings live in schema on /reviews/ and tour pages only (no double-counting inflation).

# 15. CTA SECTIONS

Three, no more: hero CTA (§4) · mid-page after tours module — "Not sure which trip fits your group? Tell us your dates and group size on WhatsApp — we'll suggest honestly, including when NOT to book a trip" (the brand-doctrine CTA; admin-editable copy) · post-FAQ full-width block — WhatsApp + callback form (same 4-field component as tour pages, city pre-set) + tracked phone. No exit-intent popups on hubs (transactional pages stay interruption-free; capture widgets belong to the informational layer per Blueprint §8).

# 16. MOBILE LAYOUT

- Sticky bottom bar (same component as tour pages): [WhatsApp] · [Call] · [Tours] (scrolls to `#tours`).
- First two viewports at 360×740: H1, hero image, trust strip, first tour card visible or peeking (scroll affordance).
- Tour cards: horizontal-scroll rows per format section (Day Trips row, Weekend row…) — spec'd because vertical card stacks of 14 tours bury the pickup/trust content; "view all" per row expands to grid.
- Lazy/click-to-load: map embed, review images. Performance budget identical to tour pages (LCP <2.5s, INP <200ms, throttled 4G, Pakistani network test) and merge-blocking.
- Anchor navigation chip row under hero (Tours · Pickups · Reviews · FAQs) — hubs are long; give thumbs a shortcut.

---

# 17. ADMIN-EDITABLE FIELDS (consolidated)

Per hub: seo_title · meta_description · og_image · hero_subline · hero_media + caption · city_intro · departure_rules · travel_format_body (LHR) · pickup_points[] (shared collection with tour pages) · hub_rank per tour · departures_counter · FAQ set · featured_review_ids or auto-fallback flag · CTA copy blocks · NAP reference (read-only from registry, not editable per-page — deliberately locked).

**Guardrails:** publish blocked if city_intro similarity check fails, if NAP mismatch vs registry detected, or if FAQ collides with the bank. Every save stamps modified-by/date.

---

# 18. ACCEPTANCE CHECKLIST FOR CODEX (merge-blocking)

☐ Exactly 2 hub URLs exist; slug registry updated; any legacy patterns 301'd
☐ Tours module auto-populates from Tour.departure_cities — add a test tour, confirm it appears/disappears without code changes
☐ Card links carry `?from=[city]#from-[city]` and tour pages consume both correctly (selector presets, fragment scrolls, canonical strips param)
☐ Pickup points render from the SHARED collection; editing one updates hub + all tour pages
☐ No hardcoded price/date/time anywhere; all fallback states verified (tour with no city departures → "on request" strip; no prices → "Price on request"; <5 reviews → trust strip hidden; <3 city reviews → non-localized fallback without city framing)
☐ city_intro similarity gate works (or editorial checklist item documented if deferred)
☐ NAP byte-identical: page text = schema = GBP = registry
☐ Schema graph validates clean: TravelAgency @id-linked to Organization, ItemList matches visible cards, FAQPage = visible FAQs only, no AggregateRating unless reconciled
☐ All events fire with page:hub + city_code + source_slot; tokens match registry; hub cards fire navigation (not whatsapp) events
☐ GBP website URLs carry correct UTMs; GBP post deep-links to anchors resolve
☐ Mobile: sticky bar, anchor chips, horizontal card rows, first-two-viewports check at 360×740
☐ CWV budget passes throttled-4G from Pakistani conditions; map + review images click/lazy-loaded
☐ Lahore hub contains `#travel-format`; Islamabad hub contains `#day-trips`; neither contains the other's section
☐ The copy-paste test: no section survives a city-name swap between the two hubs.
