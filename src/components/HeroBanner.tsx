"use client";

import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const project = projects[0];

/**
 * Hero banner — single project only.
 * Page-load entrance + scroll reveal of description.
 * No crossfade to other project images inside this section.
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

      gsap.set(description, { autoAlpha: 0, y: 28 });
      gsap.set(title, { autoAlpha: 1, y: 0 });

      // ---------- Page-load entrance ----------
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".hero__rail", { x: -40, autoAlpha: 0, duration: 0.9 }, 0)
        .from(frame, { scale: 1.05, duration: 1.35 }, 0.1)
        .from(title, { y: 40, autoAlpha: 0, duration: 1 }, 0.25)
        .from(".hero__bar", { y: 36, autoAlpha: 0, duration: 0.85 }, 0.45)
        .from(".hero__plus", { scale: 0, autoAlpha: 0, duration: 0.55 }, 0.55);

      // ---------- Scroll: title → reveal description (same image) ----------
      const story = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          id: "hero-banner",
          trigger: root,
          start: "top top",
          end: "+=90%",
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      story
        .to({}, { duration: 0.35 })
        .to(description, { autoAlpha: 1, y: 0, duration: 0.7 })
        .to({}, { duration: 0.45 });

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
