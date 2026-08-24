/**
 * Site-wide configuration for P-CORNEL TRADING LIMITED.
 * WhatsApp: 2347034886195  (displayed as +234 703 488 6195)
 */

export type BrandId =
  | "amazon"
  | "steam"
  | "itunes"
  | "google-play"
  | "xbox"
  | "playstation"
  | "ebay"
  | "sephora"
  | "netflix"
  | "spotify"
  | "visa"
  | "mastercard"
  | "walmart"
  | "target"
  | "best-buy"
  | "apple-store"
  | "nike"
  | "adidas"
  | "macys"
  | "nordstrom";

export type GiftCardBrand = {
  id: BrandId;
  name: string;
  category: "Cash" | "Gaming" | "Streaming" | "Shopping" | "Tech";
};

export type CardCategory = GiftCardBrand["category"];

export const siteConfig = {
  brand: "P-CORNEL TRADING LIMITED",
  brandShort: "P-Cornel",
  tagline: "Africa's Premium Gift Card Exchange",
  description:
    "P-CORNEL TRADING LIMITED converts unused gift cards into instant cash. Secure, transparent, and lightning-fast payouts across Africa and beyond.",

  // Real company WhatsApp number and email
  whatsappNumber: "2347034886195",
  whatsappDisplay: "+234 703 488 6195",
  email: "support@corneltrading.com",
  emailDisplay: "support@corneltrading.com",

  // Working hours
  hours: "Mon - Sat: 8:00 AM - 11:00 PM (WAT)",
  hoursSun: "Sun: 12 PM - 8 PM (WAT)",

  // Social links
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cards", href: "#cards" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustBadges = [
  {
    icon: "shield-check",
    title: "Bank-Grade Security",
    description:
      "Every transaction is encrypted end-to-end. Your cards, codes and payouts stay protected from the moment you send them until the cash lands.",
  },
  {
    icon: "zap",
    title: "5-Minute Payouts",
    description:
      "Verified trades are paid out in minutes. We benchmark our average turnaround against the fastest in the industry, and we win.",
  },
  {
    icon: "globe",
    title: "Pan-African Reach",
    description:
      "We pay to bank accounts and mobile money wallets across Nigeria, Ghana, Kenya, South Africa, Uganda and 30+ more countries.",
  },
  {
    icon: "layers",
    title: "120+ Card Brands",
    description:
      "Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora, Visa and many more. If it is a real gift card, we will trade it.",
  },
] as const;

export const giftCards: GiftCardBrand[] = [
  { id: "amazon", name: "Amazon", category: "Shopping" },
  { id: "steam", name: "Steam", category: "Gaming" },
  { id: "itunes", name: "iTunes", category: "Tech" },
  { id: "google-play", name: "Google Play", category: "Tech" },
  { id: "xbox", name: "Xbox", category: "Gaming" },
  { id: "playstation", name: "PlayStation", category: "Gaming" },
  { id: "ebay", name: "eBay", category: "Shopping" },
  { id: "sephora", name: "Sephora", category: "Shopping" },
  { id: "netflix", name: "Netflix", category: "Streaming" },
  { id: "spotify", name: "Spotify", category: "Streaming" },
  { id: "visa", name: "Visa", category: "Cash" },
  { id: "mastercard", name: "Mastercard", category: "Cash" },
  { id: "walmart", name: "Walmart", category: "Shopping" },
  { id: "target", name: "Target", category: "Shopping" },
  { id: "best-buy", name: "Best Buy", category: "Tech" },
  { id: "apple-store", name: "Apple Store", category: "Tech" },
  { id: "nike", name: "Nike", category: "Shopping" },
  { id: "adidas", name: "Adidas", category: "Shopping" },
  { id: "macys", name: "Macy's", category: "Shopping" },
  { id: "nordstrom", name: "Nordstrom", category: "Shopping" },
];

export const cardCategories: CardCategory[] = [
  "Cash",
  "Gaming",
  "Streaming",
  "Shopping",
  "Tech",
];

