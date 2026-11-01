import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { achievements } from "../data/portfolio";

export function AchievementsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAchievement = achievements[activeIndex];

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + achievements.length) % achievements.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % achievements.length);
  }

  return (
    <section className="content-section section-shell" id="achievements">
      <SectionHeading
        eyebrow="ACHIEVEMENT ARCHIVE / CREDENTIALS"
        title="Milestones worth keeping."
        number="05"
      />
      <div className="achievement-viewer">
        <div className="achievement-image-frame">
          <img
            src={activeAchievement.image}
            alt={activeAchievement.title}
            key={activeAchievement.image}
          />
          <span className="image-corner image-corner-top" aria-hidden="true" />
          <span className="image-corner image-corner-bottom" aria-hidden="true" />
        </div>
        <div className="achievement-details">
          <div>
            <p className="eyebrow">CREDENTIAL / {String(activeIndex + 1).padStart(2, "0")}</p>
            <h3 aria-live="polite">{activeAchievement.title}</h3>
            <p>
              A selected award or learning milestone from the portfolio
              archive.
            </p>
          </div>
          <div className="achievement-controls">
            <button
              className="icon-button"
              type="button"
              onClick={showPrevious}
              aria-label="Show previous credential"
            >
              ←
            </button>
            <span className="achievement-count">
              {String(activeIndex + 1).padStart(2, "0")}
              <span> / {String(achievements.length).padStart(2, "0")}</span>
            </span>
            <button
              className="icon-button"
              type="button"
              onClick={showNext}
              aria-label="Show next credential"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="achievement-progress" aria-hidden="true">
        <span
          style={{ width: `${((activeIndex + 1) / achievements.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
