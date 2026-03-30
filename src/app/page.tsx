import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StepCard } from "@/components/sections/StepCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Check } from "lucide-react";
import {
  heroContent,
  introSection,
  specializations,
  journeySteps,
  testimonials,
  faqItems,
  ctaBanner,
} from "@/content/homepage";
import { seoMetadata } from "@/content/seo";

export const metadata: Metadata = {
  title: seoMetadata.homepage.title,
  description: seoMetadata.homepage.description,
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Hero
        overline={heroContent.overline}
        headline={heroContent.headline}
        highlightedText={heroContent.highlightedText}
        description={heroContent.description}
        primaryCta={{ text: heroContent.primaryCTA.label, href: heroContent.primaryCTA.href, ariaLabel: "Book a consultation" }}
        secondaryCta={{ text: heroContent.secondaryCTA.label, href: heroContent.secondaryCTA.href }}
        imageSlot={
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-primary-light opacity-50" />
            <div
              className="relative w-64 h-80 md:w-80 md:h-96 rounded-[20px] bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center overflow-hidden"
              role="img"
              aria-label="Dr. Moumita Bhowmick portrait"

            >
              <span className="text-6xl font-bold text-primary/40 font-[family-name:var(--font-heading)]">
                MB
              </span>
            </div>
          </div>
        }
      />

      {/* Intro / About section */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <Container>
          <MotionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo placeholder */}
              <div className="relative">
                <div
                  className="w-full max-w-sm mx-auto aspect-[3/4] rounded-[16px] bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center overflow-hidden"
                  role="img"
                  aria-label="Dr. Moumita Bhowmick counselor photo"

                >
                  <span className="text-5xl font-bold text-primary/30 font-[family-name:var(--font-heading)]">
                    MB
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-[12px] p-3 shadow-card">
                  <p className="font-bold text-text-primary text-sm font-[family-name:var(--font-body)]">
                    {introSection.counselorName}
                  </p>
                  <p className="text-xs text-text-tertiary font-[family-name:var(--font-body)]">
                    {introSection.counselorTitle}
                  </p>
                </div>
              </div>
              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-[family-name:var(--font-heading)] leading-tight">
                  {introSection.heading}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                  {introSection.description}
                </p>
                <ul className="space-y-3">
                  {introSection.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-3 text-text-primary font-medium font-[family-name:var(--font-body)]"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-24">
        <Container>
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                {specializations.heading}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto font-[family-name:var(--font-body)]">
                {specializations.subtitle}
              </p>
            </div>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.items.map((spec, i) => (
              <MotionWrapper key={spec.id} delay={i * 0.08}>
                <ServiceCard
                  title={spec.title}
                  description={spec.description}
                  icon={spec.icon}
                  focusAreas={spec.focusAreas}
                  linkText={spec.linkText}
                />
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey Together */}
      <section className="py-16 md:py-24 bg-bg-tertiary">
        <Container>
          <MotionWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12 font-[family-name:var(--font-heading)]">
              {journeySteps.heading}
            </h2>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeySteps.steps.map((step, i) => (
              <MotionWrapper key={step.step} delay={i * 0.1}>
                <StepCard
                  stepNumber={step.step}
                  title={step.title}
                  description={step.description}
                />
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MotionWrapper delay={0}>
              <TestimonialCard
                quote={testimonials.items[0].quote}
                authorName={testimonials.items[0].authorName}
                authorTitle={testimonials.items[0].authorTitle}
              />
            </MotionWrapper>
            {testimonials.items.length > 1 && (
              <MotionWrapper delay={0.1}>
                <TestimonialCard
                  quote="Finding the right therapist who understands my cultural background was life-changing. The sessions helped me develop a deeper understanding of myself and build healthier relationships."
                  authorName={testimonials.items[1].authorName}
                  authorTitle={testimonials.items[1].authorTitle}
                />
              </MotionWrapper>
            )}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-bg-tertiary">
        <FAQSection
          heading={faqItems.heading}
          subtitle={faqItems.subtitle}
          items={faqItems.items}
        />
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24">
        <CTABanner
          heading={ctaBanner.heading}
          description={ctaBanner.description}
          primaryCta={{ text: "Schedule Consultation", href: ctaBanner.primaryCTA.href }}
          secondaryCta={{ text: ctaBanner.secondaryCTA.label, href: ctaBanner.secondaryCTA.href }}
        />
      </section>
    </div>
  );
}
