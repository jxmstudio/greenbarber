import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Midway Point | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Midway Point, Tasmania. Local arborists based in nearby Dodges Ferry — fast response and competitive pricing. Free quotes available.",
  keywords: [
    "tree services Midway Point",
    "tree removal Midway Point Tasmania",
    "arborist Midway Point",
    "tree pruning Midway Point",
    "stump grinding Midway Point TAS",
    "hedge trimming Midway Point Tasmania",
  ],
  alternates: {
    canonical: "/services/midway-point",
  },
  openGraph: {
    title: "Tree Services in Midway Point | The Green Barber",
    description:
      "Local arborists providing tree removal, pruning, hedge trimming and stump grinding in Midway Point, Tasmania. Fast response from our nearby Dodges Ferry base.",
    type: "website",
    url: `${SITE_URL}/services/midway-point`,
  },
};

export default function MidwayPointPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Midway Point", url: `${SITE_URL}/services/midway-point` },
        ]}
      />
      <LocationPage
        locationName="Midway Point"
        locationSlug="midway-point"
        localDescription="Midway Point's peninsula location means properties here often have waterfront trees and wind-exposed gardens that need expert arborist care. The Green Barber is based in nearby Dodges Ferry and regularly services Midway Point for tree removal, hedge trimming, crown pruning, and stump grinding. We understand the salt-air conditions and native species of this area, and we're quick to respond to storm damage and urgent callouts."
        suburbs={[
          "Midway Point",
          "Sorell",
          "Dodges Ferry",
          "Carlton Beach",
          "Lewisham",
          "Pittwater",
          "Forcett",
        ]}
      />
    </>
  );
}
