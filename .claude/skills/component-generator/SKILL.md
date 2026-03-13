---
description: Scaffold production-ready React components with TypeScript props, Tailwind styling, ARIA accessibility, Storybook stories, unit test stubs, and JSDoc documentation.
---

# Component Generator

## Input (what to accept)

- Component name (PascalCase) and brief description
- Component type: UI primitive / composite / page section / layout / form
- Props interface description or list
- Variants required (size, intent, state)
- Accessibility requirements (role, aria-*, keyboard interaction)
- Whether Storybook story is needed (yes/no)
- Whether unit test stub is needed (yes/no)
- Parent design system context (standalone / shadcn-ui compatible / custom)

## Analyse (detailed checklist)

### 1. Component Architecture
- [ ] Single responsibility — component does one thing well
- [ ] Props interface well-typed (no `any`, no implicit prop drilling)
- [ ] Sensible defaults for all optional props
- [ ] Controlled vs uncontrolled pattern chosen deliberately
- [ ] Forwarded ref where DOM access needed (`React.forwardRef`)
- [ ] Compound components for complex UI (Tabs, Accordion, Select)
- [ ] Children vs explicit prop composition decided
- [ ] Memoisation only where proven necessary (no premature `useMemo`)

### 2. TypeScript Props
- [ ] Props interface exported (for consumer use)
- [ ] All variants typed as union literals, not `string`
- [ ] Optional props have `?` and sensible defaults
- [ ] Event handlers typed correctly (`React.MouseEvent<HTMLButtonElement>`)
- [ ] `className` prop accepted for style extension
- [ ] `children` typed as `React.ReactNode`
- [ ] `as` prop pattern for polymorphic components (if applicable)
- [ ] JSDoc on each prop

### 3. Tailwind Styling
- [ ] Uses `cn()` / `cva()` for conditional class composition
- [ ] No inline `style={}` unless dynamic values require it
- [ ] Variants defined in `cva()` schema (not ad-hoc ternaries)
- [ ] Focus-visible ring instead of `focus:` for keyboard users
- [ ] `motion-reduce:` applied to all animations
- [ ] Dark mode via `dark:` prefix (not separate component)
- [ ] Responsive via `sm:`, `md:`, `lg:` (mobile-first)
- [ ] `group` / `peer` used for parent-child state styling

### 4. Accessibility
- [ ] Correct semantic HTML element chosen first (button, not div)
- [ ] `role` attribute added only when semantic HTML insufficient
- [ ] `aria-label` or `aria-labelledby` on all interactive elements
- [ ] `aria-describedby` links to helper/error text
- [ ] `aria-expanded`, `aria-selected`, `aria-checked` on stateful elements
- [ ] `aria-disabled` preferred over HTML `disabled` for custom elements
- [ ] `aria-live` for dynamic content updates
- [ ] Keyboard interaction pattern matches ARIA Authoring Practices Guide
- [ ] Focus management on open/close of overlays

### 5. Component Quality
- [ ] No hardcoded strings (text passed as props or children)
- [ ] Loading state handled
- [ ] Empty state handled
- [ ] Error state handled
- [ ] No console.log left in
- [ ] No hardcoded colours or spacing outside token system
- [ ] Exported from barrel file (index.ts)

### 6. Storybook Story
- [ ] Default story matches most common usage
- [ ] All variants showcased in separate stories
- [ ] All states (loading, disabled, error) shown
- [ ] Args table documents all props
- [ ] a11y addon checks run

### 7. Unit Test Stub
- [ ] Renders without crashing
- [ ] Renders correct children/text
- [ ] onClick / onChange handlers called correctly
- [ ] Disabled state prevents interaction
- [ ] Snapshot test (optional)
- [ ] Accessibility check (jest-axe)

## Output Format

Produce files in this order:

---

### Component: [ComponentName]
**Type:** [UI Primitive / Composite / Section] | **Framework:** React + Tailwind + TypeScript

