import Image from 'next/image';
import { Section, SectionHeader } from '@/components/Section';

type Item =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string };

const GROUPS: { label: string; items: [Item, Item] }[] = [
  {
    label: 'Lawn & Landscaping',
    items: [
      { type: 'image', src: '/images/gallery/rodas-065.jpg', alt: 'Healthy, freshly striped lawn under a clear blue sky' },
      { type: 'image', src: '/images/gallery/rodas-001.jpg', alt: 'Fresh black mulch ring with a natural stone border around a tree' },
    ],
  },
  {
    label: 'Fall Cleanups',
    items: [
      { type: 'image', src: '/images/gallery/rodas-122.jpg', alt: 'Crisp fall landscaping with red-leafed shrubs and stone edging' },
      { type: 'image', src: '/images/gallery/rodas-145.jpg', alt: 'Fall property cleanup and lawn renovation in front of a home' },
    ],
  },
  {
    label: 'Snow Removal',
    items: [
      { type: 'video', src: '/videos/clip-03.mp4' },
      { type: 'video', src: '/videos/clip-04.mp4' },
    ],
  },
];

function Tile({ item }: { item: Item }) {
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-950 shadow-soft ring-1 ring-brand-900/10">
      {item.type === 'image' ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover"
        />
      ) : (
        <video
          className="h-full w-full object-cover"
          src={item.src}
          controls
          muted
          playsInline
          preload="metadata"
          loop
        />
      )}
    </div>
  );
}

/**
 * Seasonal work showcase, grouped in three labeled pairs:
 * Lawn & Landscaping (photos), Fall Cleanups (photos), Snow Removal (clips).
 * The snow clips are web-safe H.264; lawn/landscaping & fall use photos
 * because Clay's warm-season videos are HEVC (not browser-playable).
 */
export default function VideoShowcase() {
  return (
    <Section className="bg-cream">
      <SectionHeader
        eyebrow="See us in action"
        title="Real crews, real results."
        description="A look at our work across every season — lawn and landscaping, fall cleanups, and reliable snow removal."
        center
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {GROUPS.map((g) => (
          <div key={g.label}>
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-700">
              {g.label}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {g.items.map((item) => (
                <Tile key={item.src} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
