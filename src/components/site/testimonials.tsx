"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-config";

const palette = [
  "bg-[#059669]/10 text-[#059669]",
  "bg-[#F59E0B]/15 text-[#F59E0B]",
  "bg-[#062C22]/10 text-[#062C22]",
  "bg-[#10B981]/15 text-[#10B981]",
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DDD9CB] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
              What traders say
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062C22] tracking-tight">
            12,000+ traders paid.{" "}
            <span className="emerald-text">Here are a few of them.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5C6B66]">
            Real quotes from real traders who trust P-Cornel with their gift
            cards every week.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-white rounded-2xl p-6 border border-[#DDD9CB] hover:shadow-xl hover:shadow-[#062C22]/5 transition-shadow flex flex-col lift-on-hover"
            >
              <Quote className="absolute top-5 right-5 h-7 w-7 text-[#059669]/20" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              <p className="text-sm text-[#0E1B17] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[#DDD9CB]">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${palette[i % palette.length]}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#062C22]">{t.name}</div>
                  <div className="text-xs text-[#5C6B66]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
