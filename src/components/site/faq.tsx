"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#EFE9DC]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8DFCC] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            Questions, <span className="gold-text">answered</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A5A5A]">
            Everything you need to know before your first trade. Still unsure?
            Message us on WhatsApp.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#C9A961]/40 shadow-md"
                    : "bg-white/60 border-[#E8DFCC] hover:border-[#C9A961]/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-[#0A0A0A]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#C9A961] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-[#5A5A5A] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center bg-white rounded-3xl p-8 border border-[#E8DFCC]"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2">
            Still have questions?
          </h3>
          <p className="text-sm text-[#5A5A5A] mb-5">
            Our team is on WhatsApp. Reach us directly whenever you are ready.
          </p>
          <WhatsAppButton
            label="Ask on WhatsApp"
            size="lg"
            message="Hello P-Cornel Trading, I have a question about gift card trading."
          />
        </motion.div>
      </div>
    </section>
  );
}
