import { SectionHeading } from "../components/SectionHeading";

const contributions = [
  {
    index: "01",
    title: "Telecom AI-Ops full-stack development",
    description:
      "Delivered features across Angular interfaces and Spring Boot microservices, designing validated REST APIs, contributing to architecture discussions, and using Claude/MCP workflows for development, testing, and RCA.",
    tags: ["Angular", "Spring Boot", "REST APIs"],
  },
  {
    index: "02",
    title: "Performance and production reliability",
    description:
      "Optimized queries and database interactions, improving response times by up to 70% and reducing a specific query from 40 seconds to under 5. Pagination, caching, batching, and lazy loading improved selected modules by up to 40%.",
    tags: ["SQL / AQL", "Performance", "Production support"],
  },
  {
    index: "03",
    title: "React banking application",
    description:
      "Built a responsive banking frontend with React and micro frontend architecture, reusable Context API components, REST integrations, and WCAG-aligned layouts.",
    tags: ["React", "Micro frontends", "WCAG"],
  },
  {
    index: "04",
    title: "Dashboards and observability",
    description:
      "Contributed Angular 12 components and ETL pipelines for Persistent Responsive Dashboards, using Oracle and PostgreSQL data, Docker on Kubernetes, Instana, Turbonomic, SevOne, and IBM watsonx integrations.",
    tags: ["Angular 12", "ETL", "Observability", "Kubernetes"],
  },
];

export function ExperienceSection() {
  return (
    <section className="content-section section-shell" id="experience">
      <SectionHeading
        eyebrow="EXPERIENCE LOG / VERIFIED RECORDS"
        title="Work that connects the layers."
        number="02"
      />
      <div className="experience-record">
        <div className="experience-identity">
          <span className="record-marker" aria-hidden="true">
            <span />
          </span>
          <p className="eyebrow">PERSISTENT SYSTEMS LIMITED / DEC 2025—PRESENT</p>
          <h3>Lead Software Engineer</h3>
          <p className="experience-summary">
            Full-stack engineering for telecom AI-Ops, with experience across
            banking, dashboards, and observability.
          </p>
          <span className="record-note">SELECTED WORK / RESUME RECORD</span>
        </div>
        <div className="contribution-list">
          {contributions.map((contribution) => (
            <article className="contribution" key={contribution.index}>
              <span className="contribution-index">{contribution.index}</span>
              <div>
                <h4>{contribution.title}</h4>
                <p>{contribution.description}</p>
                <ul className="tag-list" aria-label="Related technologies">
                  {contribution.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
