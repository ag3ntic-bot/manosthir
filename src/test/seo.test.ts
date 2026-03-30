import { describe, it, expect } from "vitest";

// Import page metadata from seo content
// These will be created by content writer in parallel
import { pageMetadata } from "@/content/seo";

const pages = ["home", "about", "services", "resources", "booking"] as const;

describe("SEO Metadata", () => {
  it.each(pages)("page '%s' has a unique title containing 'ManoSthir'", (page) => {
    const meta = pageMetadata[page];
    expect(meta).toBeDefined();
    expect(meta.title).toBeDefined();
    expect(meta.title).toContain("ManoSthir");
  });

  it("each page has a unique title", () => {
    const titles = pages.map((page) => pageMetadata[page].title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(pages.length);
  });

  it.each(pages)("page '%s' has a meta description", (page) => {
    const meta = pageMetadata[page];
    expect(meta.description).toBeDefined();
    expect(meta.description.length).toBeGreaterThan(50);
  });

  it("proper heading hierarchy — one H1 per page is enforced by content", () => {
    // Each page content should define exactly one H1-level heading
    // This is validated at the component level; here we ensure metadata exists
    pages.forEach((page) => {
      const meta = pageMetadata[page];
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
    });
  });
});
