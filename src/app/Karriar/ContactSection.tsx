"use client";

import { ArrowRight, Clock, Headphones, TrendingUp, Wrench, Upload } from "lucide-react";

export default function ContactSection() {
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
        <form className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
          {/* Namn */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              Namn
            </label>
            <input
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
              type="text"
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
                type="text"
                placeholder="Skriv in ditt telefonnummer"
                className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition"
              />
            </div>
            <div>
              <label className="block text-[14px] mb-3 text-black">
                Ladda upp CV (PDF/docx)
              </label>
              <div className="w-full bg-[#F5F5F5] border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-2 text-gray-500">
                <Upload size={16} />
                <span>Ladda upp CV</span>
              </div>
            </div>
          </div>

          {/* Personal Letter */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              Personligt brev
            </label>
            <textarea
              placeholder="Skriv ditt personliga brev här..."
              rows={4}
              className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition resize-none"
            ></textarea>
          </div>

          {/* Drag/Drop Upload Area */}
          <div className="bg-[#F5F5F5] border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-2 text-gray-500">
            <Upload size={16} />
            <span>valfritt fält med drag/drop upload</span>
          </div>

          {/* Message (Optional) */}
          <div>
            <label className="block text-[14px] mb-3 text-black">
              Meddelande (Optional)
            </label>
            <textarea
              placeholder="Skriv ditt meddelande här..."
              rows={3}
              className="w-full bg-[#F5F5F5] border border-gray-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl hover:bg-[#1a1a1a] transition"
          >
            Skicka ansökan
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
