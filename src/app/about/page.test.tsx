import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AboutPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

describe("AboutPage", () => {
  it("renders the new v3 hero headline", () => {
    render(<AboutPage />);
    expect(screen.getByText(/A safe space to understand your mind/)).toBeInTheDocument();
    expect(screen.getByText(/heal, and move forward/)).toBeInTheDocument();
  });

  it("renders the 'Starting therapy can feel scary' tagline", () => {
    render(<AboutPage />);
    expect(screen.getAllByText(/Starting therapy can feel scary/).length).toBeGreaterThanOrEqual(1);
  });

  it("includes the person-centered paragraph", () => {
    render(<AboutPage />);
    expect(screen.getAllByText(/person-centered approach/i).length).toBeGreaterThanOrEqual(1);
  });

  it("includes an LGBTQ+ affirming paragraph", () => {
    render(<AboutPage />);
    expect(screen.getByText(/LGBTQ\+ affirming space/i)).toBeInTheDocument();
  });

  it("shows what-guides-my-practice pillars", () => {
    render(<AboutPage />);
    expect(screen.getByText(/What guides my practice/i)).toBeInTheDocument();
    expect(screen.getByText("Unconditional Regard")).toBeInTheDocument();
    expect(screen.getByText("Evidence-Based")).toBeInTheDocument();
    expect(screen.getByText("Inclusive & Affirming")).toBeInTheDocument();
  });
});
