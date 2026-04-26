"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const NEXT: Record<string, string> = {
  light: "dark",
  dark: "system",
  system: "light",
};

const LABEL: Record<string, string> = {
  light: "Switch to dark mode",
  dark: "Switch to system mode",
  system: "Switch to light mode",
};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration guard for next-themes: server has no theme, client does.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const baseClasses = `inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 ${className}`;

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={baseClasses}
        style={{ visibility: "hidden" }}
      />
    );
  }

  const current = theme ?? "system";
  const Icon =
    current === "system" ? Monitor : (resolvedTheme ?? current) === "dark" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={() => setTheme(NEXT[current] ?? "light")}
      aria-label={LABEL[current] ?? "Toggle theme"}
      title={LABEL[current] ?? "Toggle theme"}
      className={`${baseClasses} text-gray-300 hover:text-white hover:bg-white/10`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

export default ThemeToggle;
