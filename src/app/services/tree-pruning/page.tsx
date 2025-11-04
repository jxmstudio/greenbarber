import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Tree Pruning in Hobart | The Green Barber",
  description:
    "Professional tree pruning and trimming services in Hobart, Tasmania. Expert arborists providing crown reduction, deadwood removal, and structural pruning. Serving Hobart and surrounding suburbs. Free quotes available.",
  keywords: [
    "tree pruning Hobart",
    "tree trimming Hobart",
    "tree pruning Tasmania",
    "arborist Hobart",
    "tree care Hobart",
  ],
  openGraph: {
    title: "Tree Pruning in Hobart | The Green Barber",
    description:
      "Professional tree pruning and trimming services in Hobart, Tasmania. Expert arborists providing crown reduction and pruning.",
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
        title={`${service.name} in Hobart`}
        description={service.description}
      />
      <ServicePageContent service={service} />
      <ContactStrip />
    </>
  );
}
