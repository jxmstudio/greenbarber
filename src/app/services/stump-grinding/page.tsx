import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Stump Grinding in Hobart | The Green Barber",
  description:
    "Professional stump grinding services in Hobart, Tasmania. Fast and efficient stump removal serving Battery Point, Sandy Bay, New Town, Lenah Valley and surrounding suburbs. Free quotes available.",
  keywords: [
    "stump grinding Hobart",
    "stump removal Hobart",
    "stump grinding Tasmania",
    "stump grinding Battery Point",
  ],
  openGraph: {
    title: "Stump Grinding in Hobart | The Green Barber",
    description:
      "Professional stump grinding services in Hobart, Tasmania. Fast and efficient stump removal.",
    type: "website",
  },
};

export default function StumpGrindingPage() {
  const service = getServiceBySlug("stump-grinding");

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
