"use client";

import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#F4B740";
const PETAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const FLOATING_PETALS = [
  { x: 60, y: 88, rotate: -22, dur: 6, delay: 0 },
  { x: 252, y: 70, rotate: 28, dur: 7, delay: 1 },
  { x: 70, y: 158, rotate: -10, dur: 5.2, delay: 2 },
  { x: 248, y: 152, rotate: 18, dur: 6.5, delay: 0.5 },
];
const THOUGHT_DOTS = [
  { cx: 160, cy: 240, r: 3.2, dur: 5, delay: 0 },
  { cx: 142, cy: 254, r: 2.4, dur: 5.6, delay: 0.7 },
  { cx: 178, cy: 254, r: 2.4, dur: 6, delay: 1.4 },
];

export function HeroIllustration() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 320 400"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
    >
      <defs>
        <radialGradient id="hero-illu-halo" cx="50%" cy="28%" r="55%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="320" height="400" fill="url(#hero-illu-halo)" />

      {/* Outer breathing ring */}
      <motion.circle
        cx={160}
        cy={115}
        r={88}
        fill="var(--color-primary)"
        opacity={0.1}
        style={{ transformOrigin: "160px 115px" }}
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.1, 0.18, 0.1] }
        }
        transition={
          reduce ? undefined : { duration: 6, ease: "easeInOut", repeat: Infinity }
        }
      />
      {/* Inner breathing ring */}
      <motion.circle
        cx={160}
        cy={115}
        r={62}
        fill="var(--color-primary)"
        opacity={0.16}
        style={{ transformOrigin: "160px 115px" }}
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.06, 1], opacity: [0.16, 0.26, 0.16] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 0.6 }
        }
      />

      {/* Petal ring — gentle sway */}
      <motion.g
        style={{ transformOrigin: "160px 115px" }}
        animate={reduce ? undefined : { rotate: [0, 4, 0, -4, 0] }}
        transition={
          reduce ? undefined : { duration: 12, ease: "easeInOut", repeat: Infinity }
        }
      >
        {PETAL_ANGLES.map((angle) => (
          <ellipse
            key={angle}
            cx={160}
            cy={75}
            rx={9}
            ry={22}
            fill={GOLD}
            transform={`rotate(${angle} 160 115)`}
          />
        ))}
      </motion.g>

      {/* Sunflower center — breathing */}
      <motion.circle
        cx={160}
        cy={115}
        r={22}
        fill="var(--color-primary-darker)"
        style={{ transformOrigin: "160px 115px" }}
        animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
        transition={
          reduce ? undefined : { duration: 5, ease: "easeInOut", repeat: Infinity }
        }
      />
      <circle cx={160} cy={115} r={11} fill="var(--color-primary)" opacity={0.55} />
      <circle cx={156} cy={111} r={3} fill={GOLD} opacity={0.65} />

      {/* Floating petal flecks */}
      {FLOATING_PETALS.map((p, i) => (
        <motion.g
          key={i}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          animate={
            reduce
              ? undefined
              : { y: [0, -8, 0], opacity: [0.55, 0.85, 0.55] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: p.dur,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: p.delay,
                }
          }
        >
          <ellipse
            cx={p.x}
            cy={p.y}
            rx={5}
            ry={10}
            fill={GOLD}
            opacity={0.7}
            transform={`rotate(${p.rotate} ${p.x} ${p.y})`}
          />
        </motion.g>
      ))}

      {/* Soft horizon arc separating motif from figures */}
      <path
        d="M 26 232 Q 160 218 294 232"
        stroke="var(--color-primary)"
        strokeWidth={1.5}
        fill="none"
        opacity={0.32}
      />

      {/* Thought dots between figures */}
      {THOUGHT_DOTS.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="var(--color-primary)"
          opacity={0.5}
          style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
          animate={
            reduce
              ? undefined
              : { y: [0, -6, 0], opacity: [0.4, 0.75, 0.4] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: d.dur,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: d.delay,
                }
          }
        />
      ))}

      {/* Two seated figures — minimal silhouettes */}
      <g fill="currentColor" opacity={0.78}>
        {/* Left figure */}
        <circle cx={92} cy={296} r={15} />
        <path d="M 64 376 C 64 332 78 312 92 312 C 106 312 120 332 120 376 Z" />
        {/* Right figure */}
        <circle cx={228} cy={296} r={15} />
        <path d="M 200 376 C 200 332 214 312 228 312 C 242 312 256 332 256 376 Z" />
      </g>

      {/* Subtle ground line for grounding */}
      <line
        x1={20}
        y1={384}
        x2={300}
        y2={384}
        stroke="var(--color-primary)"
        strokeOpacity={0.18}
        strokeWidth={1}
      />
    </svg>
  );
}

export default HeroIllustration;
