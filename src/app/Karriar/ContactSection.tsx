"use client";

import { useState } from "react";
import { ArrowRight, Clock, Headphones, TrendingUp, Wrench, Upload } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);
  return (
    <section className="w-full bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-8 lg:px-12 items-start">
        {/* Left side info */}
        <div className="space-y-8">
          <h2 className="mt-6 text-3xl md:text-4xl font-medium text-[#010207]">
            Ansök här – snabbt <br /> och enkelt
          </h2>

          {/* Why work with us section */}
          <div className="space-y-6 md:mt-15">
            <h3 className="text-[20px] text-black">
              Varför jobba hos oss?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-gray-600" />
                <span className="text-[16px] text-gray-500/80">Flexibelt och lokalt</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones size={20} className="text-gray-600" />
                <span className="text-[16px] text-gray-500/80">Direktkontakt med kunder</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-gray-600" />
                <span className="text-[16px] text-gray-500/80">Tillväxt och utvecklingsmöjligheter</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench size={20} className="text-gray-600" />
                <span className="text-[16px] text-gray-500/80">Kollegor med teknisk spets</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Application Form */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const fd = new FormData(form);
            const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
            if (btn) btn.disabled = true;
            try {
              setStatus('idle');
              setSubmitting(true);
              const name = String(fd.get('name') || '').trim();
              const email = String(fd.get('email') || '').trim();
              if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setStatus('error');
                return;
              }
              const res = await fetch('/api/apply', {
                method: 'POST',
                body: fd,
              });
              const json = await res.json();
              if (json?.ok) { setStatus('ok'); form.reset(); } else { setStatus('error'); }
            } catch {
              setStatus('error');
            } finally {
              if (btn) btn.disabled = false;
              setSubmitting(false);
            }
          }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6"
        >
          {/* Namn */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              Namn
            </label>
            <input
              name="name"
              type="text"
              placeholder="Skriv in ditt namn"
              className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition"
            />
          </div>

          {/* E-postadress */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              E-postadress
            </label>
            <input
              name="email"
              type="email"
              placeholder="Skriv in din e-postadress"
              className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition"
            />
          </div>

          {/* Telefonnummer and CV Upload on same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] mb-3 text-black">
                Telefonnummer
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Skriv in ditt telefonnummer"
                className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition"
              />
            </div>
            <div>
              <label className="block text-[14px] mb-3 text-black">
                Ladda upp CV (PDF/docx)
              </label>
              <input name="cv" type="file" accept=".pdf,.doc,.docx,.rtf" className="w-full bg-[#F5F5F5] border border-gray-200 rounded-xl px-4 py-3 text-sm" />
            </div>
          </div>

          {/* Personal Letter */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              Personligt brev
            </label>
            <textarea
              name="coverLetter"
              placeholder="Skriv ditt personliga brev här..."
              rows={4}
              className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition resize-none"
            ></textarea>
          </div>

          {/* Drag/Drop Upload Area */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Message (Optional) */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              Meddelande (Optional)
            </label>
            <textarea
              name="message"
              placeholder="Skriv ditt meddelande här..."
              rows={3}
              className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl hover:bg-[#1a1a1a] transition disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? 'Skickar...' : 'Skicka ansökan'}
            <ArrowRight size={18} />
          </button>

          {status !== 'idle' && (
            <div aria-live="polite" className={`${status === 'ok' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border rounded-xl px-4 py-3`}>
              {status === 'ok' ? 'Tack! Din ansökan har skickats.' : 'Kunde inte skicka. Kontrollera uppgifterna och försök igen.'}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
