import { useState } from "react";
import { navigationItems } from "../data/portfolio";

type SiteHeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Aditya Kapadne home">
        <span className="wordmark-mark">AK</span>
        <span className="wordmark-label">
          <strong>RECOVERED</strong>
          <span>PORTFOLIO ARCHIVE</span>
        </span>
      </a>

      <div className="header-status" aria-label="Portfolio archive">
        <span className="status-dot" aria-hidden="true" />
        <span>ARCHIVE ONLINE</span>
      </div>

      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        role="switch"
        aria-label="Light theme"
        aria-checked={theme === "light"}
        title={`Enable ${nextTheme} theme`}
      >
        <span className="theme-toggle-track" aria-hidden="true">
          <span className="theme-toggle-thumb">
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              >
                <path d="M20.2 15.1A8.3 8.3 0 0 1 8.9 3.8 8.4 8.4 0 1 0 20.2 15.1Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            )}
          </span>
        </span>
      </button>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <a
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-index">0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
