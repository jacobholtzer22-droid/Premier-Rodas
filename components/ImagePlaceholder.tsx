import { ImageIcon } from 'lucide-react';

/**
 * Branded placeholder shown wherever a real job photo will go.
 * Swap these out by dropping Clay's photos into /public/work and
 * replacing <ImagePlaceholder /> with <Photo src="/work/..." />.
 */
export default function ImagePlaceholder({
  label,
  className = '',
  aspect = 'aspect-[4/3]',
}: {
  label?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} relative w-full overflow-hidden rounded-2xl bg-brand-gradient ring-1 ring-brand-900/10 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/80">
        <ImageIcon className="h-8 w-8" />
        {label && <span className="px-4 text-center text-xs font-medium tracking-wide">{label}</span>}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 20%, #ffffff 0, transparent 35%), radial-gradient(circle at 80% 85%, #ffffff 0, transparent 30%)',
        }}
      />
    </div>
  );
}
