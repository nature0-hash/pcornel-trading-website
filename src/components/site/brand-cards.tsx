"use client";

/**
 * P-CORNEL TRADING LIMITED — premium dark gift card components.
 *
 * Each card is rendered as an SVG/CSS composition that mimics the actual
 * brand's gift card design but uses a unified "premium dark" treatment
 * (deep panel + brand-tinted gradient + brand mark + chip + footer).
 * Cards have two variants: "full" (gallery / featured) and "mini" (marquee).
 */

export type BrandCardProps = {
  variant?: "full" | "mini";
  className?: string;
};

const FOOTER = "P-CORNEL";

/* ----------------------------------------------------------------------------
 * Amazon
 * -------------------------------------------------------------------------- */
export function AmazonCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)" }}
      >
        <AmazonMark className="absolute top-2 left-2 h-3.5" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-[#232F3E]">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-200/80 ring-1 ring-white/50" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #FF9900 0%, #FFB84D 55%, #FF8A00 100%)" }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-overlay">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="30" cy="20" r="35" fill="white" />
          <circle cx="170" cy="85" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-[#232F3E]">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <AmazonMark className="mt-2.5 h-6" />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-extrabold tracking-tight leading-none">amazon</div>
            <div className="text-[9px] opacity-70 mt-1 font-semibold">E-CODE / PHYSICAL</div>
          </div>
          <div className="h-7 w-9 rounded-md bg-yellow-200/80 ring-1 ring-white/60 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-[#232F3E]/30" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 4242</span>
        </div>
      </div>
    </div>
  );
}

function AmazonMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className} fill="currentColor">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="#232F3E">amazon</text>
      <path d="M 5 27 Q 50 35 95 27" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #1B2838 0%, #2A475E 100%)" }}
      >
        <SteamMark className="absolute top-2 left-2 h-4" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">STEAM</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-400/50 ring-1 ring-white/20" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
          <SteamMark className="mt-3 h-7" />
        </div>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-extrabold tracking-tight leading-none">WALLET CODE</div>
          <div className="h-7 w-9 rounded-md bg-yellow-400/60 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 1337</span>
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
      <text x="55" y="20" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#ffffff" letterSpacing="1">STEAM</text>
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
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 50%, #FFB347 100%)" }}
      >
        <AppleMark className="absolute top-2 right-2 h-4 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">iTunes</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-200/70 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-80 font-semibold">Gift Card</div>
            <div className="mt-2.5 text-3xl font-extrabold tracking-tight leading-none">iTunes</div>
          </div>
          <AppleMark className="h-9 text-white" />
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-80">APP STORE • MUSIC • TV+</div>
          <div className="h-7 w-9 rounded-md bg-yellow-200/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-80">
          <span>{FOOTER}</span>
          <span>•••• 0991</span>
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
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)" }}
      >
        <GooglePlayMark className="absolute top-2 left-2 h-4" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-slate-700">Google Play</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-400/70 ring-1 ring-slate-300" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-slate-800">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
          <div className="mt-3 flex items-center gap-2">
            <GooglePlayMark className="h-7" />
            <span className="text-xl font-extrabold text-slate-800">Google Play</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60 text-slate-600">PLAY STORE CREDIT</div>
          <div className="h-7 w-9 rounded-md bg-yellow-400/80 ring-1 ring-slate-300 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-slate-400/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60 text-slate-600">
          <span>{FOOTER}</span>
          <span>•••• 7788</span>
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
 * Xbox
 * -------------------------------------------------------------------------- */
export function XboxCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #107C10 0%, #0E6B0E 100%)" }}
      >
        <XboxMark className="absolute top-2 left-2 h-4" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">XBOX</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 flex items-center gap-2">
            <XboxMark className="h-6" />
            <span className="text-2xl font-extrabold tracking-tight">XBOX</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">GAME PASS • LIVE</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 0451</span>
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
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #0070D1 0%, #003B7A 100%)" }}
      >
        <PlayStationMark className="absolute top-2 left-2 h-4 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">PSN</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 flex items-center gap-2">
            <PlayStationMark className="h-7 text-white" />
            <span className="text-2xl font-extrabold tracking-tight">PSN</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">PLUS • STORE CREDIT</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 2077</span>
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
 * eBay
 * -------------------------------------------------------------------------- */
export function EbayCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #E5322D 0%, #0064D2 50%, #F5AF02 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[10px] font-extrabold italic text-white">ebay</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-200/70 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-80 font-semibold">Gift Card</div>
          <div className="mt-3 text-4xl font-extrabold italic tracking-tight">ebay</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-80">ONLINE MARKETPLACE</div>
          <div className="h-7 w-9 rounded-md bg-yellow-200/80 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-80">
          <span>{FOOTER}</span>
          <span>•••• 1234</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Sephora
 * -------------------------------------------------------------------------- */
