"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  XboxCard,
  PlayStationCard,
} from "./brand-cards";

export function FeaturedCards() {
  return (
    <section id="featured" className="py-20 md:py-28 bg-white border-b border-[#DDD9CB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: featured cards in asymmetric grid */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="col-span-2 sm:col-span-4 sm:row-span-2"
              >
                <AmazonCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="col-span-1 sm:col-span-2"
              >
                <SteamCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="col-span-1 sm:col-span-2"
              >
                <ITunesCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="col-span-1 sm:col-span-2"
              >
                <GooglePlayCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="col-span-1 sm:col-span-2"
              >
                <XboxCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="col-span-2 sm:col-span-2"
              >
                <PlayStationCard />
              </motion.div>
            </div>
          </div>

          {/* Right: copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
                Featured cards
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062C22] tracking-tight leading-tight">
              The brands traders{" "}
              <span className="emerald-text">bring us every day</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#5C6B66] leading-relaxed">
              These six are the most-traded gift cards on our desk this month.
              Amazon, Steam and iTunes lead the volume, but we accept 120+ other
              brands across cash, gaming, streaming, shopping and tech
              categories. If you have a real gift card from a recognised issuer,
              we will quote it.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Live, market-benchmarked rates for every brand",
                "Both physical cards and e-codes accepted",
                "Bulk desk for resellers with premium rates",
                "Cards from US, UK, EU, CA, AU and beyond",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E1B17]">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#059669]/10 flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton
                label="Get a rate for my card"
                size="lg"
                message="Hello P-Cornel Trading, I'd like to get a rate quote for my gift card."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
