import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container><p>Container content</p></Container>);
    expect(screen.getByText("Container content")).toBeInTheDocument();
  });

  it("has max-width constraint", () => {
    const { container } = render(<Container><p>Content</p></Container>);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("max-w-[1200px]");
  });
});
