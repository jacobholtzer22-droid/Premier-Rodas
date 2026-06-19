import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, MapPin, Phone, Check } from 'lucide-react';
import { Section, SectionHeader } from '@/components/Section';
import CTASection from '@/components/CTASection';
import VideoShowcase from '@/components/VideoShowcase';
import Photo from '@/components/Photo';
import { SERVICES, TESTIMONIALS, VALUE_PROPS, STATS, SERVICE_AREAS, BUSINESS } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 18%, #126a8e 0, transparent 45%), radial-gradient(circle at 88% 65%, #0aa7d0 0, transparent 50%), radial-gradient(circle at 70% 12%, #f0b524 0, transparent 30%)',
          }}
        />
        <div className="container-page relative z-10 grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-50/90 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-gold-300" />
              Serving Grand Rapids &amp; West Michigan
            </div>
            <h1 className="h-display mt-5 !text-white">
              A premier lawn,{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">year-round.</span>
            </h1>
            <p className="lead mt-5 max-w-xl !text-brand-50/80">
              Premium lawn care, landscaping, and snow removal that enhances the beauty and safety
              of your property in every season — delivered by a local crew that treats your yard
              like its own.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn-gold w-full sm:w-auto">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href={BUSINESS.phoneHref} className="btn-light w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" /> {BUSINESS.phone}
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-gold-300 sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-brand-50/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Photo
                src="/images/gallery/rodas-070.jpg"
                alt="Commercial-grade stand-on mower cutting crisp stripes across a large open property"
                aspect="aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white p-4 shadow-lift ring-1 ring-brand-900/5 sm:block">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold text-ink">“Like it was his own yard.”</p>
              <p className="text-xs text-ink/55">— Mary, verified customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-brand-900/5 bg-cream">
        <div className="container-page grid gap-4 py-6 text-center sm:grid-cols-3">
          {[
            'Locally Owned & Operated',
            'Licensed & Insured',
            '5.0-Star Rated Service',
          ].map((t) => (
            <div key={t} className="flex items-center justify-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
              <span className="text-sm font-medium text-ink/75">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title="Complete property care, all year long."
          description="From a sharp weekly cut to full landscape design and dependable winter snow removal — one trusted crew handles it all."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group card-soft flex flex-col transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{s.short}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* WHY US */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <Photo
              src="/images/gallery/rodas-050.jpg"
              alt="Rodas Premier crew member mowing crisp stripes into a large lawn"
              aspect="aspect-[5/4]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Why Rodas Premier</p>
            <h2 className="h-section mt-3">
              Local crew. Real care.{' '}
              <span className="text-brand-700">Premier results.</span>
            </h2>
            <p className="lead mt-4">
              We&apos;re not a faceless franchise. Rodas Premier is a locally owned, owner-operated
              business — so the person you talk to is the person who shows up and stands behind the
              work on your property.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {VALUE_PROPS.map((v) => {
                const Icon = v.icon;
                return (
                  <li key={v.title} className="flex gap-3">
                    <div className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{v.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">{v.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <VideoShowcase />

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Reviews"
          title="Trusted by neighbors across West Michigan."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card-soft flex flex-col transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/reviews" className="btn-outline">
            Read more reviews
          </Link>
        </div>
      </Section>

      {/* SERVICE AREA TEASER */}
      <section className="bg-brand-gradient py-16 text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            <MapPin className="h-4 w-4" /> Proudly local
          </div>
          <h2 className="h-section !text-white">Serving Grand Rapids &amp; the surrounding communities</h2>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {SERVICE_AREAS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/15"
              >
                <Check className="h-3.5 w-3.5 text-gold-300" /> {c}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/15">
              <Check className="h-3.5 w-3.5 text-gold-300" /> &amp; surrounding areas
            </span>
          </div>
          <Link href="/service-area" className="btn-light mt-2">
            See your area
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
