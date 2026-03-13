---
description: Build high-converting landing pages with hero, social proof, feature blocks, pricing, FAQ, optimised CTA placement, above-the-fold structure, and A/B variant suggestions.
---

# Landing Page Builder

## Input (what to accept)

- Business name, product/service, and one-line value proposition
- Target audience (persona description or demographics)
- Primary conversion goal (lead form / phone call / purchase / sign-up / booking)
- Existing copy or brief to work from (or "generate from scratch")
- Competitor URLs for positioning reference (optional)
- Available assets: logo, hero image/video, testimonials, team photos (yes/no for each)
- Brand colours and fonts (or defer to design system)
- Page type: lead gen / sales / event / product / local service

## Analyse (detailed checklist)

### 1. Above-the-Fold Audit
- [ ] Hero message answers: "What is it? Who is it for? What do I do next?" within 5 seconds
- [ ] Primary CTA visible without scrolling on desktop (1440px) and mobile (375px)
- [ ] Headline is benefit-led, not feature-led
- [ ] Sub-headline provides supporting context/evidence
- [ ] Hero image/video directly relevant to offer (no generic stock photos)
- [ ] Trust signals visible above fold (badges, client logos, star rating)
- [ ] Page load < 2s for above-fold content (LCP optimised)

### 2. Conversion Structure (AIDA + PAS hybrid)
- [ ] Attention — Hero captures attention immediately
- [ ] Interest — Problem/solution framing within first two sections
- [ ] Desire — Social proof, benefits, and outcome visualisation
- [ ] Action — CTA repeated at logical intervals (3–5× per long page)
- [ ] Pain — Problem clearly articulated (visitor feels understood)
- [ ] Agitation — Consequences of not acting addressed
- [ ] Solution — Product/service positioned as obvious answer

### 3. Social Proof
- [ ] At least 3 specific testimonials (name, photo, company if B2B, outcome)
- [ ] Star ratings shown with review count
- [ ] Client logo strip (if B2B or well-known clients)
- [ ] Stats/numbers used (e.g., "500+ trees removed safely")
- [ ] Case study or before/after (if applicable)
- [ ] Trust badges: certifications, awards, memberships, insurance
- [ ] Video testimonial (highest trust signal — prioritise if available)

### 4. Feature/Benefit Blocks
- [ ] Benefits lead; features support (outcome first, mechanism second)
- [ ] Each benefit tied to a customer pain point
- [ ] Icons or illustrations used to aid scanning
- [ ] Max 3–6 key benefits (cognitive overload above 6)
- [ ] Comparison table or differentiation section vs alternatives

### 5. Pricing Section (if applicable)
- [ ] Clear pricing or "get a quote" CTA if pricing variable
- [ ] Value anchoring (show what they get, not just cost)
- [ ] Most popular plan highlighted
- [ ] Money-back guarantee / risk reversal visible near price
- [ ] Payment options listed (finance, instalments if available)

### 6. FAQ Section
- [ ] Addresses top 5–8 objections (cost, timing, trust, alternatives)
- [ ] Copy reads as genuine questions from real customers
- [ ] FAQ schema markup included (eligible for rich results)
- [ ] CTA at bottom of FAQ section

### 7. CTA Placement & Copy
- [ ] CTA in hero (primary)
- [ ] CTA mid-page after social proof section
- [ ] CTA at page bottom (final conversion opportunity)
- [ ] Floating/sticky CTA on mobile
- [ ] CTA copy is specific ("Get My Free Quote") not generic ("Submit")
- [ ] Urgency/scarcity used appropriately (true and ethical only)
- [ ] Secondary CTA available for not-ready visitors (learn more / call)

### 8. Navigation & Distraction
- [ ] Minimal or no main navigation on landing page (reduces exit paths)
- [ ] External links only in footer (no leaking traffic mid-page)
- [ ] No competing CTAs of equal visual weight
- [ ] Page footer streamlined (no mega-footer)

### 9. Mobile Optimisation
- [ ] CTA button full-width on mobile
- [ ] Phone number click-to-call on mobile (`<a href="tel:...">`)
- [ ] Form fields use correct input types (tel, email)
- [ ] Images lazy-loaded below fold
- [ ] Text min 16px on mobile

## Output Format

---

### Landing Page Plan — [Business Name] — [Page Goal]
**Date:** YYYY-MM-DD | **Type:** [Lead Gen / Sales / Local Service]

#### Page Architecture (section order)
```
1. Hero — Headline + sub-headline + CTA + trust badge
2. Social proof strip — logos / star rating
3. Problem/Pain section
4. Solution overview
5. Benefits (3–6 items with icons)
6. How it works (3 steps)
7. Testimonials (3+ with photos)
8. Pricing / Quote CTA
9. FAQ (5–8 questions)
10. Final CTA section
11. Footer (minimal)
```

