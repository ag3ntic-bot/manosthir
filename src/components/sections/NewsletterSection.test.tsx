import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NewsletterSection } from "./NewsletterSection";

describe("NewsletterSection", () => {
  it("renders heading", () => {
    render(<NewsletterSection />);
    expect(screen.getByText(/Weekly Wellness Insights/)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<NewsletterSection />);
    const input = screen.getByPlaceholderText(/email/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders subscribe button", () => {
    render(<NewsletterSection />);
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });
});