export function SephoraCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #2A2A2A 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[10px] font-bold tracking-[0.2em] text-white">SEPHORA</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white/80">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
          <div className="mt-3 text-2xl font-bold tracking-[0.15em]">SEPHORA</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">BEAUTY • FRAGRANCE</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/60 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 8800</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Netflix
 * -------------------------------------------------------------------------- */
export function NetflixCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #E50914 0%, #831010 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[10px] font-extrabold tracking-tight text-white">NETFLIX</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #E50914 0%, #831010 60%, #E50914 100%)" }}
    >
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <rect x="20" y="10" width="14" height="80" fill="white" transform="rotate(-3 27 50)" />
          <rect x="40" y="10" width="14" height="80" fill="black" transform="rotate(-3 47 50)" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 text-3xl font-extrabold tracking-tight">NETFLIX</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">STREAMING SUBSCRIPTION</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 1997</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Spotify
 * -------------------------------------------------------------------------- */
export function SpotifyCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #1DB954 0%, #0D7E36 100%)" }}
      >
        <SpotifyMark className="absolute top-2 left-2 h-4 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">SPOTIFY</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #1DB954 0%, #0D7E36 60%, #1DB954 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="160" cy="20" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 flex items-center gap-2">
            <SpotifyMark className="h-6 text-white" />
            <span className="text-2xl font-extrabold tracking-tight">Spotify</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">PREMIUM • MUSIC</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 2008</span>
        </div>
      </div>
    </div>
  );
}

function SpotifyMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.37-.74.48-1.11.24-3.04-1.86-6.87-2.28-11.39-1.25-.43.1-.86-.17-.96-.6-.1-.43.17-.86.6-.96 4.94-1.13 9.18-.65 12.57 1.43.37.24.48.74.29 1.14zm1.47-3.27c-.3.45-.93.6-1.38.3-3.48-2.14-8.79-2.76-12.92-1.51-.53.16-1.1-.14-1.26-.67-.16-.53.14-1.1.67-1.26 4.71-1.43 10.56-.74 14.55 1.7.48.3.63.93.34 1.44zm.13-3.4C15.07 8.21 8.61 7.99 4.62 9.18c-.64.2-1.32-.16-1.52-.8s.16-1.32.8-1.52c4.59-1.39 11.75-1.13 16.41 1.44.58.34.77 1.09.43 1.67-.34.58-1.09.77-1.67.43z" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Visa
 * -------------------------------------------------------------------------- */
export function VisaCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2A2F8A 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[11px] font-extrabold italic tracking-tight text-white">VISA</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">PREPAID</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/70 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2A2F8A 60%, #1A1F71 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="30" cy="20" r="35" fill="white" />
          <circle cx="180" cy="80" r="35" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Prepaid Card</div>
            <div className="mt-2.5 text-3xl font-extrabold italic tracking-tight">VISA</div>
          </div>
          <div className="h-5 w-7 rounded-full bg-yellow-300/80 ring-1 ring-white/40" />
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">DEBIT / PREPAID</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 4111</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Mastercard
 * -------------------------------------------------------------------------- */
export function MastercardCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2A2F8A 100%)" }}
      >
        <div className="absolute top-2 left-2 flex items-center -space-x-2">
          <div className="h-4 w-4 rounded-full bg-[#EB001B]" />
          <div className="h-4 w-4 rounded-full bg-[#F79E1B] mix-blend-multiply" />
        </div>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">PREPAID</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/70 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2A2F8A 60%, #1A1F71 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="40" cy="80" r="40" fill="white" />
          <circle cx="170" cy="20" r="35" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Prepaid Card</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center -space-x-3">
                <div className="h-7 w-7 rounded-full bg-[#EB001B]" />
                <div className="h-7 w-7 rounded-full bg-[#F79E1B] mix-blend-multiply" />
              </div>
              <span className="text-sm font-semibold tracking-wide">mastercard</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">DEBIT / PREPAID</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 5500</span>
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
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0071CE 0%, #004F9A 100%)" }}
      >
        <WalmartMark className="absolute top-2 left-2 h-4 text-[#FFC220]" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">WALMART</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/70 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
            <div className="mt-3 flex items-center gap-2">
              <WalmartMark className="h-7 text-[#FFC220]" />
              <span className="text-xl font-extrabold tracking-tight">Walmart</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">SAVE MONEY • LIVE BETTER</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 1962</span>
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
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #CC0000 0%, #990000 100%)" }}
      >
        <TargetMark className="absolute top-2 left-2 h-4 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">TARGET</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/70 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
            <div className="mt-3 flex items-center gap-2">
              <TargetMark className="h-6 text-white" />
              <span className="text-xl font-extrabold tracking-tight">TARGET</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">EXPECT MORE • PAY LESS</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 1902</span>
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
 * Best Buy
 * -------------------------------------------------------------------------- */
