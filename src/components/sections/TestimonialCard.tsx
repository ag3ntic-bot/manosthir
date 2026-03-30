import React from "react";
import { Card } from "@/components/ui/Card";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
}

export function TestimonialCard({
  quote,
  authorName,
  authorTitle,
}: TestimonialCardProps) {
  return (
    <Card data-testid="testimonial-card">
      <div className="text-5xl text-accent leading-none mb-4 font-[family-name:var(--font-heading)]">
        &ldquo;
      </div>
      <p className="text-text-secondary leading-relaxed mb-6 font-[family-name:var(--font-body)]">
        {quote}
      </p>
      <div>
        <p className="font-bold text-text-primary font-[family-name:var(--font-body)]">
          {authorName}
        </p>
        <p className="text-sm text-text-tertiary font-[family-name:var(--font-body)]">
          {authorTitle}
        </p>
      </div>
    </Card>
  );
}

export default TestimonialCard;
