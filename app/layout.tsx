import type { Metadata } from 'next';
import { Inter, EB_Garamond } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Rodas Premier Landscaping — Lawn Care, Landscaping & Snow Removal | Grand Rapids, MI',
  description:
    'Rodas Premier Landscaping provides premium lawn care, landscaping, and snow removal across Grand Rapids and West Michigan. Locally owned, licensed & insured, 5.0-star rated.',
  metadataBase: new URL('https://www.rodaspremierlandscaping.com'),
  openGraph: {
    title: 'Rodas Premier Landscaping — Grand Rapids, MI',
    description:
      'Premium lawn care, landscaping, and snow removal across Grand Rapids and West Michigan. Locally owned, licensed & insured.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body className="bg-white font-sans text-ink">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
