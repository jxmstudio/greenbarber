interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}

export function ServiceSchema({ serviceName, serviceDescription, serviceUrl }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: "The Green Barber",
      url: "https://thegreenbarber.com.au",
    },
    areaServed: {
      "@type": "City",
      name: "Hobart",
    },
    description: serviceDescription,
    url: serviceUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

