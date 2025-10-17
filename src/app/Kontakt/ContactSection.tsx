
"use client";

import { Phone, Mail, MapPin, Check } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-8 lg:px-12 items-start">
        {/* Left side info */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[34px] font-medium text-[#010207]">
            Kontakta Oss
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Behöver du offert, rådgivning eller har frågor om <br />  våra tjänster?
            Skicka ett meddelande så återkommer <br /> vi inom kort.
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

        {/* Right side form */}
        <form className="bg-gray-50 p-8 rounded-xl space-y-5 shadow-sm">
          {["Namn", "E-postadress", "Telefon", "Company"].map((label) => (
            <div key={label}>
              <label className="block text-sm mb-1 text-[#010207]">{label}</label>
              <input
                type="text"
                placeholder={`Skriv in ditt ${label.toLowerCase()}...`}
                className="w-full p-3 rounded-md border border-gray-200 bg-white text-sm"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm mb-1 text-[#010207]">Meddelande</label>
            <textarea
              placeholder="Skriv ditt meddelande här..."
              className="w-full p-3 rounded-md border border-gray-200 bg-white h-32 text-sm"
            />
          </div>
          <button className="w-full bg-[#010207] text-white py-3 rounded-xl hover:opacity-90 transition">
            Skicka Meddelande →
          </button>
        </form>
      </div>
    </section>
  );
}
