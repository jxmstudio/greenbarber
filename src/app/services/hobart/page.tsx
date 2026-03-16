import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Hobart | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Hobart, Tasmania. Certified arborists serving Sandy Bay, Battery Point, North Hobart, West Hobart and surrounding suburbs. Free quotes available.",
  keywords: [
    "tree services Hobart",
    "tree removal Hobart",
    "tree pruning Hobart Tasmania",
    "hedge trimming Hobart",
    "stump grinding Hobart",
    "arborist Hobart",
  ],
  alternates: {
    canonical: "/services/hobart",
  },
  openGraph: {
    title: "Tree Services in Hobart | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout Hobart, Tasmania.",
    type: "website",
    url: "https://greenbarbertas.com.au/services/hobart",
  },
};

export default function HobartPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Hobart", url: `${SITE_URL}/services/hobart` },
        ]}
      />
      <LocationPage
        locationName="Hobart"
        locationSlug="hobart"
        localDescription="Hobart's diverse tree canopy — from the heritage oaks of Battery Point to the native eucalypts along the slopes of kunanyi / Mount Wellington — demands expert arborist care. The Green Barber works in compliance with Hobart City Council permit requirements, ensuring every job is safe, legal, and professionally completed. Whether you need a storm-damaged tree removed near the waterfront or regular hedge maintenance in Sandy Bay, we're your local experts."
        suburbs={[
          "Hobart CBD",
          "Sandy Bay",
          "Battery Point",
          "North Hobart",
          "West Hobart",
          "South Hobart",
          "New Town",
          "Glebe",
          "Dynnyrne",
        ]}
      />
    </>
  );
}
