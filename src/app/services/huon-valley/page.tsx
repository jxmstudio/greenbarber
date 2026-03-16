import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Huon Valley | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in the Huon Valley, Tasmania. Certified arborists serving Huonville, Geeveston, Cygnet, Franklin and surrounds. Free quotes available.",
  keywords: [
    "tree services Huon Valley",
    "tree removal Huon Valley Tasmania",
    "tree pruning Huonville",
    "arborist Huon Valley",
    "stump grinding Huonville",
    "hedge trimming Cygnet",
  ],
  alternates: {
    canonical: "/services/huon-valley",
  },
  openGraph: {
    title: "Tree Services in Huon Valley | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout the Huon Valley, Tasmania.",
    type: "website",
  },
};

export default function HuonValleyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Huon Valley", url: `${SITE_URL}/services/huon-valley` },
        ]}
      />
      <LocationPage
        locationName="Huon Valley"
        locationSlug="huon-valley"
        localDescription="The Huon Valley's mix of orchard properties, rural acreages, and riverside towns creates unique tree management challenges that demand an experienced local arborist. The Green Barber serves the full Huon Valley area, from hazardous tree removal on steep rural properties to precision pruning around apple orchards and heritage homesteads. We understand the valley's distinct tree species and seasonal conditions, ensuring every job is completed safely and with care for your landscape."
        suburbs={[
          "Huonville",
          "Geeveston",
          "Franklin",
          "Cygnet",
          "Dover",
          "Southport",
          "Port Huon",
          "Ranelagh",
        ]}
      />
    </>
  );
}
