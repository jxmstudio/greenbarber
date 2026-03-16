import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Clarence | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in the City of Clarence, Tasmania. Certified arborists serving Howrah, Bellerive, Rokeby, Lindisfarne and surrounds. Free quotes available.",
  keywords: [
    "tree services Clarence Tasmania",
    "tree removal Howrah",
    "tree pruning Bellerive",
    "arborist Clarence",
    "stump grinding Rokeby",
    "hedge trimming Lindisfarne",
  ],
  alternates: {
    canonical: "/services/clarence",
  },
  openGraph: {
    title: "Tree Services in Clarence | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout the City of Clarence, Tasmania.",
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
  areaServed: { "@type": "City", name: "Clarence" },
};

export default function ClarencePage() {
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
          { name: "Clarence", url: `${SITE_URL}/services/clarence` },
        ]}
      />
      <LocationPage
        locationName="Clarence"
        locationSlug="clarence"
        localDescription="The City of Clarence on Hobart's eastern shore is known for its coastal gardens, established residential trees, and properties with views that require careful vegetation management. The Green Barber provides professional tree services throughout Clarence, from tree removal in tight suburban yards in Howrah and Rokeby to hedge shaping and pruning in the established streetscapes of Lindisfarne and Bellerive. We're experienced working within Clarence City Council's tree preservation requirements."
        suburbs={[
          "Howrah",
          "Bellerive",
          "Rokeby",
          "Lindisfarne",
          "Rosny Park",
          "Tranmere",
          "Warrane",
          "Risdon Vale",
          "Clarendon Vale",
        ]}
      />
    </>
  );
}
