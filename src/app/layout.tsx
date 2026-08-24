import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "P-CORNEL TRADING LIMITED | Africa's Premium Gift Card Exchange",
  description:
    "P-CORNEL TRADING LIMITED converts unused gift cards into instant cash. Secure, transparent and lightning-fast payouts across Nigeria, Ghana, Kenya, South Africa and 30+ countries.",
  keywords: [
    "P-CORNEL TRADING",
    "gift card trading",
    "gift card exchange Nigeria",
    "Amazon gift card buyer",
    "Steam gift card rate",
    "iTunes gift card",
    "instant gift card payout",
    "bulk gift card trading",
    "mobile money gift cards",
  ],
  authors: [{ name: "P-CORNEL TRADING LIMITED" }],
  openGraph: {
    title: "P-CORNEL TRADING LIMITED",
    description:
      "Africa's Premium Gift Card Exchange. Secure, instant, and reliable gift card trading across 30+ countries.",
    siteName: "P-CORNEL TRADING LIMITED",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P-CORNEL TRADING LIMITED",
    description:
      "Africa's Premium Gift Card Exchange. Secure, instant, and reliable gift card trading worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${grotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
