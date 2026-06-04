import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services — Lawn Care, Landscaping & Snow Removal | Rodas Premier Landscaping',
  description:
    'Premium lawn care, landscaping, and snow removal services across Grand Rapids and West Michigan.',
};

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-brand-950 py-20 text-white sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold-300">Our services</p>
          <h1 className="h-display mt-3 !text-white">
            Premium care for every season.
          </h1>
          <p className="lead mt-5 !text-brand-50/80">
            One trusted, local crew for the work that keeps your property looking its best —
            spring, summer, fall, and through every Michigan winter.
          </p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        const reversed = i % 2 === 1;
        return (
          <Section key={s.slug} id={s.slug} className={i % 2 === 1 ? 'bg-cream' : ''}>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className={reversed ? 'lg:order-2' : ''}>
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="h-section mt-5">{s.title}</h2>
                <p className="lead mt-4">{s.long}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-8">
                  Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className={reversed ? 'lg:order-1' : ''}>
                <ImagePlaceholder label={`${s.title} — Clay's photo`} aspect="aspect-[4/3]" />
              </div>
            </div>
          </Section>
        );
      })}

      <CTASection />
    </>
  );
}
