import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Stump Grinding in Southern Tasmania | The Green Barber",
  description:
    "Professional stump grinding services in Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart and throughout Southern Tasmania. Fast and efficient stump removal. Free quotes available.",
  keywords: [
    "stump grinding Southern Tasmania",
    "stump removal Southern Tasmania",
    "stump grinding Dodges Ferry",
    "stump grinding Hobart",
    "stump grinding Carlton Beach",
  ],
  openGraph: {
    title: "Stump Grinding in Southern Tasmania | The Green Barber",
    description:
      "Professional stump grinding services throughout Southern Tasmania. Fast and efficient stump removal.",
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
        title={`${service.name} in Southern Tasmania`}
        description={service.description}
      />
      <ServicePageContent service={service} />
      <ContactStrip />
    </>
  );
}
