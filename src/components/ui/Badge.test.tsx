import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders label text", () => {
    render(<Badge label="Anxiety" />);
    expect(screen.getByText("Anxiety")).toBeInTheDocument();
  });

  it("applies correct color variant for primary", () => {
    render(<Badge label="All Topics" variant="primary" />);
    const badge = screen.getByText("All Topics");
    expect(badge).toHaveClass("bg-primary");
  });

  it("applies correct color variant for accent", () => {
    render(<Badge label="Featured" variant="accent" />);
    const badge = screen.getByText("Featured");
    expect(badge).toHaveClass("bg-accent");
  });
});
