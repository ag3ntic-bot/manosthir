import "@testing-library/jest-dom";
import React from "react";

// Mock framer-motion to avoid issues in test environment
vi.mock("framer-motion", () => {
  const createMotionComponent = (tag: string) => {
    return React.forwardRef(function MotionMock(props: Record<string, unknown>, ref: React.Ref<unknown>) {
      const filteredProps: Record<string, unknown> = {};
      for (const key of Object.keys(props)) {
        if (
          !key.startsWith("while") &&
          !key.startsWith("initial") &&
          !key.startsWith("animate") &&
          !key.startsWith("exit") &&
          !key.startsWith("transition") &&
          !key.startsWith("viewport") &&
          key !== "variants"
        ) {
          filteredProps[key] = props[key];
        }
      }
      return React.createElement(tag, { ...filteredProps, ref }, props.children as React.ReactNode);
    });
  };

  return {
    motion: {
      div: createMotionComponent("div"),
      button: createMotionComponent("button"),
      section: createMotionComponent("section"),
      span: createMotionComponent("span"),
      p: createMotionComponent("p"),
      a: createMotionComponent("a"),
      ul: createMotionComponent("ul"),
      li: createMotionComponent("li"),
      nav: createMotionComponent("nav"),
      header: createMotionComponent("header"),
      footer: createMotionComponent("footer"),
      form: createMotionComponent("form"),
      input: createMotionComponent("input"),
      article: createMotionComponent("article"),
      img: createMotionComponent("img"),
      h1: createMotionComponent("h1"),
      h2: createMotionComponent("h2"),
      h3: createMotionComponent("h3"),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useInView: () => true,
  };
});

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));
