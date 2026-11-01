import type { projects } from "../data/portfolio";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <span className="project-visual-label">{project.classification}</span>
      </div>
      <div className="project-content">
        <div className="project-heading">
          <h3>{project.name}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Project categories">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.repository} target="_blank" rel="noreferrer">
            Repository <span aria-hidden="true">↗</span>
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live demo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
