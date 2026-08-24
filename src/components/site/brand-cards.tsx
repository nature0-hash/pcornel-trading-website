"use client";

/**
 * P-CORNEL TRADING LIMITED — gift card components.
 *
 * Clean, premium card designs that showcase each brand's identity without
 * internal clutter. No fake card numbers, no P-CORNEL text inside the cards,
 * no decorative subtitles. Just the brand mark and the gift card title.
 *
 * Cards support two variants:
 *  - "full"  → gallery / featured
 *  - "mini"  → marquee strip
 */

export type BrandCardProps = {
  variant?: "full" | "mini";
  className?: string;
};

/* ----------------------------------------------------------------------------
 * Amazon
 * -------------------------------------------------------------------------- */
export function AmazonCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)" }}
      >
        <AmazonMark className="absolute top-2.5 left-3 h-4" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-[#232F3E]">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #FF9900 0%, #FFB84D 55%, #FF8A00 100%)" }}
    >
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="30" cy="20" r="35" fill="white" />
          <circle cx="170" cy="85" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-[#232F3E]">
        <div>
          <AmazonMark className="h-7" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-2xl font-extrabold tracking-tight leading-none">
            amazon
          </div>
        </div>
      </div>
    </div>
  );
}

function AmazonMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className} fill="currentColor">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="#232F3E">
        amazon
      </text>
      <path d="M 5 27 Q 50 35 95 27" stroke="#232F3E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Steam
 * -------------------------------------------------------------------------- */
export function SteamCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #1B2838 0%, #2A475E 100%)" }}
      >
        <SteamMark className="absolute top-2.5 left-3 h-4" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #1B2838 0%, #2A475E 60%, #1B2838 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="30" cy="80" r="50" fill="white" />
          <circle cx="180" cy="15" r="35" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div>
          <SteamMark className="h-7" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-2xl font-extrabold tracking-tight leading-none">Steam</div>
        </div>
      </div>
    </div>
  );
}

function SteamMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className}>
      <circle cx="12" cy="15" r="9" fill="#ffffff" />
      <circle cx="12" cy="15" r="4.5" fill="#1B2838" />
      <circle cx="45" cy="17" r="5" fill="#ffffff" />
      <text x="55" y="20" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#ffffff" letterSpacing="1">
        STEAM
      </text>
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * iTunes / Apple
 * -------------------------------------------------------------------------- */
export function ITunesCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 50%, #FFB347 100%)" }}
      >
        <AppleMark className="absolute top-2.5 right-3 h-5 text-white" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 40%, #FFB347 100%)" }}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <radialGradient id="it-grad" cx="20%" cy="30%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="200" height="100" fill="url(#it-grad)" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <AppleMark className="h-9 text-white" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-3xl font-extrabold tracking-tight leading-none">iTunes</div>
        </div>
      </div>
    </div>
  );
}

function AppleMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.82 0-2.06-.92-3.39-.89-1.74.03-3.36 1.02-4.26 2.58-1.82 3.15-.46 7.81 1.31 10.37.87 1.25 1.91 2.66 3.27 2.61 1.32-.05 1.81-.85 3.4-.85 1.59 0 2.04.85 3.43.83 1.42-.03 2.31-1.28 3.18-2.54 1-1.46 1.42-2.88 1.45-2.95-.03-.01-2.78-1.07-2.81-4.25-.03-2.66 2.17-3.93 2.27-3.99-1.25-1.83-3.18-2.04-3.86-2.07m-2.59-1.57c.72-.87 1.21-2.08 1.08-3.29-1.04.04-2.31.69-3.06 1.56-.67.77-1.26 2-1.1 3.19 1.16.09 2.35-.59 3.08-1.46" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Google Play
 * -------------------------------------------------------------------------- */
export function GooglePlayCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)" }}
      >
        <GooglePlayMark className="absolute top-2.5 left-3 h-5" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-slate-700">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)" }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-multiply">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#34A853" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="200" height="100" fill="url(#gp-bg)" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-slate-800">
        <div>
          <GooglePlayMark className="h-7" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-2xl font-extrabold tracking-tight text-slate-800">
            Google Play
          </div>
        </div>
      </div>
    </div>
  );
}

function GooglePlayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#00A1FF" />
      <path d="M14.524 12.732l-2.732-2.732 6.07-3.472a.998.998 0 0 1 1.076.054l-4.414 6.15z" fill="#00CF5F" />
      <path d="M14.524 11.268l4.414 6.15a.998.998 0 0 1-1.076.054l-6.07-3.472 2.732-2.732z" fill="#FFB700" />
      <path d="M3.609 1.814a.998.998 0 0 1 .594-.085l11.321 6.479-2.732 2.732L3.609 1.814z" fill="#FF3D4D" />
      <path d="M3.609 22.186l9.183-10.186 2.732 2.732-11.321 6.479a.998.998 0 0 1-.594-.025z" fill="#00A1FF" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Razer Gold
 * -------------------------------------------------------------------------- */
