import React from "react";

interface BadgeProps {
  label: string;
  variant?: "primary" | "accent" | "neutral";
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  neutral: "bg-gray-200 text-text-secondary",
};

export function Badge({ label, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      data-testid="badge"
      className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[1.5px] rounded-full ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

export default Badge;
