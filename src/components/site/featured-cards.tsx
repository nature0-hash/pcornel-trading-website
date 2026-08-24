"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  RazerGoldCard,
} from "./brand-cards";

/**
 * Featured cards section — 5 hero brands only.
 * Amazon, Steam, iTunes, Google Play, Razer Gold.
 *
 * Layout: a balanced 5-card composition (asymmetric magazine grid),
 * where the first card is larger (Amazon spotlight) and the remaining
 * four are arranged in a clean 2x2 + 1 layout.
 */
export function FeaturedCards() {
  return (
    <section
      id="featured"
      className="py-20 md:py-28 bg-[#EFE9DC] border-b border-[#E8DFCC]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8DFCC] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
              Featured cards
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            The brands traders{" "}
            <span className="gold-text">bring us most</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A5A5A]">
            These five gift cards make up the bulk of our daily trades. Tap
            any card to start a trade on WhatsApp with a pre-filled message.
          </p>
        </motion.div>

        {/* Balanced 5-card composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {/* Amazon — spotlight, larger, spans full left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-1 md:row-span-2"
          >
            <FeaturedCardWrapper brandName="Amazon">
              <AmazonCard />
            </FeaturedCardWrapper>
          </motion.div>

          {/* Steam — top middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeaturedCardWrapper brandName="Steam">
              <SteamCard />
            </FeaturedCardWrapper>
          </motion.div>

          {/* iTunes — top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <FeaturedCardWrapper brandName="iTunes">
              <ITunesCard />
            </FeaturedCardWrapper>
          </motion.div>

          {/* Google Play — bottom middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeaturedCardWrapper brandName="Google Play">
              <GooglePlayCard />
            </FeaturedCardWrapper>
          </motion.div>

          {/* Razer Gold — bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <FeaturedCardWrapper brandName="Razer Gold">
              <RazerGoldCard />
            </FeaturedCardWrapper>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-14 text-center"
        >
          <p className="text-[#5A5A5A] mb-5">
            Don&apos;t see your card? We trade 12+ brands in total.
          </p>
          <a
            href="#cards"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] bg-white border border-[#E8DFCC] hover:border-[#C9A961] hover:bg-[#F8F4EA] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm"
          >
            View all supported cards
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Wrapper that turns any brand card into a clickable WhatsApp link with
 * a pre-filled message.
 */
function FeaturedCardWrapper({
  brandName,
  children,
}: {
  brandName: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`https://wa.me/2347034886195?text=${encodeURIComponent(
        `Hello P-Cornel Trading, I'd like to trade a ${brandName} gift card. Please share your current rate.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block group focus:outline-none"
      aria-label={`Trade ${brandName} gift card on WhatsApp`}
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
        {children}
      </div>
    </a>
  );
}
