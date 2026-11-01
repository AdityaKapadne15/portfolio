import { SectionHeading } from "../components/SectionHeading";
import { socialLinks } from "../data/portfolio";

export function ContactSection() {
  return (
    <section className="content-section contact-section section-shell" id="contact">
      <SectionHeading
        eyebrow="CONTACT CHANNEL / OPEN FREQUENCY"
        title="Have a signal to send?"
        number="06"
      />
      <div className="contact-panel">
        <div>
          <p className="eyebrow">TRANSMISSION READY</p>
          <p className="contact-message">
            For collaborations, opportunities, or a good conversation about
            building useful things.
          </p>
        </div>
        <div className="contact-links">
          <a href={socialLinks.email}>
            Email <span>{socialLinks.emailLabel}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span>Professional profile</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub <span>Projects &amp; code</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={socialLinks.resume} target="_blank" rel="noreferrer">
            Resume <span>Lead Software Engineer profile</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
