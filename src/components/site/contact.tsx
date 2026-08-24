"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, Send, ShieldCheck, Zap } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#062C22] text-[#F7F6F1] p-8 md:p-14 mb-16"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#059669]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#F59E0B]/20 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Start trading today
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Your cash is one{" "}
              <span className="emerald-text">WhatsApp message</span> away
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#F7F6F1]/80">
              Send us a message and get an instant rate quote. Most trades are
              completed within minutes of you accepting the rate. No apps,
              no sign-ups, no waiting.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                label="Chat on WhatsApp now"
                size="lg"
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

        {/* Contact details grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#062C22] mb-3">
            Get in touch
          </h3>
          <p className="text-[#5C6B66]">
            We&apos;re available around the clock. Reach us on the channel that
            works best for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value={siteConfig.whatsappDisplay}
            sub="Fastest response · 24/7"
            href={whatsappLink("Hello P-Cornel Trading, I'd like to trade a gift card.")}
            accent="green"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value={siteConfig.emailDisplay}
            sub="We reply within 2 hours"
            href={`mailto:${siteConfig.email}`}
            accent="dark"
          />
          <ContactCard
            icon={Clock}
            title="Working hours"
            value={siteConfig.hours}
            sub={siteConfig.hoursSun}
            href="#"
            accent="amber"
          />
        </div>

        {/* Quick WhatsApp form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 border border-[#DDD9CB] shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2 justify-center">
            <Zap className="h-4 w-4 text-[#F59E0B]" />
            <h3 className="text-xl md:text-2xl font-bold text-[#062C22] text-center">
              Send us a quick message
            </h3>
          </div>
          <p className="text-sm text-[#5C6B66] text-center mb-6">
            Fill this in and we&apos;ll open a pre-filled WhatsApp chat with our
            team. No data is stored.
          </p>
          <QuickForm />
        </motion.div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#5C6B66]">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#059669]" />
            Bank-grade encryption
          </div>
          <div className="inline-flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#F59E0B]" />
            5-minute average payout
          </div>
          <div className="inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            24/7 WhatsApp support
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  sub,
  href,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  sub: string;
  href: string;
  accent: "green" | "dark" | "amber";
}) {
  const accentClasses = {
    green: "bg-[#059669]/10 text-[#059669]",
    dark: "bg-[#062C22]/10 text-[#062C22]",
    amber: "bg-[#F59E0B]/15 text-[#F59E0B]",
  };

  const content = (
    <div className="group h-full bg-white rounded-2xl p-6 border border-[#DDD9CB] hover:border-[#059669]/40 hover:shadow-lg hover:shadow-[#062C22]/5 transition-all duration-300 flex flex-col items-center text-center lift-on-hover">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${accentClasses[accent]} group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-semibold text-[#5C6B66] uppercase tracking-wider mb-1">
        {title}
      </h4>
      <div className="text-base font-bold text-[#062C22] break-all">
        {value}
      </div>
      <div className="text-xs text-[#5C6B66] mt-1">{sub}</div>
    </div>
  );

  if (href === "#") return content;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
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
          className="w-full px-4 py-3 rounded-xl bg-[#F7F6F1] border border-[#DDD9CB] text-sm text-[#062C22] placeholder:text-[#5C6B66]/70 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 transition-all"
        />
        <input
          required
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          placeholder="Gift card type (e.g. Amazon, Steam)"
          className="w-full px-4 py-3 rounded-xl bg-[#F7F6F1] border border-[#DDD9CB] text-sm text-[#062C22] placeholder:text-[#5C6B66]/70 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 transition-all"
        />
      </div>
      <input
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
        placeholder="Card value (e.g. $100)"
        className="w-full px-4 py-3 rounded-xl bg-[#F7F6F1] border border-[#DDD9CB] text-sm text-[#062C22] placeholder:text-[#5C6B66]/70 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 transition-all"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Anything else we should know?"
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-[#F7F6F1] border border-[#DDD9CB] text-sm text-[#062C22] placeholder:text-[#5C6B66]/70 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 transition-all resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#25D366]/25"
      >
        <Send className="h-5 w-5" />
        Send via WhatsApp
      </button>
    </form>
  );
}
