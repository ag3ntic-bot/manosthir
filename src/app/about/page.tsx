import type { Metadata } from "next";
import { CounselorPhoto } from "@/components/ui/CounselorPhoto";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  Heart,
  ClipboardList,
  Globe,
  Map,
  Zap,
  TrendingUp,
} from "lucide-react";
import {
  heroContent,
  personalIntro,
  philosophy,
  holisticApproach,
  bookSection,
  ctaBanner,
} from "@/content/about";
import { seoMetadata } from "@/content/seo";

export const metadata: Metadata = {
  title: seoMetadata.about.title,
  description: seoMetadata.about.description,
};

const pillarIconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="w-6 h-6 text-primary" />,
  clipboard: <ClipboardList className="w-6 h-6 text-primary" />,
  globe: <Globe className="w-6 h-6 text-primary" />,
};

const approachIconMap: Record<string, React.ReactNode> = {
  map: <Map className="w-6 h-6 text-primary" />,
  zap: <Zap className="w-6 h-6 text-primary" />,
  "trending-up": <TrendingUp className="w-6 h-6 text-primary" />,
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Hero
        overline={heroContent.overline}
        headline={heroContent.headline}
        highlightedText={heroContent.highlightedText}
        description={heroContent.description}
        tagline={heroContent.tagline}
        imageSlot={
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[20px] overflow-hidden shadow-card bg-primary-light">
            <CounselorPhoto
              alt="Moumita Bhowmick, Counseling Psychologist"
              fill
              priority
              sizes="(min-width: 768px) 320px, 256px"
            />
          </div>
        }
      />

      {/* Personal Intro (How I work) */}
      <section className="py-16 md:py-24">
        <Container>
          <MotionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 font-[family-name:var(--font-heading)]">
                {personalIntro.heading}
              </h2>
              <div className="space-y-6">
                {personalIntro.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-lg text-text-secondary leading-relaxed font-[family-name:var(--font-body)]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </section>

      {/* Therapeutic Philosophy */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <Container>
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                {philosophy.heading}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto font-[family-name:var(--font-body)]">
                {philosophy.subtitle}
              </p>
            </div>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.pillars.map((pillar, i) => (
              <MotionWrapper key={pillar.title} delay={i * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                    {pillarIconMap[pillar.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 font-[family-name:var(--font-body)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-[family-name:var(--font-body)]">
                    {pillar.description}
                  </p>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      {/* Holistic Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Qualifications card */}
            <MotionWrapper>
              <div className="max-w-sm mx-auto">
                <div className="aspect-[3/4] rounded-[16px] bg-gradient-to-br from-primary-light to-accent-light flex flex-col items-center justify-center p-8 shadow-card text-center">
                  <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3 font-[family-name:var(--font-body)]">
                    {bookSection.title}
                  </p>
                  <p className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)]">
                    {bookSection.author}
                  </p>
                  <p className="text-sm text-text-secondary mt-2 font-[family-name:var(--font-body)]">
                    Counseling Psychologist
                  </p>
                </div>
                <p className="text-sm text-text-secondary mt-4 leading-relaxed font-[family-name:var(--font-body)]">
                  {bookSection.description}
                </p>
              </div>
            </MotionWrapper>

            {/* Approach items */}
            <div>
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2 font-[family-name:var(--font-heading)]">
                  {holisticApproach.heading}{" "}
                  <span className="italic text-accent">{holisticApproach.highlightedText}</span>
                </h2>
              </MotionWrapper>
              <div className="mt-8 space-y-6">
                {holisticApproach.items.map((item, i) => (
                  <MotionWrapper key={item.title} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-1">
                        {approachIconMap[item.icon]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary mb-1 font-[family-name:var(--font-body)]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed font-[family-name:var(--font-body)]">
                          {item.description}
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
