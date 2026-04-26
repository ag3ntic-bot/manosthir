import type { BlogPost } from "@/types";

export const featuredArticle: BlogPost = {
  id: "digital-wellness",
  title: "Digital Wellness: Reclaiming Focus in Modern India",
  excerpt:
    "Learn how to reclaim your focus and cultivate inner peace in an increasingly noisy world. Our lead psychologist shares practical strategies for digital wellness.",
  category: "Self-Care",
  readTime: "12 min read",
  authorName: "Moumita Bhowmick",
  authorRole: "Counseling Psychologist",
  imageGradient: "from-teal-800 to-emerald-900",
  featured: true,
};

export const categories: string[] = [
  "All Topics",
  "Anxiety",
  "Relationships",
  "Family Dynamics",
  "Work-Life",
  "Self-Care",
];

export const articles: BlogPost[] = [
  {
    id: "multigenerational-family",
    title: "Navigating Multigenerational Family Dynamics in India",
    excerpt:
      "Balancing personal boundaries while living in a joint or extended family structure requires unique communication strategies and cultural empathy.",
    category: "Family Dynamics",
    readTime: "8 min read",
    authorName: "Moumita Bhowmick",
    authorRole: "Counseling Psychologist",
    imageGradient: "from-amber-100 to-orange-200",
  },
  {
    id: "mental-health-stigma",
    title: "Addressing the Stigma: Mental Health in Urban Indian Workplaces",
    excerpt:
      "Breaking the silence in high-pressure corporate environments. How professionals can advocate for mental wellness in India\u2019s tech hubs.",
    category: "Work-Life",
    readTime: "10 min read",
    authorName: "ManoSthir Editorial",
    authorRole: "ManoSthir Team",
    imageGradient: "from-sky-100 to-blue-200",
  },
  {
    id: "mindfulness-india",
    title: "Modern Stillness: Mindfulness Rooted in Indian Tradition",
    excerpt:
      "Exploring how ancient practices like Pranayama and Dhyana can be adapted for the fast-paced life of 21st-century urban India.",
    category: "Self-Care",
    readTime: "7 min read",
    authorName: "ManoSthir Editorial",
    authorRole: "ManoSthir Team",
    imageGradient: "from-green-100 to-emerald-200",
  },
];

export const newsletter = {
  heading: "Weekly Wellness Insights",
  description:
    "Subscribe to receive curated articles, mindfulness exercises, and mental health tips directly in your inbox. No spam, just peace.",
  socialProof: "Join 12,000+ others on their mental health journey.",
  placeholder: "your@email.com",
  buttonText: "Subscribe",
};
