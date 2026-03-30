import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "./Navbar";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("Navbar", () => {
  it("renders ManoSthir logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("ManoSthir")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resources/i })).toBeInTheDocument();
  });

  it('renders "Book a Session" CTA button', () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /book a session/i })).toBeInTheDocument();
  });

  it("has sticky positioning", () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav") || container.querySelector("header");
    expect(nav).toHaveClass("sticky");
  });
});
