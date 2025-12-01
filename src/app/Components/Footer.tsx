"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto py-12 md:py-18 px-6 md:px-14">
        {/* Mobile: Single column stack, Desktop: Flex row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-10">
          
          {/* Left side - All link sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-semibold mb-4 text-[15px]">Länkar</h4>
              <ul className="space-y-2 text-[15px] text-[#4B4B4B]">
                <li><Link href="/VaraTjanster" className="hover:text-[#E88026] transition cursor-pointer block">Våra Tjänster</Link></li>
                <li><Link href="/ReferensProjekt" className="hover:text-[#E88026] transition cursor-pointer block">Referensprojekt</Link></li>
                <li><Link href="/OmOss" className="hover:text-[#E88026] transition cursor-pointer block">Om Oss</Link></li>
                <li><Link href="/VanligaFragor" className="hover:text-[#E88026] transition cursor-pointer block">Vanliga frågor</Link></li>
                <li><Link href="/Kontakt" className="hover:text-[#E88026] transition cursor-pointer block">Kontakta Oss</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[15px]">Sociala Medier</h4>
              <ul className="space-y-2 text-[15px] text-[#4B4B4B]">
                <li><a href="https://www.linkedin.com/company/milan-matkonsult-ab" target="_blank" rel="noopener noreferrer" className="hover:text-[#E88026] transition cursor-pointer block">LinkedIn</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4 text-[15px]">Juridiskt</h4>
              <ul className="space-y-2 text-[15px] text-[#4B4B4B]">
                <li><Link href="/Integritetspolicy" className="hover:text-[#E88026] transition cursor-pointer block">Integritetspolicy</Link></li>
                <li><Link href="/Cookies" className="hover:text-[#E88026] transition cursor-pointer block">Cookies</Link></li>
              </ul>
            </div>
          </div>

          {/* Right side - logo and contact info */}
          <div className="flex flex-col items-start md:items-end text-[15px] text-[#2A2A2A]">
            <Image
              src="/logos/logo.svg"
              alt="Milan Mätkonsult"
              width={135}
              height={35}
              className="object-contain mb-3"
            />
            <p className="mb-1">Borrgatan 6, 211 24 Malmö</p>
            <p className="mb-1">Telefon: +46 73-513-3165</p>
            <p>E-post: info@milanmatkonsult.com</p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 pb-6">
        <p className="text-[14px] text-[#4C4C4C]">
          Alla rättigheter förbehållna © 2025 Milan Mätkonsult AB
        </p>
      </div>

    </footer>
  );
}
