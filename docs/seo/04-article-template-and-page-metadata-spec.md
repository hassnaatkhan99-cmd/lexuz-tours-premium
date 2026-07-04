# Part 3 + Part 8 — Article Template & Per-Page Metadata Specification

Every article and page is produced against this exact structure so Codex can map fields directly to Next.js components.

---

## A. ARTICLE STRUCTURE (Part 3 — mandatory blocks)

```yaml
seo_title:            # ≤60 chars, primary keyword near front, no clickbait
meta_description:     # 140–158 chars, includes primary keyword + a concrete benefit + soft CTA
url_slug:             # lowercase, hyphenated, no dates, no stop-word bloat
h1:                   # One per page; may differ slightly from SEO title
intro:                # 80–130 words. Answer the search intent in the FIRST 2 sentences.
table_of_contents:    # Auto-generated from H2s (jump links)
body:
  - h2/h3 structure   # 6–10 H2s; H3s under each where needed
standard_sections:    # Every destination/tour article MUST include:
  - Travel Tips
  - Budget Tips        # cost FACTORS only — never invented prices
  - Photography Tips
  - Family Suitability # honest: which ages it suits, which it doesn't
  - Best Time to Visit # month-by-month reality, not "all year is great"
  - How to Reach       # from Islamabad AND Lahore where relevant
  - Road Conditions    # specific: road names, surfaces, known slide zones
  - Packing List       # season-specific
  - Weather            # by season, with temperature ranges
  - Things to Avoid    # honest warnings build E-E-A-T
faqs:                 # 10–15, question phrased as users search; FAQPage schema
internal_links:       # 4–8 with specified anchor text
external_links:       # 1–3 authority sources (PMD weather, PTDC, GB tourism dept, NHA road alerts)
ctas:
  book_now:           # button → tour package page
  whatsapp:           # wa.me deep link with pre-filled message naming the tour
  call:               # tel: link
related_tours:        # 3–4 cards
related_blogs:        # 3–4 cards
jeep_notice:          # REQUIRED where jeeps are needed (Sharaan, Fairy Meadows/Tattu,
                      # Siri Paye, Mahodand, Ratti Gali, Saif-ul-Malook, Kumrat interior,
                      # Deosai): "Jeep charges are not included in the package and are
                      # paid locally to jeep operators."
```

### Writing rules (Part 9 — Helpful Content compliance)
1. Write from real Pakistani travel-operator experience: name actual road sections (Hassan Abdal–Havelian motorway, Besham bypass status, Jaglot junction, Lowari Tunnel timings, Raikot Bridge), fuel stops, mosque/prayer breaks, family rest stops.
2. Primary keyword: H1, first 100 words, one H2, meta — and nowhere forced. Never repeat unnaturally.
3. Every claim a competitor could copy-paste is generic; every claim only an operator would know is authority. Bias hard toward the second.
4. Be honest about downsides (long drive hours, basic washrooms on jeep tracks, load-shedding, cold rooms). Honesty converts better and earns trust signals.
5. No invented prices, dates, or hotel names — say "see the live package page for current pricing and departures" and link.
6. Short paragraphs (2–4 sentences), scannable, but written in natural prose — not robotic bullet walls.

---

## B. PER-PAGE METADATA SPEC (Part 8 — fill for every page)

```yaml
page: <slug>
target_keyword:
secondary_keywords: []
schema:
  # Choose per page type:
  # Tour package page:   TouristTrip + Product (aggregateRating if reviews exist) + BreadcrumbList + FAQPage
  # Destination pillar:  TouristDestination + Article + BreadcrumbList + FAQPage
  # Blog article:        Article + BreadcrumbList + FAQPage
  # Comparison page:     Article + FAQPage + ItemList
  # City hub:            CollectionPage + ItemList + LocalBusiness (org-level TravelAgency on homepage)
  # FAQ hub:             FAQPage
  # Org-wide (homepage): TravelAgency (name, logo, address Islamabad/Lahore, telephone, sameAs socials)
internal_links:
  - { to: <slug>, anchor: "<descriptive anchor>" }
image_recommendations:
  # 5–8 per article: 1 hero (16:9), route-map graphic, 2–3 destination shots,
  # 1 seasonal shot, 1 activity/people shot. Original photos from actual tours
  # strongly preferred (E-E-A-T + Google Images traffic). WebP, ≤200KB, lazy-load below fold.
alt_texts:
  # Descriptive, natural, includes location: "Attabad Lake turquoise water with boats, Hunza Valley"
  # NOT keyword-stuffed: never "hunza tour hunza package hunza trip"
og_title:       # can be more emotive than SEO title, ≤88 chars
og_description: # ≤200 chars, benefit-led
og_image:       # hero image 1200×630
```

### Example filled spec (for article #1)

```yaml
page: /tours/hunza-tour-from-islamabad/
target_keyword: hunza tour from islamabad
secondary_keywords: [hunza valley tour package, islamabad to hunza trip, hunza tour itinerary, attabad lake tour, khunjerab pass tour]
schema: [TouristTrip, Product, BreadcrumbList, FAQPage]
internal_links:
  - { to: /destinations/hunza/, anchor: "complete Hunza Valley travel guide" }
  - { to: /compare/hunza-vs-skardu/, anchor: "still deciding between Hunza and Skardu" }
  - { to: /blog/hunza-cherry-blossom-season/, anchor: "cherry blossom season in Hunza" }
  - { to: /blog/karakoram-highway-road-conditions/, anchor: "current Karakoram Highway conditions" }
  - { to: /tours/from-islamabad/, anchor: "all tour packages from Islamabad" }
image_recommendations:
  - hero: Rakaposhi view from Karakoram Highway at golden hour
  - route map: Islamabad → Besham/Chilas → Hunza with overnight stops marked
  - Attabad Lake boating; Baltit Fort with Ultar Sar behind; Passu Cones; Khunjerab gate
alt_texts:
  - "Rakaposhi peak seen from the Karakoram Highway near Ghulmet"
  - "Boats on turquoise Attabad Lake in Hunza Valley"
  - "Baltit Fort in Karimabad with Ultar Sar peak in the background"
og_title: "Hunza Tour from Islamabad — Attabad, Khunjerab & the Karakoram Highway"
og_description: "Travel the KKH from Islamabad to Hunza with an experienced local team. Real itinerary details, honest road info, and easy WhatsApp booking."
```

---

## C. CTA COPY BLOCKS (reuse site-wide, vary wording per page)

**Book Now:** "Ready to see [destination] for yourself? Check live dates and pricing on our [tour name] page and reserve your seats in minutes."
**WhatsApp:** "Questions about this trip? Message our team on WhatsApp — we reply fast and we've actually done this route." → wa.me link, pre-filled: "Hi Lexuz, I'm interested in the [Tour Name]."
**Call:** "Prefer to talk? Call us and speak with someone who has travelled this route personally."

**Jeep notice block (verbatim, where applicable):**
> **Please note:** This destination requires a local 4x4 jeep for the final stretch. Jeep charges are **not included** in the package price and are paid directly to local jeep operators at standard local rates. Our team will guide you on arranging jeeps when you book.
