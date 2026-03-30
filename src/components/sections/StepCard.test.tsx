import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { StepCard } from "./StepCard";

describe("StepCard", () => {
  const defaultProps = {
    stepNumber: 1,
    title: "Book a Consultation",
    description: "Schedule a 15-minute discovery call to see if it's a good fit.",
  };

  it("renders step number", () => {
    render(<StepCard {...defaultProps} />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<StepCard {...defaultProps} />);
    expect(screen.getByText("Book a Consultation")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<StepCard {...defaultProps} />);
    expect(screen.getByText(/Schedule a 15-minute discovery call/)).toBeInTheDocument();
  });
});
