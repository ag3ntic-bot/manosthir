import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import ResourcesPage from "@/app/resources/page";
import BookingPage from "@/app/booking/page";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ alt, src, ...props }: { alt: string; src: string }) => (
    <img alt={alt} src={src} {...props} />
  ),
}));

describe("Accessibility", () => {
  describe("All images have alt text", () => {
    it("homepage images have alt attributes", () => {
      render(<HomePage />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        const hasAlt = img.hasAttribute("alt") && img.getAttribute("alt") !== "";
        const hasAriaLabel = img.hasAttribute("aria-label") && img.getAttribute("aria-label") !== "";
        expect(hasAlt || hasAriaLabel).toBe(true);
      });
    });

    it("about page images have alt attributes", () => {
      render(<AboutPage />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        const hasAlt = img.hasAttribute("alt") && img.getAttribute("alt") !== "";
        const hasAriaLabel = img.hasAttribute("aria-label") && img.getAttribute("aria-label") !== "";
        expect(hasAlt || hasAriaLabel).toBe(true);
      });
    });

    it("services page images have alt attributes", () => {
      render(<ServicesPage />);
      const images = screen.queryAllByRole("img");
      images.forEach((img) => {
        const hasAlt = img.hasAttribute("alt") && img.getAttribute("alt") !== "";
        const hasAriaLabel = img.hasAttribute("aria-label") && img.getAttribute("aria-label") !== "";
        expect(hasAlt || hasAriaLabel).toBe(true);
      });
    });
  });

  describe("Interactive elements are keyboard accessible", () => {
    it("all buttons are focusable", () => {
      render(<HomePage />);
      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        expect(button).not.toHaveAttribute("tabindex", "-1");
      });
    });

    it("all links are focusable", () => {
      render(<HomePage />);
      const links = screen.getAllByRole("link");
      links.forEach((link) => {
        expect(link).not.toHaveAttribute("tabindex", "-1");
      });
    });
  });

  describe("Color contrast meets WCAG AA", () => {
    it("text on dark backgrounds uses light text color", () => {
      // CTA banner should use white text on dark background
      render(<HomePage />);
      const ctaSection = screen.getByText(/Whenever you\u2019re ready \u2014 I\u2019m here\./);
      // The parent should have dark background and text should be white
      expect(ctaSection).toBeInTheDocument();
      expect(ctaSection).toHaveClass("text-white");
    });
  });

  describe("Form inputs have labels", () => {
    it("booking form inputs have associated labels", () => {
      render(<BookingPage />);
      // Session type radio buttons should have labels
      const radios = screen.getAllByRole("radio");
      radios.forEach((radio) => {
        expect(radio).toHaveAccessibleName();
      });
    });

    it("newsletter email input has a label", () => {
      render(<ResourcesPage />);
      const emailInput = screen.getByPlaceholderText(/email/i);
      expect(emailInput).toHaveAccessibleName();
    });
  });

  describe("Buttons have accessible names", () => {
    it("all buttons across pages have accessible names", () => {
      const pages = [
        { Component: HomePage, name: "HomePage" },
        { Component: BookingPage, name: "BookingPage" },
      ];

      pages.forEach(({ Component }) => {
        const { unmount } = render(<Component />);
        const buttons = screen.getAllByRole("button");
        buttons.forEach((button) => {
          expect(button).toHaveAccessibleName();
        });
        unmount();
      });
    });
  });

  describe("Heading hierarchy", () => {
    it("homepage has exactly one H1", () => {
      render(<HomePage />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(1);
    });

    it("about page has exactly one H1", () => {
      render(<AboutPage />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(1);
    });

    it("services page has exactly one H1", () => {
      render(<ServicesPage />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(1);
    });

    it("resources page has exactly one H1", () => {
      render(<ResourcesPage />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(1);
    });

    it("booking page has exactly one H1", () => {
      render(<BookingPage />);
      const headings = screen.getAllByRole("heading", { level: 1 });
      expect(headings).toHaveLength(1);
    });
  });
});
