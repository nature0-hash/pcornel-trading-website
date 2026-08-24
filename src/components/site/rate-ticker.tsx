"use client";

import { rateTicker } from "@/lib/site-config";

export function RateTicker() {
  const items = [...rateTicker, ...rateTicker];
  return (
    <div className="relative bg-[#062C22] text-[#F7F6F1] border-y border-[#059669]/30 overflow-hidden">
      <div className="marquee-container relative overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#062C22] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#062C22] to-transparent z-10" />

        <div className="flex gap-0 animate-marquee w-max py-2.5">
          {items.map((item, i) => (
            <div
              key={`rate-${i}`}
              className="flex items-center gap-2 px-5 border-r border-white/10 flex-shrink-0"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#059669]">
                {item.code}
              </span>
              <span className="text-xs font-semibold text-[#F7F6F1]">
                {item.brand}
              </span>
              <span className="text-xs text-[#F7F6F1]/70">·</span>
              <span className="text-xs font-bold text-[#F59E0B]">{item.rate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
