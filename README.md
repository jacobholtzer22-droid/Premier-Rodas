# Rodas Premier Landscaping — Website

A premium marketing website for **Rodas Premier Landscaping** (Grand Rapids, MI) — lawn care,
landscaping, and snow removal. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Brand

- **Palette:** brand teal/cyan + gold accent, pulled from the crowned-eagle logo
- **Type:** EB Garamond (display) + Inter (body)
- **Logo:** `public/images/logo.png`

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services (Lawn Care · Landscaping · Snow Removal) |
| `/gallery` | Gallery / Our Work |
| `/reviews` | Reviews |
| `/service-area` | Service Area |
| `/about` | About |
| `/contact` | Contact + quote form |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Adding Clay's real photos

See **PHOTOS.md**. In short: drop photos into `public/work/`, then replace the
`<ImagePlaceholder />` components with `next/image` references. All copy and contact details live
in `lib/content.ts` (single source of truth).

## Deploy

Push to GitHub, then import the repo into Vercel. No environment variables required for the
current build. The contact form is currently front-end only — wire it to an endpoint (or the
Align & Acquire lead API) before launch.

---

Site by [Align and Acquire](https://www.alignandacquire.com).
