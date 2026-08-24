"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, whatsappLink } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F8F4EA]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFCC]"
          : "bg-[#F8F4EA]/80 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand — text only, no logo icon */}
        <a
          href="#home"
          className="flex flex-col leading-tight group"
          aria-label="P-CORNEL TRADING LIMITED"
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-[#C9A961] font-semibold">
            P-Cornel
          </span>
          <span className="text-sm md:text-[15px] font-extrabold tracking-tight text-[#0A0A0A] group-hover:text-[#1A1A1A] transition-colors">
            TRADING LIMITED
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#0A0A0A]/80 hover:text-[#0A0A0A] rounded-full hover:bg-[#EFE9DC] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#F8F4EA] bg-[#0A0A0A] hover:bg-[#1A1A1A] rounded-full transition-colors border border-[#C9A961]/40 hover:border-[#C9A961] shadow-sm"
          >
            <MessageCircle className="h-4 w-4 text-[#C9A961]" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#0A0A0A] hover:bg-[#EFE9DC] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-[#F8F4EA] border-t border-[#E8DFCC]",
          mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#0A0A0A]/80 hover:text-[#0A0A0A] hover:bg-[#EFE9DC] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-[#F8F4EA] bg-[#0A0A0A] hover:bg-[#1A1A1A] rounded-full transition-colors border border-[#C9A961]/40 shadow-sm"
            >
              <MessageCircle className="h-4 w-4 text-[#C9A961]" />
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
