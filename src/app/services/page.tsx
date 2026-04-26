import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  Video,
  Clock,
  Calendar,
  User,
  Users,
  Home,
  Check,
  Sparkles,
} from "lucide-react";
import {
  heroContent,
  serviceTiers,
  studentDiscount,
  helperPanel,
  specialties,
  sessionFormats,
  ctaBanner,
} from "@/content/services";
import { seoMetadata } from "@/content/seo";

export const metadata: Metadata = {
  title: seoMetadata.services.title,
  description: seoMetadata.services.description,
};

const formatIconMap: Record<string, React.ReactNode> = {
  video: <Video className="w-6 h-6 text-primary" />,
  clock: <Clock className="w-6 h-6 text-primary" />,
  calendar: <Calendar className="w-6 h-6 text-primary" />,
};

const tierIconMap: Record<string, React.ReactNode> = {
  user: <User className="w-6 h-6 text-primary" />,
  users: <Users className="w-6 h-6 text-primary" />,
  home: <Home className="w-6 h-6 text-primary" />,
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <Hero
        overline={heroContent.overline}
        headline={heroContent.headline}
        highlightedText={heroContent.counselorName}
        description={heroContent.description}
        alignment="center"
        background="bg-bg-tertiary"
      />

      {/* Service Tiers */}
      <section className="py-16 md:py-24">
        <Container>
          <MotionWrapper>
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                Ways we can work together
              </h2>
              <p className="text-text-secondary font-[family-name:var(--font-body)]">
                Transparent pricing. No hidden fees. Every session is online, private, and shaped around you.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {serviceTiers.map((tier, i) => (
              <MotionWrapper key={tier.id} delay={i * 0.08}>
                <Card className="flex flex-col h-full" data-testid="service-tier">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-5">
                    {tierIconMap[tier.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 font-[family-name:var(--font-body)]">
                    {tier.name}
                  </h3>
                  <p className="text-sm italic text-accent mb-4 font-[family-name:var(--font-body)]">
                    {tier.tagline}
                  </p>
                  <div className="flex items-baseline gap-2 mb-1 font-[family-name:var(--font-body)]">
                    <span className="text-3xl font-bold text-text-primary font-[family-name:var(--font-heading)]">
                      {tier.priceFormatted}
                    </span>
                    <span className="text-sm text-text-tertiary">/ session</span>
                  </div>
                  <p className="text-xs text-text-tertiary mb-5 font-[family-name:var(--font-body)]">
                    {tier.duration} · {tier.mode}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 font-[family-name:var(--font-body)]">
                    {tier.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.subServices.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary font-[family-name:var(--font-body)]"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" href="/booking" aria-label={`Book ${tier.name}`}>
                    Book {tier.name.split(" ")[0]} Session
                  </Button>
                </Card>
              </MotionWrapper>
            ))}
          </div>

          {/* Student discount */}
          <MotionWrapper>
            <p className="text-center text-sm text-text-secondary font-[family-name:var(--font-body)]">
              <span className="font-semibold text-text-primary">{studentDiscount.label}</span>{" "}
              — {studentDiscount.note}
            </p>
          </MotionWrapper>
        </Container>
      </section>

      {/* Helper Panel */}
      <section className="py-12 md:py-16 bg-primary-light/40">
        <Container>
          <MotionWrapper>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-bg-secondary rounded-[20px] p-8 md:p-10 shadow-card">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 font-[family-name:var(--font-heading)]">
                    {helperPanel.heading}
                  </h3>
                  <p className="text-text-secondary font-[family-name:var(--font-body)]">
                    {helperPanel.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" href={helperPanel.primaryCTA.href}>
                  {helperPanel.primaryCTA.label}
                </Button>
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </section>

      {/* Individual focus areas */}
      <section className="py-16 md:py-24">
        <Container>
          <MotionWrapper>
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                What individual sessions can help with
              </h2>
              <p className="text-text-secondary font-[family-name:var(--font-body)]">
                These are the areas I most often work with. If what you’re carrying isn’t listed here, that’s okay —{" "}
                <Link href="/booking" className="text-primary font-semibold hover:underline">reach out anyway</Link>.
              </p>
            </div>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((spec, i) => (
              <MotionWrapper key={spec.id} delay={i * 0.08}>
                <ServiceCard
                  title={spec.title}
                  description={spec.description}
                  icon={spec.icon}
                  focusAreas={spec.focusAreas}
                  linkText={spec.linkText}
                  emotionalHook={spec.emotionalHook}
                />
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      {/* Flexible Session Formats */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper>
              <div
                className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-primary-darker to-primary/70 flex items-center justify-center"
                role="img"
                aria-label="Online video therapy session"
              >
                <Video className="w-16 h-16 text-white/30" />
              </div>
            </MotionWrapper>
            <div>
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                  {sessionFormats.heading}
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed font-[family-name:var(--font-body)]">
                  {sessionFormats.description}
                </p>
              </MotionWrapper>
              <div className="space-y-6">
                {sessionFormats.formats.map((fmt, i) => (
                  <MotionWrapper key={fmt.title} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                        {formatIconMap[fmt.icon]}
                      </div>
                      <div>
                        <h3 className="font-bold text-text-primary mb-1 font-[family-name:var(--font-body)]">
                          {fmt.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed font-[family-name:var(--font-body)]">
                          {fmt.description}
                        </p>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24">
        <CTABanner
          heading={ctaBanner.heading}
          description={ctaBanner.description}
          primaryCta={{ text: ctaBanner.primaryCTA.label, href: ctaBanner.primaryCTA.href }}
          secondaryCta={{ text: ctaBanner.secondaryCTA.label, href: ctaBanner.secondaryCTA.href }}
        />
      </section>
    </div>
  );
}
