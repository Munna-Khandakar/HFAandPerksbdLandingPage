# Perks Group Website UI Redesign - Implementation Plan

## Overview
Complete redesign of the Perks Group website to achieve a clean, modern, professional look that reflects a premium import/export trading company brand identity. Focus on cohesive design system, refined typography, contemporary color palette, and optimized user experience.

## Design Decisions (Based on User Input)
- **Color Palette:** Navy blue primary (#21437D) + warm gold accents - professional, trustworthy, premium
- **Scope:** Full 6-phase comprehensive redesign
- **Non-functional elements:** Keep as placeholders (newsletter, footer links) - visual focus
- **Content:** Merge Target page into About page, remove separate Target page

---

## Phase 1: Design System Foundation (Week 1, Days 1-3)

### 1.1 Color System Redesign

**File:** `app/globals.css`

**Current Issues:**
- Generic blue `--primary: 195 68% 45%` lacks distinction
- No color scale (50-900 shades)
- Dark mode white border `--border: 0 0% 100%` (line 49) creates harsh contrast
- Secondary and accent are identical (redundant)

**Changes:**
Replace lines 7-52 with complete color system:

```css
:root {
  /* Navy Blue Primary - Trust & Professionalism */
  --primary-50: 215 25% 97%;
  --primary-100: 215 28% 92%;
  --primary-200: 215 30% 84%;
  --primary-300: 215 32% 72%;
  --primary-400: 215 35% 60%;
  --primary-500: 215 45% 42%;  /* Main brand color */
  --primary-600: 215 50% 35%;
  --primary-700: 215 55% 28%;
  --primary-800: 215 60% 20%;
  --primary-900: 215 65% 12%;

  /* Warm Gold Secondary - Premium Quality */
  --secondary-50: 42 78% 96%;
  --secondary-100: 42 80% 90%;
  --secondary-200: 42 82% 80%;
  --secondary-300: 42 84% 68%;
  --secondary-400: 42 86% 56%;
  --secondary-500: 42 88% 48%;  /* Accent color */
  --secondary-600: 42 90% 40%;
  --secondary-700: 42 92% 32%;
  --secondary-800: 42 94% 24%;
  --secondary-900: 42 96% 16%;

  /* Neutral Grays - Clean Foundation */
  --neutral-50: 210 20% 98%;
  --neutral-100: 210 20% 95%;
  --neutral-200: 210 18% 90%;
  --neutral-300: 210 16% 80%;
  --neutral-400: 210 14% 60%;
  --neutral-500: 210 12% 45%;
  --neutral-600: 210 14% 35%;
  --neutral-700: 210 16% 25%;
  --neutral-800: 210 18% 15%;
  --neutral-900: 210 20% 8%;

  /* Semantic Colors */
  --success: 145 60% 42%;
  --warning: 32 95% 55%;
  --error: 0 70% 50%;
  --info: 200 95% 45%;

  /* shadcn/ui compatibility - map to new system */
  --background: var(--neutral-50);
  --foreground: var(--neutral-900);
  --primary: var(--primary-500);
  --primary-foreground: var(--neutral-50);
  --secondary: var(--secondary-500);
  --secondary-foreground: var(--neutral-900);
  --muted: var(--neutral-100);
  --muted-foreground: var(--neutral-500);
  --accent: var(--primary-50);
  --accent-foreground: var(--primary-900);
  --border: var(--neutral-200);
  --input: var(--neutral-200);
  --ring: var(--primary-500);
  --card: 0 0% 100%;
  --card-foreground: var(--neutral-900);
  --radius: 0.5rem;
}

.dark {
  --background: var(--neutral-900);
  --foreground: var(--neutral-50);
  --primary: var(--primary-400);  /* Lighter in dark mode */
  --primary-foreground: var(--neutral-900);
  --secondary: var(--secondary-400);
  --secondary-foreground: var(--neutral-900);
  --muted: var(--neutral-800);
  --muted-foreground: var(--neutral-400);
  --accent: var(--neutral-800);
  --accent-foreground: var(--neutral-50);
  --border: var(--neutral-700);  /* FIX: was white */
  --input: var(--neutral-800);
  --ring: var(--primary-400);
  --card: var(--neutral-800);
  --card-foreground: var(--neutral-50);
}
```

**File:** `tailwind.config.js`

Extend colors object (lines 20-57) with full palette:

```js
colors: {
  // Keep existing mappings
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  // ... existing

  // Add full color scales
  primary: {
    50: "hsl(var(--primary-50))",
    100: "hsl(var(--primary-100))",
    200: "hsl(var(--primary-200))",
    300: "hsl(var(--primary-300))",
    400: "hsl(var(--primary-400))",
    500: "hsl(var(--primary-500))",
    600: "hsl(var(--primary-600))",
    700: "hsl(var(--primary-700))",
    800: "hsl(var(--primary-800))",
    900: "hsl(var(--primary-900))",
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    50: "hsl(var(--secondary-50))",
    // ... full scale
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  neutral: {
    50: "hsl(var(--neutral-50))",
    // ... full scale
    900: "hsl(var(--neutral-900))",
  },
}
```

### 1.2 Typography System

**File:** `app/layout.tsx`

Replace Sen font (lines 12-16) with Inter:

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

// Update body className (line 26)
<body className={inter.className}>
```

**File:** `app/globals.css`

Replace `.h1` class (lines 83-85) and add complete type scale:

```css
/* Display - Hero sections */
.display-xl { @apply text-6xl md:text-7xl font-bold tracking-tight leading-tight; }
.display-lg { @apply text-5xl md:text-6xl font-bold tracking-tight leading-tight; }
.display-md { @apply text-4xl md:text-5xl font-bold tracking-tight leading-tight; }

/* Headings - Section titles */
.h1 { @apply text-3xl md:text-4xl font-bold tracking-tight leading-snug; }
.h2 { @apply text-2xl md:text-3xl font-bold tracking-tight leading-snug; }
.h3 { @apply text-xl md:text-2xl font-semibold leading-snug; }
.h4 { @apply text-lg md:text-xl font-semibold leading-snug; }
.h5 { @apply text-base md:text-lg font-semibold leading-normal; }
.h6 { @apply text-base font-semibold leading-normal; }

/* Body - Paragraphs */
.body-xl { @apply text-xl leading-relaxed; }
.body-lg { @apply text-lg leading-relaxed; }
.body-md { @apply text-base leading-relaxed; }
.body-sm { @apply text-sm leading-normal; }
.body-xs { @apply text-xs leading-normal; }
```

### 1.3 Spacing System

**File:** `app/globals.css`

Add spacing utilities:

```css
/* Section Spacing */
.section-padding { @apply py-12 md:py-16 lg:py-24; }
.section-padding-sm { @apply py-8 md:py-12 lg:py-16; }
.section-padding-lg { @apply py-16 md:py-24 lg:py-32; }
```

### 1.4 Shadow System

**File:** `app/globals.css`

Add shadow variables to `:root`:

```css
:root {
  /* ... existing colors ... */

  /* Shadows */
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-primary: 0 10px 25px -5px rgba(33, 67, 125, 0.15);
  --shadow-secondary: 0 10px 25px -5px rgba(184, 134, 11, 0.15);
}
```

**File:** `tailwind.config.js`

Extend boxShadow:

```js
extend: {
  // ... existing
  boxShadow: {
    'sm': 'var(--shadow-sm)',
    'md': 'var(--shadow-md)',
    'lg': 'var(--shadow-lg)',
    'xl': 'var(--shadow-xl)',
    '2xl': 'var(--shadow-2xl)',
    'primary': 'var(--shadow-primary)',
    'secondary': 'var(--shadow-secondary)',
  }
}
```

### 1.5 Animation Performance Fix

**File:** `utils/animation.ts`

**Critical Issue:** Animations are 2-2.8 seconds (lines 11, 28, 43, 58) - extremely slow and sluggish

Replace entire file with faster animations:

```ts
export const containerVariants = (delay = 0) => ({
  "offscreen": {
    opacity: 0,
    y: 20  // Reduced from 30
  },
  "onscreen": {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,  // Reduced from 2
      delay
    }
  }
})

