# Big Rapids — Design Blueprint

## Overall direction & vibe
Industrial, confident, and editorial — an unapologetically heavy-industry brand presentation for a contract metal stamping manufacturer. The mood is dark, cinematic, and precise, targeting automotive OEMs, Tier 1 buyers, and engineering decision-makers who value scale, capability, and credibility. The personality blends factory-floor grit with modern brand-magazine typography: oversized headlines, tight tracking, red accent strikes, and clean technical numerics.

## Section-by-section breakdown

### Header (fixed overlay on hero)
Transparent header absolutely positioned over the hero. Left: client logo set on a near-white plate (`bg-white/95`) with small radius — a deliberate contrast badge against the dark photo. Right: horizontal nav with uppercase, wide-tracked links in white, hovering to brand red. Final nav item is a solid red `Request a Quote` button (no radius, square industrial feel). Below `lg`, nav collapses to a hamburger that toggles a full-width dark dropdown bordered with `white/10`.

### Hero
Full-viewport (`h-screen`, min 700px) image background of a plant floor with stamping presses. A vertical gradient overlay darkens top-to-bottom (55% → 40% → 95%) so content reads cleanly at the bottom. Content is bottom-aligned: a small uppercase eyebrow (`Contract Metal Stamping · Since 1958`), then a massive three-line headline `60+ Presses. / 2200 Tons. / One Standard.` where `Tons` carries a red underline bar. Below, a two-column row holds a supporting paragraph (left) and a red CTA button (right) with arrow glyph.

### Capabilities (01)
Dark section separated by a thin `white/10` top border. Eyebrow `01 — Capabilities` over an H2 `Built for the parts no one else will quote.` Below: a 4-up stat grid (2 cols on mobile, 4 on lg) rendered as cards on a `white/10` background with 1px gaps to create hairline dividers between tiles. Each tile shows an oversized number (60+, 2200T, 110"×300", 4), a 48px red rule, and an uppercase micro-label.

### Materials (02)
Deep oxblood (`#690A14`) full-bleed band. Eyebrow in muted white, followed by a flex-wrap row of outlined chips (`border-white/30`) listing material capabilities: Stainless Steel, Aluminum, High-Strength Carbon, Coated Steel.

### Product Categories (03)
Dark background. Eyebrow + H2 (`From decorative trim to structural assemblies.`). Below: an asymmetric image mosaic on a 6-column grid — two `col-span-3` tiles at 320px tall, then three `col-span-2` tiles at 288px tall. Each tile uses a duotone-style image, a bottom vertical gradient overlay, and bottom-left text block: red two-digit index eyebrow + product title. Hover scales image to 1.05 over 700ms.

### Certifications strip
Slightly darker bar (`#0a0d17`) with hairline top/bottom borders. Left eyebrow `Quality & Certifications`. Right: a row of bold uppercase wordmarks rendered as type only — IATF 16949, ISO 9001, ISO 14001, PPAP / APQP.

### Locations / Footprint (04)
Dark section. Eyebrow `04 — Footprint`. Display headline at clamp 5xl/8xl: `5 Plants.` in white followed by `2 States.` in oxblood. Below: two-column block with region eyebrows in red, city headings, and short descriptive paragraphs for Michigan (Big Rapids) and Kentucky (Mount Sterling).

### Careers
600px tall image band. Horizontal left-to-right gradient (dark → transparent) so left-side copy stays legible. Content stack: eyebrow, massive headline `Build things that move.`, paragraph, and a ghost CTA — white-outlined button that inverts to white-on-dark on hover.

### Contact (05)
Two-column layout on a near-black surface (`#0a0d17`). Left column: eyebrow, H2 `Tell us what you need to stamp.`, and intro paragraph. Right column: a darker card (`#0D111E`) with a thin border holding the form. Fields are white-filled inputs with dark text, uppercase tracked labels, red focus ring. Honeypot field hidden. Submit is a full-width red button.

