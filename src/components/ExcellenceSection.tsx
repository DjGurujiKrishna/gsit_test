"use client";

import Image from "next/image";
import PlusIcon from "@/components/PlusIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ExcellenceSection() {
  const sectionRef = useScrollReveal<HTMLElement>({
    y: 26,
    stagger: 0.12,
    duration: 1,
  });

  return (
    <section id="excellence" ref={sectionRef} className="excellence section-pad">
      <div className="excellence__top">
        <div className="excellence__heading-wrap" data-reveal>
          <PlusIcon className="plus plus--sm" />
          <h2 className="excellence__heading">Architectural Excellence</h2>
        </div>
        <p className="excellence__eyebrow" data-reveal>
          Awards &amp; Achievements
        </p>
      </div>

      <div className="excellence__pager" data-reveal>
        <span className="excellence__pager-label">
          01 <span>- 03</span>
        </span>
        <div className="excellence__pager-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="excellence__body">
        <div className="excellence__award" data-reveal>
          <Image
            src="/award-doubletree.png"
            alt="Rethinking the Future Awards 2021 — DoubleTree by Hilton Jeddah Awardee"
            width={550}
            height={482}
          />
        </div>
        <div className="excellence__story" data-reveal>
          <h3>
            DoubleTree by Hilton – Jeddah recognised in International Award
          </h3>
          <a
            href="https://jtpartners.com"
            className="read-more excellence__read-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
