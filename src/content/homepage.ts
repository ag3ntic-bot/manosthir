import type { Specialty, Testimonial, FAQItem } from "@/types";

export const heroContent = {
  overline: "Online Therapy \u00B7 India & Worldwide",
  headline: "A safe space to understand your mind, heal, and",
  highlightedText: "move forward.",
  description:
    "If you\u2019re feeling overwhelmed, stuck, or emotionally drained \u2014 you don\u2019t have to carry it alone. Therapy is a space to slow down, be heard, and find your way forward.",
  identityLine: [
    "Person-centered",
    "LGBTQ+ affirming",
    "Empathy-led",
    "Evidence-based",
  ],
  primaryCTA: { label: "Start Your First Session", href: "/booking" },
  secondaryCTA: { label: "Talk to Me", href: "/booking" },
};

export const introSection = {
  heading: "Guided by empathy, grounded in science.",
  description:
    "I primarily use a person-centered approach \u2014 which means I meet you where you are, without a script and without judgment. Your pace leads our work, whether you\u2019re navigating anxiety, a difficult chapter, or simply trying to understand yourself better.",
  credentials: [
    "Counseling Psychologist",
    "Person-centered & evidence-based",
    "LGBTQ+ affirming space",
  ],
  counselorName: "Moumita Bhowmick",
  counselorTitle: "Counseling Psychologist",
  tagline: "Starting therapy can feel scary. It\u2019s okay to take your time.",
};

export const specializations = {
  heading: "What I Help With",
  subtitle:
    "Whatever you\u2019re carrying, you don\u2019t have to carry it alone. Here are some of the things we can work on together.",
  items: [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic",
      emotionalHook: "When your mind won\u2019t stop racing\u2026",
      description:
        "Work through intrusive thoughts and physical symptoms using gentle, evidence-based techniques so you can feel calm and in control again.",
      icon: "brain",
      focusAreas: ["Overthinking", "Panic & worry", "Nervous system regulation"],
      linkText: "Learn More",
    },
    {
      id: "depression-support",
      title: "Depression Support",
      emotionalHook: "When everything feels heavy and far away\u2026",
      description:
        "Move through persistent sadness, fatigue, and loss of motivation \u2014 at your own pace \u2014 toward moments of lightness and meaning.",
      icon: "heart",
      focusAreas: ["Low mood", "Motivation", "Self-compassion"],
      linkText: "Learn More",
    },
    {
      id: "relationship-counseling",
      title: "Relationships & Breakups",
      emotionalHook: "When love starts feeling like loneliness\u2026",
      description:
        "Untangle long-standing conflict, heal after a breakup, and rebuild healthier ways of connecting \u2014 with partners, family, or yourself.",
      icon: "users",
      focusAreas: ["Breakup healing", "Conflict", "Communication"],
      linkText: "Learn More",
    },
    {
      id: "trauma-ptsd",
      title: "Trauma & Difficult Memories",
      emotionalHook: "When the past keeps showing up in the present\u2026",
      description:
        "A safe, steady space to process difficult experiences \u2014 at the pace your nervous system can handle \u2014 so they stop running your life.",
      icon: "shield",
      focusAreas: ["Safe processing", "Grounding", "Rebuilding safety"],
      linkText: "Learn More",
    },
    {
      id: "burnout-work-stress",
      title: "Stress & Burnout",
      emotionalHook: "When rest doesn\u2019t feel restful anymore\u2026",
      description:
        "Understand what\u2019s underneath the exhaustion, learn to set boundaries that actually hold, and rebuild a relationship with rest.",
      icon: "briefcase",
      focusAreas: ["Burnout recovery", "Boundaries", "Work-life alignment"],
      linkText: "Learn More",
    },
    {
      id: "adolescent-therapy",
      title: "Young Adult Therapy (18\u201330)",
      emotionalHook: "When being in your 20s feels harder than anyone admits\u2026",
      description:
        "Make sense of identity, relationships, career confusion, and the pressure to have it all figured out \u2014 in a space that doesn\u2019t judge.",
      icon: "sparkles",
      focusAreas: ["Identity", "Career confusion", "Self-esteem"],
      linkText: "Learn More",
    },
  ] satisfies Specialty[],
};

export const journeySteps = {
  heading: "How We\u2019ll Begin",
  steps: [
    {
      step: 1,
      title: "Reach out",
      description:
        "Send a message or book a first session. No long forms, no pressure \u2014 just a starting point.",
    },
    {
      step: 2,
      title: "A short first conversation",
      description:
        "We\u2019ll start with a short conversation to understand what you\u2019re going through and what kind of support feels right.",
    },
    {
      step: 3,
      title: "Go at your pace",
      description:
        "Regular online sessions, shaped around your life. We move as slowly or as deeply as you need.",
    },
  ],
};

export const testimonials = {
  items: [
    {
      id: "testimonial-1",
      quote:
        "For the first time, I didn\u2019t feel like I had to perform being okay. Moumita gave me space to actually fall apart \u2014 and then slowly, she helped me put myself back together.",
      authorName: "Anonymous Client",
      authorTitle: "Verified Patient",
    },
    {
      id: "testimonial-2",
      quote:
        "I came in feeling broken and ashamed. I left every session feeling a little more human. She truly listens \u2014 without judgement, without rushing.",
      authorName: "Anonymous Client",
      authorTitle: "Verified Patient",
    },
  ] satisfies Testimonial[],
};

export const faqItems = {
  heading: "Things People Often Wonder",
  subtitle:
    "A few honest answers to the questions that usually come up before starting therapy.",
  items: [
    {
      id: "faq-1",
      question: "I\u2019ve never done therapy before. Is that okay?",
      answer:
        "Absolutely. Most people starting therapy have never done it before. There\u2019s nothing you need to prepare. We\u2019ll begin with a short conversation so I can understand what you\u2019re going through \u2014 and you can see if this feels like the right space for you.",
    },
    {
      id: "faq-2",
      question: "Is online therapy actually effective?",
      answer:
        "Yes. Research consistently shows online therapy is as effective as in-person sessions for most concerns, including anxiety, depression, and relationships. You get the same depth of support \u2014 from wherever you feel most comfortable.",
    },
    {
      id: "faq-3",
      question: "Is this space LGBTQ+ affirming?",
      answer:
        "Yes, completely. Whoever you are, whoever you love, whatever you\u2019re working through \u2014 you are welcome here. I work from a person-centered, affirming lens, which means I follow your lead, not a script.",
    },
    {
      id: "faq-4",
      question: "What if I don\u2019t know what I want to work on?",
      answer:
        "That\u2019s okay \u2014 and very common. Not knowing is often exactly where therapy starts. We\u2019ll figure it out together, gently, without pressure.",
    },
    {
      id: "faq-5",
      question: "Is everything I share confidential?",
      answer:
        "Yes. Our sessions are private and held over a secure, encrypted video platform. Nothing is shared without your explicit consent, in line with professional and ethical confidentiality standards.",
    },
  ] satisfies FAQItem[],
};

export const ctaBanner = {
  heading: "Whenever you\u2019re ready \u2014 I\u2019m here.",
  description:
    "Starting therapy can feel scary. It\u2019s okay to take your time. When you\u2019re ready, we\u2019ll begin with a short conversation.",
  primaryCTA: { label: "Start Your First Session", href: "/booking" },
  secondaryCTA: { label: "Talk to Me", href: "/booking" },
};
