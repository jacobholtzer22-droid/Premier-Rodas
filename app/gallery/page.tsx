import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { GALLERY } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Gallery — Our Work | Rodas Premier Landscaping',
  description:
    'See examples of our lawn care, landscaping, and snow removal work across Grand Rapids and West Michigan.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-950 py-20 text-white sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold-300">Our work</p>
          <h1 className="h-display mt-3 !text-white">See the difference for yourself.</h1>
          <p className="lead mt-5 !text-brand-50/80">
            A look at the properties we care for across West Michigan. New photos are added as we
            wrap each project.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <figure key={i} className="group">
              <ImagePlaceholder label={g.label} aspect="aspect-[4/3]" />
              <figcaption className="mt-2.5 flex items-center justify-between">
                <span className="text-sm font-medium text-ink">{g.label}</span>
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                  {g.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/55">
          Photos coming soon — these placeholders will be replaced with real job photos.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
