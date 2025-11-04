import { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ContactStrip } from "@/components/common/ContactStrip";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { AnimatedHero } from "@/components/common/AnimatedHero";
import { ServicePageContent } from "@/components/services/ServicePageContent";

export const metadata: Metadata = {
  title: "Crane Work in Hobart | The Green Barber",
  description:
    "Specialized crane-assisted tree work in Hobart, Tasmania. Professional crane services for large trees and difficult access situations. Serving Hobart and surrounding suburbs. Free quotes available.",
  keywords: [
    "crane work Hobart",
    "crane tree removal Hobart",
    "crane services Hobart",
    "large tree removal Hobart",
  ],
  openGraph: {
    title: "Crane Work in Hobart | The Green Barber",
    description:
      "Specialized crane-assisted tree work in Hobart, Tasmania. Professional crane services for large trees.",
    type: "website",
  },
};

export default function CraneWorkPage() {
  const service = getServiceBySlug("crane-work");

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
