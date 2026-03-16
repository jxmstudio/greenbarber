import type { Metadata } from "next";
import { ServicesPageClient } from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Tree Services in Southern Tasmania | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding throughout Southern Tasmania. Certified arborists serving Hobart, Kingborough, Huon Valley, Clarence and surrounding areas. Free quotes available.",
  keywords: [
    "tree services Southern Tasmania",
    "tree removal Tasmania",
    "tree pruning Southern Tasmania",
    "hedge trimming Tasmania",
    "stump grinding Southern Tasmania",
    "arborist Southern Tasmania",
    "certified arborist Tasmania",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Tree Services in Southern Tasmania | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout Southern Tasmania. Free quotes available.",
    type: "website",
    url: "https://greenbarbertas.com.au/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
