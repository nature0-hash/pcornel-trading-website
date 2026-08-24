"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const steps = [
  {
    number: "01",
    title: "Message us on WhatsApp",
    description:
      "Send a quick message with your card brand, country and value. We reply within minutes, any hour of the day, with a live quote.",
    accent: "Send a message",
  },
  {
    number: "02",
    title: "Accept your upfront rate",
    description:
      "We share your exact payout rate before you send anything. No haggling, no hidden deductions. You accept, we lock the rate.",
    accent: "Lock your rate",
  },
  {
    number: "03",
    title: "Share the card securely",
    description:
      "Send a clear photo or the e-code through WhatsApp. We verify balance and validity with the issuer, usually within 2 minutes.",
    accent: "Verified by issuer",
  },
  {
    number: "04",
    title: "Get paid in your wallet",
    description:
      "Receive your payout instantly via bank transfer, mobile money or local payment channel. Most trades settle within 5 minutes of verification.",
    accent: "Cash in minutes",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DDD9CB] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
              How it works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062C22] tracking-tight">
            From card to cash in{" "}
            <span className="emerald-text">four simple steps</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5C6B66]">
            No sign-ups, no apps, no waiting days for a quote. The whole flow
            runs on WhatsApp and most trades are settled within five minutes
            of you sending the first message.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#059669]/40 via-[#059669]/20 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex md:items-center gap-5 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number node */}
                <div className="relative z-10 flex-shrink-0 md:w-1/2 md:flex md:justify-center">
                  <div
                    className={`flex items-center gap-4 md:flex-col md:items-center md:gap-2 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#062C22] text-[#F7F6F1] shadow-lg shadow-[#062C22]/20 ring-4 ring-[#F7F6F1]">
                      <span className="text-base font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 md:w-1/2 md:px-8">
                  <div className="bg-white rounded-2xl p-6 md:p-7 border border-[#DDD9CB] shadow-sm hover:shadow-lg hover:shadow-[#062C22]/5 transition-shadow lift-on-hover">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#059669]/10 px-2.5 py-1 mb-3">
                      <span className="text-[10px] font-bold text-[#059669] uppercase tracking-wider">
                        {step.accent}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#062C22] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5C6B66] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 md:mt-20 text-center"
        >
          <p className="text-[#5C6B66] mb-5">
            Ready to start your first trade? Get an instant quote on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton
              label="Get my rate now"
              size="lg"
              message="Hello P-Cornel Trading, I'd like to get a rate quote for my gift card."
            />
            <a
              href="#cards"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#062C22] border-2 border-[#062C22]/15 rounded-full hover:border-[#062C22] hover:bg-white transition-all duration-300"
            >
              Browse supported cards
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
