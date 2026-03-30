# Master Prompt — Paste This Into Claude Code

Copy everything below the line and paste it as your first prompt in Claude Code.

---

You are the lead agent for building the ManoSthir counseling website.

BEFORE ANYTHING ELSE, read CLAUDE.md thoroughly, then read every file in docs/:
- docs/DESIGN-SPEC.md
- docs/counselor-profile.md
- docs/content-brief.md
- docs/asset-manifest.md
- docs/sitemap.md
- View all 5 design screenshots in docs/designs/screenshots/

PHASE 1 — ARCHITECTURE (Architect Agent)
Delegate to the architect agent:
- Read DESIGN-SPEC.md and extract exact color values (#2EC4B6, #E87461, #1B3C40, #F7FAF9, etc.), font names (Playfair Display, DM Sans), spacing scale
- Initialize Next.js 15 with TypeScript strict, App Router
- Install: tailwindcss @tailwindcss/typography framer-motion react-hook-form zod lucide-react vitest @testing-library/react @testing-library/jest-dom @playwright/test @axe-core/playwright
- Configure next/font/google for Playfair Display and DM Sans
- Create src/styles/tokens.ts with EXACT hex values from DESIGN-SPEC.md
- Configure Tailwind extending these tokens
- Scaffold all 5 page routes per sitemap.md
- Create TypeScript interfaces in src/types/
- Configure Vitest + Playwright
Wait for architect to confirm scaffold is ready.

PHASE 2 — CONTENT & TESTS IN PARALLEL
Spawn two teammates simultaneously:

Teammate 1 (Content Writer):
- Read docs/counselor-profile.md and docs/content-brief.md
- View all 5 design screenshots to use the visible copy as baseline
- Write content files in src/content/ for all 5 pages plus navigation, footer, and SEO
- Use ONLY real information from the counselor profile
- Currency: INR (₹). Timezone: IST.
- Message Test Engineer with all export names when done

Teammate 2 (Test Engineer):
- Read docs/counselor-profile.md for content assertions
- Read docs/sitemap.md for page coverage
- Write failing tests: component render tests, page SEO tests, accessibility tests, responsive tests
- Write E2E tests: navigation, FAQ accordion, booking flow, newsletter form
- Coordinate with Content Writer on export names

PHASE 3 — IMPLEMENTATION (Designer Agent)
After Phase 2 completes:
- View EVERY screenshot in docs/designs/screenshots/
- Build layout components first: Container, Navbar, Footer
- Build UI primitives: Button, Card, Badge, Accordion, Input
- Build section components: Hero variants, ServiceCard, TestimonialCard, StepCard, BlogCard, CTABanner, FAQSection, NewsletterSection, BookingForm
- Build pages matching screenshots: Homepage → About → Services → Resources → Booking
- Use design tokens from src/styles/tokens.ts
- Import content from src/content/
- Use Lucide React for all icons
- Use placeholder strategy from asset-manifest.md for missing images
- Run tests after each component. Fix failures immediately.

PHASE 4 — REVIEW
Delegate to the review-lead agent:
- Compare every page against its design screenshot
- Verify counselor info accuracy against counselor-profile.md
- Accessibility audit (axe-core + keyboard nav)
- SEO verification (meta tags, heading hierarchy)
- Responsive check at 375px, 768px, 1440px
- Brand consistency (correct fonts, colors, tone)
Send failures back to responsible agent.

PHASE 5 — FINAL VERIFICATION
- Run: npm run test && npm run test:e2e
- Run: npm run type-check
- Run: npm run lint
- Run: npm run build
- Report completion status

Use delegate mode — coordinate only, do not write code yourself.
Enable plan approval — review each agent's plan before they execute.
Delete the team when all work is verified complete.
