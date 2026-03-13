---
description: Design and implement production-ready UI with design tokens, spacing systems, typography scale, colour palette, responsive layout, dark mode, and Tailwind utility patterns.
---

# Frontend Design System

## Input (what to accept)

- Design brief or screenshot/Figma link
- Brand colours (hex/HSL), fonts, or "generate from scratch"
- Target framework: Next.js / React + Tailwind CSS version
- Required components list
- Dark mode required: yes / no
- Responsive breakpoints: default Tailwind / custom
- Design style: minimal / bold / editorial / corporate / playful

## Analyse (detailed checklist)

### 1. Design Tokens Audit
- [ ] Colour tokens defined (primitives → semantic aliases)
- [ ] Spacing scale consistent (4px base grid)
- [ ] Typography scale defined (type-safe size/weight/line-height)
- [ ] Border radius tokens consistent
- [ ] Shadow/elevation scale defined
- [ ] Animation duration and easing tokens present
- [ ] z-index scale defined and documented
- [ ] Breakpoint tokens aligned with usage

### 2. Typography System
- [ ] Font families (max 2: heading + body)
- [ ] Type scale follows modular ratio (1.25 or 1.333)
- [ ] Line height appropriate per size (tight for headings, relaxed for body)
- [ ] Font weight scale (3–4 weights max)
- [ ] Responsive type (fluid or stepped)
- [ ] Font loading optimised (next/font or preconnect)
- [ ] Fallback font stack defined

### 3. Colour System
- [ ] 10-shade palette per brand colour (50–950)
- [ ] Semantic tokens (background, foreground, muted, accent, destructive)
- [ ] Dark mode semantic tokens defined separately
- [ ] WCAG AA contrast verified for all text/background pairs
- [ ] State colours (success, warning, error, info) defined
- [ ] Focus ring colour defined (3:1 contrast against background)

### 4. Spacing & Layout
- [ ] 4px base grid (space-1 = 4px, space-2 = 8px...)
- [ ] Container max-widths defined per breakpoint
- [ ] Grid system (12-col or CSS grid areas)
- [ ] Consistent section padding (vertical rhythm)
- [ ] Gap tokens for flex/grid layouts
- [ ] Negative space used intentionally

### 5. Component Variants
- [ ] Size variants (sm / md / lg)
- [ ] Intent variants (primary / secondary / ghost / destructive / link)
- [ ] State variants (default / hover / active / focus / disabled / loading)
- [ ] Dark mode variants
- [ ] Responsive variants

### 6. Responsive Layout
- [ ] Mobile-first CSS (min-width breakpoints)
- [ ] Fluid containers (max-w + px padding)
- [ ] Grid collapses gracefully at each breakpoint
- [ ] Typography scales down at mobile
- [ ] Touch targets >= 44px on mobile
- [ ] No fixed widths that break mobile

### 7. Dark Mode
- [ ] prefers-color-scheme media query OR class-based toggle
- [ ] All colour tokens have dark variants
- [ ] Images/illustrations adapt (CSS filter or separate assets)
- [ ] No hardcoded colours bypassing token system
- [ ] Dark mode persisted to localStorage

## Output Format

---

### Design System Spec — [Project Name]
**Date:** YYYY-MM-DD | **Framework:** Next.js + Tailwind CSS

#### Design Token Summary
[Quick reference table of core tokens]

#### Severity / Gap Scoring
| # | Gap | Category | Severity | Recommendation |
|---|-----|----------|----------|----------------|
| 1 | No dark mode tokens | Colour | 🔴 Critical | Add .dark variants |
| 2 | Inconsistent spacing | Layout | 🟠 High | Enforce 4px grid |
| 3 | Missing hover states | Components | 🟡 Medium | Add transition classes |
| 4 | Font fallback missing | Typography | 🟢 Low | Add system-ui fallback |

#### Generated Tokens (copy into tailwind.config.ts)
[Full token output — see Code Examples]

#### Component Specifications
[For each requested component: variants, states, props]

---

## Code Examples

