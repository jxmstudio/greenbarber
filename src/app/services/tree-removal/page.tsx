import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Tree Removal in Southern Tasmania | The Green Barber",
  description:
    "Professional tree removal services in Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart and throughout Southern Tasmania. Safe and efficient tree removal. Free quotes available.",
  keywords: [
    "tree removal Southern Tasmania",
    "tree removal Dodges Ferry",
    "tree removal Hobart",
    "tree removal Carlton Beach",
    "emergency tree removal Southern Tasmania",
  ],
  openGraph: {
    title: "Tree Removal in Southern Tasmania | The Green Barber",
    description:
      "Professional tree removal services throughout Southern Tasmania. Safe and efficient removal of hazardous trees.",
    type: "website",
  },
};

export default function TreeRemovalPage() {
  const service = getServiceBySlug("tree-removal");

  if (!service) {
    return <div>Service not found</div>;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thegreenbarber.com.au";

  return (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.description}
        serviceUrl={`${baseUrl}/services/${service.slug}`}
      />
      <AnimatedHero
        title={`${service.name} in Southern Tasmania`}
        description={service.description}
      />
      <ServicePageContent service={service} />
      <ContactStrip />
    </>
  );
}
