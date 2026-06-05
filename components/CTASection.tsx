import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/content';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 text-white sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 20%, #27c7ec 0, transparent 42%), radial-gradient(circle at 82% 80%, #f0b524 0, transparent 38%)',
        }}
      />
      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <p className="eyebrow !text-gold-300">Ready when you are</p>
        <h2 className="h-section mt-3 !text-white">Ready to transform your property?</h2>
        <p className="lead mt-4 max-w-2xl !text-brand-50/80">
          Whether it&apos;s weekly lawn care, a full landscape refresh, or reliable winter snow
          removal, we&apos;re ready to help. Reach out for a free quote — we usually respond the
          same day.
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="/contact" className="btn-gold w-full sm:w-auto">
            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