### Footer
Thin top border. Logo plate on the left (matching header treatment), copyright + IATF certification line on the right.

## Typography
- Family: Inter (300–900) for both heading and body. CSS stack: `'Inter', sans-serif`.
- Headings: weights 700–800, very tight tracking (`-0.02em` to `-0.03em`), line-height 0.95–1.05. Hero H1 uses `clamp(3rem, 7vw, 6rem)`; section H2 uses `clamp(34px, 4.5vw, 56px)`.
- Stat numerals: 700 weight, `clamp(48px, 6vw, 80px)`, tabular numerals enabled globally via `font-feature-settings: "tnum"`.
- Body: 400–500, base 16–18px, line-height ~1.55, color muted gray.
- Eyebrows: 12px, uppercase, letter-spacing 0.2em, muted gray (or red when used as an index marker).
- Nav links: uppercase, wide tracking (`tracking-widest`), small (text-sm).

## Color palette
- `#0D111E` — primary background (deep blue-black). Surface/base.
- `#0a0d17` — secondary surface (slightly darker bands: certifications, contact, form card-adjacent).
- `#FFFFFF` — foreground for headings, primary text on dark.
- `#B2B6BA` — muted body text (cool gray).
- `#DA3426` — primary accent / brand red (CTAs, underlines, hover states, index numerals).
- `#690A14` — secondary accent / oxblood (materials band, hover state for red buttons, accent words).
- `rgba(255,255,255,0.1)` — hairline dividers and borders.
- `rgba(255,255,255,0.3)` — outlined chip borders.

## Spacing & layout
- Container: `max-w-[1400px]` centered with `px-6` horizontal padding across all sections; contact narrows to `max-w-[1100px]`.
- Vertical rhythm: major sections use `py-24` (96px); accent bands use `py-20`; small strips use `py-12` or `py-10`.
- Section internal spacing: header-to-grid `mb-12` to `mb-16`; eyebrow-to-h2 `mb-3`.
- Grids: 4-col stat grid (2 cols mobile → 4 cols lg) built with 1px gaps over a `white/10` background to simulate hairlines. Products grid is 6 columns on md+, mixing `col-span-3` and `col-span-2`. Contact is a 5-col split (2/3).
- Breakpoints (Tailwind defaults inferred): md 768, lg 1024. Mobile-first single column, two-column at md, full nav at lg.
- Buttons and inputs: square corners (no radius), generous padding (`px-8 py-4` for CTAs, `px-4 py-3` for inputs).

## Unique visual treatments
- Red underline strike: a 4px red bar absolutely positioned beneath a specific word in the hero H1 to brand a key statistic.
- Hairline grid dividers: the capabilities grid uses `gap-px` on a `bg-white/10` parent to render 1px lines between dark cards — a classic editorial/technical move.
- Short red rule (48px × 2px) under each stat number, acting as a tight underline accent.
- Two-tone gradient overlays on imagery: vertical for hero/product cards (dark bottom for text legibility), horizontal for the careers band (dark left).
- Duotone-ready imagery: filter recipe `grayscale(1) contrast(1.1) sepia(0.3) hue-rotate(330deg) saturate(2)` to push photos toward a red-tinted industrial mono.
- Logo plate treatment: white 95% opacity rectangle behind the logo to enforce contrast in both header and footer, matching the brand's industrial sign-like presentation.
- Square geometry throughout: no rounded corners on buttons, cards, chips, or inputs — reinforcing the metal-fabrication identity. The only radius is the tiny `rounded-sm` on the logo plate.
- Numeric typography: tabular figures sitewide and oversized stat displays push a data-forward, capability-as-spectacle feel.
- Hover motion: subtle 700ms image scale on product cards; color crossfade on nav and CTA buttons (red → oxblood).
- Oxblood as a tonal accent for full-bleed bands and emphasized words, creating a darker companion to the brighter red CTA color.
