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

## Key Features

- **Project detail hero**: Uses `ProjectDetailHero` component with per-project title styling (purple accent text + inline circular icons between title words). Supports `iconSrc` and `iconSrc2` for dual inline icons. Contact Us button removed from project detail pages.
- **Blog sidebar sticky**: Fixed by removing `overflow-x: clip` from `html` element (kept on `body` only) in `globals.css`.
- **Services dropdown**: Desktop hover + mobile accordion in Header.tsx linking 7 service detail pages.

## Deployment

- Target: Autoscale
- Build: `npm run build`
- Run: `npm run start`
