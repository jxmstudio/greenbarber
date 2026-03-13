---
description: Perform a comprehensive UI/UX audit covering heuristics, accessibility (WCAG 2.2), visual hierarchy, component consistency, mobile usability, and interaction patterns.
---

# UI/UX Audit

## Input (what to accept)

- URL(s) or file path(s) to audit (screenshots, Figma links, live site, component files)
- Target audience and device context (desktop-first, mobile-first, both)
- Any known pain points or specific areas of concern
- Accessibility conformance target (WCAG 2.2 A / AA / AAA)
- Brand guidelines or design system reference (if available)

## Analyse (detailed checklist)

### 1. Heuristic Evaluation (Nielsen's 10)
- [ ] **Visibility of system status** — Does the UI communicate loading, success, error states clearly?
- [ ] **Match between system and real world** — Is language user-centric, not developer-centric?
- [ ] **User control and freedom** — Are there undo/redo paths, exit routes from flows?
- [ ] **Consistency and standards** — Are patterns (buttons, links, inputs) used consistently?
- [ ] **Error prevention** — Are dangerous actions confirmed? Are form fields validated inline?
- [ ] **Recognition over recall** — Are options visible rather than requiring memorisation?
- [ ] **Flexibility and efficiency** — Are shortcuts available for power users?
- [ ] **Aesthetic and minimalist design** — Is irrelevant information removed?
- [ ] **Help users recognise/recover from errors** — Are error messages plain-language and actionable?
- [ ] **Help and documentation** — Is contextual help available where needed?

### 2. Accessibility (WCAG 2.2)
- [ ] **1.1.1 Non-text Content** — All images have meaningful alt text; decorative images use `alt=""`
- [ ] **1.3.1 Info and Relationships** — Semantic HTML: headings, lists, tables, landmarks
- [ ] **1.3.3 Sensory Characteristics** — Instructions don't rely solely on shape, colour, or position
- [ ] **1.4.1 Use of Colour** — Colour is not the only visual means of conveying information
- [ ] **1.4.3 Contrast (Minimum)** — Text ≥ 4.5:1, large text ≥ 3:1, UI components ≥ 3:1
- [ ] **1.4.4 Resize Text** — Text resizable to 200% without loss of content
- [ ] **1.4.10 Reflow** — Content reflows at 320px width without horizontal scrolling
- [ ] **1.4.11 Non-text Contrast** — UI components and focus indicators ≥ 3:1 against background
- [ ] **1.4.12 Text Spacing** — No loss of content when letter/word/line spacing is increased
- [ ] **2.1.1 Keyboard** — All functionality operable via keyboard
- [ ] **2.4.3 Focus Order** — Focus order is logical and meaningful
- [ ] **2.4.7 Focus Visible** — Keyboard focus indicator is always visible
- [ ] **2.4.11 Focus Appearance (2.2)** — Focus indicator area ≥ perimeter × 2px, contrast ≥ 3:1
- [ ] **2.5.3 Label in Name** — Visible label matches or is included in accessible name
- [ ] **2.5.8 Target Size (2.2)** — Interactive targets ≥ 24×24 CSS px (AAA: 44×44)
- [ ] **3.1.1 Language of Page** — `<html lang="en">` (or appropriate) present
- [ ] **3.2.1 On Focus** — Focus does not trigger unexpected context change
- [ ] **3.3.1 Error Identification** — Errors identified in text, not just colour
- [ ] **3.3.2 Labels or Instructions** — All form inputs have visible labels
- [ ] **4.1.2 Name, Role, Value** — All UI components have correct ARIA roles, names, states
- [ ] **4.1.3 Status Messages (2.1)** — Status messages programmatically determined without focus

### 3. Visual Hierarchy
- [ ] Clear primary/secondary/tertiary action distinction
- [ ] F-pattern or Z-pattern reading flow respected
- [ ] Heading structure (H1 → H2 → H3) logical and singular H1 per page
- [ ] White space used to group related elements (Gestalt proximity)
- [ ] Font size scale establishes clear information hierarchy (min 3 distinct sizes)
- [ ] Weight and colour used to guide attention, not decorate

### 4. Component Consistency
- [ ] Button variants consistent (primary, secondary, ghost, destructive)
- [ ] Input field states consistent (default, focus, error, disabled)
- [ ] Spacing between components follows a defined scale (4px/8px base grid)
- [ ] Icon usage consistent (single icon library, same stroke weight)
- [ ] Border radius consistent across similar components
- [ ] Typography consistent (max 2 font families, defined scale)

### 5. Mobile Usability
- [ ] Tap target minimum 44×44px (Apple HIG) or 48×48dp (Material)
- [ ] No horizontal scroll on 375px viewport
- [ ] Touch gestures supported and discoverable (swipe, pinch)
- [ ] Bottom-thumb-zone used for primary actions on mobile
- [ ] Forms use appropriate input types (`tel`, `email`, `number`)
- [ ] Modals/overlays dismissible via back gesture or clear close button
- [ ] Text readable without zooming (min 16px body on mobile)
- [ ] Navigation accessible without hover states

### 6. Interaction Patterns
- [ ] Loading states present for all async operations (skeleton or spinner)
- [ ] Empty states designed (no blank white boxes)
- [ ] Destructive actions require confirmation (delete, cancel, logout)
- [ ] Form submission provides clear feedback (success/error)
- [ ] Hover/active/focus states defined for all interactive elements
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Infinite scroll or pagination — choice appropriate to content type
- [ ] Modals trap focus correctly and restore on close

