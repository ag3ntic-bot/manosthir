import type { NavLink, FooterColumn } from "@/types";

export const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX";
export const INSTAGRAM_URL = "https://instagram.com/mano.sthir";

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Practice",
    links: [
      { label: "How I Work", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Book a Session", href: "/booking" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Talk to Me", href: WHATSAPP_URL },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const footerTagline =
  "A safe space to understand your mind, heal, and move forward.";

export const copyright = "\u00A9 2026 ManoSthir. All rights reserved.";

export const socialLinks = [
  { platform: "Instagram", href: INSTAGRAM_URL, icon: "instagram" },
  { platform: "WhatsApp", href: WHATSAPP_URL, icon: "whatsapp" },
];
