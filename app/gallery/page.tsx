import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
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
      <PageHero
        eyebrow="Our work"
        title="See the difference for yourself."
        description="A look at real lawns, landscapes, and properties we care for across West Michigan. New photos are added as we wrap each project."
      />

      <Section>
        <GalleryGrid images={GALLERY_IMAGES} />
      </Section>

      <VideoShowcase />

      <CTASection />
    </>
  );
}
