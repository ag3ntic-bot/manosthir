import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ServicesPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

describe("ServicesPage", () => {
  it("renders services hero with Moumita Bhowmick", () => {
    render(<ServicesPage />);
    expect(screen.getAllByText(/Moumita Bhowmick/).length).toBeGreaterThanOrEqual(1);
  });

  it("shows all three service tiers with INR pricing", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Individual Therapy")).toBeInTheDocument();
    expect(screen.getByText("Couple Counseling")).toBeInTheDocument();
    expect(screen.getByText("Family Therapy")).toBeInTheDocument();
    expect(screen.getByText(/\u20B9699/)).toBeInTheDocument();
    expect(screen.getByText(/\u20B91,400/)).toBeInTheDocument();
    expect(screen.getByText(/\u20B92,800/)).toBeInTheDocument();
  });

  it("shows the student discount note", () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Student discount available/i)).toBeInTheDocument();
  });

  it("shows the 'Not sure what to choose?' helper panel", () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Not sure what to choose/i)).toBeInTheDocument();
  });

  it("shows individual sub-service focus areas", () => {
    render(<ServicesPage />);
    expect(screen.getAllByText(/Overthinking & Anxiety/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Breakup & Emotional Healing/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Young Adult Therapy \(18\u201330\)/).length).toBeGreaterThanOrEqual(1);
  });
});
