"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-primary text-text-on-dark hover:bg-primary-dark",
  secondary:
    "bg-accent text-text-on-dark hover:bg-accent-dark",
  outline:
    "border border-primary text-primary hover:bg-primary-light",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-[8px] transition-colors duration-200 font-[family-name:var(--font-body)]";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Link href={href} className={classes} data-testid="button" aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
      data-testid="button"
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

export default Button;
