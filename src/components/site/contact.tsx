"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, Send, ShieldCheck, Zap } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#EFE9DC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] text-[#F8F4EA] p-8 md:p-14 mb-16"
        >
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C9A961]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#C9A961]/15 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-[#C9A961]/40 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
                Start trading today
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Your trade is one{" "}
              <span className="gold-text">WhatsApp message</span> away
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#F8F4EA]/80">
              Send us a message and get an upfront rate. No apps, no sign-ups,
              no waiting. Most trades are completed shortly after you accept
              the rate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                label="Chat on WhatsApp now"
                size="lg"
                variant="light"
                message="Hello P-Cornel Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Email us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Get in touch + quick form (rebalanced 2-column layout) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8DFCC] px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-[#C9A961] uppercase tracking-wider">
                Get in touch
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3">
              Reach us directly
            </h3>
            <p className="text-[#5A5A5A] mb-6 leading-relaxed">
              We&apos;re available across multiple channels. Choose whichever
              works best for you — we typically respond within minutes on
              WhatsApp during working hours.
            </p>

            {/* Contact options — WhatsApp card no longer shows the raw number */}
            <div className="space-y-3">
              <ContactRow
                icon={MessageCircle}
                title="WhatsApp"
                sub="Fastest response · during working hours"
                actionLabel="Open WhatsApp"
                href={whatsappLink(
                  "Hello P-Cornel Trading, I'd like to trade a gift card."
                )}
                accent="gold"
              />
              <ContactRow
                icon={Mail}
                title="Email"
                sub={siteConfig.emailDisplay}
                actionLabel="Send email"
                href={`mailto:${siteConfig.email}`}
                accent="dark"
              />
              <ContactRow
                icon={Clock}
                title="Working hours"
                sub={`${siteConfig.hours} · ${siteConfig.hoursSun}`}
                href="#"
                accent="gold"
              />
            </div>

            {/* Trust strip */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5A5A5A]">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#C9A961]" />
                Secure handling
              </div>
              <div className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-[#C9A961]" />
                Verified trades
              </div>
              <div className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#C9A961]" />
                Direct support
              </div>
            </div>
          </motion.div>

          {/* Right: quick WhatsApp form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-[#E8DFCC] shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-[#C9A961]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A]">
                Send us a quick message
              </h3>
            </div>
            <p className="text-sm text-[#5A5A5A] mb-6">
              Fill this in and we&apos;ll open a pre-filled WhatsApp chat with
              our team. No data is stored.
            </p>
            <QuickForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  sub,
  actionLabel,
  href,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  actionLabel?: string;
  href: string;
  accent: "gold" | "dark";
}) {
  const accentClasses = {
    gold: "bg-[#C9A961]/15 text-[#C9A961]",
    dark: "bg-[#0A0A0A]/10 text-[#0A0A0A]",
  };

  const content = (
    <div className="group flex items-center gap-4 bg-white rounded-2xl p-4 md:p-5 border border-[#E8DFCC] hover:border-[#C9A961]/40 hover:shadow-md hover:shadow-black/5 transition-all lift-on-hover">
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl flex-shrink-0 ${accentClasses[accent]} group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-[#0A0A0A]">{title}</div>
        <div className="text-xs text-[#5A5A5A] truncate">{sub}</div>
      </div>
      {actionLabel && (
        <div className="text-xs font-semibold text-[#C9A961] flex-shrink-0 inline-flex items-center gap-1">
          {actionLabel}
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href === "#" || !actionLabel) return content;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {content}
    </a>
  );
}

function QuickForm() {
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello P-Cornel Trading!\n\nName: ${name || "-"}\nGift Card: ${
      cardType || "-"
    }\nValue: ${cardValue || "-"}\n\nMessage: ${message || "-"}`;
    window.open(`${whatsappLink()}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-[#F8F4EA] border border-[#E8DFCC] text-sm text-[#0A0A0A] placeholder:text-[#5A5A5A]/70 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all"
        />
        <input
          required
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          placeholder="Gift card type (e.g. Amazon, Steam)"
          className="w-full px-4 py-3 rounded-xl bg-[#F8F4EA] border border-[#E8DFCC] text-sm text-[#0A0A0A] placeholder:text-[#5A5A5A]/70 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all"
        />
      </div>
      <input
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
        placeholder="Card value (e.g. $100)"
        className="w-full px-4 py-3 rounded-xl bg-[#F8F4EA] border border-[#E8DFCC] text-sm text-[#0A0A0A] placeholder:text-[#5A5A5A]/70 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Anything else we should know?"
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-[#F8F4EA] border border-[#E8DFCC] text-sm text-[#0A0A0A] placeholder:text-[#5A5A5A]/70 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#F8F4EA] bg-[#0A0A0A] hover:bg-[#1A1A1A] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/20 border border-[#C9A961]/40 hover:border-[#C9A961]"
      >
        <Send className="h-5 w-5 text-[#C9A961]" />
        Send via WhatsApp
      </button>
    </form>
  );
}
