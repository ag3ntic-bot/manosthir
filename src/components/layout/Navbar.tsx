"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-navbar" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white text-sm font-bold">M</span>
          </div>
          <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
            ManoSthir
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium font-[family-name:var(--font-body)] transition-colors duration-200 ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-[15px] font-semibold rounded-[8px] hover:bg-primary-dark transition-colors duration-200 font-[family-name:var(--font-body)]"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-light px-5 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium font-[family-name:var(--font-body)] ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white font-semibold rounded-[8px] hover:bg-primary-dark transition-colors duration-200 font-[family-name:var(--font-body)]"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
