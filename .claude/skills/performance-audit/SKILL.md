---
description: Audit web performance covering Core Web Vitals (LCP, CLS, INP), Lighthouse scoring, render-blocking resources, image optimisation, bundle size, caching, CDN, and third-party script impact.
---

# Performance Audit

## Input (what to accept)

- URL(s) to audit, OR Next.js/React project source files
- Performance targets (if defined by client or SLA)
- Current Lighthouse score (if known)
- Hosting platform: Vercel / Netlify / AWS / self-hosted
- CDN in use: Cloudflare / Vercel Edge / AWS CloudFront / none
- Approximate monthly traffic and geographic spread
- Third-party scripts in use (analytics, chat, ads, A/B testing — list)

## Analyse (detailed checklist)

### 1. Core Web Vitals (CWV)

#### Largest Contentful Paint (LCP) — target < 2.5s
- [ ] Identify LCP element (usually hero image, H1, or banner)
- [ ] LCP image has `priority` prop (Next.js) or `fetchpriority="high"`
- [ ] LCP image is preloaded: `<link rel="preload" as="image">`
- [ ] LCP image NOT lazy-loaded (never use `loading="lazy"` on LCP element)
- [ ] LCP image served in WebP/AVIF format
- [ ] LCP image correctly sized (no oversized images scaled down in CSS)
- [ ] Server response time (TTFB) < 600ms
- [ ] No render-blocking resources delaying LCP paint

#### Cumulative Layout Shift (CLS) — target < 0.1
- [ ] All images have explicit `width` and `height` attributes
- [ ] All `<video>` elements have explicit dimensions
- [ ] Fonts don't cause layout shift (`font-display: optional` or preload)
- [ ] Ad slots have reserved space (min-height set before ad loads)
- [ ] Dynamic content injected below existing content, not above
- [ ] Animations use `transform` and `opacity` (not layout-affecting properties)
- [ ] No `position: absolute` elements that shift on load

#### Interaction to Next Paint (INP) — target < 200ms
- [ ] No long tasks > 50ms blocking main thread
- [ ] Event handlers are not synchronous and expensive
- [ ] Heavy computation moved to Web Worker or deferred
- [ ] Third-party scripts not blocking interaction
- [ ] React component re-renders minimised (no unnecessary state updates)
- [ ] Hydration cost (Next.js) assessed — large page = high hydration cost

### 2. Lighthouse Scoring Targets
| Category | Poor | Needs Work | Good | Target |
|----------|------|-----------|------|--------|
| Performance | < 50 | 50–89 | 90–100 | ≥ 90 |
| Accessibility | < 70 | 70–89 | 90–100 | ≥ 95 |
| Best Practices | < 70 | 70–89 | 90–100 | ≥ 90 |
| SEO | < 70 | 70–89 | 90–100 | ≥ 95 |

- [ ] Run Lighthouse in Incognito (no extensions)
- [ ] Run 3× and average (Lighthouse has variance)
- [ ] Test on simulated Mobile (Moto G Power) — harder than desktop
- [ ] Check both lab (Lighthouse) and field (PageSpeed Insights CrUX) data

### 3. Render-Blocking Resources
- [ ] CSS: critical CSS inlined, non-critical deferred (`media="print"` trick or `preload`)
- [ ] JS: `defer` or `async` on all non-critical scripts
- [ ] Fonts: use `font-display: swap` or `optional`; preconnect to font origin
- [ ] No `@import` in CSS (blocks parallel download)
- [ ] Third-party scripts loaded with `async`/`defer` or after load event

### 4. Image Optimisation
- [ ] All images use `next/image` (or equivalent: lazy load, srcset, sizing)
- [ ] Modern formats: WebP (broad support), AVIF (better compression, newer)
- [ ] Images sized to display dimensions (no 4000px image for a 400px slot)
- [ ] `sizes` attribute set correctly for responsive images
- [ ] Hero/above-fold images: `priority`, not lazy
- [ ] Below-fold images: `loading="lazy"`, `decoding="async"`
- [ ] SVGs used for logos and icons (no PNG for vector assets)
- [ ] Image CDN in use (Cloudflare Images / Imgix / Vercel built-in)

### 5. JavaScript Bundle Size
- [ ] Total JS payload < 200KB gzipped on mobile
- [ ] Run `next build` and check `.next/analyze` (with @next/bundle-analyzer)
- [ ] No large libraries imported whole (e.g., `import _ from 'lodash'`)
- [ ] Tree-shaking working (ES modules, not CommonJS for libraries)
- [ ] Code splitting active — each route loads only its own chunk
- [ ] Dynamic imports for heavy components (`dynamic(() => import(...))`)
- [ ] Unused dependencies removed (`npx depcheck`)
- [ ] `moment.js` replaced with `date-fns` or `dayjs` (if present)

