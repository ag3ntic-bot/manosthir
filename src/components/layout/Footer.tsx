"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import {
  footerColumns,
  footerTagline,
  copyright,
  socialLinks,
} from "@/content/navigation";

const socialIconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
};

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer data-testid="footer" className="bg-primary-darker text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                ManoSthir
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed font-[family-name:var(--font-body)]">
              {footerTagline}
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-body)]">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-[family-name:var(--font-body)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-body)]">
              Newsletter
            </h4>
            <p className="text-sm text-gray-300 mb-4 font-[family-name:var(--font-body)]">
              Get wellness tips delivered weekly.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 text-sm rounded-[8px] bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-[family-name:var(--font-body)]"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-[8px] hover:bg-primary-dark transition-colors duration-200 font-[family-name:var(--font-body)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {socialIconMap[social.icon]}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-400 font-[family-name:var(--font-body)]">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
