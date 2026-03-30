# Design Specification — ManoSthir

Extracted from provided Figma design screenshots (5 pages).

## Color Palette

### Primary (Brand Cyan/Teal)
- **Primary**: #2EC4B6 (bright teal — CTA buttons, active nav, step badges, icons)
- **Primary Light**: #E0F5F1 (very light teal — card icon backgrounds, step number circles)
- **Primary Dark**: #1A8A7D (hover state for buttons)
- **Primary Darker**: #1B3C40 (dark teal — CTA banner backgrounds, footer)

### Accent (Warm Coral)
- **Accent**: #E87461 (coral/terracotta — used for highlighted text "heal and grow", "Person-Centered", "Schedule Consultation" button, category tags)
- **Accent Light**: #FFF0ED (light coral background tint)
- **Accent Dark**: #C95A48 (hover state)

### Neutrals
- **Background Primary**: #F7FAF9 (very light mint-white — main page background)
- **Background Secondary**: #FFFFFF (cards, sections)
- **Background Tertiary**: #F0F5F3 (alternate section backgrounds, newsletter area)
- **Text Primary**: #1A1A2E (near-black — headings)
- **Text Secondary**: #4A5568 (medium gray — body text)
- **Text Tertiary**: #8896A6 (light gray — captions, metadata, "12 min read")
- **Text On Dark**: #FFFFFF (text on dark teal/coral buttons)
- **Border**: #E2E8F0 (card borders, dividers)
- **Border Light**: #EDF2F7 (subtle separators)

### Semantic
- **Success**: #2EC4B6 (reuses primary)
- **Warning**: #F6AD55
- **Error**: #E53E3E

## Typography

### Font Families
- **Heading Font**: "Playfair Display" (elegant serif — all major headings, hero headlines)
  - Source: Google Fonts
  - Used in italic for emphasis words ("heal and grow", "Person-Centered", "Moumita Bhowmick")
- **Body Font**: "DM Sans" (clean modern sans-serif — body text, nav, buttons, cards)
  - Source: Google Fonts
- **Accent/Tag Font**: Body font in uppercase + letter-spacing for labels ("ONLINE THERAPY WORLDWIDE", "HEALING STARTS HERE", "FEATURED ARTICLE")

### Type Scale (Approximate from Designs)
| Element | Font | Weight | Size Desktop | Size Mobile (est.) | Line Height |
|---------|------|--------|--------------|--------------------|-------------|
| H1 (Hero) | Playfair Display | 700 | 56px | 36px | 1.15 |
| H2 (Section) | Playfair Display | 600 | 40px | 28px | 1.2 |
| H3 (Card Title) | DM Sans | 700 | 20px | 18px | 1.3 |
| Body | DM Sans | 400 | 16px | 15px | 1.6 |
| Body Small | DM Sans | 400 | 14px | 13px | 1.5 |
| Caption/Tag | DM Sans | 600 | 12px | 11px | 1.4 |
| Button | DM Sans | 600 | 15px | 14px | 1 |
| Nav Link | DM Sans | 500 | 15px | 14px | 1 |
| Overline | DM Sans (uppercase) | 600 | 13px | 12px | 1.4 |

### Letter Spacing
- Overline/tags: 1.5px - 2px
- Headings: -0.5px (tight)
- Body: 0 (normal)

## Spacing System
- **Base unit**: 4px
- **Common spacings**: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120px
- **Section vertical padding**: 80-120px desktop, 48-64px mobile
- **Card internal padding**: 24-32px
- **Grid gap**: 24-32px between cards

## Border Radius
- **Small** (buttons, inputs, tags): 8px
- **Medium** (cards): 12px
- **Large** (CTA banner sections, featured images): 16-20px
- **Full** (avatar images, step number circles): 9999px

## Shadows
- **Card shadow**: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
- **Card hover shadow**: 0 4px 12px rgba(0,0,0,0.08)
- **Navbar shadow** (on scroll): 0 1px 4px rgba(0,0,0,0.06)

## Layout
- **Max content width**: 1200px
- **Grid**: 12-column implied
- **Side padding desktop**: 80px (within max-width container)
- **Side padding tablet**: 40px
- **Side padding mobile**: 20px

## Component Specifications

