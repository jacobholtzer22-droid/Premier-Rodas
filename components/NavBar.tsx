'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/content';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/5 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Rodas Premier Landscaping logo"
            width={48}
            height={48}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
          <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink md:text-xl">
            Rodas Premier
            <span className="block text-[0.65rem] font-sans font-medium uppercase tracking-[0.18em] text-brand-600">
              Landscaping
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`text-sm font-medium transition hover:text-brand-700 ${
                isActive(l.href) ? 'text-brand-700' : 'text-ink/70'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/80 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn-primary !py-2.5">
            Free Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-brand-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-900/5 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`flex min-h-[48px] items-center rounded-lg px-3 text-base font-medium transition hover:bg-brand-50 ${
                  isActive(l.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-ink/80 hover:text-brand-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <a href={BUSINESS.phoneHref} className="btn-outline flex-1 !py-2.5">
                Call Us
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary flex-1 !py-2.5">
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
