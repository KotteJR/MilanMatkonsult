"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  FileText,
  Wrench,
  Scan,
  Drone,
  Cpu,
  MapPin,
  Phone,
  ArrowRight,
  Navigation,
  Menu,
  X,
} from "lucide-react";

/**
 * TopBar component
 * Renders a small info bar above the navigation. It contains logo on the left
 * and contact information on the right. This bar scrolls with the page and
 * does not stay fixed; the navigation below becomes sticky at the top of
 * the viewport when scrolled past this bar.
 */
function TopBar() {
  return (
    <div className="bg-white text-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-8 lg:px-12 py-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/logos/logo.svg"
            alt="Milan Mätkonsult"
            width={200}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Right: Contact Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Location Button (hidden on mobile) */}
          <button className="hidden sm:flex items-center h-10 rounded-xl bg-[#E88026] text-white p-[1.5px] hover:bg-[#cf660d] transition">
            <div className="flex items-center bg-white text-[#E88026] rounded-[10px] py-2 px-3 gap-2 h-full">
              <MapPin size={16} strokeWidth={2} />
              <span className="text-sm font-medium">
                Lugna gatan 1 · 211 59 Malmö
              </span>
            </div>
            <div className="px-2 flex items-center h-full">
              <Navigation size={16} strokeWidth={2} />
            </div>
          </button>

          {/* Phone Button */}
          <button className="flex items-center h-10 rounded-xl bg-[#E88026] text-white p-[1.5px] hover:bg-[#cf660d] transition">
            <div className="flex items-center bg-white text-[#E88026] rounded-[10px] py-2 px-3 gap-2 h-full">
              <Phone size={16} strokeWidth={2} />
              <span className="text-sm font-medium">0735-13 31 65</span>
            </div>
            <div className="px-2 flex items-center h-full">
              <ArrowRight size={16} strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Data for the Tjänster dropdown menu
const TJANSTER_ITEMS = [
  { label: "Teknisk-konsult", href: "/TekniskKonsult", Icon: Wrench },
  { label: "Laser-scanning", href: "/LaserScanning", Icon: Scan },
  { label: "Drönar-scanning", href: "/DronarScanning", Icon: Drone },
  { label: "Maskin-styrning", href: "/MaskinStyrning", Icon: Cpu },
];

/**
 * Utility to create the animated text fill effect (gray → orange).
 * It uses two layered backgrounds clipped to text. The first layer is orange
 * and its width grows on hover/focus; the second layer remains gray.
 */
const fillText =
  // base layout
  "relative inline-flex items-center px-2 py-1 text-[15px] " +
  // make glyphs transparent so backgrounds show through
  "text-transparent bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] " +
  // two layers: orange (animates) over gray (static)
  "[background-image:linear-gradient(#E88026,#E88026),linear-gradient(#6B6B6B,#6B6B6B)] " +
  "bg-no-repeat bg-left " +
  // animate only the orange layer’s width
  "[background-size:0%_100%,100%_100%] transition-[background-size] duration-300 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E88026]/30 " +
  "motion-reduce:before:transition-none";

/**
 * A simple component for top-level nav links with a left-to-right fill on hover.
 */
function NavLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`${fillText} ${
        active ? "[background-size:100%_100%,100%_100%]" : "hover:[background-size:100%_100%,100%_100%]"
      }`}
    >
      {label}
    </Link>
  );
}

/**
 * Header component with sticky behaviour.
 * Includes nav links with animated fill effect and a dropdown for Tjänster.
 */