export const tagVariants = {
  "offscreen": {
    opacity: 0,
    y: 10
  },
  "onscreen": {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,  // Reduced from 2.8
      delay: 0.1     // Reduced from 0.4
    }
  }
}

export const titleVariants = {
  "offscreen": {
    opacity: 0,
    y: 20  // Reduced from 30
  },
  "onscreen": {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,  // Reduced from 2.2
    }
  }
}

export const desVariants = {
  "offscreen": {
    opacity: 0,
    y: 20
  },
  "onscreen": {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,  // Reduced from 2.6
      delay: 0.1     // Reduced from 0.2
    }
  }
}
```

**File:** `app/globals.css`

Update fadeInUp animation (lines 174-187):

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);  /* Reduced from 40px */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;  /* Reduced from 1.1s */
}
```

### 1.6 Border Radius Enhancement

**File:** `tailwind.config.js`

Extend borderRadius (lines 58-62):

```js
borderRadius: {
  'none': '0',
  'sm': '0.25rem',
  'md': '0.5rem',
  'lg': '0.75rem',   // Add
  'xl': '1rem',      // Add
  '2xl': '1.5rem',   // Add
  'full': '9999px',
}
```

---

## Phase 2: Component Library Enhancement (Week 1, Days 4-5)

### 2.1 Install shadcn/ui Components

