# P-CORNEL TRADING LIMITED

> Premium gift card trading — built around trust, speed and simplicity.

A polished marketing website that routes all gift-card trades through
WhatsApp. Built with **Next.js 16**, **TypeScript 5**, **Tailwind CSS 4**,
shadcn/ui and **Framer Motion**. 100% static — no database, no API keys, no
env vars required. Deploy to Vercel in one click.

---

## Design identity — "Maison Noir"

| Token | Color | Usage |
| --- | --- | --- |
| Black | `#0A0A0A` | Strong text, dark sections, footer, primary buttons |
| Champagne Gold | `#C9A961` | Accents, highlights, borders, icons, active states |
| Ivory | `#F8F4EA` | Page backgrounds, cards, light content areas |

Typography: **Space Grotesk** (display) + **Inter** (body).

The gift cards themselves retain their authentic brand colors
(Amazon orange, Steam navy, iTunes pink-gold, etc.) — only the site theme
is Black + Champagne Gold + Ivory.

---

## Quick start (local)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build (Vercel-ready)

```bash
npm install
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, click **New Project** → import the repo.
3. Vercel auto-detects Next.js. Use the default settings:
   - **Build command:** `next build`
   - **Output directory:** (leave default)
   - **Install command:** `npm install`
4. Click **Deploy**. That's it. No env vars needed.

`vercel.json` is included and already pins these settings.

---

## Where to change things

| What | Where |
| --- | --- |
| WhatsApp number, email, hours, brand name | `src/lib/site-config.ts` → `siteConfig` |
| Gift card brands list + categories | `src/lib/site-config.ts` → `giftCards` |
| FAQ entries | `src/lib/site-config.ts` → `faqs` |
| Trust badges | `src/lib/site-config.ts` → `trustBadges` |
| Nav links | `src/lib/site-config.ts` → `navLinks` |
| Color palette / fonts | `src/app/globals.css` and `src/app/layout.tsx` |
| Section order on home page | `src/app/page.tsx` |

---

## Site sections (in order)

1. **Navbar** — text-only brand, mobile drawer, gold-accent WhatsApp CTA
2. **Hero** — bold headline + clean 4-card layered deck
   (Steam, Apple, Google Play, Razer Gold)
3. **Brand Strip** — horizontally scrolling brand marquee (no monetary rates)
4. **Trust Badges** — 4 promise cards
5. **How It Works** — connected 4-step flowing path
   (responsive: stair-step on desktop, vertical on mobile)
6. **Featured Cards** — 5 hero brands
   (Amazon, Steam, iTunes, Google Play, Razer Gold)
7. **Gallery** — filterable grid of 12 brands
8. **About** — mission/vision + 4 principle cards
9. **FAQ** — 6-question accordion
10. **Contact** — WhatsApp CTA + contact rows + quick message form
    (no visible phone number)
11. **Terms** — 4 core terms + verification/fraud notice
12. **Footer** — 4-column, no logo icon, no oversized phone-number strip
13. **Floating WhatsApp** button (bottom-right, appears after scroll)

---

## Gift card brands supported

Amazon · Steam · iTunes · Google Play · Razer Gold · PlayStation · Xbox ·
Sephora · eBay · Walmart · Nike · Target

All 12 cards are rendered as pure SVG/CSS — no image assets needed.

---

## Tech notes

- All WhatsApp actions open `https://wa.me/2347034886195` with a
  context-aware pre-filled message.
- The site is fully responsive (mobile-first), accessible, and SEO-ready
  with full OpenGraph + Twitter card metadata.
- No backend, no database, no Prisma calls. The `prisma/schema.prisma`
  file is intentionally minimal — remove it if you do not need Prisma.

---

© P-CORNEL TRADING LIMITED. All rights reserved.