/**
 * Live rate ticker sample data. Displayed in a horizontally scrolling marquee
 * under the hero. Rates are illustrative; the actual rate is confirmed on
 * WhatsApp before every trade.
 */
export const rateTicker = [
  { brand: "Amazon", code: "AMZ", rate: "₦1,180/$" },
  { brand: "Steam", code: "STM", rate: "₦1,050/$" },
  { brand: "iTunes", code: "ITN", rate: "₦1,220/$" },
  { brand: "Google Play", code: "GPL", rate: "₦1,100/$" },
  { brand: "Xbox", code: "XBX", rate: "₦1,080/$" },
  { brand: "PlayStation", code: "PSN", rate: "₦1,090/$" },
  { brand: "Sephora", code: "SEPH", rate: "₦1,150/$" },
  { brand: "Visa", code: "VSA", rate: "₦980/$" },
  { brand: "Mastercard", code: "MC", rate: "₦980/$" },
  { brand: "Netflix", code: "NFLX", rate: "₦1,040/$" },
  { brand: "Spotify", code: "SPT", rate: "₦1,060/$" },
  { brand: "eBay", code: "EBY", rate: "₦1,070/$" },
] as const;

export const faqs = [
  {
    q: "How fast will I get paid after sending my gift card?",
    a: "Once your card is verified, payouts are sent within 5 minutes on average. Bank transfers to Nigerian banks, mobile money across Africa, and major e-wallets are all supported. We confirm your payout channel before you send the card, so there is no back-and-forth.",
  },
  {
    q: "Which gift cards do you accept?",
    a: "We trade 120+ brands including Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora, Visa, Mastercard, Netflix, Spotify, eBay, Walmart, Target, Best Buy, Apple Store, Nike, Adidas, Macy's and Nordstrom. If you do not see your card in the gallery, message us on WhatsApp and we will quote it.",
  },
  {
    q: "How do you decide the rate for my card?",
    a: "Rates depend on the brand, card denomination, country of issue, and current market demand. We benchmark against live market data and update quotes throughout the day. The rate you receive in our WhatsApp confirmation is the rate you are paid, no hidden deductions.",
  },
  {
    q: "Do I need to send the card before getting a quote?",
    a: "No. Send us the brand, country and value on WhatsApp and we will quote upfront. Once you accept, we share a secure payment confirmation before you release the card details or code. Your security comes first.",
  },
  {
    q: "What if my card is already redeemed or invalid?",
    a: "We verify every card before payout. If a card is invalid, already redeemed, or flagged by the issuer, we will return the unused code and explain the issue. We do not charge for failed verification.",
  },
  {
    q: "Can I trade cards in bulk for my business?",
    a: "Yes. We have a dedicated bulk desk for resellers and agents. Bulk trades qualify for premium rates, priority verification, and same-day aggregated payouts. Contact us on WhatsApp with your expected volume and we will set up a direct line.",
  },
] as const;

export const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Reseller, Lagos",
    quote:
      "I have traded over $40,000 in gift cards with P-Cornel and never once had a delayed payout. The WhatsApp response is instant, and the rates are consistently the best I have seen in Lagos.",
    initials: "AO",
  },
  {
    name: "Brian Mwangi",
    role: "Agent, Nairobi",
    quote:
      "Their bulk desk is the real deal. I send 30+ cards a day and the team settles everything within minutes. M-Pesa payout hits my phone before I even close the chat.",
    initials: "BM",
  },
  {
    name: "Sarah Owusu",
    role: "Designer, Accra",
    quote:
      "Was nervous the first time, but their upfront quote and verification process made it feel safe. I have been a repeat customer for 8 months now. Highly recommended.",
    initials: "SO",
  },
  {
    name: "Tunde Bakare",
    role: "Student, Ibadan",
    quote:
      "Turned an unused $100 Amazon card into ₦118,000 in my bank account in under 10 minutes. Genuinely the fastest, fairest trade I have ever done.",
    initials: "TB",
  },
] as const;
