import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrandMark } from "./BrandMark";

vi.mock("next/image", () => ({
  default: ({ alt, style, ...props }: { alt: string; style?: React.CSSProperties }) => (
    <img alt={alt} style={style} {...props} />
  ),
}));

describe("BrandMark", () => {
  it("renders the wordmark by default", () => {
    render(<BrandMark />);
    expect(screen.getByText("ManoSthir")).toBeInTheDocument();
  });

  it("renders the logo image pointing to /logo.png", () => {
    const { container } = render(<BrandMark />);
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("src")).toBe("/logo.png");
  });

  it("applies a white-silhouette filter when variant is 'light'", () => {
    const { container } = render(<BrandMark variant="light" />);
    const img = container.querySelector("img");
    expect(img?.getAttribute("style") ?? "").toMatch(/brightness\(0\).*invert\(1\)/);
  });

  it("does not apply the silhouette filter for the default 'color' variant", () => {
    const { container } = render(<BrandMark variant="color" />);
    const img = container.querySelector("img");
    expect(img?.getAttribute("style") ?? "").not.toMatch(/brightness/);
  });

  it("can hide the wordmark when showWordmark is false", () => {
    render(<BrandMark showWordmark={false} />);
    expect(screen.queryByText("ManoSthir")).not.toBeInTheDocument();
  });
});
