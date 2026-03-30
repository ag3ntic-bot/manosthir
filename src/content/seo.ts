export const seoMetadata = {
  homepage: {
    title: "ManoSthir | Online Therapy & Counseling in India | CBT Therapist",
    description:
      "Professional online therapy tailored to your journey. Dr. Moumita Bhowmick offers culturally sensitive CBT, anxiety counseling, couples therapy, and more. Book a free consultation today.",
  },
  about: {
    title: "About Dr. Moumita Bhowmick | ManoSthir Psychology",
    description:
      "Meet Dr. Moumita Bhowmick, Cognitive Behavioral Therapist and founder of ManoSthir. Evidence-based, culturally sensitive therapy bridging Indian values and global therapeutic standards.",
  },
  services: {
    title: "Therapy Services | Anxiety, Depression, Couples & Family Counseling | ManoSthir",
    description:
      "Explore ManoSthir's therapeutic services: anxiety & panic, depression support, relationship counseling, trauma & PTSD, burnout, and adolescent therapy. Online sessions available worldwide.",
  },
  resources: {
    title: "Mental Health Resources & Blog | ManoSthir Psychology",
    description:
      "Curated articles on anxiety, relationships, family dynamics, work-life balance, and self-care. Expert insights from ManoSthir's counseling psychologists.",
  },
  booking: {
    title: "Book a Session | Online Therapy Appointment | ManoSthir",
    description:
      "Reserve your therapy session with Dr. Moumita Bhowmick. Individual therapy from \u20B92,500, couples counseling, and family therapy. Secure, HIPAA-compliant online sessions in IST.",
  },
};

export const pageMetadata: Record<string, { title: string; description: string }> = {
  home: seoMetadata.homepage,
  about: seoMetadata.about,
  services: seoMetadata.services,
  resources: seoMetadata.resources,
  booking: seoMetadata.booking,
};
