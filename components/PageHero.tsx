import { ReactNode } from 'react';

/**
 * Shared dark header for interior pages. Reuses the brand-950 background and
 * the same radial "glow" treatment as the home hero so every page feels of a
 * piece. Uses the existing .eyebrow / .h-display / .lead component classes.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 18%, #126a8e 0, transparent 45%), radial-gradient(circle at 88% 70%, #0aa7d0 0, transparent 50%), radial-gradient(circle at 75% 10%, #f0b524 0, transparent 28%)',
        }}
      />
      <div className="container-page relative z-10 max-w-3xl">
        <p className="eyebrow !text-gold-300">{eyebrow}</p>
        <h1 className="h-display mt-3 !text-white">{title}</h1>
        {description && <p className="lead mt-5 !text-brand-50/80">{description}</p>}
        {children}
      </div>
    </section>
  );
}
