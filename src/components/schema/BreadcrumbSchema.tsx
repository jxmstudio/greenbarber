/**
 * BreadcrumbSchema — outputs a BreadcrumbList JSON-LD script tag.
 *
 * Google uses BreadcrumbList to display the page's position in the site hierarchy
 * directly in search results, improving SERP click-through rate.
 * Spec: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 *
 * Usage on service pages:
 *   <BreadcrumbSchema
 *     items={[
 *       { name: "Home", url: "https://greenbarbertas.com.au/" },
 *       { name: "Services", url: "https://greenbarbertas.com.au/services" },
 *       { name: "Tree Removal", url: "https://greenbarbertas.com.au/services/tree-removal" },
 *     ]}
 *   />
 */

import { SITE_URL } from "@/lib/site";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Pre-built breadcrumb for service detail pages — call with just the service name/slug. */
export function ServiceBreadcrumb({
  serviceName,
  serviceSlug,
}: {
  serviceName: string;
  serviceSlug: string;
}) {
  return (
    <BreadcrumbSchema
      items={[
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Services", url: `${SITE_URL}/services` },
        { name: serviceName, url: `${SITE_URL}/services/${serviceSlug}` },
      ]}
    />
  );
}