**Current:** Only 5 components (button, card, input, textarea, sheet)

**Install commands:**

```bash
npx shadcn-ui@latest add form
npx shadcn-ui@latest add label
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
```

This creates:
- `components/ui/form.tsx`
- `components/ui/label.tsx`
- `components/ui/toast.tsx`
- `components/ui/skeleton.tsx`
- `components/ui/badge.tsx`
- `components/ui/separator.tsx`
- `components/ui/avatar.tsx`
- `components/ui/tabs.tsx`
- `components/ui/dialog.tsx`
- `components/ui/dropdown-menu.tsx`

### 2.2 Update Existing UI Components

**File:** `components/ui/button.tsx`

Add premium variant and update colors to use new design tokens:

```tsx
// Add new variant
premium: "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-primary hover:from-primary-700 hover:to-primary-800",
```

**File:** `components/ui/card.tsx`

Update with new shadows and hover states:

```tsx
<div className={cn(
  "rounded-lg border bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300",
  className
)} {...props} />
```

### 2.3 Consolidate Icon Libraries

**Current:** Using 3 libraries (@heroicons/react, react-icons, lucide-react)

**Action:** Replace all with lucide-react

**Files to update:**
- `components/HeroSection.tsx` - Replace `TbArrowUpRight` with lucide `ArrowUpRight`
- `components/CatalogueSection.tsx` - Replace `TbArrowNarrowRight` with lucide `ArrowRight`
- All other components using icons

**After updates, uninstall:**
```bash
npm uninstall @heroicons/react react-icons
```

---

## Phase 3: Layout System Standardization (Week 2, Days 1-2)

### 3.1 Create Reusable Layout Components

**New file:** `components/layout/PageHero.tsx`

```tsx
interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className={`relative h-64 md:h-80 flex items-center justify-center ${
      backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary-600 to-primary-800'
    }`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      <div className="absolute inset-0 bg-neutral-900/50" /> {/* Overlay */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="display-lg mb-4">{title}</h1>
        {subtitle && <p className="body-xl text-neutral-100">{subtitle}</p>}
      </div>
    </section>
  );
}
```

**New file:** `components/layout/PageSection.tsx`

```tsx
interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'dark';
}

export function PageSection({ children, className, background = 'default' }: PageSectionProps) {
  const bgClass = {
    default: 'bg-background',
    muted: 'bg-neutral-50 dark:bg-neutral-900',
    dark: 'bg-neutral-900 text-white'
  }[background];

  return (
    <section className={cn('section-padding', bgClass, className)}>
      <div className="container">{children}</div>
    </section>
  );
}
```

**New file:** `components/layout/SectionHeader.tsx`

```tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center')}>
      <h2 className="h2 mb-4">{title}</h2>
      {subtitle && <p className="body-lg text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
    </div>
  );
}
```

### 3.2 Header Redesign

**File:** `components/Header.tsx`

**Current Issues:**
- Uses `bg-tertiary` (line 33) which is now replaced
- Scroll transitions could be smoother
- No backdrop blur for modern glass effect

**Changes:**

```tsx
// Line 33-35, replace with:
className={`${
  header
    ? 'py-4 bg-white/80 backdrop-blur-lg shadow-md dark:bg-neutral-900/90'
    : 'py-6 bg-white/60 backdrop-blur-sm dark:bg-transparent'
} sticky top-0 z-30 transition-all duration-300 ${pathname === '/' && 'bg-white/80 backdrop-blur-lg'}`}
```

### 3.3 Footer Cleanup

**File:** `components/Footer.tsx`

**Changes:**
1. Update background colors to new design tokens
2. Keep placeholder links (per user preference)
3. Update typography to use new type scale classes

Replace hardcoded colors with:
- Background: `bg-neutral-50 dark:bg-neutral-900`
- Copyright section: `bg-neutral-900 dark:bg-neutral-950`
- Text: `text-neutral-600 dark:text-neutral-400`

---

## Phase 4: Page-Level Redesign (Week 2, Days 3-5)

### 4.1 Home Page Redesign

**File:** `components/HeroSection.tsx`

**Changes:**
1. Remove `clipped-corners` class (line in globals.css:188-190) - dated effect
2. Update typography to new scale
3. Apply new color tokens
4. Update lucide-react icons
5. Add premium button variant

