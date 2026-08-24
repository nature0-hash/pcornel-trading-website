"use client";

import { giftCards } from "@/lib/site-config";

/**
 * Brand strip below the hero. Scrolls horizontally without showing any
 * monetary rates or currency values — only brand names.
 */
export function RateTicker() {
  const items = [...giftCards, ...giftCards];
  return (
    <div className="relative bg-[#0A0A0A] text-[#F8F4EA] border-y border-[#C9A961]/20 overflow-hidden">
      <div className="marquee-container relative overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

        <div className="flex gap-0 animate-marquee w-max py-3">
          {items.map((item, i) => (
            <div
              key={`brand-${i}`}
              className="flex items-center gap-3 px-6 border-r border-white/10 flex-shrink-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A961]" />
              <span className="text-sm font-semibold tracking-wide text-[#F8F4EA]">
                {item.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#C9A961]">
                Gift Card
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
