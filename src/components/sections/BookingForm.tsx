"use client";

import React, { useState } from "react";
import { CounselorPhoto } from "@/components/ui/CounselorPhoto";
import {
  User,
  Users,
  Home,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Lock,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import {
  sessionTypes,
  timeSlots,
  assignedProfessional,
  trustBadges,
  studentDiscountNote,
} from "@/content/booking";

const sessionIconMap: Record<string, React.ReactNode> = {
  user: <User className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
};

const trustIconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck className="w-5 h-5 text-text-tertiary" />,
  lock: <Lock className="w-5 h-5 text-text-tertiary" />,
  "badge-check": <BadgeCheck className="w-5 h-5 text-text-tertiary" />,
};

const DAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatPrice(price: number): string {
  if (price >= 1000) {
    const thousands = Math.floor(price / 1000);
    const remainder = price % 1000;
    if (remainder === 0) {
      return `\u20B9${thousands},000`;
    }
    return `\u20B9${thousands},${String(remainder).padStart(3, "0")}`;
  }
  return `\u20B9${price}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export function BookingForm() {
  const today = new Date();
  const [selectedSession, setSelectedSession] = useState(sessionTypes[0].id);
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const selectedDayName = new Date(
    currentYear,
    currentMonth,
    selectedDate
  ).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  return (
    <div data-testid="booking-form">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_200px] gap-6 mb-8">
        {/* Session type selector */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-4 font-[family-name:var(--font-body)]">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              1
            </span>
            Select Session Type
          </h3>
          <fieldset>
            <legend className="sr-only">Session Type</legend>
            <div className="space-y-3">
              {sessionTypes.map((session) => (
                <label
                  key={session.id}
                  className={`block w-full text-left p-4 rounded-[12px] border-2 transition-all duration-150 cursor-pointer ${
                    selectedSession === session.id
                      ? "border-primary bg-primary-light"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="session-type"
                    value={session.id}
                    checked={selectedSession === session.id}
                    onChange={() => setSelectedSession(session.id)}
                    className="sr-only"
                    aria-label={session.name}
                  />
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5">
                      {sessionIconMap[session.icon]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-text-primary text-sm font-[family-name:var(--font-body)]">
                          {session.name}
                        </span>
                        <span className="font-bold text-text-primary font-[family-name:var(--font-body)]">
                          {formatPrice(session.price)}
                        </span>
                      </div>
                      <p className="text-xs text-text-tertiary mt-1 font-[family-name:var(--font-body)]">
                        {session.duration} &bull; {session.description}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Student discount */}
          <div className="mt-4 flex items-start gap-2 p-3 rounded-[10px] bg-accent-light/50 border border-accent/30">
            <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed font-[family-name:var(--font-body)]">
              {studentDiscountNote}
            </p>
          </div>

          {/* Assigned Professional */}
          <div className="mt-6 p-4 bg-bg-tertiary rounded-[12px]">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-3 font-[family-name:var(--font-body)]">
              Your therapist
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary-light flex-shrink-0">
                <CounselorPhoto
                  alt={`${assignedProfessional.name} avatar`}
                  fill
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-text-primary font-[family-name:var(--font-body)]">
                  {assignedProfessional.name}
                </p>
                <p className="text-xs text-text-tertiary font-[family-name:var(--font-body)]">
                  {assignedProfessional.title}
                </p>
                <p className="text-xs text-primary font-medium mt-1 font-[family-name:var(--font-body)]">
                  {assignedProfessional.reviews}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div data-testid="booking-calendar" className="bg-bg-secondary border border-border rounded-[12px] p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-4 font-[family-name:var(--font-body)]">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              2
            </span>
            Select Date &amp; Time
          </h3>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-bg-tertiary rounded"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <span className="font-semibold text-text-primary font-[family-name:var(--font-body)]">
              {MONTHS[currentMonth]} {currentYear}
            </span>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-bg-tertiary rounded"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((d) => (
              <div
                key={d}
                className="text-center text-xs font-semibold text-text-tertiary py-2 font-[family-name:var(--font-body)]"
              >
                {d}
              </div>
            ))}
          </div>
          {/* Day grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="py-2" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isSelected = day === selectedDate;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  aria-label={`Select day ${day}`}
                  className={`py-2 text-sm rounded-full transition-colors duration-150 font-[family-name:var(--font-body)] ${
                    isSelected
                      ? "bg-primary text-white font-semibold"
                      : "text-text-primary hover:bg-primary-light"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        <div>
          <p className="text-sm font-semibold text-text-primary mb-4 font-[family-name:var(--font-body)]">
            {selectedDayName}
          </p>
          <div className="space-y-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.available && setSelectedSlot(slot.id)}
                disabled={!slot.available}
                aria-label={`Select time ${slot.time}`}
                className={`w-full py-3 px-4 rounded-[8px] text-sm font-medium transition-all duration-150 border font-[family-name:var(--font-body)] ${
                  selectedSlot === slot.id
                    ? "bg-primary text-white border-primary"
                    : slot.available
                    ? "border-border text-text-primary hover:border-primary"
                    : "border-border-light text-text-tertiary bg-bg-tertiary cursor-not-allowed"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-bg-secondary border border-border rounded-[12px] p-4 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary font-[family-name:var(--font-body)]">
            Total Summary
          </p>
          <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-body)]">Selected session ready for booking</p>
        </div>
        <button
          type="button"
          className="mt-4 sm:mt-0 px-8 py-3 bg-primary text-white font-semibold rounded-[8px] hover:bg-primary-dark transition-colors duration-200 font-[family-name:var(--font-body)]"
        >
          Confirm Booking
        </button>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {trustBadges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-sm text-text-tertiary font-[family-name:var(--font-body)]"
          >
            {trustIconMap[badge.icon]}
            {badge.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingForm;
