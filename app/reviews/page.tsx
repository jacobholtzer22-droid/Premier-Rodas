import type { Metadata } from 'next';
import { Star, Quote } from 'lucide-react';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import { TESTIMONIALS, BUSINESS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Reviews | Rodas Premier Landscaping',
  description:
    'Read what our customers across Grand Rapids and West Michigan say about Rodas Premier Landscaping.',
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="What our customers say.">
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-brand-50/80">
            5.0 average rating from happy West Michigan homeowners
          </span>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card-soft relative flex flex-col transition hover:-translate-y-1 hover:shadow-lift">
              <Quote className="h-8 w-8 text-brand-100" />
              <div className="mt-2 flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 font-semibold text-ink">— {t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-gradient p-8 text-center text-white sm:p-10">
          <h2 className="font-display text-2xl font-semibold">Worked with us recently?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-brand-50/85">
            We&apos;d love to hear how we did. A quick review helps other neighbors find a crew they
            can trust — and it means the world to us.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="btn-light mt-6"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
