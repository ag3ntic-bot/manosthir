import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Book a Session</Button>);
    expect(screen.getByRole("button", { name: "Book a Session" })).toBeInTheDocument();
  });

  it("applies primary variant styles", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button", { name: "Primary" });
    expect(button).toHaveClass("bg-primary");
  });

  it("applies secondary variant styles", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: "Secondary" });
    expect(button).toHaveClass("bg-accent");
  });

  it("applies outline variant styles", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole("button", { name: "Outline" });
    expect(button).toHaveClass("border");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Click Me" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as link when href is provided", () => {
    render(<Button href="/booking">Book Now</Button>);
    const link = screen.getByRole("link", { name: "Book Now" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/booking");
  });
});
