import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutPage from "./page";

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

describe("AboutPage", () => {
  it('renders "Human connection is the heart of healing"', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Human connection is the/)).toBeInTheDocument();
    expect(screen.getByText(/heart of healing/)).toBeInTheDocument();
  });

  it("shows therapeutic philosophy with 3 pillars", () => {
    render(<AboutPage />);
    expect(screen.getByText(/Therapeutic Philosophy/)).toBeInTheDocument();
    expect(screen.getByText("Unconditional Regard")).toBeInTheDocument();
    expect(screen.getByText("Evidence-Based")).toBeInTheDocument();
    expect(screen.getByText("Cultural Sensitivity")).toBeInTheDocument();
  });

  it("shows holistic approach section", () => {
    render(<AboutPage />);
    expect(screen.getByText(/Holistic Approach/)).toBeInTheDocument();
    expect(screen.getByText(/Person-Centered/)).toBeInTheDocument();
    expect(screen.getByText("Individualized Mapping")).toBeInTheDocument();
    expect(screen.getByText("Empowerment & Agency")).toBeInTheDocument();
    expect(screen.getByText("Sustainable Growth")).toBeInTheDocument();
  });
});
