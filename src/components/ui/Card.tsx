"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      data-testid="card"
      className={`bg-bg-secondary border border-border rounded-[12px] p-6 md:p-8 shadow-card hover:shadow-cardHover transition-shadow duration-300 ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Card;
