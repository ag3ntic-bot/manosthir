"use client";

import React, { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  heading?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQSection({ heading, subtitle, items }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section data-testid="faq-section" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        {heading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-text-secondary font-[family-name:var(--font-body)]">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div>
          {items.map((item) => (
            <Accordion
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() =>
                setOpenId(openId === item.id ? null : item.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
