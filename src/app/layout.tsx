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
  title: "P-CORNEL TRADING LIMITED | Premium Gift Card Trading",
  description:
    "P-CORNEL TRADING LIMITED provides a straightforward way to trade supported gift cards through a fast, reliable and customer-focused process.",
  keywords: [
    "P-CORNEL TRADING",
    "gift card trading",
    "gift card exchange",
    "Amazon gift card buyer",
    "Steam gift card rate",
    "iTunes gift card",
    "Razer Gold gift card",
    "Google Play gift card",
    "verified gift card payouts",
    "bulk gift card trading",
  ],
  authors: [{ name: "P-CORNEL TRADING LIMITED" }],
  openGraph: {
    title: "P-CORNEL TRADING LIMITED",
    description:
      "Premium gift card trading built around trust, speed and simplicity. Trade supported gift cards through a fast, reliable and customer-focused process.",
    siteName: "P-CORNEL TRADING LIMITED",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P-CORNEL TRADING LIMITED",
    description:
      "Premium gift card trading built around trust, speed and simplicity.",
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
