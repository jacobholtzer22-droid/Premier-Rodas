import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Quote / contact form handler for the Rodas Premier site.
 *
 * The site has no database of its own — it forwards leads to the Align & Acquire
 * CRM (the missedcall-ai app), which records the Contact + WebsiteLead and notifies
 * the business owner. Both the CRM URL and the business slug have sensible hard-coded
 * defaults so the form works with zero env config, but can be overridden per-deploy:
 *   MAIN_APP_URL          — base URL of the CRM (no trailing slash)
 *   MAIN_APP_BUSINESS_SLUG — Rodas's tenant slug in the CRM
 */
const MAIN_APP_URL = (process.env.MAIN_APP_URL || 'https://www.alignandacquire.com').replace(/\/$/, '');
const BUSINESS_SLUG =
  process.env.MAIN_APP_BUSINESS_SLUG || 'rodas-premier-lawn-snow-services-1780267646381';

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';
  const name =
    (typeof body.name === 'string' && body.name.trim()) ||
    [firstName, lastName].filter(Boolean).join(' ').trim();
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const rawMessage = typeof body.message === 'string' ? body.message.trim() : '';
  const smsConsent = Boolean(body.smsConsent);

  if (!name) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  if (!smsConsent) {
    return NextResponse.json(
      { error: 'Please agree to be contacted so we can follow up.' },
      { status: 400 }
    );
  }

  // Prepend the selected service to the message so it reaches the CRM lead notes.
  const message = [service ? `Service requested: ${service}` : '', rawMessage]
    .filter(Boolean)
    .join('\n');

  try {
    const res = await fetch(`${MAIN_APP_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessSlug: BUSINESS_SLUG,
        name,
        phone: phone || undefined,
        email: email || undefined,
        message: message || undefined,
        smsConsent,
      }),
    });

    if (!res.ok) {
      console.error('[contact] CRM forward failed:', res.status, await res.text().catch(() => ''));
      return NextResponse.json(
        { error: "We couldn't submit your request right now. Please call us instead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] CRM forward error:', err);
    return NextResponse.json(
      { error: "We couldn't reach our system. Please call us instead." },
      { status: 502 }
    );
  }
}
