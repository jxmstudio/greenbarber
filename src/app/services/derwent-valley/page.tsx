import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Derwent Valley | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in the Derwent Valley, Tasmania. Certified arborists serving New Norfolk, Bushy Park, Maydena and surrounds. Free quotes available.",
  keywords: [
    "tree services Derwent Valley",
    "tree removal New Norfolk Tasmania",
    "tree pruning Derwent Valley",
    "arborist New Norfolk",
    "stump grinding Bushy Park",
    "hedge trimming Derwent Valley",
  ],
  openGraph: {
    title: "Tree Services in Derwent Valley | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout the Derwent Valley, Tasmania.",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Green Barber",
  image: `${SITE_URL}/logo.jpg`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "0433804284",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "70 Carlton Beach Rd",
    addressLocality: "Dodges Ferry",
    addressRegion: "TAS",
    postalCode: "7173",
    addressCountry: "AU",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Derwent Valley" },
};

export default function DerwentValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Derwent Valley", url: `${SITE_URL}/services/derwent-valley` },
        ]}
      />
      <LocationPage
        locationName="Derwent Valley"
        locationSlug="derwent-valley"
        localDescription="The Derwent Valley's rural character, heritage homesteads, and dense bushland surrounds create both the beauty and the tree management challenges that property owners face. The Green Barber travels to the Derwent Valley to provide professional tree removal, pruning, hedge care, and stump grinding for residents and rural property owners from New Norfolk to Maydena. We're experienced with the large native eucalypts and poplars common to the valley, and can safely manage trees close to heritage structures."
        suburbs={[
          "New Norfolk",
          "Bushy Park",
          "Maydena",
          "Lachlan",
          "Glenora",
          "Westerway",
          "Hamilton",
          "Ouse",
        ]}
      />
    </>
  );
}
