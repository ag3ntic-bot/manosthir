import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card><p>Card content</p></Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies hover shadow class", () => {
    const { container } = render(<Card><p>Content</p></Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("hover:shadow-cardHover");
  });
});
