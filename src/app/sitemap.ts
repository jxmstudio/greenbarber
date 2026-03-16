import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const routes = [
    "",
    "/services",
    "/gallery",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  const locationRoutes = [
    "/services/hobart",
    "/services/kingborough",
    "/services/huon-valley",
    "/services/clarence",
    "/services/glenorchy",
    "/services/brighton",
    "/services/sorell",
    "/services/derwent-valley",
    // Suburb-level pages (hyper-local, home-base area)
    "/services/dodges-ferry",
    "/services/carlton-beach",
    "/services/eagle-hawk-neck",
    "/services/midway-point",
  ];

  const corePages = ["/about", "/contact", "/gallery", "/services"];
  const allRoutes = [...routes, ...serviceRoutes, ...locationRoutes];

  return allRoutes.map((route) => {
    if (route === "") {
      return { url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 };
    }
    if (serviceRoutes.includes(route)) {
      return { url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 };
    }
    if (locationRoutes.includes(route)) {
      return { url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 };
    }
    if (corePages.includes(route)) {
      return { url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 };
    }
    return { url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 };
  });
}

