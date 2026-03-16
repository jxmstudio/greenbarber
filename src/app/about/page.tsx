import type { Metadata } from "next";
import { AboutPageClient } from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About The Green Barber | Certified Arborists Southern Tasmania",
  description:
    "Meet The Green Barber — certified arborists serving Southern Tasmania from our base in Dodges Ferry. Fully insured with $20M public liability. 15+ years of experience in tree removal, pruning, hedge trimming and stump grinding.",
  keywords: [
    "about The Green Barber",
    "certified arborist Southern Tasmania",
    "tree service company Tasmania",
    "arborist Dodges Ferry",
    "insured tree services Tasmania",
    "Conrad arborist Tasmania",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About The Green Barber | Certified Arborists Southern Tasmania",
    description:
      "Certified arborists serving Southern Tasmania from our base in Dodges Ferry. Fully insured, 15+ years experience.",
    type: "website",
    url: "https://greenbarbertas.com.au/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