### 7. Contrast Ratios (measure these)
- [ ] Body text on background
- [ ] Heading text on background
- [ ] Placeholder text (often fails — should be ≥ 4.5:1)
- [ ] Button label on button background
- [ ] Link colour on page background (and visited state)
- [ ] Error/success text on their backgrounds
- [ ] Icon on background (≥ 3:1)
- [ ] Input border on page background (≥ 3:1)

## Output Format

Produce a structured audit report in the following format:

---

### UI/UX Audit Report — [Page/Component Name]
**Date:** YYYY-MM-DD | **Auditor:** Claude | **Standard:** WCAG 2.2 AA

#### Executive Summary
[2–3 sentences: overall health, most critical issue, recommended priority]

#### Severity Scoring
| # | Issue | Category | Severity | WCAG / Heuristic | Recommendation |
|---|-------|----------|----------|-----------------|----------------|
| 1 | [Issue description] | Accessibility | 🔴 Critical | 1.4.3 Contrast | [Fix] |
| 2 | [Issue description] | Mobile | 🟠 High | 2.5.8 Target Size | [Fix] |
| 3 | [Issue description] | Consistency | 🟡 Medium | Heuristic #4 | [Fix] |
| 4 | [Issue description] | Visual Hierarchy | 🟢 Low | Best Practice | [Fix] |

**Severity Key:**
- 🔴 Critical — Blocks users, legal risk, immediate fix required
- 🟠 High — Significant UX degradation, fix in next sprint
- 🟡 Medium — Noticeable friction, fix in next cycle
- 🟢 Low — Polish/enhancement, backlog

#### Section 1: Accessibility Issues
[List all WCAG failures with specific element references, e.g. `<button class="nav-toggle">` missing aria-label]

#### Section 2: Visual Hierarchy & Layout
[Findings with before/after description]

#### Section 3: Component Consistency
[List inconsistencies with specific component names]

#### Section 4: Mobile Usability
[Findings at 375px / 768px breakpoints]

#### Section 5: Interaction Patterns
[Missing states, broken flows]

#### Section 6: Contrast Ratio Results
| Element | Foreground | Background | Ratio | Pass/Fail |
|---------|-----------|-----------|-------|-----------|
| Body text | #333333 | #FFFFFF | 12.6:1 | ✅ |
| Placeholder | #AAAAAA | #FFFFFF | 2.3:1 | ❌ |

#### Quick Wins (implement today)
1. [Specific, actionable fix]
2. [Specific, actionable fix]

---

## Code Examples

### Accessible button with all states
```tsx
// ✅ Correct — all interactive states, aria attributes
<button
  type="button"
  aria-label="Close modal"
  aria-pressed={isPressed}
  disabled={isLoading}
  className={cn(
    // Base
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
    'transition-colors duration-150',
    // Focus — WCAG 2.4.11 compliant
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
    // States
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Reduced motion
    'motion-reduce:transition-none',
  )}
>
  {isLoading ? <Spinner aria-hidden="true" /> : 'Submit'}
</button>
```

### Contrast-safe colour pairs (WCAG AA)
```css
/* ✅ Body text — 12.6:1 */
color: #1a1a1a; background: #ffffff;

/* ✅ Muted text — 4.6:1 */
color: #595959; background: #ffffff;

/* ❌ Common fail — placeholder grey */
color: #aaaaaa; background: #ffffff; /* ratio: 2.3:1 — FAIL */

/* ✅ Fixed placeholder — 4.6:1 */
color: #767676; background: #ffffff;
```

### Minimum tap target wrapper
```tsx
// Ensures 44×44px tap target even for small visual elements
<span className="inline-flex items-center justify-center min-w-[44px] min-h-[44px]">
  <ChevronIcon className="h-4 w-4" aria-hidden="true" />
</span>
```

### Focus trap for modals (WCAG 2.1.2)
```tsx
import { useEffect, useRef } from 'react'

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const focusable = modalRef.current?.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable?.[0] as HTMLElement
    const last = focusable?.[focusable.length - 1] as HTMLElement
    first?.focus()

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault()
        ;(e.shiftKey ? last : first)?.focus()
      }
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [isOpen])

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {children}
    </div>
  )
}
```

### Respecting prefers-reduced-motion
```css
/* Default: animations on */
.animated-element {
  transition: transform 300ms ease, opacity 300ms ease;
}

/* User preference: no motion */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
  }
}
```

### Skip link (WCAG 2.4.1)
```tsx
// Place as first child of <body>
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
             focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
>
  Skip to main content
</a>
```

## Manual Review Required

The following items **cannot be verified by static analysis** and require human or specialised tool review:

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Actual contrast ratios | Chrome DevTools / axe / Colour Contrast Analyser | Needs rendered colours, not CSS values |
| Screen reader flow | NVDA + Firefox, VoiceOver + Safari | Requires assistive technology testing |
| Cognitive load assessment | User testing sessions | Subjective, context-dependent |
| Colour blindness simulation | Figma Stark plugin / Chrome DevTools | Visual check required |
| Touch target verification | Real device testing (iOS/Android) | CSS px ≠ physical px on all devices |
| Animation timing feel | Manual playback | Subjective smoothness judgement |
| Content readability score | Hemingway App / Flesch-Kincaid | Copy-specific, not code-verifiable |
| Form usability | Moderated user testing | Edge cases only found through real users |
| WCAG 2.4.11 focus appearance | Manual keyboard navigation | Must visually inspect focus rings |
| Keyboard shortcut conflicts | Manual testing across OS | Varies by OS and browser |
