"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { giftCards, cardCategories, type BrandId, type CardCategory } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  XboxCard,
  PlayStationCard,
  EbayCard,
  SephoraCard,
  NetflixCard,
  SpotifyCard,
  VisaCard,
  MastercardCard,
  WalmartCard,
  TargetCard,
  BestBuyCard,
  AppleStoreCard,
  NikeCard,
  AdidasCard,
  MacysCard,
  NordstromCard,
} from "./brand-cards";

const brandCardMap: Record<
  BrandId,
  React.ComponentType<{ variant?: "full" | "mini"; className?: string }>
> = {
  amazon: AmazonCard,
  steam: SteamCard,
  itunes: ITunesCard,
  "google-play": GooglePlayCard,
  xbox: XboxCard,
  playstation: PlayStationCard,
  ebay: EbayCard,
  sephora: SephoraCard,
  netflix: NetflixCard,
  spotify: SpotifyCard,
  visa: VisaCard,
  mastercard: MastercardCard,
  walmart: WalmartCard,
  target: TargetCard,
  "best-buy": BestBuyCard,
  "apple-store": AppleStoreCard,
  nike: NikeCard,
  adidas: AdidasCard,
  macys: MacysCard,
  nordstrom: NordstromCard,
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
    <section id="cards" className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DDD9CB] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
              Gift card gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062C22] tracking-tight">
            Browse every card we{" "}
            <span className="emerald-text">trade</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5C6B66]">
            Filter by category and click any card to start a trade on WhatsApp.
            Don&apos;t see your brand? Message us, we likely trade it.
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
                  ? "bg-[#062C22] text-[#F7F6F1] border-[#062C22] shadow-md"
                  : "bg-white text-[#062C22] border-[#DDD9CB] hover:border-[#062C22] hover:bg-[#ECEAE0]"
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
                  href={`https://wa.me/2347034886195?text=${encodeURIComponent(
                    `Hello P-Cornel Trading, I'd like to trade a ${card.name} gift card. Please share your current rate.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                  className="block group relative"
                  aria-label={`Trade ${card.name} gift card on WhatsApp`}
                >
                  <CardComponent variant="full" />
                  <div className="absolute inset-x-0 bottom-0 p-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/95 backdrop-blur rounded-lg px-2.5 py-1 text-[10px] font-semibold text-[#062C22] text-center shadow-md border border-[#DDD9CB]">
                      Tap to trade →
                    </div>
                  </div>
                  <span className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/30 backdrop-blur text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
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
            <h3 className="text-xl md:text-2xl font-bold text-[#062C22]">
              And many more brands in our pipeline
            </h3>
            <p className="text-sm text-[#5C6B66] mt-1">
              Hover to pause. Don&apos;t see your card? Reach out, we probably trade it.
            </p>
          </div>

          <div className="marquee-container relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F7F6F1] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F7F6F1] to-transparent z-10" />

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
          <p className="text-[#5C6B66] mb-5">
            Ready to trade? Get an instant rate quote on WhatsApp.
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
