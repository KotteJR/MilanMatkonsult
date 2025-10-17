"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-start">
          <div>
            <h2 className="text-[28px] md:text-[32px] font-medium text-black">
              Kontakta Oss
            </h2>
            <p className="text-[#6C6C6C] mt-4 leading-relaxed max-w-md">
              Hör gärna av dig för offert, samarbete eller frågor om våra tjänster.
              Vi återkommer så snart som möjligt.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 bg-[#F6F6F6] px-4 py-3 rounded-xl min-w-[230px]">
                <Phone size={18} className="text-black opacity-80" />
                <div>
                  <p className="text-[14px] text-[#5C5C5C]">Telefon</p>
                  <p className="text-[15px] font-medium text-black">040-123 456</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#F6F6F6] px-4 py-3 rounded-xl min-w-[250px]">
                <Mail size={18} className="text-black opacity-80" />
                <div>
                  <p className="text-[14px] text-[#5C5C5C]">E-post</p>
                  <p className="text-[15px] font-medium text-black">
                    info@milanmatkonsult.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#F6F6F6] px-4 py-3 rounded-xl w-fit">
              <MapPin size={18} className="text-black opacity-80" />
              <div>
                <p className="text-[14px] text-[#5C5C5C]">Adress</p>
                <p className="text-[15px] font-medium text-black">
                  Östra Rönneholmsvägen 20, 211 47 Malmö
                </p>
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
