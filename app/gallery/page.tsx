import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import GalleryGrid from '@/components/GalleryGrid';
import VideoShowcase from '@/components/VideoShowcase';
import { GALLERY_IMAGES } from '@/lib/gallery';

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
            A look at real lawns, landscapes, and properties we care for across West Michigan.
            New photos are added as we wrap each project.
          </p>
        </div>
      </section>

      <Section>
        <GalleryGrid images={GALLERY_IMAGES} />
      </Section>

      <VideoShowcase />

      <CTASection />
    </>
  );
}