### 4.2 Services Page Redesign

**File:** `app/services/page.tsx`

**Changes:**
1. Replace hero section with `<PageHero>` component
2. Use `<Skeleton>` components for loading states
3. Wrap content in `<PageSection>`

**File:** `components/services/ServiceCard.tsx`

**Changes:**
1. Use updated `Card` component with new shadows
2. Apply new typography scale
3. Improve hover states with new shadow system

### 4.3 About Page Redesign

**File:** `app/about/page.tsx`

**Changes:**
1. Replace bg-[url('/image/whoweare.jpg')] pattern with `<PageHero backgroundImage="/image/whoweare.jpg">`
2. Wrap `CompanyBackground` in `<PageSection>`
3. Wrap `Teams` in `<PageSection background="muted">`

**File:** `components/CompanyBackground.tsx`

Update typography classes to new scale (h1, h2, body-lg, etc.)

**File:** `components/Teams.tsx` & `components/TeamCard.tsx`

1. Use `<Avatar>` component for team photos
2. Apply updated `Card` styling
3. Update typography

### 4.4 Contact Page Redesign

**File:** `app/contact/page.tsx`

**Current Issue:** Custom CSS in globals.css (lines 87-173) bypasses design system

**Changes:**
1. Add `<PageHero title="Contact Us" />`
2. Wrap form in `<PageSection>`
3. Remove all `.contact-section` CSS from globals.css (lines 54-173)
4. Use shadcn/ui `Form`, `Label`, `Input` components with design system tokens
5. Keep placeholder functionality (per user preference)

**Delete from globals.css:** Lines 54-70, 87-173

### 4.5 Gallery Page Redesign

**File:** `app/gallery/page.tsx`

**Critical Issues:**
- No page title or hero
- Uses raw `<img>` tags (not optimized)
- Hover scale-90 (shrinks on hover - unintuitive)

**Changes:**
1. Add `<PageHero title="Gallery" subtitle="Explore our global operations" />`
2. Replace all `<img>` tags with Next.js `<Image>` component
3. Add proper width, height, alt attributes
4. Add `loading="lazy"` for performance
5. Change `hover:scale-90` to `hover:scale-105`
6. Apply `rounded-xl` instead of no radius

### 4.6 Merge Target Page into About

**File:** `app/target/page.tsx`

**Action:** DELETE this file

**File:** `app/about/page.tsx`

**Action:** Review `components/CompanyTarget.tsx` content and merge relevant sections into the About page structure. Add as new `<PageSection>` after `CompanyBackground`.

**File:** `components/CompanyTarget.tsx`

**Action:** Extract unique content (if any), then DELETE file if duplicate.

---

## Phase 5: Advanced Component Patterns (Week 3, Days 1-2)

### 5.1 Loading States

**Files to update:**
- `app/page.tsx` - Replace Suspense fallback with proper `<Skeleton>` components
- `app/services/page.tsx` - Same

Create reusable skeleton components:

**New file:** `components/skeletons/ServiceCardSkeleton.tsx`

```tsx
export function ServiceCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
```

### 5.2 Empty States

**File:** `app/services/page.tsx`

Replace empty state text with proper component:

```tsx
import { Inbox } from 'lucide-react';

<div className="text-center py-16">
  <Inbox className="w-16 h-16 mx-auto text-neutral-400 mb-4" />
  <h3 className="h3 mb-2">No Chapter Selected</h3>
  <p className="body-md text-neutral-600 dark:text-neutral-400">
    Choose a chapter above to browse available services
  </p>
</div>
```

### 5.3 Data Externalization

**Current:** Hardcoded data in components

**Create new data files:**

- `data/ReviewsData.ts` - Extract from ContactSection component
- `data/TeamData.ts` - Extract from Teams component
- `data/PartnersData.ts` - Extract from CompanySection component

**Update components to import from data files instead of inline arrays**

### 5.4 ChapterSelector Enhancement

**File:** `components/ChapterSelector.tsx`

**Changes:**
1. Apply new `Card` styling with updated shadows
2. Update hover states with new color tokens
3. Consider adding `<Badge>` showing service count per chapter
4. Update active state to use `bg-primary-50 border-primary-500`

---

## Phase 6: Performance & Accessibility Optimization (Week 3, Days 3-5)

### 6.1 Image Optimization

**All components using Next.js Image:**

1. Add `priority` to hero images (LCP)
2. Add `loading="lazy"` to below-fold images
3. Remove `unoptimized={true}` flags
4. Ensure proper `width` and `height` attributes
5. Add descriptive `alt` text

