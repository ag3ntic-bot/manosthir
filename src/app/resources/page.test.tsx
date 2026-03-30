import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResourcesPage from "./page";

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

describe("ResourcesPage", () => {
  it("renders featured article", () => {
    render(<ResourcesPage />);
    expect(screen.getByText(/FEATURED ARTICLE/i)).toBeInTheDocument();
    expect(screen.getByText(/Digital Wellness/)).toBeInTheDocument();
  });

  it("shows category filters", () => {
    render(<ResourcesPage />);
    expect(screen.getByText("All Topics")).toBeInTheDocument();
    expect(screen.getByText("Anxiety")).toBeInTheDocument();
    expect(screen.getByText("Relationships")).toBeInTheDocument();
  });

  it("shows article grid", () => {
    render(<ResourcesPage />);
    // Should render at least 3 article cards
    const articles = screen.getAllByRole("article");
    expect(articles.length).toBeGreaterThanOrEqual(3);
  });

  it("shows newsletter section", () => {
    render(<ResourcesPage />);
    expect(screen.getByText(/Weekly Wellness Insights/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });
});
