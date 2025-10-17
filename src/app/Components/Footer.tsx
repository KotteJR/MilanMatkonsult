"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-[#2A2A2A]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-18 flex flex-col md:flex-row justify-between gap-10 px-14">
        
        {/* Left side - 3 column link groups */}
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold mb-4 text-[15px]">Länkar</h4>
            <ul className="space-y-2 text-[15px] text-[#4B4B4B]">
              <li><a href="#">Våra Tjänster</a></li>
              <li><a href="#">Referensprojekt</a></li>
              <li><a href="#">Om Oss</a></li>
              <li><a href="#">Vanliga frågor</a></li>
              <li><a href="#">Kontakta Oss</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[15px]">Sociala Medier</h4>
            <ul className="space-y-2 text-[15px] text-[#4B4B4B]">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[15px]">Juridiskt</h4>
            <ul className="space-y-2 text-[15px] text-[#4B4B4B]">
              <li><a href="#">Integritetspolicy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Right side - logo and contact info */}
        <div className="flex flex-col items-start md:items-end justify-start space-y-3 text-[15px] text-[#3A3A3A]">
          <div className="flex flex-col items-start md:items-end">
            <Image
              src="/logos/logo.svg" // replace with actual logo path
              alt="Milan Mätkonsult"
              width={135}
              height={35}
              className="object-contain mb-3"
            />
            <p className="text-[#2A2A2A]">Amiralsgatan 25, 211 55 Malmö</p>
            <p>
              Telefon: +46 40 123 45 • E-post: info@milanmatkonsult.com
            </p>
          </div>
        </div>

    
        
      </div>

      <div className="max-w-7xl mx-auto px-14 pb-6">
          <p className="text-[14px] text-[#4C4C4C]">
            Alla rättigheter förbehållna © 2025 Milan Mätkonsult AB
          </p>
        </div>

    </footer>
  );
}
