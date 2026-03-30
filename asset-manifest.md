# Asset Manifest — ManoSthir

## Design Screenshots (PROVIDED — in docs/designs/screenshots/)
- `homepage.png` — Full homepage design
- `about.png` — About/Our Journey page
- `services.png` — Services page with specialty cards
- `resources.png` — Blog/resources page
- `booking.png` — Booking/scheduling page

## Logo
- **Status**: NOT YET PROVIDED
- The designs show a small icon (appears to be a stylized lotus/leaf) + "ManoSthir" text
- The icon has warm gold/orange and teal tones
- **Action needed**: Export logo as SVG from Figma and place in `public/logo.svg`
- **Workaround**: Agents should create a text-based logo using the heading font "Playfair Display" with the icon as a placeholder colored circle until real SVG is provided

## Counselor Photos
- **Status**: NOT YET PROVIDED as separate files
- The designs show Dr. Moumita Bhowmick's photo in multiple places:
  - Homepage hero (right side, rounded image)
  - Homepage intro section (left side, full portrait with name overlay)
  - About page hero (right side)
  - Booking page (small avatar in "Assigned Professional" card)
- **Action needed**: Export headshot photos from Figma or provide originals in `public/images/`
- **Workaround**: Use a styled placeholder div with initials "MB" in brand colors

## Book Cover
- "Human Touch" book cover visible on About page
- **Status**: NOT YET PROVIDED
- **Workaround**: Placeholder card with book title text

## Blog/Resource Images
- Designs show 3 article card images (illustration, sunset, plant)
- These appear to be stock/placeholder images in the design
- **Action needed**: Provide real blog images or use CSS gradient placeholders
- **Workaround**: Colored gradient cards matching the brand palette

## Icons
- The designs use a consistent line-icon style throughout:
  - Service specialty icons (brain, heart, people, etc.)
  - Session type icons (person, couple, family)
  - Trust badges (lock, shield, checkmark)
  - Social icons (globe, mail, share)
  - Navigation/UI icons (chevrons, search, calendar)
- **Recommended library**: Lucide React (matches the line-icon style in designs)
- **Alternative**: Phosphor Icons

## Fonts (from DESIGN-SPEC.md)
- Playfair Display — Google Fonts (load via next/font)
- DM Sans — Google Fonts (load via next/font)

## Favicon
- **Status**: NOT YET PROVIDED
- **Workaround**: Generate from logo icon once available. Use a teal square with "M" in white initially.

## OG Image (Social Sharing)
- **Status**: NOT YET PROVIDED
- **Action needed**: Create a 1200x630 image with ManoSthir branding
- **Workaround**: Agents can generate a simple OG image with brand colors + logo text

---

## Placeholder Strategy
For assets NOT yet provided, agents should:
- **Photos**: Use a styled div with initials + brand primary color background
- **Blog images**: Use subtle CSS gradients (mint-to-teal, warm-to-coral)
- **Logo**: Text "ManoSthir" in Playfair Display + a small teal circle as icon placeholder
- **Book cover**: Simple card with title "Human Touch" + author name
- Do NOT use any external image services (no unsplash, picsum, placeholder.com)
- All placeholders must look intentional and match the brand aesthetic
