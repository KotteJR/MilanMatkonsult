"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);
  return (
    <section className="w-full bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-8 lg:px-12 items-start">
        {/* Left side info */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[34px] font-medium text-[#010207]">
            Kontakta Oss
          </h2>
          <p className="text-gray-500/80 leading-relaxed">
          Hör gärna av dig för offert, samarbete eller <br /> frågor om våra tjänster. Vi återkommer så snart <br /> som möjligt.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 md:mb-24">
            <div className="flex items-center gap-3">
              <div className="bg-white border-1 border-gray-600 rounded-lg p-1 w-6 h-6 flex items-center justify-center">
                <Check size={18} className="text-gray-600" />
              </div>
              <span className="text-[16px] text-gray-500/80">20+ års erfarenhet</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border-1 border-gray-600 rounded-lg p-1 w-6 h-6 flex items-center justify-center">
                <Check size={18} className="text-gray-600" />
              </div>
              <span className="text-[16px] text-gray-500/80">Snabb återkoppling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border-1 border-gray-600 rounded-lg p-1 w-6 h-6 flex items-center justify-center">
                <Check size={18} className="text-gray-600" />
              </div>
              <span className="text-[16px] text-gray-500/80">Skräddarsydda lösningar</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Phone Card - Compact */}
            <div className="bg-[#F5F5F5] rounded-2xl p-3 w-fit flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-[#646464]/10 rounded-xl p-3 flex-shrink-0">
                  <Phone size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-[14px] text-gray-600 mb-1">Telefon</p>
                  <p className="text-sm text-black">+46 735 13 31 65</p>
                </div>
              </div>
            </div>

            {/* Email Card - Natural width */}
            <div className="bg-[#F5F5F5] rounded-2xl p-3 w-fit flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-[#646464]/10 rounded-xl p-3 flex-shrink-0">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-[14px] text-gray-600 mb-1">E-post</p>
                  <p className="text-sm text-black">
                    info@milanmatkonsult.com
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card - Wider for full address */}
            <div className="bg-[#F5F5F5] rounded-2xl p-3 w-fit flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-[#646464]/10 rounded-xl p-3 flex-shrink-0">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-[14px] text-gray-600 mb-1">Adress</p>
                  <p className="text-sm text-black">
                    Borrgatan 6, 211 24 Malmö
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = Object.fromEntries(new FormData(form).entries());
            const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
            if (btn) btn.disabled = true;
            setStatus("idle");
            setSubmitting(true);

            if (!String(data.name || "").trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ""))) {
              setStatus("error");
              setSubmitting(false);
              if (btn) btn.disabled = false;
              return;
            }

            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  company: data.company,
                  message: data.message,
                  website: data.website,
                }),
              });
              const json = await res.json();
              if (json?.ok) {
                setStatus("ok");
                form.reset();
              } else {
                setStatus("error");
              }
            } catch (error) {
              setStatus("error");
            } finally {
              if (btn) btn.disabled = false;
              setSubmitting(false);
            }
          }}
          className="bg-[#FDFDFD] rounded-2xl p-8 border border-[#E9E9E9] shadow-[0_1px_2px_rgba(0,0,0,0.05)] space-y-6"
        >
          {[
            { name: 'name', label: "Namn", placeholder: "Skriv in ditt namn", type: 'text' },
            { name: 'email', label: "E-postadress", placeholder: "Skriv in din e-postadress", type: 'email' },
            { name: 'phone', label: "Telefon", placeholder: "Skriv in ditt telefonnummer", type: 'tel' },
            { name: 'company', label: "Company", placeholder: "Skriv in ditt företagsnamn", type: 'text' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-[14px] mb-3 text-[#111]">
                {field.label}
              </label>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full bg-[#F5F5F5] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition"
              />
            </div>
          ))}

          <input name="website" type="text" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label className="block text-[14px] mb-3 text-[#111]">
              Meddelande
            </label>
            <textarea
              name="message"
              placeholder="Skriv ditt meddelande här..."
              rows={7}
              className="w-full bg-[#F5F5F5] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl hover:bg-[#1a1a1a] transition disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? 'Skickar...' : 'Skicka Meddelande'}
            <ArrowRight size={18} />
          </button>

          {status !== 'idle' && (
            <div
              aria-live="polite"
              className={`${status === 'ok' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border rounded-xl px-4 py-3 text-sm`}
            >
              {status === 'ok'
                ? 'Tack! Ditt meddelande har skickats.'
                : 'Kunde inte skicka. Kontrollera uppgifterna och försök igen.'}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
