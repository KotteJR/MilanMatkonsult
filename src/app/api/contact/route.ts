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

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!process.env.RESEND_API_KEY) {
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

    await resend.emails.send({
      from: "Webbplats <no-reply@milanmatkonsult.com>",
      to: [process.env.CONTACT_TO_EMAIL || "info@milanmatkonsult.com"],
      reply_to: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
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


