import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Hedge Trimming in Southern Tasmania | The Green Barber",
  description:
    "Professional hedge trimming services in Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart and throughout Southern Tasmania. Expert hedge care and maintenance. Free quotes available.",
  keywords: [
    "hedge trimming Southern Tasmania",
    "hedge trimming Dodges Ferry",
    "hedge trimming Hobart",
    "hedge trimming Carlton Beach",
    "hedge care Southern Tasmania",
  ],
  openGraph: {
    title: "Hedge Trimming in Southern Tasmania | The Green Barber",
    description:
      "Professional hedge trimming services throughout Southern Tasmania. Expert hedge care and maintenance.",
    type: "website",
  },
};

export default function HedgeTrimmingPage() {
  const service = getServiceBySlug("hedge-trimming");

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

