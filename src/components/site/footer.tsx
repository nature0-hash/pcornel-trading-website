"use client";

import { Mail, MessageCircle, Clock, ArrowUp, MapPin } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#062C22] text-[#F7F6F1] mt-auto">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#059669] text-white ring-1 ring-[#059669]/30">
                <span className="text-base font-extrabold">P</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#059669] font-semibold">
                  P-Cornel
                </span>
                <span className="text-sm font-extrabold tracking-tight text-white">
                  TRADING LIMITED
                </span>
              </span>
            </div>
            <p className="text-sm text-[#F7F6F1]/70 leading-relaxed mb-5 max-w-xs">
              Africa&apos;s premium gift card exchange. Secure, instant and
              reliable gift card trading across 30+ countries.
            </p>
            <a
              href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#059669] mb-4">
              Quick links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F7F6F1]/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#F7F6F1]/30 group-hover:bg-[#059669] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#terms"
                  className="text-sm text-[#F7F6F1]/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#F7F6F1]/30 group-hover:bg-[#059669] transition-colors" />
                  Terms &amp; conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Our services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#059669] mb-4">
              Our services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Gift card trading",
                "Bulk gift card desk",
                "Instant cash payouts",
                "Mobile money transfers",
                "Bank transfers",
                "24/7 WhatsApp support",
              ].map((s) => (
                <li
                  key={s}
                  className="text-sm text-[#F7F6F1]/80 inline-flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-[#F7F6F1]/30" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#059669] mb-4">
              Contact us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#F7F6F1]/80 hover:text-white transition-colors group"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-[#F7F6F1]/50 mb-0.5">
                      WhatsApp
                    </span>
                    <span className="font-semibold">{siteConfig.whatsappDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-[#F7F6F1]/80 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#059669] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-[#F7F6F1]/50 mb-0.5">
                      Email
                    </span>
                    <span className="font-semibold break-all">{siteConfig.emailDisplay}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F7F6F1]/80">
                <Clock className="h-4 w-4 mt-0.5 text-[#059669] flex-shrink-0" />
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-[#F7F6F1]/50 mb-0.5">
                    Hours
                  </span>
                  <span className="font-semibold">{siteConfig.hours}</span>
                  <span className="block text-[10px] text-[#F7F6F1]/60 mt-0.5">
                    {siteConfig.hoursSun}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F7F6F1]/80">
                <MapPin className="h-4 w-4 mt-0.5 text-[#059669] flex-shrink-0" />
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-[#F7F6F1]/50 mb-0.5">
                    Coverage
                  </span>
                  <span className="font-semibold">Pan-African &amp; global</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big WhatsApp number callout — "the number will show down" */}
      <div className="border-t border-white/10 bg-[#0E3A2C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#059669] font-semibold mb-1">
                Trade on WhatsApp
              </div>
              <a
                href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl font-bold text-white hover:text-[#059669] transition-colors tracking-tight"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </div>
            <a
              href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="h-5 w-5" />
              Chat now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F7F6F1]/60 text-center sm:text-left">
            &copy; {year} {siteConfig.brand}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-[#F7F6F1]/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