export function RazerGoldCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 50%, #0a0a0a 100%)" }}
      >
        <RazerMark className="absolute top-2.5 left-3 h-4" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-[#44D62C]">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 50%, #0a0a0a 100%)" }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rz-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#44D62C" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#44D62C" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="200" height="100" fill="url(#rz-shine)" />
          <circle cx="170" cy="20" r="40" fill="#44D62C" opacity="0.1" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-[#44D62C] shadow-[0_0_8px_#44D62C]" />
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div>
          <RazerMark className="h-6" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#44D62C] font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-2xl font-extrabold tracking-tight leading-none">Razer Gold</div>
        </div>
      </div>
    </div>
  );
}

function RazerMark({ className = "" }: { className?: string }) {
  // Stylized snakeheads logo + wordmark
  return (
    <svg viewBox="0 0 120 30" className={className}>
      <g fill="#44D62C">
        {/* Three snakehead-like blades (Razer's signature mark) */}
        <path d="M2 8 L14 22 L8 22 L0 12 Z" />
        <path d="M10 6 L24 22 L18 22 L7 8 Z" opacity="0.85" />
        <path d="M20 6 L34 22 L28 22 L17 8 Z" opacity="0.7" />
      </g>
      <text
        x="42"
        y="20"
        fontFamily="Arial Black, sans-serif"
        fontSize="13"
        fontWeight="900"
        fill="#ffffff"
        letterSpacing="1.5"
      >
        RAZER
      </text>
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Xbox
 * -------------------------------------------------------------------------- */
export function XboxCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #107C10 0%, #0E6B0E 100%)" }}
      >
        <XboxMark className="absolute top-2.5 left-3 h-4" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #107C10 0%, #0E6B0E 55%, #107C10 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="40" cy="50" r="45" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center gap-2">
          <XboxMark className="h-7" />
          <span className="text-2xl font-extrabold tracking-tight">XBOX</span>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-xl font-extrabold tracking-tight">Microsoft</div>
        </div>
      </div>
    </div>
  );
}

function XboxMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
      <path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.898-2.967 1.155-1.025-5.04-7.521-7.898-9.035-2.858 1.514-9.053 8.01-7.898 9.035zm10.001-12.013c1.659 1.531 8.115 8.366 9.879 5.835C24.656 12.749 25 11.412 25 10c0-3.314-1.349-6.315-3.526-8.465-2.012 1.196-7.062 6.521-7.371 7.485zM14.897 9.02c-.309.965-5.359 6.289-7.371 7.485C5.349 14.355 4 11.354 4 8.04c0-1.412.344-2.749.962-3.945C6.726 1.564 13.182 8.399 14.897 9.02z" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * PlayStation
 * -------------------------------------------------------------------------- */
export function PlayStationCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #0070D1 0%, #003B7A 100%)" }}
      >
        <PlayStationMark className="absolute top-2.5 left-3 h-4 text-white" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #0070D1 0%, #003B7A 60%, #0070D1 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 70 Q 50 50 100 70 T 200 60 L 200 100 L 0 100 Z" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center gap-2">
          <PlayStationMark className="h-7 text-white" />
          <span className="text-2xl font-extrabold tracking-tight">PSN</span>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-xl font-extrabold tracking-tight">PlayStation</div>
        </div>
      </div>
    </div>
  );
}

function PlayStationMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M9.5 3v13.93l3.49 1.106V7.39c0-.92.41-1.55 1.07-1.32.86.24 1.43 1.42 1.43 2.92v4.16c1.46.5 2.05 2.92-.43 4.27l3.41 1.07V3H9.5z" />
      <path d="M14.99 17.04l-3.5-1.11V19l3.5 1.107v-3.067z" />
      <path d="M6.83 8.04c-1.4-.36-1.41-1.34.06-1.79 1.47-.45 3.96-.29 5.31.21v-2.4C10.79 3.5 8.5 3.49 6.7 4.04c-2.08.66-3.16 1.93-3.16 3.32 0 1.43 1.07 2.27 3.16 2.79.96.24 1.84.27 2.83.04v2.42c-1.13.21-2.04.13-3.7-.32-2.07-.57-3.95-1.71-3.95-3.93 0-2.32 1.7-3.69 3.95-4.21Z" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Sephora
 * -------------------------------------------------------------------------- */
