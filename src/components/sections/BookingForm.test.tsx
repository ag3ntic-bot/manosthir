import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BookingForm } from "./BookingForm";

describe("BookingForm", () => {
  it("renders session type options with prices in INR", () => {
    render(<BookingForm />);
    expect(screen.getByText(/Individual Therapy/)).toBeInTheDocument();
    expect(screen.getByText(/Couple Counseling/)).toBeInTheDocument();
    expect(screen.getByText(/Family Therapy/)).toBeInTheDocument();
  });

  it("renders Individual Therapy at \u20B92,500", () => {
    render(<BookingForm />);
    expect(screen.getByText(/\u20B92,500/)).toBeInTheDocument();
  });

  it("renders Couple Counseling at \u20B94,000", () => {
    render(<BookingForm />);
    expect(screen.getByText(/\u20B94,000/)).toBeInTheDocument();
  });

  it("renders Family Therapy at \u20B94,500", () => {
    render(<BookingForm />);
    expect(screen.getByText(/\u20B94,500/)).toBeInTheDocument();
  });

  it("shows calendar component", () => {
    render(<BookingForm />);
    expect(screen.getByTestId("booking-calendar")).toBeInTheDocument();
  });

  it("shows time slots", () => {
    render(<BookingForm />);
    expect(screen.getByText(/09:00 AM/)).toBeInTheDocument();
    expect(screen.getByText(/12:00 PM/)).toBeInTheDocument();
  });

  it('shows "Confirm Booking" button', () => {
    render(<BookingForm />);
    expect(screen.getByRole("button", { name: /confirm booking/i })).toBeInTheDocument();
  });

  it("displays trust badges", () => {
    render(<BookingForm />);
    expect(screen.getByText(/HIPAA Compliant/)).toBeInTheDocument();
    expect(screen.getByText(/Encrypted Data/)).toBeInTheDocument();
    expect(screen.getByText(/Licensed Therapists/)).toBeInTheDocument();
  });
});
