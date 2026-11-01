import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <section
      className="content-section section-shell projects-section"
      id="projects"
    >
      <SectionHeading
        eyebrow="PROJECT FILES / SELECTED WORK"
        title="Built for people, not machines."
        number="04"
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
