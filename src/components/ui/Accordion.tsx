"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function Accordion({ question, answer, isOpen: controlledIsOpen, onToggle }: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div data-testid="accordion" className="border-b border-border-light">
      <button
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-body)]">
          {question}
        </h3>
        <motion.div
          data-testid="accordion-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ChevronDown className="w-5 h-5 text-text-secondary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-text-secondary leading-relaxed font-[family-name:var(--font-body)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
