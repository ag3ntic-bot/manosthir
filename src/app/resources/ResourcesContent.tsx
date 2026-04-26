"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/sections/BlogCard";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { featuredArticle, categories, articles } from "@/content/resources";

export default function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState("All Topics");

  return (
    <div>
      {/* Featured Article Hero */}
      <section className="relative">
        <MotionWrapper>
          <div
            className={`mx-4 md:mx-8 lg:mx-auto max-w-[1200px] rounded-[20px] overflow-hidden bg-gradient-to-br ${featuredArticle.imageGradient} p-8 md:p-12 min-h-[360px] flex flex-col justify-end mt-8`}
          >
            <Badge label="Featured Article" variant="accent" className="mb-4 self-start" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-heading)] max-w-2xl">
              {featuredArticle.title}
            </h1>
            <p className="text-white/80 mb-4 max-w-xl font-[family-name:var(--font-body)]">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-3 text-white/70 text-sm font-[family-name:var(--font-body)]">
              <span>by {featuredArticle.authorName}</span>
              <span>&bull;</span>
              <span>{featuredArticle.readTime}</span>
            </div>
          </div>
        </MotionWrapper>
      </section>

      {/* Search + Filters */}
      <section className="py-10">
        <Container>
          <MotionWrapper>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                <label htmlFor="resources-search" className="sr-only">Search mental health topics</label>
                <input
                  id="resources-search"
                  type="text"
                  placeholder="Search mental health topics..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-[8px] text-sm text-text-primary bg-bg-secondary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary font-[family-name:var(--font-body)]"
                />
              </div>
              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-4 py-2 text-sm rounded-full font-medium transition-colors duration-150 font-[family-name:var(--font-body)] ${
                      activeCategory === cat
                        ? "bg-primary text-white"
                        : "bg-bg-tertiary text-text-secondary hover:bg-primary-light"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </MotionWrapper>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <MotionWrapper key={article.id} delay={i * 0.1}>
                <BlogCard
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  readTime={article.readTime}
                  authorName={article.authorName}
                  authorRole={article.authorRole}
                  imageGradient={article.imageGradient}
                />
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
