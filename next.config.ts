import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Restrict to only the domains actually used by this project.
    // The previous wildcard ("**") allowed any HTTPS URL to be proxied through
    // Next.js image optimisation — a potential cost-inflation and abuse vector.
    // All current images are served locally from /public, so no remotePatterns
    // are needed right now. Add specific hostnames here if you ever use a CDN
    // or third-party image host (e.g. "cdn.greenbarbertas.com.au").
    remotePatterns: [],
  },
};

export default nextConfig;
