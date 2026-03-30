import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Video, Clock, Calendar, Download } from "lucide-react";
import { heroContent, specialties, sessionFormats, ctaBanner } from "@/content/services";
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

      {/* Specialized Counseling Areas */}
      <section className="py-16 md:py-24">
        <Container>
          <MotionWrapper>
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-[family-name:var(--font-heading)]">
                  Specialized Counseling Areas
                </h2>
                <a
                  href="/service-guide.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-[8px] hover:bg-primary-light transition-colors duration-200 font-[family-name:var(--font-body)] self-start"
                >
                  <Download className="w-4 h-4" />
                  Download Service Guide
                </a>
              </div>
              <p className="text-text-secondary font-[family-name:var(--font-body)]">
                Personalized care for diverse mental health needs.
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
            {/* Image placeholder */}
            <MotionWrapper>
              <div
                className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-primary-darker to-primary/70 flex items-center justify-center"
                role="img"
                aria-label="Online video therapy session"

              >
                <Video className="w-16 h-16 text-white/30" />
              </div>
            </MotionWrapper>
            {/* Text */}
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