**Files to audit:**
- `components/HeroSection.tsx`
- `components/AboutComponent.tsx`
- `components/CatalogueSection.tsx`
- `components/services/ServiceCard.tsx`
- `app/gallery/page.tsx` (critical - all raw img tags)
- All review/team card images

### 6.2 Animation Performance

**Add reduced motion support:**

**File:** `app/globals.css`

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.3 Accessibility Audit

**Key areas:**

1. **Heading Hierarchy:** Ensure no skipped levels (h1 → h2 → h3)
2. **Form Labels:** All inputs have associated labels
3. **Focus States:** Visible focus indicators on all interactive elements
4. **Color Contrast:** Test all text/background combinations (WCAG AA: 4.5:1)
5. **ARIA:** Add aria-labels to icon-only buttons

**Critical file:** `components/ChapterSelector.tsx` - Already has good keyboard support, ensure focus states are visible

### 6.4 SEO Optimization

**File:** `app/layout.tsx`

Update metadata (lines 18-21):

```tsx
export const metadata = {
  title: "Perks Group - Premium Import/Export Trading Company",
  description: "International trading company specializing in import/export services across Japan, USA, Pakistan, and Bangladesh. Quality products, reliable global logistics.",
  keywords: ["import", "export", "trading", "international", "logistics"],
};
```

**Add page-specific metadata to each page:**

- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/contact/page.tsx`
- `app/gallery/page.tsx`

### 6.5 Bundle Optimization

**After icon library consolidation:**

```bash
npm run build
# Check bundle sizes
# Verify tree-shaking worked
```

**Consider dynamic imports for heavy components:**

```tsx
// For Swiper in CatalogSwiperSection
const Swiper = dynamic(() => import('swiper/react'), { ssr: false });
```

---

## Implementation Order Summary

### Week 1
**Days 1-3:** Phase 1 - Design System Foundation
- globals.css color system
- tailwind.config.js extensions
- layout.tsx font change
- animation.ts performance fixes
- Typography classes

**Days 4-5:** Phase 2 - Component Library
- Install shadcn/ui components
- Update existing UI components
- Consolidate icon libraries

### Week 2
**Days 1-2:** Phase 3 - Layout System
- Create PageHero, PageSection, SectionHeader
- Update Header with new colors
- Update Footer with new colors

**Days 3-5:** Phase 4 - Page Redesign
- Home page (HeroSection, other components)
- Services page + ServiceCard
- About page (merge Target content)
- Contact page (remove custom CSS)
- Gallery page (critical - image optimization)
- DELETE app/target/page.tsx

### Week 3
**Days 1-2:** Phase 5 - Advanced Patterns
- Skeleton components
- Empty states
- Data externalization
- ChapterSelector enhancements

**Days 3-5:** Phase 6 - Optimization
- Image optimization (all files)
- Reduced motion support
- Accessibility audit
- SEO metadata
- Bundle optimization

---

## Critical Files Reference

### Foundation (Highest Priority)
1. `app/globals.css` - All design tokens start here
2. `tailwind.config.js` - Makes tokens accessible
3. `utils/animation.ts` - Fix sluggish animations
4. `app/layout.tsx` - Font change affects entire site

### Components (Update After Foundation)
5. `components/ui/button.tsx`
6. `components/ui/card.tsx`
7. `components/Header.tsx`
8. `components/Footer.tsx`

### Pages (Update After Components)
9. `components/HeroSection.tsx`
10. `app/services/page.tsx`
11. `app/about/page.tsx`
12. `app/contact/page.tsx`
13. `app/gallery/page.tsx` (CRITICAL: image optimization)

### Cleanup
14. DELETE `app/target/page.tsx`
15. DELETE custom `.contact-section` CSS from globals.css (lines 54-70, 87-173)
16. DELETE `.clipped-corners` CSS from globals.css (lines 188-190)

---

## Success Criteria

**Visual:**
- Cohesive navy/gold color scheme throughout
- Consistent typography hierarchy
- Modern shadows and elevation
- Smooth, fast animations (0.5-0.6s)
- Professional, clean aesthetic

**Technical:**
- Lighthouse Performance: 90+
- All images optimized (Next.js Image)
- No custom CSS bypassing design system
- Reduced motion support
- WCAG AA accessibility

**User Experience:**
- Clear visual hierarchy
- Responsive across all devices
- Fast, snappy interactions
- Professional, trustworthy brand presence
- Scalable design system for future growth

---

## Notes

- Keep newsletter and footer links as placeholders (user preference)
- No time estimates in plan (per instructions)
- Focus on visual redesign, not functional changes
- Target page content merged into About before deletion
- All changes maintain existing functionality
