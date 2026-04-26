import type { Specialty } from "@/types";

export const heroContent = {
  overline: "Manosthir with Moumita",
  headline: "Real support, for whatever you\u2019re going through, with",
  counselorName: "Moumita Bhowmick",
  description:
    "Every session is shaped around you \u2014 your pace, your story, your goals. Below is how we can work together: one-on-one, as a couple, or as a family. Not sure what fits? We\u2019ll figure it out in our first conversation.",
};

export const serviceTiers = [
  {
    id: "individual",
    name: "Individual Therapy",
    price: 699,
    priceFormatted: "\u20B9699",
    duration: "50 mins",
    mode: "Online \u00B7 One-on-one",
    tagline: "A space that\u2019s just yours.",
    description:
      "One-on-one sessions for whatever you\u2019re navigating \u2014 from everyday overwhelm to deeper patterns you\u2019re ready to understand.",
    subServices: [
      "Overthinking & Anxiety",
      "Breakup & Emotional Healing",
      "Self-esteem & Confidence",
      "Stress & Burnout",
      "Career Confusion / Life Direction",
      "Young Adult Therapy (18\u201330)",
    ],
    icon: "user",
  },
  {
    id: "couple",
    name: "Couple Counseling",
    price: 1400,
    priceFormatted: "\u20B91,400",
    duration: "60 mins",
    mode: "Online \u00B7 Together",
    tagline: "When love needs a little more space to breathe.",
    description:
      "For partners navigating conflict, distance, or a difficult chapter \u2014 and for those who simply want to understand each other better.",
    subServices: [
      "Recurring conflicts",
      "Communication breakdown",
      "Emotional distance",
      "Rebuilding trust",
      "LGBTQ+ affirming couples work",
    ],
    icon: "users",
  },
  {
    id: "family",
    name: "Family Therapy",
    price: 2800,
    priceFormatted: "\u20B92,800",
    duration: "60 mins",
    mode: "Online \u00B7 Whole family",
    tagline: "Because family is complicated \u2014 and worth the work.",
    description:
      "A neutral, non-judgmental space to unpack the patterns, roles, and unsaid things that shape how your family loves, argues, and heals.",
    subServices: [
      "Parent\u2013child dynamics",
      "Intergenerational tension",
      "Life transitions",
      "Grief & loss",
      "Supporting a family member\u2019s mental health",
    ],
    icon: "home",
  },
];

export const studentDiscount = {
  label: "Student discount available (10%)",
  note: "Just mention it at booking \u2014 no paperwork, no hassle.",
};

export const helperPanel = {
  heading: "Not sure what to choose?",
  description:
    "That\u2019s okay. Tell me a little about what\u2019s going on and I\u2019ll help you decide what might work best.",
  primaryCTA: { label: "Talk to Me", href: "/booking" },
  secondaryCTA: { label: "Start Your First Session", href: "/booking" },
};

export const specialties: Specialty[] = [
  {
    id: "overthinking-anxiety",
    title: "Overthinking & Anxiety",
    emotionalHook: "When your mind won\u2019t stop racing\u2026",
    description:
      "Learn to work with \u2014 not against \u2014 an anxious mind. Gentle, practical tools to find calm in the middle of chaos.",
    icon: "brain",
    focusAreas: ["Intrusive thoughts", "Panic", "Nervous system regulation"],
    linkText: "Learn More",
  },
  {
    id: "breakup-healing",
    title: "Breakup & Emotional Healing",
    emotionalHook: "When the heartbreak is louder than the logic\u2026",
    description:
      "Space to grieve, process, and slowly come back to yourself after a relationship ends \u2014 at your own pace, without judgement.",
    icon: "heart",
    focusAreas: ["Grief & loss", "Letting go", "Rebuilding self"],
    linkText: "Learn More",
  },
  {
    id: "self-esteem",
    title: "Self-esteem & Confidence",
    emotionalHook: "When you\u2019re your own harshest critic\u2026",
    description:
      "Understand where the self-doubt comes from and begin building a kinder, steadier relationship with yourself.",
    icon: "sparkles",
    focusAreas: ["Inner critic", "Self-worth", "Boundaries"],
    linkText: "Learn More",
  },
  {
    id: "stress-burnout",
    title: "Stress & Burnout",
    emotionalHook: "When rest doesn\u2019t feel restful anymore\u2026",
    description:
      "Recover from chronic stress, learn sustainable boundaries, and rebuild a life that doesn\u2019t leave you running on empty.",
    icon: "briefcase",
    focusAreas: ["Burnout recovery", "Boundaries", "Work-life balance"],
    linkText: "Learn More",
  },
  {
    id: "career-confusion",
    title: "Career Confusion / Life Direction",
    emotionalHook: "When you\u2019re not sure what you\u2019re chasing anymore\u2026",
    description:
      "A thoughtful space to explore what you actually want \u2014 beyond expectation, beyond pressure \u2014 and how to move toward it.",
    icon: "shield",
    focusAreas: ["Clarity", "Values", "Decision-making"],
    linkText: "Learn More",
  },
  {
    id: "young-adult",
    title: "Young Adult Therapy (18\u201330)",
    emotionalHook: "When being in your 20s feels harder than anyone admits\u2026",
    description:
      "Make sense of identity, relationships, and the pressure to have it all figured out \u2014 in a space that doesn\u2019t judge.",
    icon: "users",
    focusAreas: ["Identity", "Relationships", "Adulting"],
    linkText: "Learn More",
  },
];

export const sessionFormats = {
  heading: "How Sessions Actually Work",
  description:
    "Therapy should fit into your life, not the other way around. All sessions are online, private, and built around your schedule.",
  formats: [
    {
      title: "Secure Online Video",
      description:
        "Encrypted, private video sessions you can join from anywhere in India or abroad.",
      icon: "video",
    },
    {
      title: "Flexible Timings",
      description:
        "Weekend and evening IST slots, because real life doesn\u2019t pause during weekdays.",
      icon: "calendar",
    },
    {
      title: "Your Pace",
      description:
        "Weekly, fortnightly, or as-needed. We move as slowly or as deeply as you need.",
      icon: "clock",
    },
  ],
};

export const ctaBanner = {
  heading: "Whenever you\u2019re ready \u2014 I\u2019m here.",
  description:
    "We\u2019ll start with a short conversation to understand what you\u2019re going through. No pressure, no pre-judgement \u2014 just space to begin.",
  primaryCTA: { label: "Start Your First Session", href: "/booking" },
  secondaryCTA: { label: "Talk to Me", href: "/booking" },
};
