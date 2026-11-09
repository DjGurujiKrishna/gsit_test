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
 * Classic fade-up reveal, scoped per section.
 */
export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T>(null);
  const {
    y = 28,
    stagger = 0.1,
    start = "top 80%",
    duration = 1,
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
        ease: "power2.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: root,
          start,
          once: true,
          id: `reveal-${root.id || "section"}`,
        },
      });
    },
    { scope: ref, dependencies: [y, stagger, start, duration] },
  );

  return ref;
}
