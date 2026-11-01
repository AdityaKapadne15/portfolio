import { navigationItems } from "../data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top">
        AK<span> / ARCHIVE END</span>
      </a>
      <nav aria-label="Footer navigation">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="back-to-top" href="#top">
        BACK TO TOP <span aria-hidden="true">↑</span>
      </a>
      <p className="copyright">
        © {new Date().getFullYear()} Aditya Kapadne. All rights reserved.
      </p>
    </footer>
  );
}
