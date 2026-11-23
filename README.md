# Rajwada Rang — Local Fashion Store Website

A mobile-first React catalogue for a traditional clothing store in Rajwada, Indore. The site is designed as a **premium digital catalogue + WhatsApp-first sales tool** — no accounts, cart, checkout, database or backend.

> **Demo project:** the current store name, contact details, products, photographs and location copy are demo placeholders. Follow the CLIENT LAUNCH CHECKLIST below before handing this to a real shop owner.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router · Lucide React

## What is included

- Homepage with all requested sections in order
- `/shop` with category, occasion, search and sort filters stored in URL query params
- `/product/:slug` with gallery, indicative price range, WhatsApp availability CTA, reservation and delivery info
- `/visit`, `/about`, `/contact`, `/lookbook` and a 404 page
- Floating WhatsApp button on every page plus a mobile bottom bar
- English / हिन्दी language toggle for key UI strings
- Basic per-page SEO and optional LocalBusiness JSON-LD
- Responsive layouts, semantic HTML, focus states and reduced-motion support
- 30 clearly marked demo products, 8 featured categories, 6 lookbook items and 4 placeholder reviews

## Where to edit things

| What | File |
| --- | --- |
| Store name, phone, WhatsApp, address, hours, maps, Instagram, parking, delivery, video shopping, reservation, payments, owner, images | `src/data/store.ts` |
| Products and indicative prices | `src/data/products.ts` |
| Categories and occasions | `src/data/categories.ts` |
| Lookbook items | `src/data/lookbook.ts` |
| Placeholder reviews | `src/data/testimonials.ts` |
| UI translations | `src/context/LanguageContext.tsx` |
| WhatsApp links | `src/utils/whatsapp.ts` |
| SEO / JSON-LD | `src/utils/seo.ts` |
| Base HTML fallback title/description | `index.html` |
| Colours and fonts | `tailwind.config.js` |

## CLIENT LAUNCH CHECKLIST

Work through these in order. Keep `store.demoMode = true` until every demo item below has been replaced or verified.

1. **Replace store information** — edit `src/data/store.ts`: store name, description, area, city, state, pincode, owner, payments, delivery/reservation/video-shopping copy and announcement text.
2. **Replace WhatsApp number** — set `store.whatsapp` to the real digits-only number with country code (for example `919876543210`) and set `store.phone` to the real display number.
3. **Replace address/maps** — set the exact `address`, `googleMapsUrl` and `googleMapsEmbedUrl` for the real shop pin.
4. **Replace product catalogue** — edit `src/data/products.ts` with real names, slugs, categories, indicative prices, descriptions, tags and images.
5. **Replace product images** — put real WebP product photos in `public/products/`; keep matched `-sm.webp` variants if responsive sizes are used.
6. **Replace owner/store images** — overwrite `public/images/owner.webp`, `storefront.webp`, `interior.webp` and the lookbook images with real, permitted photographs; update `public/favicon.svg` if the client has a logo.
7. **Replace timings** — confirm `openingHours`, `weeklyOff` and any other visit-related copy with the shop owner.
8. **Verify parking information** — confirm every field under `parkingInformation` on ground, then set `verifiedDate` to the date it was checked.
9. **Add Google Business Profile** — set `googleBusinessUrl` only when the real profile exists.
10. **Add real reviews** — update `src/data/testimonials.ts` with reviews collected with permission. Do not invent ratings or testimonials.
11. **Add Instagram** — replace `instagramUrl` with the real profile URL.
12. **Disable demoMode** — set `store.demoMode = false` only after all demo notices and placeholders are gone.
13. **Enable structured data** — set `store.structuredDataEnabled = true` only after all business facts are accurate and verified.
14. **Run npm build** — run `npm run build` and confirm there are no TypeScript or Vite errors.
15. **Deploy** — publish the generated `dist/` folder to the client's hosting provider and verify the live WhatsApp links and maps link.

## Content truthfulness

Demo products, demo photographs and placeholder reviews are clearly labelled in the UI. No fake stock counts, discounts, ratings, awards or delivery guarantees are shown. Prices are indicative ranges only.

## Notes

- Images are locally stored WebP files (about 2.1 MB total) with 360px and 720px product variants for responsive loading.
- External font loading is limited to two Google Fonts; all icons are inlined via Lucide.
- No third-party Instagram widget or autoplay video is used.
