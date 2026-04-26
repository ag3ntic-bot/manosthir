import type { SessionType, TimeSlot } from "@/types";

export const heroContent = {
  breadcrumb: "Home \u00B7 GMT+05:30 (India Standard Time)",
  heading: "Let\u2019s begin \u2014 gently.",
  description:
    "We\u2019ll start with a short conversation to understand what you\u2019re going through. No pressure, no pre-judgement \u2014 just space to begin.",
};

export const sessionTypes: SessionType[] = [
  {
    id: "individual",
    name: "Individual Therapy",
    duration: "50 Minutes",
    price: 699,
    description: "Online \u00B7 One-on-one",
    icon: "user",
  },
  {
    id: "couple",
    name: "Couple Counseling",
    duration: "60 Minutes",
    price: 1400,
    description: "Online \u00B7 Together",
    icon: "users",
  },
  {
    id: "family",
    name: "Family Therapy",
    duration: "60 Minutes",
    price: 2800,
    description: "Online \u00B7 Whole family",
    icon: "home",
  },
];

export const studentDiscountNote =
  "Student discount available (10%) \u2014 just mention it at booking.";

export const timeSlots: TimeSlot[] = [
  { id: "slot-1", time: "09:00 AM", available: true },
  { id: "slot-2", time: "10:30 AM", available: true },
  { id: "slot-3", time: "12:00 PM", available: true },
  { id: "slot-4", time: "02:30 PM", available: true },
  { id: "slot-5", time: "04:00 PM", available: true },
];

export const assignedProfessional = {
  name: "Moumita Bhowmick",
  title: "Counseling Psychologist",
  rating: 4.9,
  reviews: "Person-centered \u00B7 LGBTQ+ affirming",
};

export const trustBadges = [
  { icon: "shield-check", label: "Confidential & Private" },
  { icon: "lock", label: "Encrypted Sessions" },
  { icon: "badge-check", label: "Licensed Psychologist" },
];
