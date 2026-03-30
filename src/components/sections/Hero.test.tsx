import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  const defaultProps = {
    headline: "A safe space for your mind to",
    highlightedText: "heal and grow",
    description: "Professional global online therapy tailored to your unique journey of healing, self-discovery, and personal transformation.",
    primaryCta: { text: "Book a Consultation", href: "/booking" },
    secondaryCta: { text: "Learn More", href: "/about" },
  };

  it("renders headline text", () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText(/A safe space for your mind/)).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText(/Professional global online therapy/)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByRole("link", { name: /book a consultation/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /learn more/i })).toBeInTheDocument();
  });
});
