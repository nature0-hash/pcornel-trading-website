"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We pay what we quote. No bait-and-switch, no hidden deductions. Every trade is transparent from the first message to the final payout confirmation.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to a high bar on every trade: fast verification, accurate rates and reliable payouts. The details matter, every time.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Real humans answer your WhatsApp within minutes. We treat every client, big or small, with the same respect and urgency.",
  },
  {
    icon: Globe2,
    title: "Pan-African Reach",
    description:
      "We pay to bank accounts and mobile money wallets across 30+ African countries and beyond. Wherever you are, we have a payout channel that works.",
  },
];

const stats = [
  { icon: Users, value: "12K+", label: "Traders paid" },
  { icon: Award, value: "120+", label: "Card brands" },
  { icon: Globe2, value: "30+", label: "Countries" },
  { icon: TrendingUp, value: "$8M+", label: "Traded" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-[#DDD9CB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
                About us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062C22] tracking-tight">
              Africa&apos;s premium{" "}
              <span className="emerald-text">gift card exchange</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#5C6B66] leading-relaxed">
              P-CORNEL TRADING LIMITED is a gift card trading company built on
              trust, speed and fairness. We help individuals and businesses
              across Africa convert unused gift cards into real cash, quickly,
              securely, and at the most competitive rates on the continent.
            </p>
            <p className="mt-4 text-base text-[#0E1B17]/80 leading-relaxed">
              What started as a small WhatsApp-based operation in Lagos has
              grown into a trusted partner for thousands of traders across
              Nigeria, Ghana, Kenya, South Africa, Uganda and 25 more
              countries. We trade every major gift card brand, from Amazon
              and Steam to iTunes, Google Play, Xbox, PlayStation, Sephora,
              Visa and Mastercard, and pay out through bank transfer, mobile
              money and local payment channels.
            </p>
            <p className="mt-4 text-base text-[#5C6B66] leading-relaxed">
              Our mission is simple: make gift card trading fast, transparent
              and accessible to everyone, everywhere. When you trade with us,
              you get upfront rates, real-time updates, and guaranteed payouts,
              every single time.
            </p>

            <div className="mt-8">
              <WhatsAppButton
                label="Get in touch"
                size="lg"
                message="Hello P-Cornel Trading, I'd like to learn more about your services."
              />
            </div>
          </motion.div>

          {/* Right: mission/vision + stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-5">
              <div className="bg-[#F7F6F1] rounded-2xl p-6 md:p-7 border border-[#DDD9CB] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#062C22] text-white flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#062C22] mb-1">
                      Our Mission
                    </h3>
                    <p className="text-sm text-[#5C6B66] leading-relaxed">
                      To make gift card trading simple, fast and fair for
                      everyone, delivering instant payouts and the most
                      competitive rates, every single time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F6F1] rounded-2xl p-6 md:p-7 border border-[#DDD9CB] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#059669] text-white flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#062C22] mb-1">
                      Our Vision
                    </h3>
                    <p className="text-sm text-[#5C6B66] leading-relaxed">
                      To be the most trusted gift card trading partner in
                      Africa, known for integrity, speed and the human touch
                      that makes every client feel valued.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F7F6F1] rounded-2xl p-4 border border-[#DDD9CB] text-center hover:border-[#059669]/40 transition-colors"
                  >
                    <s.icon className="h-5 w-5 text-[#059669] mx-auto mb-2" />
                    <div className="text-xl font-bold text-[#062C22]">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-[#5C6B66] uppercase tracking-wider mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#062C22] mb-3">
            What we stand for
          </h3>
          <p className="text-[#5C6B66]">
            Four values that guide every trade we make and every conversation
            we have.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#F7F6F1] rounded-2xl p-6 border border-[#DDD9CB] hover:border-[#059669]/40 hover:bg-white hover:shadow-lg hover:shadow-[#062C22]/5 transition-all lift-on-hover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#062C22] to-[#0E3A2C] text-white mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#062C22] mb-2">
                {v.title}
              </h4>
              <p className="text-sm text-[#5C6B66] leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
