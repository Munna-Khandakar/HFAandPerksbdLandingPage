# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Perks Group" is a Next.js 14 application for an import/export trading company that operates across multiple countries (chapters). The site showcases services organized by geographic "chapters" (Japan, Pakistan, America, Bangladesh), each offering different import/export services.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production (builds Next.js app and compiles custom server)
npm run build

# Run production server
npm start

# Run linting
npm run lint
```

## Architecture

### Custom Server

The application uses a custom Express server (`server.ts`) instead of the default Next.js server:

- **Development**: `npm run dev` runs `tsx server.ts` which starts the custom server with hot reload
- **Production**: `npm run build` compiles both the Next.js app and `server.ts` (using `tsconfig.server.json`)
- **Server configuration**: Binds to `0.0.0.0` for cPanel compatibility, uses `PORT` environment variable (defaults to 3000)
- **Build artifacts**: Compiled server outputs to `server.js` in the root directory

This custom server setup is required for cPanel deployment and provides flexibility for custom middleware or routing logic.

### Chapter-Based System

The core architecture revolves around a "Chapter" system representing different countries:

- **Chapter enum**: Defined in `types/ServiceType.ts` with values: `japan`, `pakistan`, `america`, `bd`
- **ServiceData**: Located in `data/ServiceData.ts` - maps each Chapter to its array of services
- **ChapterCards**: Metadata for each chapter (title, subtitle, logo)
- **Chapter validation**: `lib/chapter.ts` contains `getChapterFromParam()` to safely parse URL params into valid Chapter enums

### Page Structure

- **Home page** (`app/page.tsx`): Composes multiple sections including HeroSection, CompanySection, AboutComponent, CatalogueSection (chapter-specific), CatalogSwiperSection, and ContactSection
- **Route pages**: `app/about/`, `app/services/`, `app/gallery/`, `app/contact/`, `app/target/` - each contains a `page.tsx`
- **API routes**: `app/api/send-email/route.ts` handles contact form submissions via nodemailer

### Component Organization

- **components/**: Page-level components (AboutComponent, HeroSection, ContactSection, etc.)
- **components/ui/**: Reusable UI primitives from shadcn/ui (button, card, input, textarea, sheet)
- **components/services/**: Service-specific components
- Layout components: Header, Footer, Nav, Mobilenavigation

### Styling System

Uses Tailwind CSS with custom design tokens:

- **Theme configuration**: Custom color palette in `tailwind.config.js` using CSS variables
- **CSS variables**: Defined in `app/globals.css` for colors (primary, secondary, tertiary, accent, etc.)
- **Dark mode**: Implemented via `next-themes` with ThemeProvider in layout
- **shadcn/ui**: Component library configured in `components.json` with path aliases

### Path Aliases

TypeScript path aliases configured in `tsconfig.json`:
- `@/*` maps to root directory
- Commonly used for imports like `@/components`, `@/lib`, `@/types`, `@/data`

### Email Functionality

Contact form emails are sent via API route at `app/api/send-email/route.ts`:
- Uses nodemailer with Gmail SMTP
- Requires environment variables: `EMAIL_SERVICE`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_RECIPIENT`
- Configured in `.env` file (not committed to git)

### Animation & Visual Effects

- **framer-motion**: For page transitions and staggered animations (overlay content in HeroSection)
- **tailwindcss-animate**: Tailwind plugin for CSS animations
- **swiper**: For carousel/slider components with custom effects:
  - HeroSection uses fade effect with 1.2s transitions and 5s autoplay delay
  - Ken Burns effect (scale 1 → 1.05) creates subtle zoom on hero images
  - Custom pagination styling defined in `app/globals.css`
- **react-countup**: For animated number counters
- **sharp**: Image optimization for Next.js Image component

### UI Dependencies

- **@radix-ui**: Accessible component primitives (dialog, slot, icons)
- **@headlessui/react**: Unstyled accessible UI components
- **@heroicons/react**: Icon library
- **lucide-react**: Additional icon set
- **react-icons**: Icon library

## Key Patterns

### Type Safety

TypeScript is used throughout with strict mode enabled. Key types:
- `ServiceType`: Shape of service objects (id, name, description, image)
- `ChapterCard`: Metadata for chapter cards
- `Chapter`: Enum for valid chapter values

### Form Validation

Forms use **react-hook-form** with **zod** for schema validation:
- Contact form in ContactSection validates email, name, subject, and message
- Type-safe validation with TypeScript integration via `@hookform/resolvers`

### Data Flow for Chapter Services

1. URL contains chapter query param (e.g., `?chapter=japan`)
2. `getChapterFromParam()` validates and converts to Chapter enum
3. Home page passes chapter to `CatalogueSection`
4. `CatalogueSection` looks up services from `ServiceData[chapter]`

### Loading States

Home page (`app/page.tsx`) uses React Suspense pattern:
- Wraps `HomeContent` component to handle async operations
- Provides skeleton loading state while `useSearchParams()` resolves
- Ensures smooth UX when navigating with query parameters

### Environment Variables

Required for email functionality (not committed):
- `EMAIL_SERVICE`: Email service provider
- `EMAIL_USER`: Sending email address
- `EMAIL_PASS`: Email password/app password
- `EMAIL_RECIPIENT`: Recipient email address