export function BestBuyCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0046BE 0%, #003291 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[9px] font-extrabold tracking-tight text-white">BEST BUY</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/70 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #0046BE 0%, #003291 60%, #0046BE 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <rect x="20" y="20" width="40" height="60" fill="white" />
          <rect x="80" y="40" width="100" height="20" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 text-2xl font-extrabold tracking-tight">BEST BUY</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">TECH • ELECTRONICS</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 1966</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Apple Store
 * -------------------------------------------------------------------------- */
export function AppleStoreCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #F5F5F7 0%, #D8D8DC 100%)" }}
      >
        <AppleMark className="absolute top-2 left-2 h-4 text-[#1D1D1F]" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-[#1D1D1F]">APPLE</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-400/70 ring-1 ring-slate-400" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #F5F5F7 0%, #D8D8DC 50%, #BEBEC2 100%)" }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-multiply">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="170" cy="20" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-[#1D1D1F]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
            <div className="mt-2.5 text-2xl font-extrabold tracking-tight">Apple Store</div>
          </div>
          <AppleMark className="h-8 text-[#1D1D1F]" />
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">MAC • IPAD • IPHONE</div>
          <div className="h-7 w-9 rounded-md bg-yellow-400/80 ring-1 ring-slate-400 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-slate-500/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 1976</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Nike
 * -------------------------------------------------------------------------- */
export function NikeCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/30 ${className}`}
        style={{ background: "linear-gradient(135deg, #111111 0%, #2A2A2A 100%)" }}
      >
        <NikeMark className="absolute top-2 right-2 h-4 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">NIKE</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
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
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
            <div className="mt-2.5 text-2xl font-extrabold tracking-tight">NIKE</div>
          </div>
          <NikeMark className="h-7 text-white" />
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">JUST DO IT</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 1964</span>
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

/* ----------------------------------------------------------------------------
 * Adidas
 * -------------------------------------------------------------------------- */
export function AdidasCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #ECEAE0 100%)" }}
      >
        <AdidasMark className="absolute top-2 left-2 h-4 text-black" />
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-black">ADIDAS</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-400/70 ring-1 ring-slate-300" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #ECEAE0 50%, #DDD9CB 100%)" }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-multiply">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="160" cy="80" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-[#0E1B17]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
            <div className="mt-3 flex items-center gap-2">
              <AdidasMark className="h-7 text-black" />
              <span className="text-2xl font-extrabold tracking-tight">adidas</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">IMPOSSIBLE IS NOTHING</div>
          <div className="h-7 w-9 rounded-md bg-yellow-400/80 ring-1 ring-slate-400 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-slate-500/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 1949</span>
        </div>
      </div>
    </div>
  );
}

function AdidasMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M10.5 5.5l3.5 6.5-3.5 1.5-2-5.5z" />
      <path d="M15 8l3.5 6.5-3.5 1.5-2-5.5z" transform="translate(-1.5 -1.5)" />
      <path d="M19.5 10.5l3.5 6.5-3.5 1.5-2-5.5z" transform="translate(-3 -3)" />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Macy's
 * -------------------------------------------------------------------------- */
export function MacysCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #E21A2E 0%, #A8111F 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[10px] font-extrabold tracking-tight text-white">Macy&apos;s</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/70 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #E21A2E 0%, #A8111F 60%, #E21A2E 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M100 5 L100 95" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 text-3xl font-extrabold tracking-tight">Macy&apos;s</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-70">DEPARTMENT STORE</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-70">
          <span>{FOOTER}</span>
          <span>•••• 1858</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Nordstrom
 * -------------------------------------------------------------------------- */
export function NordstromCard({ variant = "full", className = "" }: BrandCardProps) {
  if (variant === "mini") {
    return (
      <div
        className={`relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #2A2A2A 100%)" }}
      >
        <span className="absolute top-2 left-2 text-[8px] font-extrabold tracking-[0.2em] text-white">NORDSTROM</span>
        <div className="absolute bottom-1.5 left-2 text-[8px] font-bold tracking-wider text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-2.5 w-3.5 rounded-[2px] bg-yellow-300/60 ring-1 ring-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #2A2A2A 60%, #0B0B0B 100%)" }}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <circle cx="100" cy="50" r="35" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-semibold">Gift Card</div>
          <div className="mt-3 text-2xl font-extrabold tracking-[0.15em]">NORDSTROM</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-[9px] font-semibold opacity-60">FASHION • LUXURY</div>
          <div className="h-7 w-9 rounded-md bg-yellow-300/70 ring-1 ring-white/40 grid place-items-center">
            <div className="h-3 w-5 rounded-sm bg-white/40" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold opacity-60">
          <span>{FOOTER}</span>
          <span>•••• 1901</span>
        </div>
      </div>
    </div>
  );
}
