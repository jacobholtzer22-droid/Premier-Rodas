'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '@/lib/content';
import { trackFormConversion } from '@/lib/analytics';

const SERVICE_OPTIONS = [
  'Lawn Care',
  'Landscaping',
  'Snow Removal',
  'Seasonal Cleanup',
  'Not sure / Multiple services',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Ensures the Google Ads form conversion fires at most once per submission.
  const conversionFired = useRef(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: (data.get('firstName') as string) || '',
      lastName: (data.get('lastName') as string) || '',
      phone: (data.get('phone') as string) || '',
      email: (data.get('email') as string) || '',
      service: (data.get('service') as string) || '',
      message: (data.get('message') as string) || '',
      smsConsent: data.get('smsConsent') === 'on',
    };

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(result.error || 'Something went wrong. Please try again or call us.');
        setLoading(false);
        return;
      }

      // Success: client validation passed (required fields) AND backend accepted.
      // Fire the Google Ads form conversion exactly once.
      if (!conversionFired.current) {
        conversionFired.current = true;
        trackFormConversion();
      }

      setSubmitted(true);
    } catch {
      setError('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-soft text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Your request has been received. We usually respond the same day. For anything urgent,
          call us at{' '}
          <a href={BUSINESS.phoneHref} className="font-semibold text-brand-700">
            {BUSINESS.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-soft">
      <h3 className="font-display text-2xl font-semibold text-ink">Request a free quote</h3>
      <p className="mt-2 text-sm text-ink/70">
        Tell us a little about your property and what you&apos;re looking for.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" required />
        <Field label="Last name" name="lastName" autoComplete="family-name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-ink">
            What do you need help with?
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="mt-2 block w-full rounded-xl border border-brand-900/10 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Tell us more
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Property details, timing, anything we should know…"
            className="mt-2 block w-full rounded-xl border border-brand-900/10 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <label className="flex items-start gap-2 text-xs text-ink/60 sm:col-span-2">
          <input
            type="checkbox"
            name="smsConsent"
            className="mt-0.5 h-4 w-4 rounded border-brand-900/20 text-brand-700 focus:ring-brand-500"
          />
          <span>
            I agree to receive SMS messages from {BUSINESS.name} about my quote. Message and data
            rates may apply. Reply STOP to opt out.
          </span>
        </label>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? 'Sending…' : 'Send message'} <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 block w-full rounded-xl border border-brand-900/10 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
