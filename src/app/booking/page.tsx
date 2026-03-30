import type { Metadata } from "next";
import { BookingForm } from "@/components/sections/BookingForm";
import { Container } from "@/components/layout/Container";
import { heroContent } from "@/content/booking";
import { seoMetadata } from "@/content/seo";

export const metadata: Metadata = {
  title: seoMetadata.booking.title,
  description: seoMetadata.booking.description,
};

export default function BookingPage() {
  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* Breadcrumb */}
        <p className="text-sm text-text-tertiary mb-6 font-[family-name:var(--font-body)]">
          {heroContent.breadcrumb}
        </p>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary mb-3 font-[family-name:var(--font-heading)]">
            {heroContent.heading}
          </h1>
          <p className="text-text-secondary font-[family-name:var(--font-body)]">
            {heroContent.description}
          </p>
        </div>

        {/* Booking Form */}
        <BookingForm />
      </Container>
    </div>
  );
}
