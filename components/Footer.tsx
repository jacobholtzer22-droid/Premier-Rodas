import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, SERVICE_AREAS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-950 text-brand-50">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Rodas Premier Landscaping logo"
              width={52}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              Rodas Premier Landscaping
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-100/70">
            {BUSINESS.blurb} Locally owned and operated, proudly serving Grand Rapids and the
            surrounding West Michigan communities.
          </p>
          <div className="mt-4 space-y-1 text-sm text-brand-100/80">
            <a href={BUSINESS.phoneHref} className="flex min-h-[44px] items-center gap-2.5 hover:text-white">
              <Phone className="h-4 w-4 flex-shrink-0 text-gold-300" /> {BUSINESS.phone}
            </a>
            <a href={BUSINESS.emailHref} className="flex min-h-[44px] items-center gap-2.5 break-all hover:text-white">
              <Mail className="h-4 w-4 flex-shrink-0 text-gold-300" /> {BUSINESS.email}
            </a>
            <div className="flex min-h-[44px] items-center gap-2.5">
              <MapPin className="h-4 w-4 flex-shrink-0 text-gold-300" /> {BUSINESS.area}
            </div>
            <div className="flex min-h-[44px] items-center gap-2.5">
              <Clock className="h-4 w-4 flex-shrink-0 text-gold-300" /> {BUSINESS.hours}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-2 text-sm text-brand-100/70">
            <li><Link href="/services#lawn-care" className="flex min-h-[44px] items-center hover:text-white">Lawn Care</Link></li>
            <li><Link href="/services#landscaping" className="flex min-h-[44px] items-center hover:text-white">Landscaping</Link></li>
            <li><Link href="/services#snow-removal" className="flex min-h-[44px] items-center hover:text-white">Snow Removal</Link></li>
            <li><Link href="/gallery" className="flex min-h-[44px] items-center hover:text-white">Our Work</Link></li>
            <li><Link href="/contact" className="flex min-h-[44px] items-center hover:text-white">Get a Free Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Service Area</h3>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 text-sm text-brand-100/70">
            {SERVICE_AREAS.map((c) => (
              <li key={c}>
                <Link href="/service-area" className="flex min-h-[44px] items-center hover:text-white">{c}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</p>
          <p className="inline-flex min-h-[44px] items-center">
            Site by{' '}
            <a href="https://www.alignandacquire.com" className="underline-offset-2 hover:text-white hover:underline">
              Align and Acquire
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
