# ManoSthir — Counseling Website

## Project Overview
Professional website for ManoSthir, a culturally sensitive online counseling practice founded by Dr. Moumita Bhowmick. See `docs/counselor-profile.md` for all practice details, credentials, services, and pricing. See `docs/content-brief.md` for voice and messaging goals.

## Designs
Visual designs are in `docs/designs/screenshots/`:
- `homepage.png` — Homepage (hero, intro, specializations, journey, testimonials, FAQ, CTA)
- `about.png` — About page (our journey, philosophy pillars, holistic approach, CTA)
- `services.png` — Services page (hero, 6 specialty cards, session formats, CTA)
- `resources.png` — Resources/blog page (featured article, topic filters, article grid, newsletter)
- `booking.png` — Booking page (session type, calendar, time slots, confirmation)

**Design spec with exact values**: `docs/DESIGN-SPEC.md`
ALL visual decisions must match the designs. Do NOT invent colors, fonts, or layouts.

## Assets
See `docs/asset-manifest.md`. Use placeholder strategy for missing assets (photos, logo).
All production assets go in `public/`. Use Next.js Image component for all images.

## Tech Stack
- **Framework**: Next.js 15 with App Router (TypeScript strict mode)
- **Styling**: Tailwind CSS v4 with custom design tokens from DESIGN-SPEC.md
- **Fonts**: Playfair Display (headings) + DM Sans (body) via next/font/google
- **Icons**: Lucide React (matches the line-icon style in designs)
- **Animation**: Framer Motion — subtle fade-ups and hover effects only. CALM aesthetic.
- **Forms**: React Hook Form + Zod (booking page)
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Linting**: ESLint + Prettier
- **Deployment**: Vercel

## Architecture
- Server Components by default; "use client" only for interactive parts (booking form, FAQ accordion, mobile menu, newsletter form)
- Pages in `src/app/` using App Router: `page.tsx`, `about/page.tsx`, `services/page.tsx`, `resources/page.tsx`, `booking/page.tsx`
- Shared components: `src/components/ui/` (Button, Card, Input, Badge, Accordion, etc.)
- Section components: `src/components/sections/` (Hero, ServiceCard, TestimonialCard, CTABanner, etc.)
- Layout components: `src/components/layout/` (Navbar, Footer, Container)
- Design tokens: `src/styles/tokens.ts`
- Content: `src/content/` (TypeScript constants per page)
- Types: `src/types/`
- Tests alongside source: `Component.test.tsx` next to `Component.tsx`

## Content Rules
- ALL copy derived from `docs/counselor-profile.md` and `docs/content-brief.md`
- Use the exact copy from the design screenshots as baseline
- Do NOT invent credentials, services, or testimonials
- Match the tone: warm, empathetic, culturally aware, professional
- Currency is INR (₹). Timezone is IST.

## Agent Team Roles
- **Architect**: Reads DESIGN-SPEC.md → scaffolds project, creates tokens.ts, installs deps. Owns: config, `src/styles/`, `src/types/`, `src/lib/`
- **Designer/Frontend**: Reads DESIGN-SPEC.md + screenshots → builds all UI matching designs. Owns: `src/components/`, `src/app/`
- **Content Writer**: Reads counselor-profile.md + content-brief.md → writes content constants. Owns: `src/content/`
- **Test Agent**: Writes TDD tests. Owns: test files only.
- **Review Agent**: Verifies everything against designs and content. Owns nothing, reviews everything.

## Commands
- `npm run dev` — Dev server on port 3000
- `npm run build` — Production build
- `npm run test` — Vitest
- `npm run test:e2e` — Playwright
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript checking

## Conventions
- Commit messages: imperative mood, < 72 chars
- TypeScript strict: no `any` types, interfaces for all props
- Mobile-first responsive (375px → 1440px)
- WCAG 2.1 AA accessibility
- Every page: unique meta title + description for SEO
- Images: Next.js Image with alt text
- Framer Motion: max 400ms durations, ease-out easing, no bounce/spring

## TDD Protocol
1. Test agent writes failing tests FIRST
2. Frontend agent implements to pass tests
3. Review agent verifies against designs + content accuracy
4. Nothing ships without passing tests + review approval
