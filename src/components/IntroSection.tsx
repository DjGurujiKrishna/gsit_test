"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function IntroSection() {
  const sectionRef = useScrollReveal<HTMLElement>({
    y: 24,
    stagger: 0.14,
    duration: 1.05,
  });

  return (
    <section id="about" ref={sectionRef} className="intro section-pad">
      <div className="intro__grid">
        <h2 className="intro__heading" data-reveal>
          <span className="intro__heading-line">Design the future</span>
          <span className="intro__heading-line">Now</span>
        </h2>
        <div className="intro__copy" data-reveal>
          <p>
            JT Partners JT P is an international multidisciplinary consultant
            which offers a unique portfolio of architecture, planning,
            engineering, project management, infrastructure and cost consultancy
            services.
          </p>
          <a href="#expertise" className="intro__know-more">
            Know More Us
          </a>
        </div>
      </div>
    </section>
  );
}
