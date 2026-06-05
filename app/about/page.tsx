import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import { ABOUT_HIGHLIGHTS, BUSINESS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About | Rodas Premier Landscaping',
  description:
    'Locally owned and operated, Rodas Premier Landscaping delivers premium, 5-star lawn care, landscaping, and snow removal across West Michigan.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`${BUSINESS.tagline}.`}
        description="Rodas Premier Landscaping is a locally owned, owner-operated company built on a simple idea: treat every property like it's our own. That mindset shows up in the crisp lines, the thorough cleanups, and the way we communicate on every job."
      />

      {/* STORY */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="h-section mt-3">
              A West Michigan crew that takes pride in the details.
            </h2>
            <p className="lead mt-4">
              We specialize in creating and maintaining beautiful lawns and landscapes that elevate
              the look of your home or business. From precision mowing and clean edging to garden
              design, planting, and seasonal cleanups, our experienced team brings care and
              consistency to everything we do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              And when winter arrives, we keep your property safe with efficient, reliable snow
              plowing and de-icing. One trusted partner, all year round — fully licensed, insured,
              and committed to earning your five-star review.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Work with us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div>
            <Photo
              src="/images/gallery/rodas-025.jpg"
              alt="American flag over a freshly maintained lawn and landscaped bed at sunrise"
              aspect="aspect-[4/5]"
            />
          </div>
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="What sets us apart"
            title="The Rodas Premier difference."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_HIGHLIGHTS.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="card-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <Section>
        <figure className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            “He was very conscientious with his work and did a thorough job like it was his own
            yard. Very professional and kind.”
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold text-brand-700">
            — Mary, verified customer
          </figcaption>
        </figure>
      </Section>

      <CTASection />
    </>
  );
}
