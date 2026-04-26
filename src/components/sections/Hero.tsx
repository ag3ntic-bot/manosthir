"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

interface HeroProps {
  overline?: string;
  headline: string;
  highlightedText?: string;
  description: string;
  identityLine?: string[];
  tagline?: string;
  primaryCta?: { text: string; href: string; ariaLabel?: string };
  secondaryCta?: { text: string; href: string; ariaLabel?: string };
  imageSlot?: React.ReactNode;
  alignment?: "left" | "center";
  background?: string;
}

export function Hero({
  overline,
  headline,
  highlightedText,
  description,
  identityLine,
  tagline,
  primaryCta,
  secondaryCta,
  imageSlot,
  alignment = "left",
  background = "",
}: HeroProps) {
  const isCenter = alignment === "center";
  return (
    <section
      data-testid="hero"
      className={`py-16 md:py-24 ${background}`}
    >
      <Container>
        <div
          className={
            isCenter
              ? "text-center max-w-3xl mx-auto"
              : "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          }
        >
          <MotionWrapper>
            <div>
              {overline && (
                <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[2px] text-primary mb-4 font-[family-name:var(--font-body)]">
                  {overline}
                </p>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight text-text-primary font-[family-name:var(--font-heading)] mb-6">
                {headline}{highlightedText && (
                  <>{" "}<span className="italic text-accent font-[family-name:var(--font-heading)]">{highlightedText}</span></>
                )}
              </h1>
              <p className={`text-base md:text-lg text-text-secondary leading-relaxed mb-6 font-[family-name:var(--font-body)] max-w-xl ${isCenter ? "mx-auto" : ""}`}>
                {description}
              </p>
              {identityLine && identityLine.length > 0 && (
                <p
                  className={`text-xs md:text-sm font-medium uppercase tracking-[1.5px] text-primary mb-6 font-[family-name:var(--font-body)] ${
                    isCenter ? "" : "max-w-xl"
                  }`}
                  data-testid="hero-identity-line"
                >
                  {identityLine.map((item, i) => (
                    <span key={item}>
                      {item}
                      {i < identityLine.length - 1 && (
                        <span className="mx-2 md:mx-3 text-primary/40" aria-hidden="true">|</span>
                      )}
                    </span>
                  ))}
                </p>
              )}
              {tagline && (
                <p className="italic text-sm md:text-base text-text-tertiary mb-6 font-[family-name:var(--font-body)] max-w-xl">
                  {tagline}
                </p>
              )}
              {(primaryCta || secondaryCta) && (
                <div className={`flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}>
                  {primaryCta && (
                    <Button variant="primary" href={primaryCta.href} aria-label={primaryCta.ariaLabel || primaryCta.text}>
                      {primaryCta.text}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button variant="outline" href={secondaryCta.href} aria-label={secondaryCta.ariaLabel || secondaryCta.text}>
                      {secondaryCta.text}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </MotionWrapper>

          {imageSlot && (
            <MotionWrapper delay={0.15}>
              <div className="flex justify-center lg:justify-end">
                {imageSlot}
              </div>
            </MotionWrapper>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
