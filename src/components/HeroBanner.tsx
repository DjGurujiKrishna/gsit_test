"use client";

import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const project = projects[0];

/**
 * Classic hero motion:
 * — soft page-load entrance
 * — pinned scroll: title holds, description fades in
 * — gentle image drift (no project switching)
 */
export default function HeroBanner() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const title = root.querySelector<HTMLElement>(".hero__title-item");
      const description = root.querySelector<HTMLElement>(".hero__desc-item");
      const frame = root.querySelector<HTMLElement>(".hero__frame");
      const image = root.querySelector<HTMLElement>(".hero__image");
      const plus = root.querySelector<HTMLElement>(".hero__plus");
      const bar = root.querySelector<HTMLElement>(".hero__bar");
      const rail = root.querySelector<HTMLElement>(".hero__rail");

      gsap.set(description, { autoAlpha: 0, y: 20 });
      gsap.set([title, frame, plus, bar, rail], { autoAlpha: 1 });

      // ---------- Page-load (classic fade / rise) ----------
      const intro = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      intro
        .from(rail, { x: -24, autoAlpha: 0, duration: 1 }, 0)
        .from(frame, { autoAlpha: 0, scale: 1.03, duration: 1.4 }, 0.05)
        .from(image, { scale: 1.06, duration: 1.6 }, 0.05)
        .from(title, { y: 28, autoAlpha: 0, duration: 1.1 }, 0.35)
        .from(bar, { y: 24, autoAlpha: 0, duration: 0.9 }, 0.55)
        .from(plus, { autoAlpha: 0, duration: 0.7 }, 0.7);

      // ---------- Scroll story (same image only) ----------
      const story = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: "hero-banner",
          trigger: root,
          start: "top top",
          end: "+=85%",
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      story
        // hold on title
        .to({}, { duration: 0.4 })
        // description fades up classically
        .to(description, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power1.out" })
        // soft image drift while reading
        .to(image, { scale: 1.04, duration: 1.2, ease: "none" }, 0)
        // brief hold
        .to({}, { duration: 0.35 });

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
      };
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="hero" aria-label="Featured project">
      <aside className="hero__rail" aria-label="Featured projects">
        <p className="hero__rail-label">Featured Projects</p>

        <div className="hero__rail-pager">
          <div className="hero__rail-dashes" aria-hidden="true">
            <span />
            <span />
            <span className="is-active" />
            <span />
          </div>
          <p className="hero__rail-index">02 - 06</p>
        </div>
      </aside>

      <div className="hero__main">
        <div className="hero__frame">
          <div className="hero__slide hero__slide--active">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              className="hero__image"
              sizes="(max-width: 1920px) 90vw, 1857px"
              style={{ objectPosition: project.objectPosition }}
            />
          </div>

          <div className="hero__gradient" />

          <div className="hero__copy">
            <div className="hero__titles">
              <h1 className="hero__title-item">{project.title}</h1>
            </div>
            <div className="hero__descriptions">
              <p className="hero__desc-item">{project.description}</p>
            </div>
          </div>

          <div className="hero__plus">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/group-2.svg"
              alt=""
              width={50}
              height={50}
              className="plus"
              aria-hidden="true"
            />
          </div>

          <nav className="hero__bar" aria-label="Primary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/heroSection/rectangle.png"
              alt=""
              className="hero__bar-bg"
              aria-hidden="true"
            />
            <a href="#top" className="hero__jtp">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/heroSection/jtp.svg"
                alt="JT Partners"
                width={83}
                height={54}
              />
            </a>
            <a href="#about" className="hero__menu" aria-label="Explore">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/heroSection/3line.svg"
                alt=""
                width={52}
                height={33}
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
