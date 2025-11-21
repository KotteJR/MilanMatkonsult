import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  company?: string; // visible field
  message: string;
  website?: string; // honeypot (hidden)
};

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactBody>;

    // Basic validation
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const website = String(body.website || "").trim(); // honeypot

    if (website) {
      // Honeypot triggered: pretend success
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    const subject = `Ny förfrågan via webbplatsen`;
    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.6; color:#111">
        <h2 style="margin:0 0 12px">Kontaktformulär</h2>
        <p style="margin:0 0 8px"><strong>Namn:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>E‑post:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p style="margin:0 0 8px"><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${company ? `<p style="margin:0 0 8px"><strong>Företag:</strong> ${escapeHtml(company)}</p>` : ""}
        <p style="margin:16px 0 8px"><strong>Meddelande:</strong></p>
        <div>${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
      </div>
    `;

    // Use Resend test domain for testing
    // Once domain is verified, change to: "Webbplats <no-reply@milanmatkonsult.com>"
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@bruxero984.resend.app";
    const toEmail = process.env.CONTACT_TO_EMAIL || "aleksandar.kotevski@adamass.se";
    
    console.log('Sending email:', { from: fromEmail, to: toEmail, subject });
    
    const result = await resend.emails.send({
      from: `Webbplats <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    console.log('Resend result:', JSON.stringify(result, null, 2));

    if (!result.data) {
      const errorMsg = result.error?.message || 'Failed to send email';
      console.error('Resend error:', result.error);
      throw new Error(errorMsg);
    }

    console.log('Email sent successfully! ID:', result.data.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    const errorMessage = err instanceof Error ? err.message : "Unexpected error";
    // Don't expose internal errors to client, but log them
    console.error('Full error details:', JSON.stringify(err, null, 2));
    return NextResponse.json({ 
      ok: false, 
      error: "Kunde inte skicka meddelandet. Försök igen senare." 
    }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


