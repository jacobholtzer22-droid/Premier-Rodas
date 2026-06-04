import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { BUSINESS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact | Rodas Premier Landscaping — Free Quotes',
  description:
    'Get a free quote for lawn care, landscaping, or snow removal in Grand Rapids and West Michigan. Call (616) 337-8944 or send us a message.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-950 py-20 text-white sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold-300">Contact</p>
          <h1 className="h-display mt-3 !text-white">Let&apos;s get you a free quote.</h1>
          <p className="lead mt-5 !text-brand-50/80">
            Tell us about your property and what you need. We usually respond the same day —
            and there&apos;s never any obligation.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-5 lg:items-start">
          {/* Details */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">Get in touch</h2>
            <p className="mt-2 text-sm text-ink/65">
              Prefer to talk it through? Reach us directly any of these ways.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon={Phone} label="Phone" value={BUSINESS.phone} href={BUSINESS.phoneHref} />
              <ContactRow icon={Mail} label="Email" value={BUSINESS.email} href={BUSINESS.emailHref} />
              <ContactRow icon={MapPin} label="Service area" value={BUSINESS.area} />
              <ContactRow icon={Clock} label="Hours" value={BUSINESS.hours} />
            </ul>

            <div className="mt-8 rounded-2xl bg-brand-gradient p-6 text-white">
              <p className="font-display text-lg font-semibold">Need it handled fast?</p>
              <p className="mt-1 text-sm text-brand-50/85">
                Call us directly for the quickest response.
              </p>
              <a href={BUSINESS.phoneHref} className="btn-light mt-4">
                <Phone className="mr-2 h-4 w-4" /> {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-wider text-ink/45">
          {label}
        </span>
        <span className="mt-0.5 block font-medium text-ink">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition hover:opacity-80">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
