import React from "react";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  imageGradient: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  readTime,
  authorName,
  imageGradient,
}: BlogCardProps) {
  const initials = authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <article
      data-testid="blog-card"
      className="bg-white border border-border rounded-[12px] overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-300"
    >
      {/* Image placeholder */}
      <div
        className={`aspect-[3/2] bg-gradient-to-br ${imageGradient}`}
        role="img"
        aria-label={`Illustration for ${title}`}

      />
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <Badge label={category} variant="neutral" />
          <span className="text-xs text-text-tertiary font-[family-name:var(--font-body)]">
            {readTime}
          </span>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2 font-[family-name:var(--font-body)] leading-snug">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 font-[family-name:var(--font-body)] line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center font-[family-name:var(--font-body)]">
            {initials}
          </div>
          <span className="text-sm font-medium text-text-primary font-[family-name:var(--font-body)]">
            {authorName}
          </span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
