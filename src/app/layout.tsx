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
  title: "The Green Barber | Professional Tree Services in Hobart, Tasmania",
  description:
    "Expert tree removal, stump grinding, crane work, and tree pruning services in Hobart and surrounding suburbs. Fully insured arborists serving Battery Point, Sandy Bay, New Town, and more.",
  keywords: [
    "tree removal Hobart",
    "stump grinding Hobart",
    "tree services Hobart",
    "arborist Hobart",
    "tree pruning Hobart",
    "crane work Hobart",
  ],
  openGraph: {
    title: "The Green Barber | Professional Tree Services in Hobart",
    description:
      "Expert tree removal, stump grinding, crane work, and tree pruning services in Hobart and surrounding suburbs.",
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
