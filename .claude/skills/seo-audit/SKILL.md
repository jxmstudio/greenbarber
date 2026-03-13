---
description: Perform a full SEO audit covering on-page, technical SEO, local SEO, meta tags, schema markup, Core Web Vitals risks, indexability, and international signals.
---

# SEO Audit

## Input (what to accept)

- URL(s) to audit, or file paths to HTML/Next.js/React source
- Business type: local business / e-commerce / SaaS / publisher / national service
- Target location(s) for local SEO (city, region, country)
- Primary keyword targets (if known)
- Current Google Search Console / Analytics access (yes/no)
- Competitor URLs for gap comparison (optional)

## Analyse (detailed checklist)

### 1. On-Page SEO
- [ ] **Title tag** — Unique, 50–60 characters, primary keyword near start, brand appended
- [ ] **Meta description** — Unique, 120–158 characters, includes CTA, no keyword stuffing
- [ ] **H1** — Exactly one per page, contains primary keyword, matches search intent
- [ ] **Heading hierarchy** — H1 → H2 → H3 logical, no skipped levels
- [ ] **Keyword placement** — Primary keyword in first 100 words, used naturally throughout
- [ ] **Image alt text** — Descriptive, includes keyword where natural, not stuffed
- [ ] **Internal links** — Contextual links with descriptive anchor text (not "click here")
- [ ] **URL structure** — Short, lowercase, hyphenated, contains keyword, no parameters
- [ ] **Content length** — Matches SERP competitors; thin content (< 300 words) flagged
- [ ] **Content freshness** — Date published/modified present and accurate
- [ ] **LSI / semantic keywords** — Related terms used naturally throughout
- [ ] **Duplicate content** — No near-duplicate pages without canonical or noindex
- [ ] **Outbound links** — External links are relevant; toxic links use `rel="nofollow"`

### 2. Technical SEO
- [ ] **Robots.txt** — Exists, no accidental blocking of CSS/JS/images, sitemap referenced
- [ ] **XML sitemap** — Present, submitted to GSC, excludes noindex pages, ≤ 50,000 URLs
- [ ] **Canonical tags** — Correct self-referencing canonical on every page
- [ ] **Hreflang** — Present for multi-language/region sites; x-default set
- [ ] **HTTPS** — Site fully HTTPS; no mixed content warnings
- [ ] **Redirect chains** — No 3xx chains longer than 1 hop; no 302 where 301 intended
- [ ] **Broken links** — No 404s on crawlable pages; custom 404 page exists
- [ ] **Crawl budget** — Pagination handled (rel=next/prev or canonical); facets blocked if needed
- [ ] **JavaScript rendering** — Critical content not JS-only (Googlebot may not render)
- [ ] **Structured data** — Schema present, valid (no errors in Rich Results Test)
- [ ] **Page speed** — LCP < 2.5s, CLS < 0.1, INP < 200ms (see performance-audit skill)
- [ ] **Mobile-first** — Passes Google Mobile-Friendly Test; content parity desktop/mobile
- [ ] **Core Web Vitals** — Green in GSC CWV report (field data, not just lab)
- [ ] **Indexability** — `<meta name="robots" content="noindex">` not present on key pages
- [ ] **Orphan pages** — All important pages reachable via internal links within 3 clicks

### 3. Local SEO (activate when business serves a geographic area)
- [ ] **Google Business Profile** — Claimed, verified, fully completed (hours, photos, services)
- [ ] **NAP consistency** — Name, Address, Phone identical across site, GBP, directories
- [ ] **Local keyword targeting** — "[Service] in [City]" on homepage and service pages
- [ ] **LocalBusiness schema** — `@type: LocalBusiness` (or subtype) with address, phone, hours
- [ ] **Location pages** — Separate page per service area if multi-location
- [ ] **Reviews schema** — AggregateRating on GBP and optionally on site (no self-reviews)
- [ ] **Local citations** — Listed on Yelp, Yellow Pages, industry directories; NAP consistent
- [ ] **Embedded map** — Google Maps embed on Contact/About page
- [ ] **Local content** — Blog/news mentioning local landmarks, events, community
- [ ] **Service area pages** — Unique, non-duplicate content per location (not just swapped city name)