export function SephoraCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #2A2A2A 100%)" }}
      >
        <span className="absolute top-2.5 left-3 text-[10px] font-bold tracking-[0.22em] text-white">
          SEPHORA
        </span>
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white/70">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/20 ${className}`}
      style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #1F1F1F 50%, #0B0B0B 100%)" }}
    >
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M100 5 Q 110 30 100 50 Q 90 70 100 95" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div>
          <span className="text-sm font-bold tracking-[0.3em]">SEPHORA</span>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-2xl font-extrabold tracking-[0.1em]">Beauty</div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * eBay
 * -------------------------------------------------------------------------- */
export function EbayCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #E5322D 0%, #0064D2 50%, #F5AF02 100%)" }}
      >
        <span className="absolute top-2.5 left-3 text-[11px] font-extrabold italic text-white">ebay</span>
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #E5322D 0%, #0064D2 50%, #F5AF02 100%)" }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-overlay">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="white" />
          <circle cx="150" cy="50" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div>
          <div className="text-4xl font-extrabold italic tracking-tight">ebay</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-xl font-extrabold tracking-tight">Marketplace</div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Walmart
 * -------------------------------------------------------------------------- */
export function WalmartCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0071CE 0%, #004F9A 100%)" }}
      >
        <WalmartMark className="absolute top-2.5 left-3 h-4 text-[#FFC220]" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #0071CE 0%, #004F9A 60%, #0071CE 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="100" cy="50" r="45" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center gap-2">
          <WalmartMark className="h-7 text-[#FFC220]" />
          <span className="text-xl font-extrabold tracking-tight">Walmart</span>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-xl font-extrabold tracking-tight">Retail</div>
        </div>
      </div>
    </div>
  );
}

function WalmartMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2c.46 0 .83.37.83.83v4.36l3.66-2.11c.4-.23.91-.09 1.14.31.23.4.09.91-.31 1.14l-3.66 2.11 3.66 2.11c.4.23.54.74.31 1.14-.23.4-.74.54-1.14.31l-3.66-2.11v4.36c0 .46-.37.83-.83.83s-.83-.37-.83-.83V9.99l-3.66 2.11c-.4.23-.91.09-1.14-.31-.23-.4-.09-.91.31-1.14L10.34 8.5 6.68 6.39c-.4-.23-.54-.74-.31-1.14.23-.4.74-.54 1.14-.31l3.66 2.11V2.83c0-.46.37-.83.83-.83zM5.39 19.49c-.4.23-.54.74-.31 1.14.23.4.74.54 1.14.31l3.66-2.11v4.36c0 .46.37.83.83.83s.83-.37.83-.83v-4.36l3.66 2.11c.4.23.91.09 1.14-.31.23-.4.09-.91-.31-1.14l-3.66-2.11 3.66-2.11c.4-.23.54-.74.31-1.14-.23-.4-.74-.54-1.14-.31L13 15.55l-.17.1V11.3c0-.46-.37-.83-.83-.83s-.83.37-.83.83v4.35l-.17-.1-3.66-2.11c-.4-.23-.91-.09-1.14.31-.23.4-.09.91.31 1.14l3.66 2.11-3.66 2.11z" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Target
 * -------------------------------------------------------------------------- */
export function TargetCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #CC0000 0%, #990000 100%)" }}
      >
        <TargetMark className="absolute top-2.5 left-3 h-4 text-white" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #CC0000 0%, #990000 60%, #CC0000 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="100" cy="50" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center gap-2">
          <TargetMark className="h-6 text-white" />
          <span className="text-2xl font-extrabold tracking-tight">TARGET</span>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-xl font-extrabold tracking-tight">Retail</div>
        </div>
      </div>
    </div>
  );
}

function TargetMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="white" />
      <circle cx="12" cy="12" r="8" fill="#CC0000" />
      <circle cx="12" cy="12" r="5" fill="white" />
      <circle cx="12" cy="12" r="2.5" fill="#CC0000" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Nike
 * -------------------------------------------------------------------------- */
export function NikeCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #111111 0%, #2A2A2A 100%)" }}
      >
        <NikeMark className="absolute top-2.5 right-3 h-4 text-white" />
        <div className="absolute bottom-2 left-3 text-[8px] font-bold tracking-[0.18em] text-white">
          GIFT CARD
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #111111 0%, #2A2A2A 60%, #111111 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="50" cy="30" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <NikeMark className="h-8 text-white" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-semibold mb-1">
            Gift Card
          </div>
          <div className="text-2xl font-extrabold tracking-tight">Nike</div>
        </div>
      </div>
    </div>
  );
}

function NikeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 14.5c2.5-1.4 6.5-3.6 12-7 1.2-.7 2.4-.3 1.6 1.8-2 5.3-3.3 7.5-5 9.4-1.5 1.7-2.5.6-1.7-1.4.7-1.8 1.6-3.5 1.6-3.5s-2.4 1-4 1.6c-2 .7-4.5-.8-4.5-.8z" />
    </svg>
  );
}
