import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Brighton | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Brighton, Tasmania. Certified arborists serving Old Beach, Pontville, Bagdad, Dromedary and surrounds. Free quotes available.",
  keywords: [
    "tree services Brighton Tasmania",
    "tree removal Brighton",
    "tree pruning Old Beach Tasmania",
    "arborist Brighton Tasmania",
    "stump grinding Pontville",
    "hedge trimming Old Beach",
  ],
  alternates: {
    canonical: "/services/brighton",
  },
  openGraph: {
    title: "Tree Services in Brighton | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout Brighton, Tasmania.",
    type: "website",
  },
};

export default function BrightonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Brighton", url: `${SITE_URL}/services/brighton` },
        ]}
      />
      <LocationPage
        locationName="Brighton"
        locationSlug="brighton"
        localDescription="Brighton is one of Tasmania's fastest-growing municipalities, with newer housing estates and large rural blocks that often need professional tree management. The Green Barber services Brighton and surrounding areas including Old Beach, Pontville, and Bagdad, handling everything from tree removal on new development sites to stump grinding for homeowners reclaiming their gardens. Our team is experienced managing both native eucalypts and ornamental trees common to the region."
        suburbs={[
          "Brighton",
          "Old Beach",
          "Pontville",
          "Bagdad",
          "Dromedary",
          "Bridgewater",
          "Herdsmans Cove",
          "Gagebrook",
        ]}
      />
    </>
  );
}
