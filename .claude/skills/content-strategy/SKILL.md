---
description: Develop content strategy covering content pillars, keyword clustering, topic authority, content calendar, internal linking, content gap analysis, and funnel mapping.
---

# Content Strategy

## Input (what to accept)

- Business name, industry, and core services/products
- Target audience (personas, job titles, demographics, pain points)
- Primary business goal: leads / sales / brand awareness / retention
- Existing content inventory (list of URLs or "none")
- Current organic traffic level: zero / early (< 1k/mo) / growing (1–10k/mo) / established (10k+/mo)
- Geographic target: local / national / international
- Competitor domains for gap analysis (optional)
- Content production capacity: posts per month

## Analyse (detailed checklist)

### 1. Content Pillars
- [ ] 3–5 core topics that directly serve business goals and audience needs
- [ ] Each pillar maps to a service/product line
- [ ] Pillar is broad enough to generate 10+ sub-topics
- [ ] Pillar content is defensible (unique expertise, local knowledge, data)
- [ ] Pillar aligns with search demand (validated via keyword research)

### 2. Keyword Clustering
- [ ] Seed keywords identified for each pillar
- [ ] Keywords grouped by search intent (informational / navigational / commercial / transactional)
- [ ] Cluster head term identified (highest volume, most competitive)
- [ ] Cluster support terms identified (long-tail, lower competition)
- [ ] One URL targets one primary keyword (no cannibalisation)
- [ ] Keyword difficulty vs traffic potential assessed for each cluster

### 3. Topic Authority (Entity Building)
- [ ] Comprehensive coverage of topic — not just one article per pillar
- [ ] Hub & spoke model: pillar page links to all cluster content
- [ ] All spoke articles link back to pillar page
- [ ] Synonyms and related entities covered (Google NLP signals)
- [ ] Author/brand entity established (about page, bylines, schema)

### 4. Content Calendar Structure
- [ ] Publishing cadence set based on capacity (1/week > sporadic quality)
- [ ] Content types mapped: blog / video / case study / FAQ / tool / landing page
- [ ] Seasonal/topical opportunities planned (storms, spring/autumn for tree surgery)
- [ ] Mix of: evergreen (80%) + topical (20%)
- [ ] Review/refresh cycle for existing content (quarterly minimum)
- [ ] Distribution channels planned per content piece

### 5. Internal Linking Strategy
- [ ] Every new article links to at least 2 existing articles
- [ ] Service pages receive internal links from blog content
- [ ] Pillar pages receive most internal links (highest PageRank concentration)
- [ ] Anchor text descriptive and varied (not always "click here")
- [ ] Orphan pages eliminated (every page reachable within 3 clicks)
- [ ] Link siloing prevents topical dilution across clusters

### 6. Content Gap Analysis
- [ ] Competitor top pages identified (by traffic, not just backlinks)
- [ ] Keywords competitors rank for that you don't
- [ ] Questions (People Also Ask) not yet answered on site
- [ ] Service pages missing for offered services
- [ ] Location pages missing for served areas
- [ ] Quick wins: pages on page 2–3 (rank 11–30) that need optimisation

### 7. Funnel Mapping
- [ ] TOFU (awareness) content: educational, problem-aware articles
- [ ] MOFU (consideration) content: comparison, case studies, guides
- [ ] BOFU (decision) content: service pages, pricing, testimonials, local pages
- [ ] Content at each stage has a clear next CTA (moves visitor down funnel)
- [ ] Email capture for TOFU visitors (lead magnet / newsletter)
- [ ] Retargeting audience built from TOFU content visitors

## Output Format

---

### Content Strategy — [Business Name]
**Date:** YYYY-MM-DD | **Industry:** [Industry] | **Goal:** [Primary Goal]

#### Executive Summary
[2–3 sentences: current content health, biggest opportunity, recommended first 90 days]

#### Content Health Score
| Category | Score | Status |
|----------|-------|--------|
| Content Pillars | 2/5 | 🔴 Undefined |
| Keyword Clustering | 1/5 | 🔴 Missing |
| Internal Linking | 3/5 | 🟠 Partial |
| Content Calendar | 0/5 | 🔴 None |
| Funnel Coverage | 2/5 | 🟠 BOFU only |