#### Conversion Score (current page or plan)
| # | Element | Status | Severity | Fix |
|---|---------|--------|----------|-----|
| 1 | CTA not visible above fold | Hero | 🔴 Critical | Move CTA above scroll line |
| 2 | Generic testimonials (no names) | Social proof | 🟠 High | Add name, photo, outcome |
| 3 | No FAQ section | Objections | 🟠 High | Add 5 FAQ items |
| 4 | CTA copy is "Submit" | CTA | 🟡 Medium | Change to "Get My Free Quote" |
| 5 | No logo strip | Trust | 🟢 Low | Add certification badges |

#### A/B Test Suggestions
| Variant | Element | Hypothesis |
|---------|---------|-----------|
| A | Hero headline | Benefit-led vs problem-led |
| B | CTA colour | Brand green vs high-contrast orange |
| C | Hero image | Team photo vs work-in-progress photo |
| D | CTA copy | "Get Free Quote" vs "Book Free Survey" |

---

## Code Examples

### Hero section (Next.js + Tailwind)
```tsx
// components/hero/Hero.tsx
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  trustBadge?: string
  heroImage: { src: string; alt: string }
}

export function Hero({ headline, subheadline, ctaPrimary, ctaSecondary, trustBadge, heroImage }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background decorative element */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-200 to-green-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div>
            {trustBadge && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
                <span aria-hidden="true">★★★★★</span>
                {trustBadge}
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              {subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild>
                <a href={ctaPrimary.href}>{ctaPrimary.label}</a>
              </Button>
              {ctaSecondary && (
                <Button variant="ghost" size="lg" asChild>
                  <a href={ctaSecondary.href}>{ctaSecondary.label}</a>
                </Button>
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Social proof strip (logos + star rating)
```tsx
export function SocialProofStrip({ rating, reviewCount, logos }: {
  rating: number
  reviewCount: number
  logos: { src: string; alt: string }[]
}) {
  return (
    <div className="border-y border-gray-200 bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Star rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden="true">{i < Math.floor(rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              <strong>{rating}</strong>/5 from {reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Client logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 grayscale">
            {logos.map(logo => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={100} height={32} className="object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Testimonial card
```tsx
interface Testimonial {
  quote: string
  author: string
  role?: string
  location?: string
  avatar?: string
  rating?: number
}

export function TestimonialCard({ quote, author, role, location, avatar, rating = 5 }: Testimonial) {
  return (
    <figure className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
      <div className="flex text-yellow-400 mb-4" aria-label={`${rating} stars`}>
        {Array.from({ length: rating }).map((_, i) => <span key={i} aria-hidden="true">★</span>)}
      </div>
      <blockquote className="text-gray-700 leading-relaxed">
        <p>"{quote}"</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {avatar && (
          <Image src={avatar} alt="" width={44} height={44} className="rounded-full object-cover" aria-hidden="true" />
        )}
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          {(role || location) && (
            <p className="text-sm text-gray-500">{[role, location].filter(Boolean).join(' • ')}</p>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
```

### FAQ section with schema
```tsx
'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ { question: string; answer: string }

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <section className="py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white">
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-gray-900"
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <dd
                id={`faq-${i}`}
                className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="px-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
```

### Sticky mobile CTA bar
```tsx
export function StickyMobileCTA({ label, href, phone }: { label: string; href: string; phone: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 sm:hidden">
      <div className="flex gap-3">
        <a
          href={`tel:${phone}`}
          className="flex-1 flex items-center justify-center rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50"
        >
          Call Now
        </a>
        <a
          href={href}
          className="flex-1 flex items-center justify-center rounded-lg bg-primary py-3 font-medium text-primary-foreground"
        >
          {label}
        </a>
      </div>
    </div>
  )
}
```

## Manual Review Required

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Conversion rate baseline | Google Analytics Goals | Requires historical traffic data |
| Heatmap analysis | Hotjar / Microsoft Clarity | Needs live user sessions |
| A/B test statistical significance | Google Optimize / VWO | Needs sufficient traffic volume |
| Copy effectiveness | Moderated user testing | 5-second test for clarity |
| Form drop-off | Funnel analytics | Step-by-step form analytics |
| Mobile above-fold check | Real device (iPhone 14, Pixel 7) | Viewport height varies by device |
| Page speed (real users) | PageSpeed Insights (field data) | Lab vs field data differ |
| Competitor positioning | Manual research | Requires current competitor audit |
