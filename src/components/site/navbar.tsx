"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

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
          ? "bg-[#F7F6F1]/95 backdrop-blur-md shadow-sm border-b border-[#DDD9CB]"
          : "bg-[#F7F6F1]/80 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand mark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          aria-label={siteConfig.brand}
        >
          <span className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-[#062C22] text-[#F7F6F1] ring-1 ring-[#059669]/30 shadow-sm group-hover:ring-[#059669] transition-all">
            <span className="text-base font-extrabold">P</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#059669] font-semibold">
              P-Cornel
            </span>
            <span className="text-sm md:text-[15px] font-extrabold tracking-tight text-[#0E1B17] group-hover:text-[#062C22] transition-colors">
              TRADING LIMITED
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#0E1B17]/80 hover:text-[#062C22] rounded-full hover:bg-[#ECEAE0] transition-colors"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full transition-colors shadow-sm shadow-[#25D366]/30"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#062C22] hover:bg-[#ECEAE0] transition-colors"
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
          "lg:hidden overflow-hidden transition-all duration-300 bg-[#F7F6F1] border-t border-[#DDD9CB]",
          mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#0E1B17]/80 hover:text-[#062C22] hover:bg-[#ECEAE0] rounded-lg transition-colors"
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
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
