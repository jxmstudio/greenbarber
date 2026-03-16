import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Sorell | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Sorell, Tasmania. Local arborists based in Dodges Ferry, serving Sorell, Midway Point, Carlton Beach, Dunalley and surrounds. Free quotes available.",
  keywords: [
    "tree services Sorell Tasmania",
    "tree removal Sorell",
    "tree pruning Dodges Ferry",
    "arborist Sorell Tasmania",
    "stump grinding Midway Point",
    "hedge trimming Carlton Beach",
  ],
  alternates: {
    canonical: "/services/sorell",
  },
  openGraph: {
    title: "Tree Services in Sorell | The Green Barber",
    description:
      "Local arborists based in Dodges Ferry providing tree removal, pruning, hedge trimming and stump grinding throughout the Sorell municipality.",
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
  areaServed: { "@type": "AdministrativeArea", name: "Sorell" },
};

export default function SorellPage() {
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
          { name: "Sorell", url: `${SITE_URL}/services/sorell` },
        ]}
      />
      <LocationPage
        locationName="Sorell"
        locationSlug="sorell"
        localDescription="The Sorell municipality is home base for The Green Barber — our team is based in Dodges Ferry and services the entire area daily. From the coastal communities of Carlton Beach and Midway Point to the agricultural properties around Sorell and Dunalley, we know every road and tree species in the region. As your most local arborist, we offer the fastest response times and the most competitive pricing for all tree services throughout Sorell."
        suburbs={[
          "Sorell",
          "Dodges Ferry",
          "Carlton Beach",
          "Midway Point",
          "Dunalley",
          "Murdunna",
          "Copping",
          "Forcett",
          "Pittwater",
        ]}
      />
    </>
  );
}
