import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

interface CTABannerProps {
  heading: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

export function CTABanner({
  heading,
  description,
  primaryCta,
  secondaryCta,
}: CTABannerProps) {
  return (
    <section
      data-testid="cta-banner"
      className="bg-primary-darker rounded-[20px] py-16 md:py-20 mx-4 md:mx-8 lg:mx-auto max-w-[1200px] mb-16"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
            {heading}
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed font-[family-name:var(--font-body)]">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" href={primaryCta.href}>
              {primaryCta.text}
            </Button>
            <Button
              variant="outline"
              href={secondaryCta.href}
              className="border-white text-white hover:bg-white/10"
            >
              {secondaryCta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTABanner;