#### Content Pillar Map
| Pillar | Primary Service | Head Term | Monthly Volume | Difficulty |
|--------|----------------|-----------|----------------|-----------|
| Tree Removal | Tree removal | "tree removal [city]" | 1,200 | Medium |
| Tree Pruning | Pruning/trimming | "tree pruning [city]" | 800 | Low |
| Tree Safety | Emergency / hazard | "dangerous tree removal" | 600 | Low |

#### Keyword Clusters (per pillar — example)
**Pillar: Tree Removal**
| Keyword | Intent | Volume | Difficulty | Assigned URL |
|---------|--------|--------|-----------|-------------|
| tree removal [city] | Transactional | 1,200 | Med | /services/tree-removal |
| how much does tree removal cost | Informational | 2,400 | Low | /blog/tree-removal-cost |
| tree removal near me | Transactional | 4,400 | High | /services/tree-removal (geo) |
| dead tree removal | Commercial | 320 | Low | /blog/dead-tree-removal |
| emergency tree removal | Transactional | 480 | Med | /services/emergency-tree-removal |

#### 90-Day Content Calendar (example)
| Week | Content Piece | Type | Pillar | Target Keyword | Intent |
|------|--------------|------|--------|----------------|--------|
| 1 | How Much Does Tree Removal Cost in [City]? | Blog | Removal | tree removal cost | Info |
| 2 | [City] Tree Removal — Services Page update | Landing | Removal | tree removal [city] | Trans |
| 3 | 5 Signs Your Tree Is Dangerously Diseased | Blog | Safety | diseased tree signs | Info |
| 4 | Case Study: Emergency Oak Removal in [Area] | Case Study | Safety | emergency tree | MOFU |
| ... | ... | ... | ... | ... | ... |

#### Content Gap Priority List
| # | Gap | Competitor Ranking | Opportunity | Severity |
|---|----|-------------------|-------------|----------|
| 1 | No "tree removal cost" guide | Competitor A — pos 2 | 2,400/mo searches | 🔴 Critical |
| 2 | Missing stump grinding page | Competitor B — pos 1 | 880/mo searches | 🔴 Critical |
| 3 | No location pages for [Area 2, 3] | Competitor A | 400/mo each | 🟠 High |
| 4 | No pruning guide | None ranking well | 1,200/mo — easy win | 🟠 High |

#### Internal Link Plan
[Table showing which articles link to which service pages — built from content cluster]

#### Funnel Map
```
TOFU (Awareness):
  Blog: "Signs your tree needs removing" → CTA: Download free tree health checklist
  Blog: "Tree removal costs explained" → CTA: Get a free, no-obligation quote

MOFU (Consideration):
  Case studies: "How we removed a 40ft oak safely" → CTA: Book a free survey
  Comparison: "Tree surgeon vs tree removal service — which do you need?" → CTA: Call us

BOFU (Decision):
  Service pages: "Tree Removal [City]" → CTA: Get your free quote today
  Location pages: "[Suburb] Tree Surgery" → CTA: Call or book online
```

---

## Code Examples

### Content pillar page structure (Next.js)
```tsx
// app/services/tree-removal/page.tsx — Pillar page structure
// This page targets the head term and links out to all cluster articles

export default function TreeRemovalPage() {
  return (
    <>
      {/* Hero with primary CTA */}
      <ServiceHero
        headline="Tree Removal in [City] — Safe, Fast, Fully Insured"
        subheadline="ISA-certified team. Free quotes. Same-week availability."
      />

      {/* What we do — answers primary query */}
      <ServiceOverview />

      {/* Internal links to cluster content */}
      <RelatedGuides
        links={[
          { title: 'How Much Does Tree Removal Cost?', href: '/blog/tree-removal-cost' },
          { title: 'Dead Tree Removal — What You Need to Know', href: '/blog/dead-tree-removal' },
          { title: 'Emergency Tree Removal', href: '/services/emergency-tree-removal' },
        ]}
      />

      {/* Social proof */}
      <Testimonials />

      {/* FAQ with schema */}
      <FAQSection faqs={treeRemovalFAQs} />

      {/* Final CTA */}
      <CTASection />
    </>
  )
}
```