export default function Header() {
  const pathname = usePathname();

  // Determine if current route falls under any of the services pages
  const isServicesPath = useMemo(
    () => TJANSTER_ITEMS.some((i) => (pathname || "").startsWith(i.href)),
    [pathname]
  );

  // State for the Tjänster dropdown: open while hovered/clicked/focused or if
  // on a services page. Each boolean controls one "mode" of opening.
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [focused, setFocused] = useState(false);
  const [closingByClick, setClosingByClick] = useState(false);
  const open = hovered || clicked || focused;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHovered(false);
        setClicked(false);
        setFocused(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close dropdown when pathname changes (navigation)
  useEffect(() => {
    setHovered(false);
    setClicked(false);
    setFocused(false);
  }, [pathname]);

  return (
    <>
      {/* Top information bar - scrolls with the page */}
      <TopBar />

      {/* Sticky navigation bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12 py-4">
          {/* Left: nav links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink href="/" label="Hem" active={pathname === "/"} />

            {/* Tjänster trigger and dropdown */}
            <div
              ref={wrapperRef}
              className="relative"
              onMouseEnter={() => !closingByClick && setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onFocusCapture={() => !closingByClick && setFocused(true)}
              onBlurCapture={() => setFocused(false)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="tjanster-menu"
                className="inline-flex items-center gap-1 px-2 py-1 focus:outline-none"
                onClick={() => setClicked((v) => !v)}
              >
                {/* Only the label fills; chevron remains unaffected */}
                <span
                  className={`${fillText} text-[15px] ${
                    open || isServicesPath ? "[background-size:100%_100%,100%_100%]" : "hover:[background-size:100%_100%,100%_100%]"
                  }`}
                >
                  Tjänster
                </span>
                <ChevronDown
                  size={16}
                  className={`${open ? "rotate-180 text-[#E88026]" : isServicesPath ? "text-[#E88026]" : "text-[#6B6B6B]"} transition`}
                />
              </button>

              {/* A small invisible buffer to prevent flickering when moving cursor */}
              <div className="absolute left-0 top-full h-2 w-full" />

              {/* Dropdown panel */}
              <div
                id="tjanster-menu"
                role="menu"
                className={`absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-150 origin-top ${
                  open
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                }`}
              >
                <ul className="py-2">
                  {TJANSTER_ITEMS.map(({ href, label, Icon }) => {
                    const active = (pathname || "").startsWith(href);
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          role="menuitem"
                          className="group flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
                        >
                          <Icon size={18} className="text-[#E88026]" />
                          <span
                            className={`text-[16px] ${
                              active
                                ? "text-[#E88026]"
                                : "text-[#6B6B6B] group-hover:text-[#E88026]"
                            }`}
                          >
                            {label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <NavLink
              href="/ReferensProjekt"
              label="Referens projekt"
              active={pathname === "/ReferensProjekt"}
            />
            <NavLink href="/OmOss" label="Företag" active={pathname === "/OmOss"} />
            <NavLink href="/Karriar" label="Karriär" active={pathname === "/Karriar"} />
            <NavLink href="/Kontakt" label="Kontakt" active={pathname === "/Kontakt"} />
          </div>

          {/* Mobile: hamburger left, CTA right */}
          <div className="flex items-center justify-between w-full md:hidden">
            <button
              aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-[#6B6B6B]"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link
              href="/Kontakt"
              className="inline-flex items-center gap-2 h-10 rounded-xl bg-[#E88026] px-4 text-white text-[14px] font-medium hover:bg-[#cf660d] transition"
            >
              Begär Offert
              <FileText size={16} />
            </Link>
          </div>

          {/* Desktop: CTA */}
          <div className="hidden md:block">
            <Link
              href="/Kontakt"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-5 py-2.5 text-white text-[15px] font-medium hover:bg-[#cf660d] transition"
            >
              Begär Offert
              <FileText size={16} />
            </Link>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-3 space-y-1">
              {/* Home */}
              <Link
                href="/"
                className={`block px-2 py-2 text-[16px] ${pathname === "/" ? "text-[#E88026]" : "text-[#6B6B6B] hover:text-[#E88026]"}`}
              >
                Hem
              </Link>

              {/* Tjänster dropdown (collapsible) */}
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                className="w-full flex items-center justify-between px-2 py-2 text-[16px] text-[#6B6B6B] hover:text-[#E88026]"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                <span>Tjänster</span>
                <ChevronDown size={16} className={`${mobileServicesOpen ? "rotate-180 text-[#E88026]" : "text-[#6B6B6B]"} transition`} />
              </button>
              {mobileServicesOpen && (
                <ul className="pl-3 border-l border-gray-200 ml-2 space-y-1 pb-1">
                  {TJANSTER_ITEMS.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block px-2 py-1.5 text-[15px] ${
                          (pathname || "").startsWith(href)
                            ? "text-[#E88026]"
                            : "text-[#6B6B6B] hover:text-[#E88026]"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Other links vertically stacked */}
              <Link
                href="/ReferensProjekt"
                className={`block px-2 py-2 text-[16px] ${
                  pathname === "/ReferensProjekt" ? "text-[#E88026]" : "text-[#6B6B6B] hover:text-[#E88026]"
                }`}
              >
                Referens projekt
              </Link>
              <Link
                href="/OmOss"
                className={`block px-2 py-2 text-[16px] ${
                  pathname === "/OmOss" ? "text-[#E88026]" : "text-[#6B6B6B] hover:text-[#E88026]"
                }`}
              >
                Företag
              </Link>
              <Link
                href="/Karriar"
                className={`block px-2 py-2 text-[16px] ${
                  pathname === "/Karriar" ? "text-[#E88026]" : "text-[#6B6B6B] hover:text-[#E88026]"
                }`}
              >
                Karriär
              </Link>
              <Link
                href="/Kontakt"
                className={`block px-2 py-2 text-[16px] ${
                  pathname === "/Kontakt" ? "text-[#E88026]" : "text-[#6B6B6B] hover:text-[#E88026]"
                }`}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
