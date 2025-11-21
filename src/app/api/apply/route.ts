import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const coverLetter = String(form.get('coverLetter') || '').trim();
    const message = String(form.get('message') || '').trim();
    const website = String(form.get('website') || '').trim(); // honeypot
    const cv = form.get('cv') as File | null;

    if (website) return NextResponse.json({ ok: true });
    if (!name || !email) return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 500 });
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (cv) {
      const buf = Buffer.from(await cv.arrayBuffer());
      // Basic limit ~10MB
      if (buf.byteLength > 10 * 1024 * 1024) {
        return NextResponse.json({ ok: false, error: 'CV too large (max 10MB)' }, { status: 400 });
      }
      attachments.push({ filename: cv.name, content: buf });
    }

    const html = `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">Ny jobbansökan</h2>
        <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
        <p><strong>E‑post:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${coverLetter ? `<p><strong>Personligt brev:</strong><br/>${escapeHtml(coverLetter).replace(/\n/g,'<br/>')}</p>` : ''}
        ${message ? `<p><strong>Meddelande:</strong><br/>${escapeHtml(message).replace(/\n/g,'<br/>')}</p>` : ''}
      </div>
    `;

    // Use Resend test domain for testing
    // Once domain is verified, change to: "Rekrytering <no-reply@milanmatkonsult.com>"
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@bruxero984.resend.app";
    const toEmail = process.env.CONTACT_TO_EMAIL || 'aleksandar.kotevski@adamass.se';
    
    console.log('Sending application email:', { from: fromEmail, to: toEmail, hasAttachments: attachments.length > 0 });
    
    const result = await resend.emails.send({
      from: `Rekrytering <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: 'Ny jobbansökan via webbplatsen',
      html,
      attachments,
    });

    console.log('Resend result:', JSON.stringify(result, null, 2));

    if (!result.data) {
      const errorMsg = result.error?.message || 'Failed to send email';
      console.error('Resend error:', result.error);
      throw new Error(errorMsg);
    }

    console.log('Application email sent successfully! ID:', result.data.id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Apply form error:', e);
    const errorMessage = e instanceof Error ? e.message : 'Unexpected error';
    // Don't expose internal errors to client, but log them
    console.error('Full error details:', JSON.stringify(e, null, 2));
    return NextResponse.json({ 
      ok: false, 
      error: 'Kunde inte skicka ansökan. Försök igen senare.' 
    }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}