### 4. Meta Tags & Head Audit
- [ ] `<title>` — Present, unique, correct length
- [ ] `<meta name="description">` — Present, unique, correct length
- [ ] `<meta name="robots">` — Correct value (index,follow by default)
- [ ] `<link rel="canonical">` — Correct absolute URL
- [ ] Open Graph tags — `og:title`, `og:description`, `og:image` (1200×630px), `og:url`, `og:type`
- [ ] Twitter Card tags — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] `<html lang="">` — Correct ISO 639-1 language code
- [ ] Viewport meta — `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] No accidental `noindex` on production pages
- [ ] No duplicate meta tags (common in Next.js if metadata not properly merged)

### 5. Schema / Structured Data
- [ ] **Organization** — Name, URL, logo, sameAs (social profiles)
- [ ] **LocalBusiness** — Address, geo, hours, telephone, priceRange
- [ ] **BreadcrumbList** — On all inner pages
- [ ] **FAQPage** — On FAQ sections (eligible for rich results)
- [ ] **HowTo** — On how-to content
- [ ] **Product** — On e-commerce product pages (price, availability, reviews)
- [ ] **Article / BlogPosting** — On blog posts (datePublished, author, image)
- [ ] **Review / AggregateRating** — On review-eligible pages
- [ ] Validate all schema at: https://validator.schema.org / Rich Results Test
- [ ] No schema errors or warnings in Google Search Console

### 6. Core Web Vitals Risk Assessment
- [ ] **LCP** — Identify largest element (usually hero image or H1); ensure preloaded
- [ ] **CLS** — Check for images without dimensions, dynamic ad insertion, font swap
- [ ] **INP** — Check for heavy JS on main thread, long tasks > 50ms
- [ ] Render-blocking resources identified
- [ ] Third-party scripts assessed for CWV impact
- [ ] Font loading strategy (swap vs optional vs block)

### 7. Indexability
- [ ] No `X-Robots-Tag: noindex` headers on key pages
- [ ] Sitemap does not include noindex pages
- [ ] Robots.txt does not block key directories
- [ ] Pages in GSC "Coverage" report — indexed count vs total
- [ ] No accidental `disallow: /` in robots.txt

## Output Format

---

### SEO Audit Report — [Domain / Page]
**Date:** YYYY-MM-DD | **Mode:** [On-Page / Technical / Local / Full] | **Auditor:** Claude

#### Executive Summary
[2–3 sentences: overall SEO health score, most impactful issue, top opportunity]

#### Overall Score
| Category | Score | Status |
|----------|-------|--------|
| On-Page SEO | 7/10 | 🟠 Needs Work |
| Technical SEO | 5/10 | 🔴 Critical Issues |
| Local SEO | 8/10 | 🟢 Good |
| Schema Markup | 4/10 | 🔴 Missing |
| Core Web Vitals | 6/10 | 🟡 At Risk |

#### Issue Register
| # | Issue | Category | Severity | Impact | Fix |
|---|-------|----------|----------|--------|-----|
| 1 | Missing canonical on /services/* | Technical | 🔴 Critical | Duplicate content | Add self-referencing canonical |
| 2 | Title tag 78 chars — truncated | On-Page | 🟠 High | CTR loss | Shorten to 55 chars |
| 3 | No LocalBusiness schema | Local | 🟠 High | No rich results | Add JSON-LD (see example) |
| 4 | H2 before H1 on mobile | On-Page | 🟡 Medium | Crawl confusion | Reorder heading hierarchy |
| 5 | Images missing alt text (12) | On-Page | 🟡 Medium | Accessibility + SEO | Add descriptive alt attributes |
| 6 | robots.txt missing sitemap ref | Technical | 🟢 Low | Crawl efficiency | Add Sitemap: directive |

**Severity Key:**
- 🔴 Critical — Actively harming rankings or blocking indexation
- 🟠 High — Significant ranking or CTR opportunity being missed
- 🟡 Medium — Best practice gap, fix when possible
- 🟢 Low — Minor optimisation, backlog

#### Section 1: Meta Tags Analysis
| Tag | Current Value | Length | Status | Recommendation |
|-----|--------------|--------|--------|----------------|
| Title | "Green Barber Tree Services..." | 78 chars | ❌ Too long | Trim to 55 chars |
| Description | "We offer tree services..." | 142 chars | ✅ Good | Add stronger CTA |
| Canonical | Missing | — | ❌ Missing | Add self-referencing |
| OG Image | /og-image.jpg | — | ✅ Present | Verify 1200×630px |

#### Section 2: Schema Markup
[List implemented schema and missing schema with JSON-LD code block for each missing item]

#### Section 3: Local SEO Checklist
[Tick/cross each local SEO item with specific findings]

#### Section 4: Technical Issues
[Crawl, redirect, robots.txt, sitemap findings]

#### Quick Wins (implement today)
1. [Specific fix]
2. [Specific fix]
3. [Specific fix]

---

## Code Examples

### Next.js 14+ metadata (App Router)
```tsx
// app/services/tree-removal/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tree Removal Services | Green Barber — [City]',
  description: 'Professional tree removal in [City]. Free quotes, fully insured, same-week service. Call 0800 XXX XXX.',
  alternates: {
    canonical: 'https://greenbarber.com/services/tree-removal',
  },
  openGraph: {
    title: 'Tree Removal Services | Green Barber',
    description: 'Professional tree removal in [City]. Free quotes, fully insured.',
    url: 'https://greenbarber.com/services/tree-removal',
    siteName: 'Green Barber',
    images: [{ url: 'https://greenbarber.com/og/tree-removal.jpg', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tree Removal Services | Green Barber',
    description: 'Professional tree removal in [City].',
    images: ['https://greenbarber.com/og/tree-removal.jpg'],
  },
}
```

### LocalBusiness JSON-LD schema
```tsx
// components/schema/LocalBusinessSchema.tsx
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TreeService', // or 'LocalBusiness' subtype
    name: 'Green Barber Tree Services',
    image: 'https://greenbarber.com/logo.jpg',
    '@id': 'https://greenbarber.com/#business',
    url: 'https://greenbarber.com',
    telephone: '+44-800-XXX-XXXX',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Your City',
      postalCode: 'XX1 1XX',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/greenbarber',
      'https://www.instagram.com/greenbarber',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 51.5074, longitude: -0.1278 },
      geoRadius: '50000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### BreadcrumbList schema
```tsx
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
```

### FAQPage schema
```tsx
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
```

### robots.txt best practice
```
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Allow: /

Sitemap: https://greenbarber.com/sitemap.xml
```

### XML sitemap (Next.js app/sitemap.ts)
```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://greenbarber.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://greenbarber.com/services/tree-removal',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // ... add all indexable pages
  ]
}
```

## Manual Review Required

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Google Search Console coverage report | GSC → Coverage | Requires property access |
| Actual Google index status | `site:domain.com` search | Real-time index snapshot |
| PageSpeed Insights field data (CWV) | pagespeed.web.dev | Requires real user data (28-day) |
| Google Rich Results Test | search.google.com/test/rich-results | Renders page to check schema |
| Local citation consistency | BrightLocal / Moz Local | Aggregates 100s of directories |
| Competitor backlink gap | Ahrefs / Semrush | Paid tool required |
| Keyword ranking positions | GSC / Semrush | Historical + real-time data |
| Google Business Profile completeness | Manual GBP check | Requires account access |
| Redirect chain validation | Screaming Frog | Full crawl needed |
| Hreflang validation | hreflang.org checker | Cross-URL signal verification |
| Manual spam penalty check | GSC → Manual Actions | Admin access required |
