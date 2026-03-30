import React from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

export function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    <div data-testid="step-card" className="text-center">
      <div className="w-12 h-12 rounded-full bg-primary-light text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4 font-[family-name:var(--font-body)]">
        {stepNumber}
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-2 font-[family-name:var(--font-body)]">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed font-[family-name:var(--font-body)]">
        {description}
      </p>
    </div>
  );
}

export default StepCard;
