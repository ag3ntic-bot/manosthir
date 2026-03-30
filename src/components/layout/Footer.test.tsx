import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./Footer";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("Footer", () => {
  it("renders ManoSthir logo", () => {
    render(<Footer />);
    expect(screen.getByText("ManoSthir")).toBeInTheDocument();
  });

  it("renders footer column links", () => {
    render(<Footer />);
    expect(screen.getByText("Practice")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /our approach/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /faq/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /privacy policy/i })).toBeInTheDocument();
  });

  it('renders copyright text with "ManoSthir Psychology"', () => {
    render(<Footer />);
    expect(screen.getByText(/ManoSthir Psychology/)).toBeInTheDocument();
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /twitter/i })).toBeInTheDocument();
  });
});
