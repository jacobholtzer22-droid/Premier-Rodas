// Google Ads conversion tracking helpers.
// All gtag calls go through here — never inline gtag in components.

export const GOOGLE_ADS_ID = 'AW-18214302564';

export const CONVERSIONS = {
  /** Contact / quote form submit */
  form: `${GOOGLE_ADS_ID}/034iCPef1tMcEOTmoO1D`,
  /** Click-to-call on any tel: link */
  call: `${GOOGLE_ADS_ID}/97nmCLT679McEOTmoO1D`,
} as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Send a Google Ads conversion. SSR-safe and defensive:
 * no-ops when there's no window or gtag isn't loaded, and never throws.
 */
export function fireConversion(sendTo: string): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', 'conversion', { send_to: sendTo });
  } catch {
    // Analytics must never break the page.
  }
}

export function trackFormConversion(): void {
  fireConversion(CONVERSIONS.form);
}

export function trackCallClick(): void {
  fireConversion(CONVERSIONS.call);
}
