import type { SessionType, TimeSlot } from "@/types";

export const heroContent = {
  breadcrumb: "Home > GMT+05:30 (India Standard Time)",
  heading: "Reserve Your Space",
  description:
    "Begin your journey toward mental clarity. Select the session type that best fits your needs today.",
};

export const sessionTypes: SessionType[] = [
  {
    id: "individual",
    name: "Individual Therapy",
    duration: "50 Minutes",
    price: 2500,
    description: "One-on-one",
    icon: "user",
  },
  {
    id: "couple",
    name: "Couple Counseling",
    duration: "80 Minutes",
    price: 4000,
    description: "Partner session",
    icon: "users",
  },
  {
    id: "family",
    name: "Family Therapy",
    duration: "90 Minutes",
    price: 4500,
    description: "Support system",
    icon: "home",
  },
];

export const timeSlots: TimeSlot[] = [
  { id: "slot-1", time: "09:00 AM", available: true },
  { id: "slot-2", time: "10:30 AM", available: true },
  { id: "slot-3", time: "12:00 PM", available: true },
  { id: "slot-4", time: "02:30 PM", available: true },
  { id: "slot-5", time: "04:00 PM", available: true },
];

export const assignedProfessional = {
  name: "Dr. Moumita Bhowmick",
  title: "Cognitive Behavioral Therapist",
  rating: 4.9,
  reviews: "120+ reviews",
};

export const trustBadges = [
  { icon: "shield-check", label: "HIPAA Compliant" },
  { icon: "lock", label: "Encrypted Data" },
  { icon: "badge-check", label: "Licensed Therapists" },
];
