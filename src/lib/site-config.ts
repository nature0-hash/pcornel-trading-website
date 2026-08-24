/**
 * Site-wide configuration for P-CORNEL TRADING LIMITED.
 * WhatsApp: 2347034886195  (displayed as +234 703 488 6195)
 */

export type BrandId =
  | "amazon"
  | "steam"
  | "itunes"
  | "google-play"
  | "razer-gold"
  | "playstation"
  | "xbox"
  | "sephora"
  | "ebay"
  | "walmart"
  | "nike"
  | "target";

export type GiftCardBrand = {
  id: BrandId;
  name: string;
  category: "Cash" | "Gaming" | "Streaming" | "Shopping" | "Tech";
};

export type CardCategory = GiftCardBrand["category"];

export const siteConfig = {
  brand: "P-CORNEL TRADING LIMITED",
  brandShort: "P-Cornel",
  tagline: "Premium Gift Card Trading",
  description:
    "P-CORNEL TRADING LIMITED converts unused gift cards into fast, reliable payouts. A straightforward global trading partner for supported gift card brands.",

  // Real company WhatsApp number and email
  whatsappNumber: "2347034886195",
  whatsappDisplay: "+234 703 488 6195",
  email: "support@corneltrading.com",
  emailDisplay: "support@corneltrading.com",

  // Working hours
  hours: "Mon - Sat: 8:00 AM - 11:00 PM",
  hoursSun: "Sun: 12 PM - 8 PM",

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
    title: "Secure Handling",
    description:
      "Gift card details are handled carefully throughout verification. Every trade is processed with attention, consistency and respect for the customer's time.",
  },
  {
    icon: "zap",
    title: "Responsive Service",
    description:
      "From the moment a trade begins until it is completed, communication stays clear and the process stays organised around what each customer needs.",
  },
  {
    icon: "globe",
    title: "Global Trading Desk",
    description:
      "We work with a wide range of recognised gift card brands and welcome traders from anywhere. Reach us directly whenever you are ready to trade.",
  },
  {
    icon: "layers",
    title: "Verified Brands",
    description:
      "Amazon, Steam, iTunes, Google Play, Razer Gold, PlayStation, Xbox, Sephora, eBay, Walmart, Nike, Target and many more supported cards.",
  },
] as const;

export const giftCards: GiftCardBrand[] = [
  { id: "amazon", name: "Amazon", category: "Shopping" },
  { id: "steam", name: "Steam", category: "Gaming" },
  { id: "itunes", name: "iTunes", category: "Tech" },
  { id: "google-play", name: "Google Play", category: "Tech" },
  { id: "razer-gold", name: "Razer Gold", category: "Gaming" },
  { id: "playstation", name: "PlayStation", category: "Gaming" },
  { id: "xbox", name: "Xbox", category: "Gaming" },
  { id: "sephora", name: "Sephora", category: "Shopping" },
  { id: "ebay", name: "eBay", category: "Shopping" },
  { id: "walmart", name: "Walmart", category: "Shopping" },
  { id: "nike", name: "Nike", category: "Shopping" },
  { id: "target", name: "Target", category: "Shopping" },
];

export const cardCategories: CardCategory[] = [
  "Gaming",
  "Shopping",
  "Tech",
];

export const faqs = [
  {
    q: "How fast will I get paid after sending my gift card?",
    a: "Once your card is verified, payouts are typically sent within minutes. We confirm your preferred payout channel before you send the card so there is no back-and-forth, and most trades complete quickly from start to finish.",
  },
  {
    q: "Which gift cards do you accept?",
    a: "We trade a wide range of recognised brands including Amazon, Steam, iTunes, Google Play, Razer Gold, PlayStation, Xbox, Sephora, eBay, Walmart, Nike and Target. If you do not see your card in the gallery, message us and we will let you know if it is supported.",
  },
  {
    q: "How do you decide the rate for my card?",
    a: "Rates depend on the brand, card denomination and current market demand. We share your exact payout rate upfront before you send anything. The rate you receive in our confirmation is the rate you are paid, with no hidden deductions.",
  },
  {
    q: "Do I need to send the card before getting a quote?",
    a: "No. Send us the brand and value on WhatsApp and we will quote upfront. Once you accept, we share a clear confirmation before you release the card details or code. Clear communication comes first.",
  },
  {
    q: "What if my card is already redeemed or invalid?",
    a: "We verify every card before payout. If a card is invalid, already redeemed, or flagged by the issuer, we will return the unused code and explain the issue. We do not charge for failed verification.",
  },
  {
    q: "Can I trade cards in bulk for my business?",
    a: "Yes. We have a dedicated bulk desk for resellers and agents. Bulk trades qualify for priority verification and consistent handling. Contact us on WhatsApp with your expected volume and we will set up a direct line.",
  },
] as const;
