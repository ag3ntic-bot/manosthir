import type { Metadata } from "next";
import { seoMetadata } from "@/content/seo";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: seoMetadata.resources.title,
  description: seoMetadata.resources.description,
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
