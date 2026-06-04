import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { Section } from '@/components/Section';
import CTASection from '@/components/CTASection';
import { SERVICE_AREAS, BUSINESS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Service Area | Rodas Premier Landscaping — Grand Rapids & West Michigan',
  description:
    'Rodas Premier Landscaping proudly serves Grand Rapids, Walker, Jenison, Hudsonville, Plainfield, Ada, Rockford, Wyoming, and Kentwood, MI.',
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-brand-950 py-20 text-white sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold-300">Service area</p>
          <h1 className="h-display mt-3 !text-white">Proudly serving West Michigan.</h1>
          <p className="lead mt-5 !text-brand-50/80">
            Based in the Grand Rapids area, we serve homeowners and businesses across the
            surrounding communities. Don&apos;t see your town? Reach out — we&apos;re often able to
            help nearby.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 ring-1 ring-brand-900/5 transition hover:ring-brand-200"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">{c}, MI</p>
                <p className="text-xs text-ink/55">Lawn · Landscaping · Snow</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-brand-900/10 bg-white p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Not sure if we cover your area?
          </h2>
          <p className="max-w-xl text-sm text-ink/65">
            Give us a call or send a quick message — we&apos;ll let you know right away and get you
            a free quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-outline">
              <Phone className="mr-2 h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
