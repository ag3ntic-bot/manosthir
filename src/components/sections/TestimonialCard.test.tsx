import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TestimonialCard } from "./TestimonialCard";

describe("TestimonialCard", () => {
  const defaultProps = {
    quote: "The online format made it so easy to prioritize my mental health despite my hectic schedule.",
    authorName: "Sarah M.",
    authorTitle: "Marketing Professional",
  };

  it("renders quote text", () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText(/The online format made it so easy/)).toBeInTheDocument();
  });

  it("renders author name and title", () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText("Sarah M.")).toBeInTheDocument();
    expect(screen.getByText("Marketing Professional")).toBeInTheDocument();
  });
});
