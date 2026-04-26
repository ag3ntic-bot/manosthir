# ManoSthir

**A safe space for your mind to heal and grow.**

ManoSthir is a professional online counseling platform founded by Dr. Moumita Bhowmick — a Cognitive Behavioral Therapist and Counseling Psychologist. The practice bridges deep-rooted Indian values with global therapeutic standards, offering culturally sensitive, evidence-based psychological support to clients worldwide.

> *"Guided by empathy, grounded in science."*

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + custom design tokens |
| Fonts | Playfair Display + DM Sans |
| Icons | Lucide React |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Unit Tests | Vitest + Testing Library |
| E2E Tests | Playwright |
| Accessibility | axe-core + WCAG 2.1 AA |
| Deployment | Vercel |

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, intro, specializations, client journey, testimonials, FAQ, CTA |
| About | `/about` | Practice story, therapeutic philosophy pillars, holistic approach |
| Services | `/services` | 6 specialty areas, session formats, pricing |
| Resources | `/resources` | Blog articles, topic filters, newsletter signup |
| Booking | `/booking` | Session type selector, calendar, time slots, confirmation |

---

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    about/
    booking/
    resources/
    services/
  components/
    layout/             # Navbar, Footer, Container
    sections/           # Hero, ServiceCard, BookingForm, FAQ, CTA, etc.
    ui/                 # Button, Card, Badge, Accordion, Input
  content/              # TypeScript content constants (per page)
  styles/               # Design tokens
  types/                # Shared TypeScript interfaces
  test/                 # Test setup + cross-cutting tests
e2e/                    # Playwright E2E specs
docs/
  designs/screenshots/  # Visual design references
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Open http://localhost:3000
```

## Scripts

```bash
npm run dev          # Dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript checking
npm run test         # Unit tests (Vitest)
npm run test:watch   # Unit tests in watch mode
npm run test:e2e     # E2E tests (Playwright)
```

---

## Services Offered

- **Individual Therapy** — One-on-one CBT and mindfulness-based support
- **Couple Counseling** — Partner sessions for healthier relationships
- **Family Therapy** — Support system and family dynamics work
- **Teen Support** — Navigating identity, social pressure, and academic stress
- **Group Workshops** — Collaborative healing experiences

### Specializations
Anxiety & Panic | Depression | Relationships | Trauma & PTSD | Burnout & Work Stress | Adolescent Therapy

---

## Key Features

- **Culturally Sensitive** — Designed for Indian and diaspora clients while welcoming everyone
- **Multilingual** — English, Hindi, Bengali, Oriya
- **HIPAA Compliant** — Secure, encrypted telehealth sessions
- **Global Access** — IST-based scheduling with international timezone support
- **Mobile-First** — Responsive design from 375px to 1440px
- **Accessible** — WCAG 2.1 AA compliant
- **SEO Optimized** — Unique meta tags per page

---

## License

All rights reserved. This project is proprietary to ManoSthir Psychology.
