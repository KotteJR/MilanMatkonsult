"use client";

import Link from "next/link";
import { ChevronDown, FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isLightBgAtTop] = useState<boolean>(true);
  const pathname = usePathname();

  // Normal sticky header

  // Normal header: no scroll logic

  const linkClass = useMemo(
    () =>
      "text-[#6B6B6B] hover:text-black transition",
    []
  );

  const isServicesPath = useMemo(() => {
    return [
      "/TekniskKonsult",
      "/LaserScanning",
      "/DronarScanning",
      "/MaskinStyrning",
    ].some((p) => pathname?.startsWith(p));
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12 py-4">
        {/* Left: nav links */}
        <div className="flex items-center gap-8 text-[15px]">
          <Link href="/" className={linkClass}>
            Hem
          </Link>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`inline-flex items-center gap-1 ${
                servicesOpen || isServicesPath
                  ? "text-[#E88026]"
                  : linkClass
              }`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Tjänster
              <ChevronDown size={14} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-3 w-48 rounded-xl border border-white/10 bg-white/95 shadow-lg backdrop-blur-xl">
                <ul className="py-2 text-[14px] text-[#3A3A3A]">
                  <li>
                    <Link
                      href="/TekniskKonsult"
                      className="block px-4 py-2 hover:bg-black/[0.03] rounded-lg"
                    >
                      Teknisk-konsult
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/LaserScanning"
                      className="block px-4 py-2 hover:bg-black/[0.03] rounded-lg"
                    >
                      Laser-scanning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/DronarScanning"
                      className="block px-4 py-2 hover:bg-black/[0.03] rounded-lg"
                    >
                      Drönar-scanning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/MaskinStyrning"
                      className="block px-4 py-2 hover:bg-black/[0.03] rounded-lg"
                    >
                      Maskin-styrning
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/ReferensProjekt" className={linkClass}>
            Referens projekt
          </Link>
          <Link href="/OmOss" className={linkClass}>
            Företag
          </Link>
          <Link href="/Karriar" className={linkClass}>
            Karriär
          </Link>
          <Link href="/Kontakt" className={linkClass}>
            Kontakt
          </Link>
        </div>

        {/* Right: CTA */}
        <div>
          <Link
            href="/Kontakt"
            className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-5 py-2.5 text-white text-[15px] font-medium hover:bg-[#cf660d] transition"
          >
            Begär Offert
            <FileText size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}


