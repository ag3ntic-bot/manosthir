import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ServiceCard } from "./ServiceCard";

describe("ServiceCard", () => {
  const defaultProps = {
    title: "Anxiety & Panic",
    description: "Overcome intrusive thoughts and physical symptoms using CBT and mindfulness.",
    focusAreas: ["Emotional Resilience", "Coping Strategies", "Panic Management"],
    icon: "brain",
    linkText: "Learn More",
  };

  it("renders service title", () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText("Anxiety & Panic")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText(/Overcome intrusive thoughts/)).toBeInTheDocument();
  });

  it("renders focus areas as list", () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText("Emotional Resilience")).toBeInTheDocument();
    expect(screen.getByText("Coping Strategies")).toBeInTheDocument();
    expect(screen.getByText("Panic Management")).toBeInTheDocument();
  });

  it('renders "Learn More" link', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText(/Learn More/)).toBeInTheDocument();
  });
});
