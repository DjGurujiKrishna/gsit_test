"use client";

import Image from "next/image";
import PlusIcon from "@/components/PlusIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ExpertiseSection() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.14 });

  return (
    <section id="expertise" ref={sectionRef} className="expertise section-pad">
      <div className="expertise__header" data-reveal>
        <PlusIcon />
        <h2 className="expertise__heading">Our Expertise</h2>
      </div>

      <div className="expertise__rail" data-reveal>
        <div className="expertise__fade-line" aria-hidden="true" />
        <p className="expertise__rail-label">01 Engineering</p>
        <div className="expertise__fade-line" aria-hidden="true" />
      </div>

      <p className="expertise__index" data-reveal>
        02
      </p>

      <div className="expertise__banner-wrap" data-reveal>
        <div className="expertise__banner">
          <Image
            src="/architecture-banner.png"
            alt="Architecture"
            fill
            sizes="(max-width: 1620px) 84vw, 1620px"
          />
        </div>
        <p className="expertise__blurb">
          JT Partners JT P is an international multidisciplinary consultant
          which offers a unique portfolio of architecture,
        </p>
      </div>
    </section>
  );
}
