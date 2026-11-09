"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Options = {
  y?: number;
  stagger?: number;
  start?: string;
  duration?: number;
};

/**
 * Section-scoped scroll reveal.
 * Only animates `[data-reveal]` children inside the section —
 * keeps timelines isolated so sections never interfere.
 */
export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T>(null);
  const {
    y = 40,
    stagger = 0.12,
    start = "top 78%",
    duration = 0.85,
  } = options;

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
      if (!items.length) return;

      gsap.set(items, { autoAlpha: 0, y });

      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: root,
          start,
          once: true,
          // Unique id per section avoids ScrollTrigger collisions
          id: `reveal-${root.id || "section"}`,
        },
      });
    },
    { scope: ref, dependencies: [y, stagger, start, duration] },
  );

  return ref;
}
