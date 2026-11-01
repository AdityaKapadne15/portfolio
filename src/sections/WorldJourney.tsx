import { useEffect, useRef } from "react";
import { HeroSection } from "./HeroSection";
import { WorldTransition } from "./WorldTransition";

function easeProgress(start: number, end: number, value: number) {
  const progress = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
}

export function WorldJourney() {
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) {
      return;
    }
    const hero = journey.querySelector<HTMLElement>(".hero");
    const transition = journey.querySelector<HTMLElement>(".world-transition");
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frame = 0;
    const updateJourney = () => {
      frame = 0;
      if (motionPreference.matches) {
        if (hero) {
          hero.inert = false;
        }
        if (transition) {
          transition.inert = false;
        }
        return;
      }

      const start = journey.getBoundingClientRect().top + window.scrollY;
      const scrollRange = Math.max(journey.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - start) / scrollRange),
      );
      if (hero) {
        hero.inert = progress >= 0.31;
      }
      if (transition) {
        transition.inert = progress < 0.33;
      }
      const travelX =
        window.innerWidth > 700
          ? -journey.getBoundingClientRect().width * 0.28
          : 0;

      journey.style.setProperty("--journey-globe-x", `${travelX * progress}px`);
      journey.style.setProperty(
        "--journey-hero-y",
        `${progress * -24}px`,
      );
      journey.style.setProperty(
        "--journey-globe-scale",
        `${1 + easeProgress(0.08, 0.88, progress) * 3.6}`,
      );
      journey.style.setProperty(
        "--journey-globe-opacity",
        `${1 - easeProgress(0.42, 0.72, progress)}`,
      );
      journey.style.setProperty(
        "--journey-copy-opacity",
        `${1 - easeProgress(0.08, 0.31, progress)}`,
      );
      journey.style.setProperty(
        "--journey-copy-pointer",
        progress < 0.2 ? "auto" : "none",
      );
      journey.style.setProperty(
        "--journey-art-opacity",
        `${easeProgress(0.33, 0.74, progress)}`,
      );
      journey.style.setProperty(
        "--journey-title-opacity",
        `${easeProgress(0.57, 0.84, progress)}`,
      );
    };
    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateJourney);
      }
    };

    updateJourney();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    motionPreference.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      motionPreference.removeEventListener("change", requestUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={journeyRef} className="world-journey">
      <div className="world-journey-stage">
        <HeroSection />
        <WorldTransition />
      </div>
    </div>
  );
}
