# How to add Clay's real photos

The site currently uses branded **placeholders** everywhere a real job photo should go. Swapping
them in is quick.

## 1. Drop the photos in

Put the image files in `public/work/`. Use lowercase, hyphenated names, e.g.:

```
public/work/lawn-care.jpg
public/work/landscaping.jpg
public/work/snow-removal.jpg
public/work/hero.jpg
public/work/crew.jpg
public/work/gallery-1.jpg ... gallery-9.jpg
```

Optimize before committing (resize to ~1600px wide, export as JPG/WebP, keep under ~400 KB each).

## 2. Replace the placeholder with a real image

Anywhere you see:

```tsx
<ImagePlaceholder label="Lawn Care — Clay's photo" aspect="aspect-[4/3]" />
```

swap it for a Next.js image:

```tsx
import Image from 'next/image';

<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-brand-900/10">
  <Image src="/work/lawn-care.jpg" alt="Freshly mowed lawn with crisp edging"
         fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
</div>
```

## Where the placeholders live

| File | Placeholder(s) |
|------|----------------|
| `app/page.tsx` | Hero image, "Why us" crew photo |
| `app/services/page.tsx` | One per service (Lawn Care, Landscaping, Snow Removal) |
| `app/about/page.tsx` | Owner / crew photo |
| `app/gallery/page.tsx` | 9 gallery tiles (driven by `GALLERY` in `lib/content.ts`) |

## Reminder

All text, services, testimonials, phone, and email are in **`lib/content.ts`** — edit there, not
in the page files.
