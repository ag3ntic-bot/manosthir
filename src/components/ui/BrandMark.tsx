"use client";

import Image from "next/image";
import { useState } from "react";

interface BrandMarkProps {
  variant?: "color" | "light";
  showWordmark?: boolean;
  priority?: boolean;
  size?: number;
  className?: string;
}

export function BrandMark({
  variant = "color",
  showWordmark = true,
  priority = false,
  size = 32,
  className = "",
}: BrandMarkProps) {
  const [errored, setErrored] = useState(false);

  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {errored ? (
        <span
          className={`rounded-full flex items-center justify-center ${
            isLight ? "bg-white" : "bg-primary"
          }`}
          style={{ width: size, height: size }}
          role="img"
          aria-label="ManoSthir logo"
        >
          <span
            className={`text-sm font-bold ${
              isLight ? "text-primary-darker" : "text-white"
            }`}
          >
            M
          </span>
        </span>
      ) : (
        <Image
          src="/logo.png"
          alt=""
          width={size}
          height={size}
          priority={priority}
          className="object-contain"
          style={
            isLight
              ? { filter: "brightness(0) invert(1)" }
              : undefined
          }
          onError={() => setErrored(true)}
        />
      )}
      {showWordmark && (
        <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
          ManoSthir
        </span>
      )}
    </span>
  );
}

export default BrandMark;
