import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroIllustration } from "./HeroIllustration";

describe("HeroIllustration", () => {
  it("renders an svg element", () => {
    const { container } = render(<HeroIllustration />);
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("uses the expected viewBox", () => {
    const { container } = render(<HeroIllustration />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 320 400");
  });

  it("is decorative (aria-hidden)", () => {
    const { container } = render(<HeroIllustration />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("renders the two figure silhouettes via currentColor", () => {
    const { container } = render(<HeroIllustration />);
    const figureGroup = container.querySelector('g[fill="currentColor"]');
    expect(figureGroup).not.toBeNull();
    expect(figureGroup?.querySelectorAll("circle").length).toBe(2);
    expect(figureGroup?.querySelectorAll("path").length).toBe(2);
  });
});
