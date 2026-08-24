# P-CORNEL TRADING LIMITED

> Africa's Premium Gift Card Exchange — a polished marketing website that
> routes all trades through WhatsApp.

Built with **Next.js 16**, **TypeScript 5**, **Tailwind CSS 4**, shadcn/ui
and **Framer Motion**. 100% static — no database, no API keys, no env vars
required. Deploy to Vercel in one click.

---

## Quick start (local)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

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
| Live rate ticker items | `src/lib/site-config.ts` → `rateTicker` |
| FAQ entries | `src/lib/site-config.ts` → `faqs` |
| Testimonials | `src/lib/site-config.ts` → `testimonials` |
| Trust badges (Why Choose Us) | `src/lib/site-config.ts` → `trustBadges` |
| Nav links | `src/lib/site-config.ts` → `navLinks` |
| Color palette / fonts | `src/app/globals.css` and `src/app/layout.tsx` |
| Section order on home page | `src/app/page.tsx` |

---

## Site sections (in order)

1. **Navbar** — sticky, with mobile drawer + WhatsApp CTA
2. **Hero** — bold asymmetric layout with floating gift cards
3. **Rate Ticker** — live horizontal scrolling rate marquee
4. **Trust Badges** — 4 promise cards
5. **How It Works** — 4-step vertical timeline
6. **Featured Cards** — asymmetric magazine grid of 6 hero brands
7. **Gallery** — filterable grid of all 20 brands + marquee strip
8. **About** — mission, vision, stats, 4 values
9. **Testimonials** — 4 trader reviews with star ratings
10. **FAQ** — 6-question accordion
11. **Contact** — WhatsApp CTA + contact cards + quick message form
12. **Terms** — 4 core terms + verification/fraud notice
13. **Footer** — 4-column with prominent WhatsApp number callout
14. **Floating WhatsApp** button (bottom-right, appears after scroll)

---

## Tech notes

- All 20 gift card designs are pure SVG/CSS — no image assets needed.
- All WhatsApp actions open `https://wa.me/2347034886195` with a
  context-aware pre-filled message.
- The site is fully responsive (mobile-first), accessible, and SEO-ready
  with full OpenGraph + Twitter card metadata.
- No backend, no database, no Prisma calls. The `prisma/schema.prisma`
  file is intentionally minimal — remove it if you do not need Prisma.

---

© P-CORNEL TRADING LIMITED. All rights reserved.
