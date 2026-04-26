import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HomePage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

describe("HomePage", () => {
  it("renders hero with new v3 headline", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/A safe space to understand your mind, heal, and/)
    ).toBeInTheDocument();
  });

  it('renders "move forward" highlighted text', () => {
    render(<HomePage />);
    expect(screen.getByText(/move forward/)).toBeInTheDocument();
  });

  it("renders the identity line badges", () => {
    render(<HomePage />);
    expect(screen.getByTestId("hero-identity-line")).toHaveTextContent("Person-centered");
    expect(screen.getByTestId("hero-identity-line")).toHaveTextContent("LGBTQ+ affirming");
    expect(screen.getByTestId("hero-identity-line")).toHaveTextContent("Empathy-led");
    expect(screen.getByTestId("hero-identity-line")).toHaveTextContent("Evidence-based");
  });

  it("shows specializations section with 6 items", () => {
    render(<HomePage />);
    expect(screen.getByText(/What I Help With/)).toBeInTheDocument();
    const specializations = [
      "Anxiety & Panic",
      "Depression Support",
      "Relationships & Breakups",
      "Trauma & Difficult Memories",
      "Stress & Burnout",
      "Young Adult Therapy (18\u201330)",
    ];
    specializations.forEach((spec) => {
      expect(screen.getByText(spec)).toBeInTheDocument();
    });
  });

  it("shows emotional hook on at least one specialization card", () => {
    render(<HomePage />);
    expect(screen.getByText(/When your mind won\u2019t stop racing/)).toBeInTheDocument();
  });

  it("shows how-we-begin steps (3 steps)", () => {
    render(<HomePage />);
    expect(screen.getByText(/How We\u2019ll Begin/)).toBeInTheDocument();
    expect(screen.getByText(/A short first conversation/i)).toBeInTheDocument();
  });

  it("shows primary CTA with new label", () => {
    render(<HomePage />);
    expect(screen.getAllByText(/Start Your First Session/i).length).toBeGreaterThanOrEqual(1);
  });
});
