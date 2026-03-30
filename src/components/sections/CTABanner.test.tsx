import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CTABanner } from "./CTABanner";

describe("CTABanner", () => {
  const defaultProps = {
    heading: "Take the first step toward emotional wellbeing.",
    description: "We offer a complimentary 15-minute consultation to explore if our approach is the right fit for your needs.",
    primaryCta: { text: "Schedule Consultation", href: "/booking" },
    secondaryCta: { text: "Meet Our Team", href: "/about" },
  };

  it("renders heading and description", () => {
    render(<CTABanner {...defaultProps} />);
    expect(screen.getByText(/Take the first step toward emotional wellbeing/)).toBeInTheDocument();
    expect(screen.getByText(/We offer a complimentary 15-minute consultation/)).toBeInTheDocument();
  });

  it("renders two CTA buttons", () => {
    render(<CTABanner {...defaultProps} />);
    expect(screen.getByRole("link", { name: /schedule consultation/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /meet our team/i })).toBeInTheDocument();
  });

  it("has dark background", () => {
    const { container } = render(<CTABanner {...defaultProps} />);
    const section = container.firstChild as HTMLElement;
    expect(section).toHaveClass("bg-primary-darker");
  });
});
