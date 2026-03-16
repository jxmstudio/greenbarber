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
      url: "https://greenbarbertas.com.au",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hobart" },
      { "@type": "AdministrativeArea", name: "Kingborough" },
      { "@type": "AdministrativeArea", name: "Huon Valley" },
      { "@type": "AdministrativeArea", name: "Clarence" },
      { "@type": "AdministrativeArea", name: "Glenorchy" },
      { "@type": "AdministrativeArea", name: "Brighton" },
      { "@type": "AdministrativeArea", name: "Sorell" },
      { "@type": "AdministrativeArea", name: "Derwent Valley" },
    ],
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

