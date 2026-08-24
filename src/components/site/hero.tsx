"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Star, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  PlayStationCard,
  ITunesCard,
  VisaCard,
  NetflixCard,
} from "./brand-cards";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-[#F7F6F1]"
    >
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-70 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#059669]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DDD9CB] px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </span>
              <span className="text-xs font-semibold text-[#062C22]">
                Trusted by 12,000+ traders across 30+ countries
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#062C22] leading-[1.02] tracking-tight">
              Turn gift cards into{" "}
              <span className="relative inline-block">
                <span className="emerald-text">instant cash</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 298 9"
                    stroke="#059669"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              in five minutes flat.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5C6B66] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              P-CORNEL TRADING LIMITED converts unused Amazon, Steam, iTunes,
              Google Play, Xbox, PlayStation, Visa and 120+ other gift cards
              into instant naira, mobile money or bank payouts, paid fast and
              fair, every single time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <WhatsAppButton
                label="Trade a Gift Card Now"
                size="lg"
                message="Hello P-Cornel Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#062C22] border-2 border-[#062C22]/15 rounded-full hover:border-[#062C22] hover:bg-white transition-all duration-300 hover:scale-[1.02]"
              >
                How it works
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <Stat value="12K+" label="Traders paid" />
              <Stat value="120+" label="Card brands" />
              <Stat value="~5 min" label="Avg payout" />
            </div>
          </motion.div>

          {/* Right: card stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <HeroCardStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl sm:text-3xl font-bold text-[#062C22]">
        {value}
      </div>
      <div className="text-xs text-[#5C6B66] font-medium mt-0.5">{label}</div>
    </div>
  );
}

function HeroCardStack() {
  return (
    <div className="relative max-w-md mx-auto h-[420px] sm:h-[460px]">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#059669]/15 via-transparent to-[#F59E0B]/15 blur-2xl" />

      {/* Backdrop panel */}
      <div className="absolute inset-x-4 inset-y-8 sm:inset-y-12 rounded-[1.75rem] bg-white border border-[#DDD9CB] shadow-2xl shadow-[#062C22]/10 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <div className="relative h-full p-5 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#059669] font-semibold">
                Live Trade
              </div>
              <div className="text-sm font-bold text-[#062C22] mt-1">
                Verified payout · 04:21 PM
              </div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-[#059669]/10 px-2.5 py-1">
              <Sparkles className="h-3 w-3 text-[#059669]" />
              <span className="text-[10px] font-bold text-[#059669] uppercase tracking-wider">
                Verified
              </span>
            </div>
          </div>

          {/* Featured card on the panel */}
          <div className="relative -mx-1">
            <motion.div
              className="animate-float"
              style={{ animationDelay: "0s" }}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <AmazonCard />
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <MiniStat value="$100" label="Card value" />
            <MiniStat value="₦118,000" label="Payout" highlight />
            <MiniStat value="3 min" label="Verified" />
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        className="absolute top-2 -right-1 sm:right-2 rotate-[8deg] animate-float z-10"
        style={{ animationDelay: "0.6s" }}
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 0.55, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <SteamCard variant="mini" />
      </motion.div>

      <motion.div
        className="absolute top-24 -left-3 sm:-left-6 rotate-[-10deg] animate-float z-10"
        style={{ animationDelay: "1.2s" }}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 0.55, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <PlayStationCard variant="mini" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 -right-2 sm:right-4 rotate-[6deg] animate-float z-10"
        style={{ animationDelay: "1.8s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.55 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <ITunesCard variant="mini" />
      </motion.div>

      <motion.div
        className="absolute bottom-6 -left-2 sm:-left-4 rotate-[-6deg] animate-float z-10"
        style={{ animationDelay: "2.4s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.55 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <VisaCard variant="mini" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 -left-4 sm:-left-8 rotate-[4deg] animate-float z-10"
        style={{ animationDelay: "0.9s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.5 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <NetflixCard variant="mini" />
      </motion.div>

      {/* Trust pill bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -bottom-2 right-0 bg-white rounded-2xl shadow-xl shadow-[#062C22]/10 p-3 flex items-center gap-2.5 border border-[#DDD9CB] z-20"
      >
        <div className="h-9 w-9 rounded-xl bg-[#059669]/10 flex items-center justify-center">
          <ShieldCheck className="h-5 w-5 text-[#059669]" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#062C22]">Bank-grade security</div>
          <div className="text-[10px] text-[#5C6B66]">Every trade verified</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -top-2 left-0 bg-white rounded-2xl shadow-xl shadow-[#062C22]/10 p-3 flex items-center gap-2.5 border border-[#DDD9CB] z-20"
      >
        <div className="h-9 w-9 rounded-xl bg-[#F59E0B]/15 flex items-center justify-center">
          <Zap className="h-5 w-5 text-[#F59E0B]" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#062C22]">Instant pay</div>
          <div className="text-[10px] text-[#5C6B66]">~5 min average</div>
        </div>
      </motion.div>
    </div>
  );
}

function MiniStat({
  value,
  label,
  highlight,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-2.5 border ${
        highlight
          ? "bg-[#059669]/10 border-[#059669]/30"
          : "bg-[#ECEAE0] border-[#DDD9CB]"
      }`}
    >
      <div
        className={`text-xs font-bold ${
          highlight ? "text-[#059669]" : "text-[#062C22]"
        }`}
      >
        {value}
      </div>
      <div className="text-[9px] text-[#5C6B66] uppercase tracking-wider mt-0.5">
        {label}
      </div>
    </div>
  );
}
