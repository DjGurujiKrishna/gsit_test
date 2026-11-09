"use client";

import OfficeSwitcher from "@/components/OfficeSwitcher";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CollaborateFooter() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.1 });

  return (
    <footer
      id="collaborate"
      ref={sectionRef}
      className="collaborate section-pad"
    >
      <h2 className="collaborate__heading" data-reveal>
        Let&apos;s collaborate!
      </h2>

      <div className="collaborate__row" data-reveal>
        <p className="collaborate__contact">
          <a href="tel:+97144521135">+971 4 452 1135</a>
          <a href="mailto:clients@jtpartners.com">
            clients
            <span className="collaborate__email-domain">@jtpartners.com</span>
          </a>
        </p>

        <div className="collaborate__social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/jt-partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>

      <hr className="collaborate__rule" data-reveal />

      <div data-reveal>
        <OfficeSwitcher />
      </div>

      <div className="collaborate__brand" aria-hidden="true" data-reveal>
        <p className="collaborate__brand-text">JT &amp; PARTNERS</p>
      </div>
    </footer>
  );
}