### Navbar
- Sticky on scroll with subtle shadow
- Logo (ManoSthir icon + text) left-aligned
- Nav links center-right: varies per page but typically Services, About/Therapists, Resources
- Primary CTA button right: "Book a Session" or "Book Session" (Primary teal, rounded 8px)
- Active nav link: Primary teal color, slightly bolder
- User avatar shown on logged-in pages (booking)
- Mobile: hamburger menu (not shown in designs — implement standard pattern)

### Hero Sections (vary by page)
- **Homepage**: Two-column — left text (overline tag + H1 serif + body + 2 CTAs) | right image (rounded, with decorative circular element behind). Background: light mint.
- **About**: Two-column — left text (tag "Our Journey" + H1 with coral highlight + body) | right image. Background: light mint gradient to white.
- **Services**: Single column center-aligned. Overline "HEALING STARTS HERE" + H1 serif with counselor name in coral italic + body text. Background: light gray.
- **Resources**: Full-width featured article card with background image, overlay, white text.
- **Booking**: Two-column functional layout, no decorative hero.

### Service Cards (Services Page)
- White background, subtle border (#E2E8F0), rounded 12px
- Icon top-left (teal circle background with line icon)
- H3 title (DM Sans bold)
- Body description text
- Bullet list with checkmark icons (teal)
- "Learn More →" link in teal at bottom
- 3-column grid desktop, 1-column mobile
- Two rows of 3 cards = 6 services total

### Testimonial Cards (Homepage)
- White/light background, bordered
- Large quotation mark icon (coral/teal decorative)
- Quote text in body font
- Author name + title below, left-aligned
- 2-column grid

### Step/Journey Cards (Homepage)
- Numbered step (1, 2, 3) in teal circle
- H3 title
- Brief description
- 3-column horizontal layout

### Blog/Resource Cards (Resources Page)
- Image top (rounded top corners, 3:2 aspect ratio)
- Category tag (colored, small pill — teal background for "All Topics" active)
- Read time metadata
- H3 title
- Body excerpt
- Author avatar + name at bottom
- 3-column grid

### Contact/Booking Form (Booking Page)
- Left column: Session type selector (radio cards with icon, name, duration, price)
- Center: Calendar date picker (month view, selected date highlighted in teal)
- Right: Time slot picker (list of rounded pill buttons, selected = teal fill)
- Bottom summary bar: total + "Confirm Booking" button (teal)
- Trust badges below: HIPAA Compliant, Encrypted Data, Licensed Therapists

### FAQ Section (Homepage)
- Accordion style, single column
- Clean divider lines between items
- Expand icon (chevron/plus) right-aligned
- H3 question text
- Body answer text when expanded

### CTA Banner Sections
- Dark teal/charcoal background (#1B3C40), large rounded corners (20px)
- White H2 heading (serif)
- White body text
- Two buttons: primary (coral background) + secondary (white outline or dark fill)
- Centered text alignment

### Footer
- Dark background (matches CTA banner color) OR light background depending on page
- Logo + tagline left column
- Link columns: Services/Practice, Company/Support, Legal
- Newsletter email input + subscribe button in some variants
- Social icons row
- Copyright bar at very bottom
- Varies slightly per page — use the most complete version (Services page footer)

### Newsletter Section (Resources Page)
- Light mint/teal tinted background
- Centered: icon + H2 + body + email input with "Subscribe" button
- Social proof text: "Join 12,000+ others..."

## Animations & Transitions
- **Page feel**: Calm, professional, trustworthy — NOT flashy or playful
- **Scroll animations**: Gentle fade-up (translateY 20px → 0, opacity 0 → 1) with 300-400ms duration, staggered
- **Hover on cards**: Subtle shadow increase + slight translateY(-2px)
- **Hover on buttons**: Background color darkens slightly, smooth 200ms transition
- **Page transitions**: Simple fade, 200ms
- **Accordion**: Smooth height animation, 300ms ease
- **Calendar/time slot selection**: Instant background color change with 150ms transition
- **NO**: bounce, spring, elastic, 3D transforms, parallax

## Responsive Breakpoints
- **Mobile**: ≤ 640px (1 column layouts)
- **Tablet**: 641px – 1024px (2 column where applicable)
- **Desktop**: ≥ 1025px (full layout)
- **Large Desktop**: ≥ 1440px (content stays at max-width, more side padding)
