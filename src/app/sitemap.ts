import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  const allRoutes = [...routes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

