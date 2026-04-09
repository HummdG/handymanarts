# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 14 (App Router) website for **Handyman Arts** — a professional handyman service in Notting Hill W11, London. Deployed on Vercel. The old Zyro/Hostinger static export lives in `www.handymanarts.co.uk/` and is untouched; the Next.js site is at the repo root.

## Commands

```bash
npm run dev     # Start dev server at localhost:3000
npm run build   # Production build (runs next build)
npm run start   # Start production server
npm run lint    # ESLint
```

## Stack

- **Next.js 14** App Router, all pages statically generated
- **Tailwind CSS v3** with custom design system in `tailwind.config.ts`
- **TypeScript** with `@/*` path alias → `./src/*`
- **Fonts:** Playfair Display (headings via `--font-playfair`) + Outfit (body via `--font-outfit`) via `next/font/google`

## Design System

Defined in `tailwind.config.ts`:
- Brand purple: `#673de6` (`brand-purple`), deep dark: `#0a0814` (`brand-deep`), warm cream: `#f9f6f1` (`brand-cream`)
- Font classes: `font-display` (Playfair Display), `font-sans` (Outfit)
- Utility classes: `container-site`, `section-padding`, `noise-overlay` (see `globals.css`)

## Architecture

```
src/
├── app/              # All routes (App Router)
│   ├── layout.tsx    # Root layout — fonts, GTM, Header, Footer, WhatsAppBubble
│   ├── page.tsx      # Homepage
│   ├── services/[slug]/page.tsx  # 11 dynamic service pages (generateStaticParams)
│   └── ...           # about, contact, portfolio, pricing, reviews, service-areas
├── components/
│   ├── layout/       # Header, Footer, MobileMenu, WhatsAppBubble
│   ├── home/         # Section components for homepage only
│   ├── services/     # ServiceCard, ServicePageTemplate (data-driven)
│   ├── shared/       # CTAButton, FAQAccordion, StarRating, JsonLd, etc.
│   ├── contact/      # ContactForm (mailto + WhatsApp, no backend)
│   └── analytics/    # GTMScript (GTM-MNWVDR5T injects GA4 + FB Pixel)
├── data/             # All static content (single source of truth)
│   ├── services.ts   # 11 services — drives dynamic routes, cards, service pages, sitemap
│   ├── siteConfig.ts # Business constants (phone, email, address, analytics IDs)
│   ├── testimonials.ts
│   ├── serviceAreas.ts
│   └── pricingTiers.ts
└── lib/
    ├── utils.ts      # cn(), buildWhatsAppUrl(), buildServiceWhatsAppMessage()
    └── jsonld.ts     # JSON-LD schema builders (LocalBusiness, Service, FAQ, etc.)
```

## Key Patterns

- **No backend.** Contact form opens a `mailto:` link with pre-filled body; no API routes.
- **All pages are static.** `generateStaticParams` pre-renders all 11 service pages at build time.
- **JSON-LD** injected per-page via `<JsonLd>` server component using builders in `lib/jsonld.ts`.
- **Images** use `next/image` with Unsplash URLs (whitelisted in `next.config.mjs`). Replace with real photos by swapping URLs in `src/data/services.ts` and portfolio items in `src/app/portfolio/page.tsx`.
- **Analytics** load entirely via GTM (GTM-MNWVDR5T). GA4 and Facebook Pixel are configured inside the GTM container — do not add separate script tags.
- **WhatsApp CTAs** use `buildWhatsAppUrl()` from `lib/utils.ts`; service pages pre-fill the service name via `buildServiceWhatsAppMessage()`.

## Adding a New Service

1. Add a `Service` object to `src/data/services.ts` (follow the existing interface)
2. The service page at `/services/[slug]` is generated automatically
3. The service card appears in `ServicesGrid` and `/services` overview automatically
4. The sitemap and contact form dropdown update automatically

## Vercel Deployment

No special config needed — Vercel auto-detects Next.js at the root. Set one environment variable:
- `NEXT_PUBLIC_SITE_URL=https://www.handymanarts.co.uk`
