import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LocationPage } from "@/components/locations/LocationPage";

export const metadata: Metadata = {
  title: "Tree Services in Glenorchy | The Green Barber",
  description:
    "Professional tree removal, tree pruning, hedge trimming and stump grinding in Glenorchy, Tasmania. Certified arborists serving Moonah, New Town, Derwent Park, Lutana and surrounds. Free quotes available.",
  keywords: [
    "tree services Glenorchy",
    "tree removal Glenorchy Tasmania",
    "tree pruning Moonah",
    "arborist Glenorchy",
    "stump grinding New Town",
    "hedge trimming Glenorchy",
  ],
  openGraph: {
    title: "Tree Services in Glenorchy | The Green Barber",
    description:
      "Certified arborists providing tree removal, pruning, hedge trimming and stump grinding throughout Glenorchy, Tasmania.",
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
  areaServed: { "@type": "City", name: "Glenorchy" },
};

export default function GlenorchyPage() {
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
          { name: "Glenorchy", url: `${SITE_URL}/services/glenorchy` },
        ]}
      />
      <LocationPage
        locationName="Glenorchy"
        locationSlug="glenorchy"
        localDescription="Glenorchy's mix of post-war residential streets and newer developments means plenty of mature trees that need professional management. The Green Barber services the City of Glenorchy, providing safe and efficient tree removal, pruning, stump grinding, and hedge trimming in suburbs like Moonah, New Town, and Derwent Park. We're familiar with Glenorchy City Council's vegetation management guidelines and can assist with permit queries for significant trees."
        suburbs={[
          "Glenorchy",
          "Moonah",
          "New Town",
          "Derwent Park",
          "Lutana",
          "Claremont",
          "Berriedale",
          "Goodwood",
        ]}
      />
    </>
  );
}
