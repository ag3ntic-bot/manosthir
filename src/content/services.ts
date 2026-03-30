import type { Specialty } from "@/types";

export const heroContent = {
  overline: "HEALING STARTS HERE",
  headline: "Professional Therapeutic Services by",
  counselorName: "Moumita Bhowmick",
  description:
    "Compassionate, evidence-based psychological support tailored to your unique mental health journey. ManoSthir combines deep clinical expertise with a supportive approach to help you navigate life\u2019s complexities from anywhere in the world.",
};

export const specialties: Specialty[] = [
  {
    id: "anxiety-panic",
    title: "Anxiety & Panic",
    description:
      "Overcome intrusive thoughts and physical symptoms using CBT and mindfulness techniques to help you regain a sense of calm and control over daily life.",
    icon: "brain",
    focusAreas: ["Emotional Resilience", "Coping Strategies", "Panic Management"],
    linkText: "Learn More",
  },
  {
    id: "depression-support",
    title: "Depression Support",
    description:
      "Work through feelings of persistent sadness, fatigue, and loss of motivation. Therapy helps identify underlying patterns and builds pathways to joy.",
    icon: "heart",
    focusAreas: ["Mood Regulation", "Behavioral Activation", "Personal Growth"],
    linkText: "Learn More",
  },
  {
    id: "relationship-counseling",
    title: "Relationship Counseling",
    description:
      "Build healthier connections and resolve long-standing conflicts in a neutral space for couples and individuals.",
    icon: "users",
    focusAreas: ["Conflict Resolution", "Secure Attachment", "Effective Dialogue"],
    linkText: "Learn More",
  },
  {
    id: "trauma-ptsd",
    title: "Trauma & PTSD",
    description:
      "Specialized trauma-informed care using evidence-based practices like EMDR to help process difficult memories and find a path toward recovery.",
    icon: "shield",
    focusAreas: ["Safe Processing", "Somatic Regulation", "Empowerment"],
    linkText: "Learn More",
  },
  {
    id: "burnout-work-stress",
    title: "Burnout & Work Stress",
    description:
      "Manage the pressures of high-stakes careers. Learn boundaries, restore balance, and align your work with your personal values.",
    icon: "briefcase",
    focusAreas: ["Boundary Setting", "Time Management", "Value Alignment"],
    linkText: "Learn More",
  },
  {
    id: "adolescent-therapy",
    title: "Adolescent Therapy",
    description:
      "Helping teens navigate identity, social pressure, and academic stress in a supportive, non-judgmental space for younger clients.",
    icon: "sparkles",
    focusAreas: ["Identity Formation", "Social Skills", "Emotion Regulation"],
    linkText: "Learn More",
  },
];

export const sessionFormats = {
  heading: "Flexible Session Formats",
  description:
    "Healing should fit into your life, not the other way around. We offer multiple ways to connect so you can prioritize your mental health from wherever you feel most comfortable.",
  formats: [
    {
      title: "Online Video Sessions",
      description:
        "Secure, HIPAA-compliant telehealth available globally. Supporting clients across India and the international diaspora.",
      icon: "video",
    },
    {
      title: "Flexible Durations",
      description:
        "Standard 50-minute or intensive 90-minute therapeutic hours tailored to your needs.",
      icon: "clock",
    },
    {
      title: "Weekend & Evening Slots",
      description:
        "Convenient IST slots that accommodate international time zones and busy professional schedules.",
      icon: "calendar",
    },
  ],
};

export const ctaBanner = {
  heading: "Begin your journey with Moumita",
  description:
    "Not sure which approach is right for you? Book a brief discovery call to discuss your goals and see how Moumita\u2019s expertise can support your mental well-being.",
  primaryCTA: { label: "Book Discovery Call", href: "/booking" },
  secondaryCTA: { label: "View Pricing", href: "/booking" },
};
