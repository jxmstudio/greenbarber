import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Tree Removal in Hobart | The Green Barber",
  description:
    "Professional tree removal services in Hobart, Tasmania. Safe and efficient tree removal serving Battery Point, Sandy Bay, New Town, Lenah Valley and surrounding suburbs. Free quotes available.",
  keywords: [
    "tree removal Hobart",
    "tree removal Tasmania",
    "tree removal Battery Point",
    "tree removal Sandy Bay",
    "emergency tree removal Hobart",
  ],
  openGraph: {
    title: "Tree Removal in Hobart | The Green Barber",
    description:
      "Professional tree removal services in Hobart, Tasmania. Safe and efficient removal of hazardous trees.",
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
        title={`${service.name} in Hobart`}
        description={service.description}
      />
      <ServicePageContent service={service} />
      <ContactStrip />
    </>
  );
}
