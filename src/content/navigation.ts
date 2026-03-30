import type { NavLink, FooterColumn } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Practice",
    links: [
      { label: "Our Approach", href: "/about" },
      { label: "Therapists", href: "/about" },
      { label: "Locations", href: "/about" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/booking" },
      { label: "FAQ", href: "/#faq" },
      { label: "Insurance", href: "/services" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const footerTagline =
  "Compassionate psychological support for the modern life.";

export const copyright = "\u00A9 2024 ManoSthir Psychology. All rights reserved.";

export const socialLinks = [
  { platform: "Instagram", href: "https://instagram.com/manosthir", icon: "instagram" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/moumita-bhowmick-584baa2b4/", icon: "linkedin" },
  { platform: "Twitter", href: "https://twitter.com/manosthir", icon: "twitter" },
];
