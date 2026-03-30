import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  const defaultProps = {
    question: "Is online therapy as effective as in-person?",
    answer: "Yes, research shows online therapy can be just as effective as in-person sessions.",
  };

  it("renders question text", () => {
    render(<Accordion {...defaultProps} />);
    expect(screen.getByText(defaultProps.question)).toBeInTheDocument();
  });

  it("toggles answer visibility on click", () => {
    render(<Accordion {...defaultProps} />);
    const trigger = screen.getByText(defaultProps.question);

    // Answer should not be in the document initially
    expect(screen.queryByText(defaultProps.answer)).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(trigger);
    expect(screen.getByText(defaultProps.answer)).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(trigger);
    expect(screen.queryByText(defaultProps.answer)).not.toBeInTheDocument();
  });

  it("shows chevron icon", () => {
    render(<Accordion {...defaultProps} />);
    expect(screen.getByTestId("accordion-chevron")).toBeInTheDocument();
  });
});
