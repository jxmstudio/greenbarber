import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Green Barber | Professional Tree Services in Southern Tasmania",
  description:
    "Expert hedge trimming, tree pruning and reductions, tree removal, and stump grinding services throughout Southern Tasmania. Fully insured arborists serving Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart, and more.",
  keywords: [
    "tree removal Southern Tasmania",
    "stump grinding Southern Tasmania",
    "hedge trimming Southern Tasmania",
    "tree pruning Southern Tasmania",
    "tree services Dodges Ferry",
    "arborist Southern Tasmania",
    "tree reduction Southern Tasmania",
  ],
  openGraph: {
    title: "The Green Barber | Professional Tree Services in Southern Tasmania",
    description:
      "Expert hedge trimming, tree pruning and reductions, tree removal, and stump grinding services throughout Southern Tasmania.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocalBusinessSchema />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
