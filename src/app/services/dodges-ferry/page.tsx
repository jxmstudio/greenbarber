import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Dodges Ferry | The Green Barber",
  description:
    "The Green Barber is based in Dodges Ferry — your most local arborist for tree removal, tree pruning, hedge trimming and stump grinding. Fast response, competitive pricing. Free quotes available.",
  keywords: [
    "tree services Dodges Ferry",
    "tree removal Dodges Ferry Tasmania",
    "arborist Dodges Ferry",
    "tree pruning Dodges Ferry",
    "stump grinding Dodges Ferry",
    "hedge trimming Dodges Ferry TAS",
  ],
  alternates: {
    canonical: "/services/dodges-ferry",
  },
  openGraph: {
    title: "Tree Services in Dodges Ferry | The Green Barber",
    description:
      "Local arborists based in Dodges Ferry providing tree removal, pruning, hedge trimming and stump grinding. Fastest response times in the area.",
    type: "website",
    url: `${SITE_URL}/services/dodges-ferry`,
  },
};

export default function DodgesFerryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Dodges Ferry", url: `${SITE_URL}/services/dodges-ferry` },
        ]}
      />
      <LocationPage
        locationName="Dodges Ferry"
        locationSlug="dodges-ferry"
        localDescription="The Green Barber is based right here in Dodges Ferry — 70 Carlton Beach Rd is our home base, which means we're your most local arborist and can reach you faster than anyone else in the area. From removing old gum trees on beachside blocks to grinding stumps in residential gardens, we know the trees, the soil, and the blocks of Dodges Ferry inside out. No travel fees, fast responses, and pricing that reflects our low travel overhead."
        suburbs={[
          "Dodges Ferry",
          "Carlton Beach",
          "Primrose Sands",
          "Connelly's Marsh",
          "Lewisham",
          "Runnymede",
          "Copping",
          "Forcett",
        ]}
      />
    </>
  );
}
