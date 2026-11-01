import { InteractiveGlobe } from "../components/InteractiveGlobe";
import { socialLinks } from "../data/portfolio";

export function HeroSection() {
  return (
    <section
      className="hero section-shell"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-mark" />
          SIGNAL RESTORED / HUMAN OPERATOR IDENTIFIED
        </p>
        <h1 id="hero-title">
          Aditya
          <br />
          <span>Kapadne</span>
          <span className="hero-period">.</span>
        </h1>
        <div className="hero-role">
          <span className="role-rule" />
          <p>
            Lead Software Engineer
            <span>Full-stack systems · AI-Ops · data platforms</span>
          </p>
        </div>
        <p className="hero-intro">
          A human-built portfolio from a world run by machines. I bring 4+ years
          of full-stack experience to scalable products, from thoughtful
          interfaces to the services and data behind them.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore project files <span aria-hidden="true">↘</span>
          </a>
          <a
            className="button button-secondary"
            href={socialLinks.resume}
            target="_blank"
            rel="noreferrer"
          >
            Open resume <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-socials">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="world-visual">
        <div className="world-visual-heading">
          <span>WORLD STATE / 01</span>
          <span>SIMULATED</span>
        </div>
        <div className="hero-globe">
          <InteractiveGlobe />
        </div>
        <div className="world-visual-caption">
          <span>HUMAN SIGNAL</span>
          <span>ARCHIVE ONLINE</span>
        </div>
      </div>
      <div className="hero-bottomline">
        <span>INDEPENDENT ARCHIVE / EST. BY A HUMAN</span>
        <a href="#about">
          SCROLL TO DECRYPT <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
