import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Footer } from "./Footer";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", resolvedTheme: "light", setTheme: () => {} }),
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
    expect(screen.getByRole("link", { name: /how i work/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /talk to me/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("link", { name: /faq/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /privacy policy/i })).toBeInTheDocument();
  });

  it("does not render a Careers link", () => {
    render(<Footer />);
    expect(screen.queryByRole("link", { name: /careers/i })).not.toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it("renders Instagram and WhatsApp social links, not Twitter", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /twitter/i })).not.toBeInTheDocument();
  });
});
