import { SectionHeading } from "../components/SectionHeading";
import { skillGroups } from "../data/portfolio";

function getSkillMonogram(name: string) {
  return name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
}

export function SkillsSection() {
  return (
    <section className="content-section section-shell" id="skills">
      <SectionHeading
        eyebrow="CAPABILITY INDEX / SYSTEMS KNOWN"
        title="Tools in the signal chain."
        number="03"
      />
      <div className="skill-lanes">
        {skillGroups.map((group, index) => (
          <div
            className={`skill-lane${index % 2 === 0 ? " scroll-forward" : " scroll-reverse"}`}
            key={group.name}
          >
            <div className="skill-lane-label">
              <span>0{index + 1} / {group.name}</span>
              <p>{group.description}</p>
            </div>
            <div className="skill-lane-viewport">
              <ul className="skill-lane-track" aria-label={`${group.name} skills`}>
                {[false, true].flatMap((isDuplicate) =>
                  group.skills.map((skill) => (
                    <li
                      className="skill-tile"
                      key={`${isDuplicate ? "repeat-" : ""}${skill.name}`}
                      aria-hidden={isDuplicate || undefined}
                    >
                      <span className="skill-tile-icon" aria-hidden="true">
                        {skill.icon ? (
                          <img src={skill.icon} alt="" />
                        ) : (
                          <span>{getSkillMonogram(skill.name)}</span>
                        )}
                      </span>
                      <span className="skill-tile-name">{skill.name}</span>
                    </li>
                  )),
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
