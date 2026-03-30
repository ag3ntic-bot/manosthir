import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQSection } from "./FAQSection";
import type { FAQItem } from "@/types";

const faqItems: FAQItem[] = [
  { id: "1", question: "Is online therapy as effective as in-person?", answer: "Yes, research shows online therapy is effective." },
  { id: "2", question: "What are the technical requirements for a session?", answer: "You need a stable internet connection." },
  { id: "3", question: "How is my privacy and confidentiality protected?", answer: "We use HIPAA-compliant tools." },
  { id: "4", question: "Do you offer sessions in languages other than English?", answer: "Yes, we offer Hindi, Bengali, and Oriya." },
  { id: "5", question: "How do I make payments from within India?", answer: "We accept UPI, cards, and net banking." },
];

describe("FAQSection", () => {
  it("renders all FAQ questions", () => {
    render(<FAQSection items={faqItems} />);
    faqItems.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it("expands and collapses on click", () => {
    render(<FAQSection items={faqItems} />);
    const firstQuestion = screen.getByText(faqItems[0].question);

    // Click to expand
    fireEvent.click(firstQuestion);
    expect(screen.getByText(faqItems[0].answer)).toBeVisible();

    // Click to collapse
    fireEvent.click(firstQuestion);
    expect(screen.queryByText(faqItems[0].answer)).not.toBeInTheDocument();
  });
});
