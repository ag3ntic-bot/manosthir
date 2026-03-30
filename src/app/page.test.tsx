import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "./page";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

describe("HomePage", () => {
  it('renders hero with "A safe space for your mind"', () => {
    render(<HomePage />);
    expect(screen.getByText(/A safe space for your mind/)).toBeInTheDocument();
  });

  it('renders "heal and grow" highlighted text', () => {
    render(<HomePage />);
    expect(screen.getByText(/heal and grow/)).toBeInTheDocument();
  });

  it("shows specializations section with 6 items", () => {
    render(<HomePage />);
    expect(screen.getByText(/Our Specializations/)).toBeInTheDocument();
    const specializations = [
      "Anxiety & Panic",
      "Depression Support",
      "Relationship Counseling",
      "Trauma & PTSD",
      "Burnout & Work Stress",
      "Adolescent Therapy",
    ];
    specializations.forEach((spec) => {
      expect(screen.getByText(spec)).toBeInTheDocument();
    });
  });

  it("shows journey steps (3 steps)", () => {
    render(<HomePage />);
    expect(screen.getByText(/The Journey Together/)).toBeInTheDocument();
    expect(screen.getAllByText("Book a Consultation").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Meet Your Therapist")).toBeInTheDocument();
    expect(screen.getByText("Begin Your Healing")).toBeInTheDocument();
  });

  it("shows testimonials", () => {
    render(<HomePage />);
    // At least one testimonial quote should be visible
    expect(screen.getByText(/online format/i)).toBeInTheDocument();
  });

  it("shows FAQ section with 5 questions", () => {
    render(<HomePage />);
    expect(screen.getByText(/Common Questions about Online Therapy/)).toBeInTheDocument();
    expect(screen.getByText(/Is online therapy as effective as in-person/)).toBeInTheDocument();
    expect(screen.getByText(/What are the technical requirements/)).toBeInTheDocument();
    expect(screen.getByText(/How is my privacy and confidentiality protected/)).toBeInTheDocument();
    expect(screen.getByText(/Do you offer sessions in languages other than English/)).toBeInTheDocument();
    expect(screen.getByText(/How do I make payments from within India/)).toBeInTheDocument();
  });

  it("shows CTA banner", () => {
    render(<HomePage />);
    expect(screen.getByText(/Take the first step toward emotional wellbeing/)).toBeInTheDocument();
  });
});
