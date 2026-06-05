'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const PAGE_SIZE = 12;

export default function GalleryGrid({ images }: { images: string[] }) {
  const [visible, setVisible] = useState(Math.min(PAGE_SIZE, images.length));
  const shown = images.slice(0, visible);
  const remaining = images.length - visible;

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((src, i) => (
          <div
            key={src}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-100 shadow-soft ring-1 ring-brand-900/5"
          >
            <Image
              src={src}
              alt={`Rodas Premier Landscaping project photo ${i + 1}`}
              fill
              loading={i < PAGE_SIZE ? 'eager' : 'lazy'}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-12 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, images.length))}
            className="btn-primary"
          >
            <Plus className="mr-2 h-4 w-4" />
            Load more photos
          </button>
          <p className="text-sm text-ink/60">
            Showing {visible} of {images.length}
          </p>
        </div>
      )}
    </div>
  );
}
