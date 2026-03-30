import type { Specialty, Testimonial, FAQItem } from "@/types";

export const heroContent = {
  overline: "Online Therapy Worldwide",
  headline: "A safe space for your mind to",
  highlightedText: "heal and grow.",
  description:
    "Professional global online therapy tailored to your unique journey of healing, self-discovery, and personal transformation.",
  primaryCTA: { label: "Book a Consultation", href: "/booking" },
  secondaryCTA: { label: "Learn More", href: "/about" },
};

export const introSection = {
  heading: "Guided by empathy, grounded in science.",
  description:
    "My approach integrates modern psychological science with deep cultural empathy. As a Cognitive Behavioral Therapist, I combine evidence-based practices with a culturally sensitive approach to help you navigate life\u2019s complexities.",
  credentials: [
    "Cognitive Behavioral Therapist",
    "Counseling Psychologist",
    "Holistic Methodology",
  ],
  counselorName: "Dr. Moumita Bhowmick",
  counselorTitle: "Cognitive Behavioral Therapist",
};

export const specializations = {
  heading: "Our Specializations",
  subtitle:
    "Discover the support for your specific mental health needs on your personal growth path.",
  items: [
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
  ] satisfies Specialty[],
};

export const journeySteps = {
  heading: "The Journey Together",
  steps: [
    {
      step: 1,
      title: "Book a Consultation",
      description:
        "Schedule a brief 15-minute discovery call to share your concerns and see if we are a good fit for each other.",
    },
    {
      step: 2,
      title: "Meet Your Therapist",
      description:
        "Complete your initial assessment from the comfort of your home via a secure online video session.",
    },
    {
      step: 3,
      title: "Begin Your Healing",
      description:
        "Start regular sessions tailored to your pace and therapeutic goals for lasting, meaningful change.",
    },
  ],
};

export const testimonials = {
  items: [
    {
      id: "testimonial-1",
      quote:
        "The online format made it so easy to attend to my mental health despite my travel schedule. My therapist truly understood the cultural context behind my stress and helped me develop practical strategies that fit my life.",
      authorName: "Anonymous Client",
      authorTitle: "Verified Patient",
    },
    {
      id: "testimonial-2",
      quote:
        "The culturally sensitive approach made all the difference. I finally found someone who understands the unique pressures of balancing traditional values with modern life.",
      authorName: "Anonymous Client",
      authorTitle: "Verified Patient",
    },
  ] satisfies Testimonial[],
};

export const faqItems = {
  heading: "Common Questions about Online Therapy in India",
  subtitle:
    "Everything you need to know about starting your mental health journey.",
  items: [
    {
      id: "faq-1",
      question: "Is online therapy as effective as in-person?",
      answer:
        "Yes, extensive research shows that online therapy is equally effective as in-person sessions for most concerns, including anxiety, depression, and relationship issues. Our secure video platform allows for the same depth of connection, with the added convenience of attending from wherever you feel most comfortable.",
    },
    {
      id: "faq-2",
      question: "What are the technical requirements for a session?",
      answer:
        "You need a stable internet connection, a device with a camera and microphone (smartphone, tablet, or laptop), and a quiet, private space. We use a HIPAA-compliant video platform that works directly in your browser\u2014no special software required.",
    },
    {
      id: "faq-3",
      question: "How is my privacy and confidentiality protected?",
      answer:
        "Your privacy is our highest priority. All sessions are conducted over encrypted, HIPAA-compliant channels. Your records are securely stored and never shared without your explicit written consent. We adhere to the strictest professional and legal standards of confidentiality.",
    },
    {
      id: "faq-4",
      question: "Do you offer sessions in languages other than English?",
      answer:
        "Yes, Dr. Moumita Bhowmick is fluent in English, Hindi, Bengali, and Odia. We believe therapy is most effective when you can express yourself in the language you are most comfortable with, and we encourage clients to choose their preferred language.",
    },
    {
      id: "faq-5",
      question: "How do I make payments from within India?",
      answer:
        "We accept all major Indian payment methods including UPI, net banking, debit and credit cards, and popular wallets. All prices are listed in INR. For international clients, we also accept international card payments. Invoices and receipts are provided after each session.",
    },
  ] satisfies FAQItem[],
};

export const ctaBanner = {
  heading: "Take the first step toward emotional wellbeing.",
  description:
    "Begin your journey toward mental clarity and personal growth with compassionate, culturally sensitive support.",
  primaryCTA: { label: "Book a Consultation", href: "/booking" },
  secondaryCTA: { label: "Learn More", href: "/about" },
};
