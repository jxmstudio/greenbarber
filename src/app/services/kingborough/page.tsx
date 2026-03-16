import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Kingborough | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Kingborough, Tasmania. Certified arborists serving Kingston, Blackmans Bay, Margate, Snug and surrounds. Free quotes available.",
  keywords: [
    "tree services Kingborough",
    "tree removal Kingborough Tasmania",
    "tree pruning Kingston",
    "hedge trimming Blackmans Bay",
    "stump grinding Kingborough",
    "arborist Kingston Tasmania",
  ],
  alternates: {
    canonical: "/services/kingborough",
  },
  openGraph: {
    title: "Tree Services in Kingborough | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout Kingborough, Tasmania.",
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
  areaServed: { "@type": "AdministrativeArea", name: "Kingborough" },
};

export default function KingboroughPage() {
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
          { name: "Kingborough", url: `${SITE_URL}/services/kingborough` },
        ]}
      />
      <LocationPage
        locationName="Kingborough"
        locationSlug="kingborough"
        localDescription="Kingborough's leafy suburbs and coastal properties are home to mature native trees and established gardens that thrive with regular professional attention. The Green Barber services the entire Kingborough municipality, from the suburban streets of Kingston and Blackmans Bay to the rural blocks around Margate and Snug. We work in accordance with Kingborough Council regulations, including requirements for native vegetation permits where applicable."
        suburbs={[
          "Kingston",
          "Blackmans Bay",
          "Huntingfield",
          "Margate",
          "Snug",
          "Woodbridge",
          "Kettering",
          "Fern Tree",
          "Ridgeway",
        ]}
      />
    </>
  );
}