### tailwind.config.ts — Full design token setup
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Colour tokens
      colors: {
        green: {
          50:  '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0',
          300: '#86efac', 400: '#4ade80', 500: '#22c55e',
          600: '#16a34a', 700: '#15803d', 800: '#166534',
          900: '#14532d', 950: '#052e16',
        },
        // Semantic tokens (CSS variables — see globals.css)
        background:   'hsl(var(--background))',
        foreground:   'hsl(var(--foreground))',
        muted:        { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent:       { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        primary:      { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary:    { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive:  { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border:       'hsl(var(--border))',
        input:        'hsl(var(--input))',
        ring:         'hsl(var(--ring))',
      },

      // Typography
      fontFamily: {
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem',     letterSpacing: '0.025em' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem',  letterSpacing: '0.015em' }],
        base: ['1rem',     { lineHeight: '1.625rem', letterSpacing: '0' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem',  letterSpacing: '-0.01em' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem',  letterSpacing: '-0.01em' }],
        '2xl':['1.5rem',   { lineHeight: '2rem',     letterSpacing: '-0.02em' }],
        '3xl':['1.875rem', { lineHeight: '2.25rem',  letterSpacing: '-0.02em' }],
        '4xl':['2.25rem',  { lineHeight: '2.5rem',   letterSpacing: '-0.03em' }],
        '5xl':['3rem',     { lineHeight: '1.1',      letterSpacing: '-0.04em' }],
        '6xl':['3.75rem',  { lineHeight: '1.05',     letterSpacing: '-0.04em' }],
        '7xl':['4.5rem',   { lineHeight: '1',        letterSpacing: '-0.05em' }],
      },

      // Spacing (4px base grid)
      spacing: {
        'section-sm': '64px',
        'section-md': '96px',
        'section-lg': '128px',
      },

      // Border radius
      borderRadius: {
        none: '0',
        sm:   '0.25rem',
        DEFAULT: 'var(--radius)',
        md:   'calc(var(--radius) - 2px)',
        lg:   'var(--radius)',
        xl:   'calc(var(--radius) + 4px)',
        '2xl':'calc(var(--radius) + 8px)',
        full: '9999px',
      },

      // Shadows / Elevation
      boxShadow: {
        xs:  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm:  '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md:  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg:  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl:  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl':'0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },

      // Animation
      transitionDuration: { fast: '150ms', base: '200ms', slow: '300ms', slower: '500ms' },

      // Container
      maxWidth: {
        container: '1280px',
        prose:     '65ch',
        narrow:    '800px',
      },

      // z-index scale
      zIndex: {
        hide: '-1', base: '0', raised: '1', dropdown: '10',
        sticky: '20', overlay: '30', modal: '40', popover: '50',
        toast: '60', tooltip: '70',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

export default config
```

### globals.css — CSS custom properties for light + dark mode
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background:          0 0% 100%;
    --foreground:          240 10% 3.9%;
    --muted:               240 4.8% 95.9%;
    --muted-foreground:    240 3.8% 46.1%;
    --accent:              142 76% 36%;
    --accent-foreground:   0 0% 100%;
    --primary:             142 76% 36%;
    --primary-foreground:  0 0% 100%;
    --secondary:           240 4.8% 95.9%;
    --secondary-foreground:240 5.9% 10%;
    --destructive:         0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border:              240 5.9% 90%;
    --input:               240 5.9% 90%;
    --ring:                142 76% 36%;
    --radius:              0.5rem;
  }

  .dark {
    --background:          240 10% 3.9%;
    --foreground:          0 0% 98%;
    --muted:               240 3.7% 15.9%;
    --muted-foreground:    240 5% 64.9%;
    --accent:              142 60% 45%;
    --accent-foreground:   0 0% 100%;
    --primary:             142 60% 45%;
    --primary-foreground:  0 0% 100%;
    --secondary:           240 3.7% 15.9%;
    --secondary-foreground:0 0% 98%;
    --destructive:         0 62.8% 50%;
    --destructive-foreground: 0 0% 98%;
    --border:              240 3.7% 15.9%;
    --input:               240 3.7% 15.9%;
    --ring:                142 60% 45%;
  }
}
```

### Dark mode toggle (Next.js + next-themes)
```tsx
'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </button>
  )
}
```

### Fluid typography (clamp-based)
```css
/* Fluid heading — scales from 32px at 320px viewport to 60px at 1280px */
.fluid-h1 {
  font-size: clamp(2rem, 4vw + 1rem, 3.75rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

/* Fluid body — scales from 16px to 18px */
.fluid-body {
  font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  line-height: 1.625;
}
```

### Responsive section wrapper
```tsx
export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
```

## Manual Review Required

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Actual rendered contrast ratios | Chrome DevTools Accessibility panel | CSS variables resolve at runtime |
| Font rendering across OS | Real device testing | Windows vs macOS antialiasing differs |
| Dark mode flicker on load | Manual browser check | SSR hydration timing issue |
| Touch feel of interactions | Real device | Emulator doesn't replicate haptics |
| Print stylesheet | Browser print preview | Often overlooked |
| Brand alignment | Stakeholder review | Subjective aesthetic judgement |
| Animation performance | Chrome Performance tab | GPU compositing layer check |
