"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgePercent,
  AlertTriangle,
  FileText,
} from "lucide-react";

const coreTerms = [
  {
    icon: ShieldCheck,
    title: "Card Ownership",
    description:
      "You must own any gift card you trade with us. Stolen, fraudulent or unauthorized cards are strictly prohibited and will be rejected immediately.",
  },
  {
    icon: Clock,
    title: "Processing Times",
    description:
      "Payment times are estimates, not guarantees. Most trades complete promptly, but verification and external factors may occasionally cause delays.",
  },
  {
    icon: BadgePercent,
    title: "Rates May Change",
    description:
      "Gift card rates fluctuate based on market conditions. The rate quoted at the time of trade is the rate you receive, and rates may change without notice.",
  },
  {
    icon: AlertTriangle,
    title: "Trade Rejections",
    description:
      "We reserve the right to reject any trade for reasons including invalid cards, already redeemed cards, mismatched values, or suspicious activity.",
  },
];

export function Terms() {
  return (
    <section id="terms" className="py-20 md:py-28 bg-white border-b border-[#E8DFCC]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE9DC] border border-[#E8DFCC] px-4 py-1.5 mb-4">
            <FileText className="h-4 w-4 text-[#C9A961]" />
            <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
              Terms &amp; conditions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            Trading terms &amp; <span className="gold-text">conditions</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A5A5A]">
            Please review the core terms that govern your gift card trades with
            P-CORNEL TRADING LIMITED. By trading with us, you agree to these
            terms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {coreTerms.map((term, i) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#F8F4EA] rounded-2xl p-6 border border-[#E8DFCC] hover:border-[#C9A961]/40 hover:shadow-lg hover:shadow-black/5 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-[#C9A961] mb-4">
                <term.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#0A0A0A] mb-2">
                {term.title}
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                {term.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Verification & fraud notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-3xl p-8 md:p-10 text-[#F8F4EA]"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A961] text-[#0A0A0A] mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Verification before payment
              </h3>
              <p className="text-sm text-[#F8F4EA]/80 leading-relaxed">
                All gift cards are verified for balance and validity before
                payment is released. This protects both you and P-CORNEL
                TRADING LIMITED from fraud and ensures every trade is
                legitimate.
              </p>
            </div>
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-300 mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Fraud prevention &amp; liability
              </h3>
              <p className="text-sm text-[#F8F4EA]/80 leading-relaxed">
                Fraudulent activity is strictly prohibited and may be reported
                to the appropriate authorities. P-CORNEL TRADING LIMITED is
                not liable for losses resulting from unauthorized trades,
                invalid cards, or failure to follow these terms.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-xs text-[#5A5A5A] max-w-2xl mx-auto"
        >
          By initiating a trade with P-CORNEL TRADING LIMITED, you acknowledge
          that you have read and agree to these Terms &amp; Conditions. For
          questions, contact us on WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}
