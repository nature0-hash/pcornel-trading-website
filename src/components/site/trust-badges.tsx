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
    <section className="py-16 md:py-20 bg-white border-b border-[#DDD9CB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
              Why traders choose us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062C22] tracking-tight">
            Built for traders who value{" "}
            <span className="emerald-text">speed and trust</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5C6B66]">
            Four promises that have made P-Cornel the go-to gift card partner
            for thousands of traders across Africa and beyond.
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
                className="group relative bg-[#F7F6F1] rounded-2xl p-6 md:p-7 border border-[#DDD9CB] hover:border-[#059669]/40 hover:bg-white hover:shadow-xl hover:shadow-[#062C22]/5 transition-all duration-300 lift-on-hover"
              >
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#059669] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#062C22] to-[#0E3A2C] text-white shadow-lg shadow-[#062C22]/20 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#062C22] mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-[#5C6B66] leading-relaxed">
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
