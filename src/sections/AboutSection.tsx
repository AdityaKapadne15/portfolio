import { SectionHeading } from "../components/SectionHeading";
import { careerTimeline } from "../data/portfolio";

export function AboutSection() {
  return (
    <section className="content-section section-shell" id="about">
      <SectionHeading
        eyebrow="OPERATOR DOSSIER / PROFILE 001"
        title="A career built in layers."
        number="01"
      />
      <div className="about-summary">
        <p className="lead-copy">
          Full-stack software engineer with 4+ years of experience building
          scalable, performance-minded web applications.
        </p>
        <p>
          I work across frontend systems and backend services, from React and
          Angular interfaces to Java, Spring Boot, and data platforms.
        </p>
      </div>
      <ol className="career-timeline" aria-label="Career timeline">
        {careerTimeline.map((entry, index) => (
          <li
            className={`career-timeline-item${index === careerTimeline.length - 1 ? " is-current" : ""}`}
            key={entry.role}
          >
            <span className="timeline-node" aria-hidden="true">
              <span />
            </span>
            <article className="timeline-card">
              <p className="timeline-period">{entry.period}</p>
              <h3>{entry.role}</h3>
              <p>{entry.organization}</p>
              {index === careerTimeline.length - 1 && (
                <span className="timeline-current">CURRENT ROLE</span>
              )}
            </article>
          </li>
        ))}
      </ol>
      <article className="education-card">
        <span className="fact-index">EDUCATION / 2022</span>
        <div>
          <h3>B.E. Electronics &amp; Telecommunications</h3>
          <p className="fact-meta">
            I2IT, Pune · Savitribai Phule Pune University
          </p>
        </div>
        <span className="education-score">8.89 SGPA</span>
      </article>
    </section>
  );
}
