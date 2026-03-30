import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServicesPage from "./page";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

describe("ServicesPage", () => {
  it('renders services hero with "Moumita Bhowmick"', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Moumita Bhowmick/)).toBeInTheDocument();
  });

  it("shows 6 specialty cards", () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Specialized Counseling Areas/)).toBeInTheDocument();
    expect(screen.getByText("Anxiety & Panic")).toBeInTheDocument();
    expect(screen.getByText("Depression Support")).toBeInTheDocument();
    expect(screen.getByText("Relationship Counseling")).toBeInTheDocument();
    expect(screen.getByText("Trauma & PTSD")).toBeInTheDocument();
    expect(screen.getByText("Burnout & Work Stress")).toBeInTheDocument();
    expect(screen.getByText("Adolescent Therapy")).toBeInTheDocument();
  });

  it("shows session formats", () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Flexible Session Formats/)).toBeInTheDocument();
    expect(screen.getByText(/Online Video Sessions/)).toBeInTheDocument();
    expect(screen.getByText(/Flexible Durations/)).toBeInTheDocument();
    expect(screen.getByText(/Weekend & Evening Slots/)).toBeInTheDocument();
  });
});
