import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Carlton Beach | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Carlton Beach, Tasmania. Local arborists from Dodges Ferry — fastest response times on the Sorell Coast. Free quotes available.",
  keywords: [
    "tree services Carlton Beach",
    "tree removal Carlton Beach Tasmania",
    "arborist Carlton Beach",
    "tree pruning Carlton Beach",
    "stump grinding Carlton Beach",
    "hedge trimming Carlton Beach TAS",
  ],
  alternates: {
    canonical: "/services/carlton-beach",
  },
  openGraph: {
    title: "Tree Services in Carlton Beach | The Green Barber",
    description:
      "Local arborists providing tree removal, pruning, hedge trimming and stump grinding in Carlton Beach. Based just minutes away in Dodges Ferry.",
    type: "website",
    url: `${SITE_URL}/services/carlton-beach`,
  },
};

export default function CarltonBeachPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Carlton Beach", url: `${SITE_URL}/services/carlton-beach` },
        ]}
      />
      <LocationPage
        locationName="Carlton Beach"
        locationSlug="carlton-beach"
        localDescription="Carlton Beach is practically our front yard — The Green Barber is based just minutes away on Carlton Beach Rd in Dodges Ferry. We service the coastal properties and holiday homes of Carlton Beach, providing tree removal, hedge care, pruning and stump grinding for both permanent residents and holiday property owners. Our proximity means quick responses to storm damage callouts and no extra travel cost added to your quote."
        suburbs={[
          "Carlton Beach",
          "Dodges Ferry",
          "Primrose Sands",
          "Sorell",
          "Midway Point",
          "Lewisham",
          "Connelly's Marsh",
        ]}
      />
    </>
  );
}
