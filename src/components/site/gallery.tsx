"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  giftCards,
  cardCategories,
  type BrandId,
  type CardCategory,
  whatsappLink,
} from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  RazerGoldCard,
  XboxCard,
  PlayStationCard,
  EbayCard,
  SephoraCard,
  WalmartCard,
  TargetCard,
  NikeCard,
} from "./brand-cards";

const brandCardMap: Record<
  BrandId,
  React.ComponentType<{ variant?: "full" | "mini"; className?: string }>
> = {
  amazon: AmazonCard,
  steam: SteamCard,
  itunes: ITunesCard,
  "google-play": GooglePlayCard,
  "razer-gold": RazerGoldCard,
  xbox: XboxCard,
  playstation: PlayStationCard,
  ebay: EbayCard,
  sephora: SephoraCard,
  walmart: WalmartCard,
  target: TargetCard,
  nike: NikeCard,
};

type Filter = "All" | CardCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...cardCategories];
  const visible =
    filter === "All"
      ? giftCards
      : giftCards.filter((c) => c.category === filter);

  const marquee = [...giftCards, ...giftCards];

  return (
    <section id="cards" className="py-20 md:py-28 bg-[#F8F4EA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8DFCC] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
              Gift card gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            Browse every card we{" "}
            <span className="gold-text">trade</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A5A5A]">
            A selection of the recognised gift card brands we trade.
            Don&apos;t see your brand? Message us, we may still support it.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                filter === f
                  ? "bg-[#0A0A0A] text-[#F8F4EA] border-[#0A0A0A] shadow-md"
                  : "bg-white text-[#0A0A0A] border-[#E8DFCC] hover:border-[#C9A961] hover:bg-[#EFE9DC]"
              }`}
            >
              {f}
              {f !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({giftCards.filter((c) => c.category === f).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((card, i) => {
              const CardComponent = brandCardMap[card.id];
              return (
                <motion.a
                  key={card.id}
                  href={whatsappLink(
                    `Hello P-Cornel Trading, I'd like to trade a ${card.name} gift card. Please share your current rate.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="block group relative"
                  aria-label={`Trade ${card.name} gift card on WhatsApp`}
                >
                  <CardComponent variant="full" />
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                    {card.category}
                  </span>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Marquee strip */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A]">
              And many more brands in our pipeline
            </h3>
            <p className="text-sm text-[#5A5A5A] mt-1">
              Don&apos;t see your card? Reach out, we may still trade it.
            </p>
          </div>

          <div className="marquee-container relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F8F4EA] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F8F4EA] to-transparent z-10" />

            <div className="flex gap-4 animate-marquee-slow w-max py-2">
              {marquee.map((card, i) => {
                const CardComponent = brandCardMap[card.id];
                return <CardComponent key={`marquee-${i}`} variant="mini" />;
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#5A5A5A] mb-5">
            Ready to trade? Reach us on WhatsApp.
          </p>
          <WhatsAppButton
            label="Get rate quote"
            size="lg"
            message="Hello P-Cornel Trading, which gift cards do you currently trade and what are your rates?"
          />
        </div>
      </div>
    </section>
  );
}
