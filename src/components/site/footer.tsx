"use client";

import { Mail, MessageCircle, Clock, ArrowUp } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-[#F8F4EA] mt-auto">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column — text only, no logo icon */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A961] font-semibold">
                P-Cornel
              </span>
              <span className="text-sm md:text-base font-extrabold tracking-tight text-white">
                TRADING LIMITED
              </span>
            </div>
            <p className="text-sm text-[#F8F4EA]/70 leading-relaxed mb-5 max-w-xs">
              A straightforward global gift card trading partner. Fast,
              reliable and customer-focused.
            </p>
            <a
              href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F4EA] hover:bg-white text-[#0A0A0A] text-sm font-semibold transition-colors border border-[#C9A961]/40 hover:border-[#C9A961]"
            >
              <MessageCircle className="h-4 w-4 text-[#C9A961]" />
              WhatsApp us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A961] mb-4">
              Quick links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F8F4EA]/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#F8F4EA]/30 group-hover:bg-[#C9A961] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#terms"
                  className="text-sm text-[#F8F4EA]/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-[#F8F4EA]/30 group-hover:bg-[#C9A961] transition-colors" />
                  Terms &amp; conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Our services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A961] mb-4">
              Our services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Gift card trading",
                "Bulk gift card desk",
                "Verified payouts",
                "Card verification",
                "Direct WhatsApp support",
              ].map((s) => (
                <li
                  key={s}
                  className="text-sm text-[#F8F4EA]/80 inline-flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-[#F8F4EA]/30" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A961] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#F8F4EA]/80 hover:text-white transition-colors group"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 text-[#C9A961] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-[#F8F4EA]/50 mb-0.5">
                      WhatsApp
                    </span>
                    <span className="font-semibold">Chat with us directly</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-[#F8F4EA]/80 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#C9A961] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-[#F8F4EA]/50 mb-0.5">
                      Email
                    </span>
                    <span className="font-semibold break-all">
                      {siteConfig.emailDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F8F4EA]/80">
                <Clock className="h-4 w-4 mt-0.5 text-[#C9A961] flex-shrink-0" />
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-[#F8F4EA]/50 mb-0.5">
                    Hours
                  </span>
                  <span className="font-semibold">{siteConfig.hours}</span>
                  <span className="block text-[10px] text-[#F8F4EA]/60 mt-0.5">
                    {siteConfig.hoursSun}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F8F4EA]/60 text-center sm:text-left">
            &copy; {year} {siteConfig.brand}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-[#F8F4EA]/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
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
