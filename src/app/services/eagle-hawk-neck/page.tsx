import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Eagle Hawk Neck | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Eagle Hawk Neck and the Tasman Peninsula, Tasmania. Experienced arborists servicing coastal and bush properties. Free quotes available.",
  keywords: [
    "tree services Eagle Hawk Neck",
    "tree removal Eagle Hawk Neck Tasmania",
    "arborist Eagle Hawk Neck",
    "tree pruning Tasman Peninsula",
    "stump grinding Dunalley",
    "tree services Tasman Peninsula Tasmania",
  ],
  alternates: {
    canonical: "/services/eagle-hawk-neck",
  },
  openGraph: {
    title: "Tree Services in Eagle Hawk Neck | The Green Barber",
    description:
      "Experienced arborists providing tree removal, pruning, hedge trimming and stump grinding at Eagle Hawk Neck and across the Tasman Peninsula.",
    type: "website",
    url: `${SITE_URL}/services/eagle-hawk-neck`,
  },
};

export default function EagleHawkNeckPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Eagle Hawk Neck", url: `${SITE_URL}/services/eagle-hawk-neck` },
        ]}
      />
      <LocationPage
        locationName="Eagle Hawk Neck"
        locationSlug="eagle-hawk-neck"
        localDescription="Eagle Hawk Neck and the wider Tasman Peninsula have a unique mix of coastal scrub, wind-exposed properties, and dense native bush that requires specialist tree management. The Green Barber services the entire area from our base in Dodges Ferry, handling everything from hazardous tree removal on cliff-edge properties to stump grinding for holiday home owners preparing their gardens. We're experienced with the tough coastal conditions and native vegetation of this distinctive part of Tasmania."
        suburbs={[
          "Eagle Hawk Neck",
          "Dunalley",
          "Murdunna",
          "Taranna",
          "Port Arthur",
          "Nubeena",
          "Premaydena",
          "Koonya",
        ]}
      />
    </>
  );
}