### 6. Caching Headers
- [ ] Static assets (images, fonts, JS, CSS): `Cache-Control: public, max-age=31536000, immutable`
- [ ] HTML: `Cache-Control: no-cache` (or short TTL + ETag)
- [ ] API responses: appropriate `Cache-Control` per data freshness requirements
- [ ] `ETag` or `Last-Modified` present on all cacheable resources
- [ ] CDN edge caching configured for static pages
- [ ] Service Worker for offline/repeat visit caching (if applicable)

### 7. CDN & Hosting
- [ ] Assets served from CDN (not origin for every request)
- [ ] CDN edge nodes cover primary user geography
- [ ] Origin TTFB < 200ms (CDN cache hit) / < 600ms (origin miss)
- [ ] Brotli compression enabled (better than gzip for text assets)
- [ ] HTTP/2 or HTTP/3 enabled (multiplexing, header compression)
- [ ] Connection: `preconnect` hints for third-party origins

### 8. Third-Party Script Impact
- [ ] Audit all third-party scripts (GA4, GTM, chat, Hotjar, ads)
- [ ] Each script assessed: is it required on page load, or can it be deferred?
- [ ] GTM fires after load event (not blocking)
- [ ] Chat widget loaded lazily (not on page load)
- [ ] Ad scripts use async and only on pages that need them
- [ ] Font Awesome / icon libraries replaced with inline SVGs or lucide-react
- [ ] Third-party iframes (YouTube, maps) replaced with facades (load on click)

## Output Format

---

### Performance Audit Report — [Domain / Page]
**Date:** YYYY-MM-DD | **Tools:** Lighthouse / PageSpeed Insights / WebPageTest

#### CWV Status
| Metric | Lab Score | Field Score (28d) | Target | Status |
|--------|-----------|-------------------|--------|--------|
| LCP | 3.2s | 2.8s | < 2.5s | 🔴 Fail |
| CLS | 0.05 | 0.03 | < 0.1 | 🟢 Pass |
| INP | 180ms | 220ms | < 200ms | 🟡 At Risk |

#### Lighthouse Scores (Mobile — Incognito)
| Run | Performance | Accessibility | Best Practices | SEO |
|-----|-------------|--------------|---------------|-----|
| 1 | 74 | 92 | 83 | 96 |
| 2 | 71 | 92 | 83 | 96 |
| 3 | 76 | 92 | 83 | 96 |
| **Avg** | **73.7** | **92** | **83** | **96** |

#### Issue Register
| # | Issue | Metric Impact | Severity | Estimated Saving | Fix |
|---|-------|--------------|----------|-----------------|-----|
| 1 | LCP image not preloaded | LCP +0.8s | 🔴 Critical | ~800ms LCP | Add fetchpriority="high" |
| 2 | 3 render-blocking scripts | LCP +0.5s | 🔴 Critical | ~500ms | Add defer attribute |
| 3 | Unoptimised hero image (1.2MB) | LCP +0.6s | 🟠 High | ~600ms | Convert to WebP, resize |
| 4 | No explicit image dimensions | CLS | 🟠 High | CLS reduction | Add width/height attrs |
| 5 | Lodash imported whole (74KB) | INP, bundle | 🟡 Medium | ~70KB JS | Use named imports |
| 6 | No Cache-Control on images | Repeat visits | 🟡 Medium | Repeat load time | Add immutable header |
| 7 | YouTube embed on load | INP, LCP | 🟡 Medium | ~200ms INP | Use lite-youtube facade |

**Severity Key:**
- 🔴 Critical — Failing CWV, page ranked "Poor" in Google, immediate fix
- 🟠 High — Approaching thresholds, fix before next deploy
- 🟡 Medium — Noticeable improvement possible, next sprint
- 🟢 Low — Minor polish, backlog

#### Quick Wins (implement today — high impact, low effort)
1. Add `fetchpriority="high"` to hero image (5 mins — est. -0.8s LCP)
2. Add `defer` to 3 non-critical scripts (10 mins — est. -0.5s LCP)
3. Convert hero image to WebP (30 mins — est. 60% file size reduction)

---

## Code Examples

