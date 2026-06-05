import Image from 'next/image';

/**
 * A real, optimized job photo in the site's rounded card style.
 * Same aspect/className API as ImagePlaceholder so swaps are 1-liners.
 */
export default function Photo({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/3]',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`${aspect} relative w-full overflow-hidden rounded-2xl bg-brand-100 shadow-soft ring-1 ring-brand-900/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
