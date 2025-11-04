import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Tree Pruning and Reductions in Southern Tasmania | The Green Barber",
  description:
    "Professional tree pruning and reduction services in Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart and throughout Southern Tasmania. Expert arborists providing crown reduction, deadwood removal, and structural pruning. Free quotes available.",
  keywords: [
    "tree pruning Southern Tasmania",
    "tree reduction Southern Tasmania",
    "tree pruning Dodges Ferry",
    "tree pruning Hobart",
    "crown reduction Southern Tasmania",
    "arborist Southern Tasmania",
  ],
  openGraph: {
    title: "Tree Pruning and Reductions in Southern Tasmania | The Green Barber",
    description:
      "Professional tree pruning and reduction services throughout Southern Tasmania. Expert arborists providing crown reduction and pruning.",
    type: "website",
  },
};

export default function TreePruningPage() {
  const service = getServiceBySlug("tree-pruning");

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
