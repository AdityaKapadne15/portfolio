import { useEffect, useLayoutEffect, useState } from "react";
import { AboutSection } from "./sections/AboutSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { WorldJourney } from "./sections/WorldJourney";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

type Theme = "dark" | "light";

function readThemePreference(): Theme {
  try {
    return window.localStorage.getItem("portfolio-theme") === "light"
      ? "light"
      : "dark";
  } catch (error) {
    console.warn("Could not read the saved theme preference.", error);
    return "dark";
  }
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(readThemePreference);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (themeColor) {
      themeColor.content = theme === "dark" ? "#080b18" : "#f5f6fc";
    }

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.warn("Could not save the theme preference.", error);
    }
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const sections = document.querySelectorAll<HTMLElement>(".content-section");
    const parallaxLayers = document.querySelectorAll<HTMLElement>(
      ".content-section > *, .site-footer > *",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
      if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
        section.classList.add("is-visible");
      } else {
        observer.observe(section);
      }
    });

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      parallaxLayers.forEach((layer) => {
        const bounds = layer.getBoundingClientRect();
        const distance =
          (bounds.top + bounds.height / 2 - window.innerHeight / 2) /
          window.innerHeight;
        const offset = Math.max(-14, Math.min(14, -distance * 12));
        layer.style.setProperty("--scroll-parallax", `${offset}px`);
      });
    };
    const requestParallaxUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
      />
      <main id="main-content">
        <WorldJourney />
        <div className="signal-divider" aria-hidden="true">
          <span />
          <span>ARCHIVE SIGNAL / 01—06</span>
          <span />
        </div>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
