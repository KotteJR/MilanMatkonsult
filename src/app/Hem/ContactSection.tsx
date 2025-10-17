"use client";

import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-8 lg:px-12 items-start">
        {/* Left side info */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[34px] font-medium text-[#010207]">
            Kontakta Oss
          </h2>
          <p className="text-gray-500 leading-relaxed">
          Hör gärna av dig för offert, samarbete eller <br /> frågor om våra tjänster. Vi återkommer så snart <br /> som möjligt.
          </p>

          {/* Benefits List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white border border-[#646464] rounded-md p-1 w-5 h-5 flex items-center justify-center">
                <Check size={14} className="text-black" />
              </div>
              <span className="text-[16px] text-black">20+ års erfarenhet</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-[#646464] rounded-md p-1 w-5 h-5 flex items-center justify-center">
                <Check size={14} className="text-black" />
              </div>
              <span className="text-[16px] text-black">Snabb återkoppling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-[#646464] rounded-md p-1 w-5 h-5 flex items-center justify-center">
                <Check size={14} className="text-black" />
              </div>
              <span className="text-[16px] text-black">Skräddarsydda lösningar</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="bg-[#F5F5F5] rounded-2xl p-3">
                <div className="flex items-center gap-4 w-full">
                  <div className="bg-[#646464]/10 rounded-xl p-3 flex-shrink-0">
                    <Phone size={20} className="text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] text-gray-600 mb-1">Telefon</p>
                    <p className="text-sm text-black break-words">040-123 456</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-[#F5F5F5] rounded-2xl p-3">
                <div className="flex items-center gap-4 w-full">
                  <div className="bg-[#646464]/10 rounded-xl p-3 flex-shrink-0">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] text-gray-600 mb-1">Adress</p>
                    <p className="text-sm text-black break-words">
                      Östra Rönneholmsvägen 20, 211 47 Malmö
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Email Card */}
              <div className="bg-[#F5F5F5] rounded-2xl p-3">
                <div className="flex items-center gap-4 w-full">
                  <div className="bg-[#646464]/10 rounded-xl p-3 flex-shrink-0">
                    <Mail size={20} className="text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] text-gray-600 mb-1">E-post</p>
                    <p className="text-sm text-black break-words">
                      info@milanmatkonsult.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="bg-[#FDFDFD] rounded-2xl p-8 border border-[#E9E9E9] shadow-[0_1px_2px_rgba(0,0,0,0.05)] space-y-6">
          {[
            { label: "Namn", placeholder: "Skriv in ditt namn" },
            { label: "E-postadress", placeholder: "Skriv in din e-postadress" },
            { label: "Telefon", placeholder: "Skriv in ditt telefonnummer" },
            { label: "Company", placeholder: "Skriv in ditt företagsnamn" },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-[14px] font-medium mb-1 text-[#111]">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full bg-[#F5F5F5] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition"
              />
            </div>
          ))}

          <div>
            <label className="block text-[14px] font-medium mb-1 text-[#111]">
              Meddelande
            </label>
            <textarea
              placeholder="Skriv ditt meddelande här..."
              rows={7}
              className="w-full bg-[#F5F5F5] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#E88026] transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl hover:bg-[#1a1a1a] transition"
          >
            Skicka Meddelande
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
