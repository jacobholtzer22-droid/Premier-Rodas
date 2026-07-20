'use client';

import { useEffect } from 'react';
import { trackCallClick } from '@/lib/analytics';

// Module-scope so the listener is registered exactly once for the app's
// lifetime, even across StrictMode double-mounts or route changes.
let registered = false;

function handleTelClick(e: MouseEvent) {
  const target = e.target as Element | null;
  const link = target?.closest?.('a[href^="tel:"]');
  if (link) trackCallClick();
}

/**
 * One delegated, capture-phase click listener that fires the Click-to-Call
 * conversion for any tel: link anywhere on the site — no per-link wiring.
 * Renders nothing; mounted once in the root layout.
 */
export default function CallTracking() {
  useEffect(() => {
    if (registered) return;
    registered = true;
    document.addEventListener('click', handleTelClick, true);
    // Intentionally not removed on unmount: the root layout persists for the
    // app's lifetime, and keeping the single listener avoids re-add churn.
  }, []);

  return null;
}
