import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

const setTheme = vi.fn();
let currentTheme = "light";
let resolvedTheme = "light";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: currentTheme,
    resolvedTheme,
    setTheme: (t: string) => {
      setTheme(t);
      currentTheme = t;
    },
  }),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    setTheme.mockClear();
    currentTheme = "light";
    resolvedTheme = "light";
  });

  it("renders an accessible button with a label after mount", () => {
    render(<ThemeToggle />);
    const btn = screen.getByRole("button", { name: /switch to dark mode/i });
    expect(btn).toBeInTheDocument();
  });

  it("cycles light → dark on click", () => {
    render(<ThemeToggle />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("cycles dark → system on click", () => {
    currentTheme = "dark";
    resolvedTheme = "dark";
    render(<ThemeToggle />);
    const btn = screen.getByRole("button", { name: /switch to system mode/i });
    fireEvent.click(btn);
    expect(setTheme).toHaveBeenCalledWith("system");
  });

  it("cycles system → light on click", () => {
    currentTheme = "system";
    resolvedTheme = "dark";
    render(<ThemeToggle />);
    const btn = screen.getByRole("button", { name: /switch to light mode/i });
    fireEvent.click(btn);
    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
