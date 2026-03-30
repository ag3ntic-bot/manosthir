"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import { newsletter } from "@/content/resources";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section
      data-testid="newsletter-section"
      className="bg-bg-tertiary py-16 md:py-20"
    >
      <div className="max-w-xl mx-auto px-5 text-center">
        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
          {newsletter.heading}
        </h2>
        <p className="text-text-secondary mb-8 leading-relaxed font-[family-name:var(--font-body)]">
          {newsletter.description}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex gap-2 max-w-md mx-auto mb-4"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={newsletter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-border rounded-[8px] text-text-primary bg-white placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary font-[family-name:var(--font-body)]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-[8px] hover:bg-primary-dark transition-colors duration-200 font-[family-name:var(--font-body)]"
          >
            {newsletter.buttonText}
          </button>
        </form>
        <p className="text-sm text-text-tertiary font-[family-name:var(--font-body)]">
          {newsletter.socialProof}
        </p>
      </div>
    </section>
  );
}

export default NewsletterSection;
