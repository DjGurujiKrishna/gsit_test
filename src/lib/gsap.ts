"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Classic editorial defaults — calm, not flashy */
gsap.defaults({
  ease: "power2.out",
  duration: 1.05,
});

export { gsap, ScrollTrigger, useGSAP };
