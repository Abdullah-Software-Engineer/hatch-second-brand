# Hatch Second Brand

A Next.js marketing website for "Digitally Hatch" - a digital agency offering web development, AI integration, and digital marketing services.

## Architecture

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v3 + PostCSS with autoprefixer
- **Animation**: Framer Motion, React Fast Marquee
- **Icons**: React Icons

## Project Structure

```
app/                    # Next.js App Router pages and layouts
  layout.tsx            # Root layout
  page.tsx              # Home page
  about/                # About page
  blog/                 # Blog listing and detail pages
  contact/              # Contact page
  projects/             # Projects listing and detail pages
  services/             # Services listing and detail pages
  sections/             # Reusable page sections
  components/           # Reusable UI components
lib/                    # Utility functions, constants, and data
public/                 # Static assets (images, fonts)
```

## Development

- **Port**: 5000 (configured via workflow)
- **Host**: 0.0.0.0 (required for Replit preview)
- **Command**: `npm run dev -- -p 5000 -H 0.0.0.0`

## Setup Notes

- Tailwind CSS was downgraded from v4 to v3 to fix a Turbopack compatibility issue where generated `mask-[url(...)]` utilities were incorrectly resolved as module imports
- `postcss.config.mjs` uses `tailwindcss` + `autoprefixer` (v3 style)
- `allowedDevOrigins` set to `*.replit.dev` and `*.pike.replit.dev` for Replit proxy compatibility

## Typography Scale

Responsive heading sizes used across the site:

- **Hero H1 (main pages)**: `text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px]`
- **Inner page H1 (service/project detail)**: `text-[26px] sm:text-[30px] md:text-[38px] lg:text-[44px] xl:text-[50px]`
- **Section H2**: `text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px]`
- **Sub H3 (WhatWeDo items)**: `text-[22px] md:text-[26px] lg:text-[30px]`
- **Inline hero images**: `w-[48px] h-[36px]` up to `xl:w-[90px] xl:h-[66px]` with proportional rounded corners
- **Stat numbers**: `text-4xl md:text-5xl lg:text-6xl`

## Animations

Framer Motion entrance animations applied site-wide using a consistent pattern:

- **Hero sections** (Home, About, Services, Blog, Projects, Contact, BlogDetail): `containerVariants` (staggerChildren: 0.12, delayChildren: 0.1) + `itemVariants` (opacity 0→1, y 30→0) + `imageVariants` (scale 0.8→1). Ease: `[0.22, 1, 0.36, 1] as const`.
- **Scroll sections** (Testimonials, ContactForm, OurLocations, FooterContact, ClientsSection, Home/Services header, WhatWeDo header): `whileInView` with `viewport={{ once: true, margin: '-60px' }}`, opacity/y entrance.
- **Variant typing**: Use `as const` on easing arrays in variant objects to satisfy Framer Motion TypeScript types.

## Key Features

- **Project detail hero**: Uses `ProjectDetailHero` component with per-project title styling (purple accent text + inline circular icons between title words). Supports `iconSrc` and `iconSrc2` for dual inline icons. Contact Us button removed from project detail pages.
- **Blog sidebar sticky**: Fixed by removing `overflow-x: clip` from `html` element (kept on `body` only) in `globals.css`.
- **Services dropdown**: Desktop hover + mobile accordion in Header.tsx linking 7 service detail pages.

## Deployment

- Target: Autoscale
- Build: `npm run build`
- Run: `npm run start`
