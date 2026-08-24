"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const steps = [
  {
    number: "01",
    title: "Message us on WhatsApp",
    description:
      "Send a quick message with your card brand and value. We reply promptly with a clear, upfront quote.",
  },
  {
    number: "02",
    title: "Accept your upfront rate",
    description:
      "We share your exact payout rate before you send anything. No haggling, no hidden deductions. You accept, we lock the rate.",
  },
  {
    number: "03",
    title: "Share the card securely",
    description:
      "Send a clear photo or the e-code through WhatsApp. We verify balance and validity with the issuer.",
  },
  {
    number: "04",
    title: "Get paid",
    description:
      "Receive your payout through your preferred channel. Most trades settle shortly after verification is complete.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-b border-[#E8DFCC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE9DC] border border-[#E8DFCC] px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
              How it works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            From card to cash in{" "}
            <span className="gold-text">four connected steps</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A5A5A]">
            No sign-ups, no apps, no waiting days for a quote. The whole flow
            runs on WhatsApp and most trades are completed shortly after you
            send the first message.
          </p>
        </motion.div>

        {/* Connected flowing path */}
        <FlowingPath />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-[#5A5A5A] mb-5">
            Ready to start your first trade? Reach us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton
              label="Get my rate now"
              size="lg"
              message="Hello P-Cornel Trading, I'd like to get a rate quote for my gift card."
            />
            <a
              href="#cards"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0A0A0A] border-2 border-[#0A0A0A]/15 rounded-full hover:border-[#0A0A0A] hover:bg-[#EFE9DC] transition-all duration-300"
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

/**
 * Connected flowing path — a 4-step stair-step layout with a continuous
 * SVG path drawn through all four step nodes.
 *
 * Desktop / tablet (sm and up): horizontal layout where each step card is
 * positioned at a slightly different vertical offset (stair-step), with a
 * gold SVG path connecting the step-number nodes left-to-right.
 *
 * Mobile: vertical stack with a vertical gold line connecting the nodes
 * from top to bottom.
 */
function FlowingPath() {
  return (
    <div className="relative">
      {/* === Desktop / tablet connected stair-step path === */}
      <div className="hidden sm:block relative">
        {/* Connecting SVG path - drawn behind the step cards */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1200 480"
          fill="none"
        >
          <defs>
            <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A961" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#A88940" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Continuous stair-step path connecting all 4 nodes */}
          <path
            d="M 150 80 L 350 80 Q 380 80 380 110 L 380 200 Q 380 230 410 230 L 660 230 Q 690 230 690 260 L 690 350 Q 690 380 720 380 L 1050 380"
            stroke="url(#path-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0"
            fill="none"
          />
          {/* Gold dot markers at each node */}
          <circle cx="150" cy="80" r="6" fill="#C9A961" />
          <circle cx="380" cy="200" r="6" fill="#C9A961" />
          <circle cx="690" cy="350" r="6" fill="#C9A961" />
          <circle cx="1050" cy="380" r="6" fill="#C9A961" />
        </svg>

        {/* Step cards positioned in stair-step layout */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-0">
          <StepCard step={steps[0]} offset="lg:mt-0" />
          <StepCard step={steps[1]} offset="lg:mt-16" />
          <StepCard step={steps[2]} offset="lg:mt-32" />
          <StepCard step={steps[3]} offset="lg:mt-48" />
        </div>
      </div>

      {/* === Mobile vertical connected path === */}
      <div className="sm:hidden relative">
        {/* Vertical connecting line */}
        <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#C9A961] via-[#C9A961]/60 to-[#C9A961]/30" />

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-4"
            >
              {/* Step number node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0A0A0A] text-[#F8F4EA] shadow-lg ring-4 ring-white">
                  <span className="text-base font-bold">{step.number}</span>
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 bg-[#F8F4EA] rounded-2xl p-5 border border-[#E8DFCC] shadow-sm">
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({
  step,
  offset = "",
}: {
  step: { number: string; title: string; description: string };
  offset?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`relative ${offset}`}
    >
      {/* Step number node — sits on the connecting path */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A0A0A] text-[#F8F4EA] shadow-lg ring-4 ring-white border border-[#C9A961]/40">
          <span className="text-sm font-bold">{step.number}</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[#C9A961]/40 to-transparent" />
      </div>

      <div className="bg-[#F8F4EA] rounded-2xl p-6 border border-[#E8DFCC] shadow-sm hover:shadow-lg hover:shadow-black/5 hover:border-[#C9A961]/40 transition-all lift-on-hover">
        <h3 className="text-base md:text-lg font-bold text-[#0A0A0A] mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-[#5A5A5A] leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
