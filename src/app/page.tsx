import Image from "next/image";
import PlusIcon from "@/components/PlusIcon";
import OfficeSwitcher from "@/components/OfficeSwitcher";

export default function Home() {
  return (
    <div className="site" id="top">
      {/* 1. Hero */}
      <section className="hero" aria-label="Featured project">
        <div className="hero__frame">
          <Image
            src="/dark-grain.png"
            alt="Hilton Marjan Island Beach Resort & Spa"
            fill
            priority
            className="hero__image"
            sizes="(max-width: 1920px) 97vw, 1857px"
          />
          <div className="hero__gradient" />

          <h1 className="hero__title reveal">
            Hilton Marjan Island Beach resort &amp; Spa
          </h1>

          <div className="hero__plus">
            <PlusIcon />
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
            <button type="button" className="hero__menu" aria-label="Menu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/heroSection/3line.svg"
                alt=""
                width={52}
                height={33}
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </section>

      {/* 2. Intro */}
      <section id="about" className="intro section-pad">
        <div className="intro__grid">
          <h2 className="intro__heading reveal">
            <span className="intro__heading-line">Design the future</span>
            <span className="intro__heading-line">Now</span>
          </h2>
          <div className="intro__copy reveal reveal-delay-1">
            <p>
              JT Partners JT P is an international multidisciplinary consultant
              which offers a unique portfolio of architecture, planning,
              engineering, project management, infrastructure and cost
              consultancy services.
            </p>
            <a href="#expertise" className="intro__know-more">
              Know More Us
            </a>
          </div>
        </div>
      </section>

      {/* 3. Our Expertise */}
      <section id="expertise" className="expertise section-pad">
        <div className="expertise__header">
          <PlusIcon />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/line-11.svg"
            alt=""
            width={295}
            height={4}
            className="accent-line"
            aria-hidden="true"
          />
          <h2 className="expertise__heading reveal">Our Expertise</h2>
        </div>

        <div className="expertise__rail">
          <div className="expertise__fade-line" aria-hidden="true" />
          <p className="expertise__rail-label">01 Engineering</p>
          <div className="expertise__fade-line" aria-hidden="true" />
        </div>

        <p className="expertise__index reveal">02</p>

        <div className="expertise__banner-wrap">
          <div className="expertise__banner reveal reveal-delay-1">
            <Image
              src="/architecture-banner.png"
              alt="Architecture"
              fill
              sizes="(max-width: 1620px) 84vw, 1620px"
            />
          </div>
          <p className="expertise__blurb reveal reveal-delay-2">
            JT Partners JT P is an international multidisciplinary consultant
            which offers a unique portfolio of architecture,
          </p>
        </div>
      </section>

      {/* 4. Architectural Excellence */}
      <section id="excellence" className="excellence section-pad">
        <div className="excellence__top">
          <div className="excellence__heading-wrap">
            <PlusIcon className="plus plus--sm" />
            <h2 className="excellence__heading reveal">
              Architectural Excellence
            </h2>
          </div>
          <p className="excellence__eyebrow reveal reveal-delay-1">
            Awards &amp; Achievements
          </p>
        </div>

        <div className="excellence__pager">
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
          <div className="excellence__award reveal">
            <Image
              src="/award-doubletree.png"
              alt="Rethinking the Future Awards 2021 — DoubleTree by Hilton Jeddah Awardee"
              width={550}
              height={482}
            />
          </div>
          <div className="excellence__story reveal reveal-delay-1">
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

      {/* 5. Collaborate / Footer */}
      <footer id="collaborate" className="collaborate section-pad">
        <h2 className="collaborate__heading reveal">Let&apos;s collaborate!</h2>

        <div className="collaborate__row">
          <p className="collaborate__contact reveal">
            <a href="tel:+97144521135">+971 4 452 1135</a>
            <a href="mailto:clients@jtpartners.com">
              clients
              <span className="collaborate__email-domain">@jtpartners.com</span>
            </a>
          </p>

          <div className="collaborate__social reveal reveal-delay-1">
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

        <hr className="collaborate__rule" />

        <OfficeSwitcher />

        <div className="collaborate__brand" aria-hidden="true">
          <p className="collaborate__brand-text">JT &amp; PARTNERS</p>
        </div>
      </footer>
    </div>
  );
}