#### 1. Component file — `src/components/[category]/[ComponentName].tsx`
[Full component code]

#### 2. Types file (if complex) — `src/components/[category]/[ComponentName].types.ts`
[Exported types/interfaces]

#### 3. Storybook story — `src/components/[category]/[ComponentName].stories.tsx`
[Full story file]

#### 4. Unit test — `src/components/[category]/[ComponentName].test.tsx`
[Test stubs]

#### 5. Barrel export update — add to `src/components/index.ts`
```ts
export { ComponentName } from './[category]/ComponentName'
export type { ComponentNameProps } from './[category]/ComponentName'
```

#### Usage Example
```tsx
<ComponentName variant="primary" size="md" onClick={handleClick}>
  Label text
</ComponentName>
```

#### Severity / Gaps (if auditing existing component)
| # | Issue | Category | Severity | Fix |
|---|-------|----------|----------|-----|
| 1 | Missing aria-label | Accessibility | 🔴 Critical | Add aria-label prop |
| 2 | Hardcoded colour | Styling | 🟠 High | Use token |
| 3 | No loading state | UX | 🟡 Medium | Add isLoading prop |
| 4 | Missing JSDoc | DX | 🟢 Low | Document props |

---

## Code Examples

### Button component (full production example)
```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base classes
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-colors duration-150',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
    'disabled:pointer-events-none disabled:opacity-50',
    'motion-reduce:transition-none',
  ],
  {
    variants: {
      variant: {
        primary:     'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
        secondary:   'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:       'hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:     'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        link:        'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm:   'h-8 px-3 text-xs',
        md:   'h-10 px-4 py-2',
        lg:   'h-11 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show loading spinner and disable interaction */
  isLoading?: boolean
  /** Icon to render before label */
  leftIcon?: React.ReactNode
  /** Icon to render after label */
  rightIcon?: React.ReactNode
}

/**
 * Primary UI button component.
 * Supports all variants, sizes, loading state, and icons.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

### Storybook story
```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'destructive', 'outline', 'link'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg', 'icon'] },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Get a Free Quote', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'Learn More', variant: 'secondary' } }
export const Loading: Story = { args: { children: 'Submitting...', isLoading: true } }
export const Disabled: Story = { args: { children: 'Unavailable', disabled: true } }
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(['primary', 'secondary', 'ghost', 'destructive', 'outline', 'link'] as const).map(v => (
        <Button key={v} variant={v}>{v}</Button>
      ))}
    </div>
  ),
}
```

### Unit test stub
```tsx
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Button } from './Button'

describe('Button', () => {
  it('renders label correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} disabled>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('shows loading state', () => {
    render(<Button isLoading>Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

### Polymorphic component (as prop)
```tsx
type PolymorphicProps<E extends React.ElementType> = {
  as?: E
  children?: React.ReactNode
} & React.ComponentPropsWithRef<E>

function Box<E extends React.ElementType = 'div'>({ as, children, ...props }: PolymorphicProps<E>) {
  const Component = as ?? 'div'
  return <Component {...props}>{children}</Component>
}

// Usage:
<Box as="section" className="py-16">Content</Box>
<Box as="a" href="/about">Link styled as Box</Box>
```

### cn() utility (prerequisite)
```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Manual Review Required

| Check | Tool / Method | Why Manual |
|-------|--------------|-----------|
| Screen reader announcement | NVDA/VoiceOver | Must verify aria-live regions speak correctly |
| Keyboard interaction pattern | Manual keyboard navigation | ARIA APG pattern compliance |
| Visual regression | Chromatic / Percy | Automated snapshot comparison |
| Cross-browser rendering | BrowserStack | CSS support varies |
| Component performance | React DevTools Profiler | Unnecessary re-render detection |
| Storybook a11y addon results | Storybook a11y tab | Automated but needs human confirmation |
| Edge case prop combinations | Manual | Unexpected variant/size combos |
