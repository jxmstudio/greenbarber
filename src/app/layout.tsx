import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";

// Fix 3: Removed Crimson_Pro — was loading 4 extra font weights for a font used nowhere in the UI.
// Now using 2 families, minimal weights only.
const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"], // Headings only — was loading 400/500/600/700/800/900
});

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"], // Body + semi-bold — was also loading 300/500/700
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenbarbertas.com.au"),
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
    url: "https://greenbarbertas.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Fix 3: Removed crimsonPro.variable — --font-serif now falls back to system serif
        className={`${playfairDisplay.variable} ${workSans.variable} font-sans antialiased`}
      >
        {/* Fix 2: Skip navigation — WCAG 2.4.1 (Level A). Must be the first focusable element. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to content
        </a>

        <LocalBusinessSchema />
        <Navigation />

        {/* Fix 2: id="main-content" — target for the skip nav link above */}
        <main id="main-content">{children}</main>

        <Footer />

        {/* Fix 4: Google Analytics 4 — loads after page is interactive to avoid blocking LCP.
            Replace G-XXXXXXXXXX with your real GA4 Measurement ID from:
            analytics.google.com → Admin → Data Streams → your stream → Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D0TKVMK1J8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D0TKVMK1J8');
          `}
        </Script>
      </body>
    </html>
  );
}