### Next.js Image — LCP-optimised hero
```tsx
import Image from 'next/image'

// ✅ Correct LCP image setup
<Image
  src="/hero.jpg"
  alt="Green Barber team removing a large oak tree"
  width={1920}
  height={1080}
  priority              // Disables lazy loading, adds preload link
  quality={85}
  sizes="100vw"         // Full-width image
  className="object-cover"
/>

// ❌ Wrong — never lazy-load the LCP element
<Image src="/hero.jpg" alt="..." loading="lazy" /> // CLS + LCP killer
```

### Manual preload for LCP (when not using next/image)
```html
<!-- In <head> — preloads LCP image before browser discovers it in HTML -->
<link
  rel="preload"
  as="image"
  href="/hero.webp"
  fetchpriority="high"
  imagesrcset="/hero-480.webp 480w, /hero-960.webp 960w, /hero-1920.webp 1920w"
  imagesizes="100vw"
/>
```

### Defer non-critical scripts
```html
<!-- ✅ Deferred — runs after HTML parsed, doesn't block -->
<script src="/analytics.js" defer></script>

<!-- ✅ Async — runs as soon as loaded, doesn't block parsing -->
<script src="/chat-widget.js" async></script>

<!-- ❌ Blocking — do NOT use for third-party scripts -->
<script src="/tracking.js"></script>
```

### Dynamic import for heavy components (Next.js)
```tsx
import dynamic from 'next/dynamic'

// Loads only when component is needed — not in initial bundle
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <div className="aspect-video bg-gray-100 animate-pulse rounded-xl" />,
  ssr: false, // Client-only component
})

// Map with facade — load iframe only on interaction
const MapEmbed = dynamic(() => import('@/components/MapEmbed'), { ssr: false })
```

### Bundle analyser setup (Next.js)
```bash
# Install
npm install @next/bundle-analyzer

# next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer'

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default config

# Run analysis
ANALYZE=true npm run build
# Opens bundle visualiser in browser
```

### Tree-shaking: correct import style
```ts
// ❌ Wrong — imports entire library (74KB for lodash)
import _ from 'lodash'
const result = _.groupBy(items, 'category')

// ✅ Correct — imports only the function needed
import groupBy from 'lodash/groupBy'
const result = groupBy(items, 'category')

// ✅ Better — use native alternatives where possible
const result = Object.groupBy(items, item => item.category) // ES2024

// ❌ Wrong — moment.js is 67KB gzipped
import moment from 'moment'

// ✅ Correct — date-fns is tree-shakeable
import { format, parseISO } from 'date-fns'
```

### Caching headers (Vercel — vercel.json)
```json
{
  "headers": [
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=604800" }
      ]
    },
    {
      "source": "/(.*).html",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    }
  ]
}
```

### Font loading optimisation (Next.js)
```tsx
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

// font-display: swap by default in next/font
// Fonts downloaded at build time — no runtime network request
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'optional', // Prevents FOUT for headings (optional = no layout shift)
})
```

### YouTube facade (prevents 500KB+ on load)
```tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="aspect-video w-full rounded-xl"
      />
    )
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative aspect-video w-full overflow-hidden rounded-xl bg-black"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        fill
        className="object-cover opacity-80"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
          <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7 translate-x-0.5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
```

### Measuring INP (Long Task detection)
```ts
// Identify long tasks blocking INP
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.duration > 50) {
      console.warn('Long task detected:', {
        duration: entry.duration,
        startTime: entry.startTime,
        attribution: (entry as PerformanceEntry & { attribution?: unknown }).attribution,
      })
    }
  })
})
observer.observe({ type: 'longtask', buffered: true })
```

## Manual Review Required

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Field CWV data (real users) | PageSpeed Insights / GSC CWV report | Requires 28 days of CrUX data |
| WebPageTest filmstrip | webpagetest.org | Visual render waterfall analysis |
| Third-party script impact | Chrome DevTools Coverage tab | Must inspect per-script blocking |
| Server response time (TTFB) | WebPageTest or curl timing | Varies by server load and region |
| CDN cache hit rate | CDN dashboard (Cloudflare/Vercel) | Admin access required |
| Bundle size regression | CI pipeline check | Must be automated in CI to catch regressions |
| Real device testing | iOS Safari + Android Chrome | Emulation underestimates real device constraints |
| Network throttling test | Chrome DevTools → Slow 3G | Represents emerging market / poor connection users |
| Lighthouse CI trend | lhci.app or Vercel analytics | Historical scoring over time |
| Font rendering on Windows | Windows + Chrome (no antialiasing) | macOS masks font issues |
