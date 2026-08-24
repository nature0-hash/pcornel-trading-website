"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  MessageCircle,
  HandCoins,
  Headset,
} from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const principles = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Straightforward information from the beginning of every trade.",
  },
  {
    icon: HandCoins,
    title: "Reliable Service",
    description:
      "A consistent process designed to keep trading simple and organised.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Handling",
    description:
      "Gift card details are handled carefully throughout verification.",
  },
  {
    icon: Headset,
    title: "Customer Focused",
    description:
      "Direct support and responsive communication whenever assistance is needed.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white border-b border-[#E8DFCC]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE9DC] border border-[#E8DFCC] px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
                About us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
              Gift card trading built around{" "}
              <span className="gold-text">trust, speed and simplicity.</span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-[#5A5A5A] leading-relaxed">
              P-CORNEL TRADING LIMITED provides a straightforward way for
              individuals and businesses to trade supported gift cards through
              a fast, reliable and customer-focused process.
            </p>
            <p className="mt-4 text-base text-[#0A0A0A]/80 leading-relaxed">
              Our approach is simple: clear communication, careful
              verification and responsive service from the moment a trade
              begins until it is completed. We work with a wide range of
              recognised gift card brands and make it easy for customers to
              reach us directly whenever they are ready to trade.
            </p>
            <p className="mt-4 text-base text-[#5A5A5A] leading-relaxed">
              We believe a good trading experience should feel simple,
              transparent and professional. That is why every interaction is
              handled with attention, consistency and respect for the
              customer&apos;s time.
            </p>

            <div className="mt-8">
              <WhatsAppButton
                label="Get in touch"
                size="lg"
                message="Hello P-Cornel Trading, I'd like to learn more about your services."
              />
            </div>
          </motion.div>

          {/* Right: mission/vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="bg-[#F8F4EA] rounded-2xl p-6 md:p-7 border border-[#E8DFCC] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A0A0A] text-[#C9A961] flex-shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-1">
                    Our Mission
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">
                    To make gift card trading straightforward, reliable and
                    accessible through professional service and clear
                    communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F4EA] rounded-2xl p-6 md:p-7 border border-[#E8DFCC] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A961] text-[#0A0A0A] flex-shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-1">
                    Our Vision
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">
                    To build a trusted global trading brand recognised for
                    consistency, simplicity and the quality of every customer
                    interaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3">
            The principles behind every trade
          </h3>
          <p className="text-[#5A5A5A]">
            Four principles guide every conversation, every verification and
            every payout.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#F8F4EA] rounded-2xl p-6 border border-[#E8DFCC] hover:border-[#C9A961]/40 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all lift-on-hover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-[#C9A961] mb-4">
                <p.icon className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#0A0A0A] mb-2">
                {p.title}
              </h4>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
