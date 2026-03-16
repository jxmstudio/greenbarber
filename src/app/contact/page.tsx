import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact The Green Barber | Free Tree Service Quote Tasmania",
  description:
    "Get a free quote for tree removal, tree pruning, hedge trimming or stump grinding in Southern Tasmania. Call 0433 804 284 or fill in our online form. Fast response, fully insured arborists.",
  keywords: [
    "contact tree service Tasmania",
    "free tree removal quote Tasmania",
    "arborist quote Southern Tasmania",
    "tree pruning quote Hobart",
    "tree service contact Dodges Ferry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact The Green Barber | Free Tree Service Quote Tasmania",
    description:
      "Get a free quote for tree removal, pruning, hedge trimming or stump grinding. Call 0433 804 284. Serving Southern Tasmania.",
    type: "website",
    url: "https://greenbarbertas.com.au/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
