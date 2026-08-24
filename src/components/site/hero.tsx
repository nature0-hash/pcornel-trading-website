"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  RazerGoldCard,
} from "./brand-cards";

/**
 * Hero section.
 *
 * Left column: brand messaging, headline, CTAs and trust mini-stats.
 * Right column: a clean layered deck of four gift cards (Steam, Apple,
 * Google Play, Razer Gold) arranged in a descending diagonal stack with
 * subtle 3D positioning and smooth floating animation.
 *
 * No payout dashboards, security badges, fake money figures or transaction
 * panels — the focus is purely on the four gift cards.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-[#F8F4EA]"
    >
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-70 pointer-events-none" />

      {/* Decorative gold blob */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#C9A961]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8DFCC] px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#C9A961] text-[#C9A961]"
                  />
                ))}
              </span>
              <span className="text-xs font-semibold text-[#0A0A0A]">
                Trusted by traders worldwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A0A0A] leading-[1.02] tracking-tight">
              Turn gift cards into{" "}
              <span className="relative inline-block">
                <span className="gold-text">instant cash</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 298 9"
                    stroke="#C9A961"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              in five minutes flat.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5A5A5A] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              P-CORNEL TRADING LIMITED converts unused Amazon, Steam, iTunes,
              Google Play, Razer Gold and many other gift cards into fast,
              reliable payouts, handled with care and verified by a real team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <WhatsAppButton
                label="Trade a Gift Card Now"
                size="lg"
                message="Hello P-Cornel Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0A0A0A] border-2 border-[#0A0A0A]/15 rounded-full hover:border-[#0A0A0A] hover:bg-white transition-all duration-300 hover:scale-[1.02]"
              >
                How it works
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <Stat value="Global" label="Trading desk" />
              <Stat value="Trusted" label="Verification" />
              <Stat value="~5 min" label="Avg response" />
            </div>
          </motion.div>

          {/* Right: 4-card layered deck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6"
          >
            <HeroCardDeck />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl sm:text-3xl font-bold text-[#0A0A0A]">
        {value}
      </div>
      <div className="text-xs text-[#5A5A5A] font-medium mt-0.5">{label}</div>
    </div>
  );
}

/**
 * Layered gift-card deck:
 *
 *              [ STEAM ]
 *           [ APPLE      ]
 *        [ GOOGLE PLAY    ]
 *     [ RAZER GOLD          ]
 *
 * Each card is offset down-and-left from the previous, creating a cascading
 * diagonal stack with depth, shadow and subtle floating animation.
 */
function HeroCardDeck() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] aspect-[5/4] sm:aspect-[6/4]">
      {/* Ambient gold glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#C9A961]/20 via-transparent to-[#C9A961]/10 blur-2xl" />

      {/* STEAM — top of the deck */}
      <motion.div
        className="absolute top-0 right-0 w-[60%] sm:w-[55%] z-40 animate-float"
        style={{ animationDelay: "0s" }}
        initial={{ opacity: 0, y: -30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
      >
        <div className="shadow-2xl shadow-black/30 rounded-2xl">
          <SteamCard />
        </div>
      </motion.div>

      {/* APPLE — second from top, offset down-left */}
      <motion.div
        className="absolute top-[18%] right-[12%] sm:right-[20%] w-[60%] sm:w-[55%] z-30 animate-float"
        style={{ animationDelay: "0.6s" }}
        initial={{ opacity: 0, y: -20, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        <div className="shadow-2xl shadow-black/30 rounded-2xl">
          <ITunesCard />
        </div>
      </motion.div>

      {/* GOOGLE PLAY — third, further down-left */}
      <motion.div
        className="absolute top-[36%] right-[24%] sm:right-[40%] w-[60%] sm:w-[55%] z-20 animate-float"
        style={{ animationDelay: "1.2s" }}
        initial={{ opacity: 0, y: -20, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
      >
        <div className="shadow-2xl shadow-black/30 rounded-2xl">
          <GooglePlayCard />
        </div>
      </motion.div>

      {/* RAZER GOLD — bottom of the deck, far left */}
      <motion.div
        className="absolute top-[54%] right-[36%] sm:right-[60%] w-[60%] sm:w-[55%] z-10 animate-float"
        style={{ animationDelay: "1.8s" }}
        initial={{ opacity: 0, y: -20, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      >
        <div className="shadow-2xl shadow-black/30 rounded-2xl">
          <RazerGoldCard />
        </div>
      </motion.div>
    </div>
  );
}
