"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  className = "",
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default MotionWrapper;