### Content calendar data structure
```ts
// data/content-calendar.ts
interface ContentItem {
  week: number
  title: string
  type: 'blog' | 'landing' | 'case-study' | 'video' | 'social'
  pillar: string
  targetKeyword: string
  intent: 'informational' | 'commercial' | 'transactional'
  status: 'planned' | 'in-progress' | 'published' | 'promoted'
  publishDate: string
  internalLinksTo: string[]   // URLs this piece should link to
  internalLinksFrom: string[] // Existing URLs that should link to this
  cta: string
}

export const contentCalendar: ContentItem[] = [
  {
    week: 1,
    title: 'How Much Does Tree Removal Cost in [City]? (2026 Guide)',
    type: 'blog',
    pillar: 'Tree Removal',
    targetKeyword: 'tree removal cost [city]',
    intent: 'informational',
    status: 'planned',
    publishDate: '2026-03-17',
    internalLinksTo: ['/services/tree-removal', '/contact'],
    internalLinksFrom: ['/services/tree-removal', '/blog/signs-tree-needs-removing'],
    cta: 'Get a free, no-obligation quote',
  },
]
```

### Content gap analysis template
```ts
// Gaps to target in priority order:
const contentGaps = [
  {
    gap: 'Tree removal cost guide',
    competitorRanking: { domain: 'competitor.com', position: 2 },
    searchVolume: 2400,
    difficulty: 'Low',
    priority: 'Critical',
    action: 'Create /blog/tree-removal-cost — 1,500+ words, local pricing, FAQ schema',
  },
  {
    gap: 'Stump grinding service page',
    competitorRanking: { domain: 'other.com', position: 1 },
    searchVolume: 880,
    difficulty: 'Low',
    priority: 'Critical',
    action: 'Create /services/stump-grinding — service page with LocalBusiness schema',
  },
]
```

### Internal link tracking (simple audit)
```ts
// Run this to find orphan pages (pages with 0 internal links pointing to them)
// Manually check these URLs and add links from relevant content

const allPages = [
  '/services/tree-removal',
  '/services/stump-grinding',
  '/blog/tree-removal-cost',
  // ... all indexable pages
]

const internalLinks: Record<string, string[]> = {
  '/services/tree-removal': ['/services/stump-grinding', '/blog/tree-removal-cost'],
  // ... map of page → pages it links to
}

// Pages with no inbound links = orphans
const inboundCount = Object.fromEntries(allPages.map(p => [p, 0]))
Object.values(internalLinks).flat().forEach(href => {
  if (inboundCount[href] !== undefined) inboundCount[href]++
})
const orphans = allPages.filter(p => inboundCount[p] === 0)
console.log('Orphan pages:', orphans)
```

### Funnel-mapped CTA by content type
```tsx
// Utility: get appropriate CTA based on content intent
function getFunnelCTA(intent: 'informational' | 'commercial' | 'transactional') {
  switch (intent) {
    case 'informational':
      return { primary: 'Get a Free Quote', secondary: 'Learn About Our Services' }
    case 'commercial':
      return { primary: 'Book a Free Survey', secondary: 'Read Our Case Studies' }
    case 'transactional':
      return { primary: 'Get My Free Quote Today', secondary: 'Call Us Now' }
  }
}
```

## Manual Review Required

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Keyword volume & difficulty | Ahrefs / Semrush / GSC | Real search data required |
| Competitor traffic estimates | Semrush / SimilarWeb | Estimation tools needed |
| Content quality assessment | Human editorial review | AI can't judge genuine expertise |
| Seasonal search trends | Google Trends | Category-specific timing |
| Link prospecting for outreach | Ahrefs / Moz | Backlink profile analysis |
| Content performance over time | Google Analytics 4 | Historical + ongoing monitoring |
| E-E-A-T signals | Manual audit | Experience, expertise signals are contextual |
| People Also Ask mining | Manual Google searches | Changes frequently |
| Local search intent nuance | Human local knowledge | "Near me" patterns vary by area |
