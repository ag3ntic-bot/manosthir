import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookingPage from "./page";

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

describe("BookingPage", () => {
  it('renders "Reserve Your Space" heading', () => {
    render(<BookingPage />);
    expect(screen.getByText(/Reserve Your Space/)).toBeInTheDocument();
  });

  it("shows 3 session types with INR prices", () => {
    render(<BookingPage />);
    expect(screen.getByText(/Individual Therapy/)).toBeInTheDocument();
    expect(screen.getByText(/\u20B92,500/)).toBeInTheDocument();
    expect(screen.getByText(/Couple Counseling/)).toBeInTheDocument();
    expect(screen.getByText(/\u20B94,000/)).toBeInTheDocument();
    expect(screen.getByText(/Family Therapy/)).toBeInTheDocument();
    expect(screen.getByText(/\u20B94,500/)).toBeInTheDocument();
  });

  it("shows calendar", () => {
    render(<BookingPage />);
    expect(screen.getByTestId("booking-calendar")).toBeInTheDocument();
  });

  it("shows time slots", () => {
    render(<BookingPage />);
    expect(screen.getByText(/09:00 AM/)).toBeInTheDocument();
  });

  it('shows "Confirm Booking" button', () => {
    render(<BookingPage />);
    expect(screen.getByRole("button", { name: /confirm booking/i })).toBeInTheDocument();
  });
});
