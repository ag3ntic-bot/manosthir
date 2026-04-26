"use client";

import Image from "next/image";
import { useState } from "react";

interface CounselorPhotoProps {
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  initials?: string;
}

export function CounselorPhoto({
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className = "object-cover",
  initials = "MB",
}: CounselorPhotoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="w-full h-full bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center"
        role="img"
        aria-label={alt}
      >
        <span className="text-5xl font-bold text-primary/30 font-[family-name:var(--font-heading)]">
          {initials}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src="/moumita-bhowmick.jpg"
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <Image
      src="/moumita-bhowmick.jpg"
      alt={alt}
      width={width ?? 480}
      height={height ?? 640}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}

export default CounselorPhoto;
