"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { trustBadges } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  zap: Zap,
  globe: Globe,
  layers: Layers,
};

export function TrustBadges() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E8DFCC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE9DC] border border-[#E8DFCC] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
              Why traders choose us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            Built for traders who value{" "}
            <span className="gold-text">trust and clarity</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A5A5A]">
            Four promises that shape every trade we handle — clear
            communication, careful verification and reliable, customer-focused
            service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-[#F8F4EA] rounded-2xl p-6 md:p-7 border border-[#E8DFCC] hover:border-[#C9A961]/50 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 lift-on-hover"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-[#C9A961] shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
