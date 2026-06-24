import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X
} from 'lucide-react';
import './styles.css';
import {
  bestFitRoles,
  contact,
  cvDownloads,
  experience,
  highlights,
  projects,
  services,
  skillGroups,
  workPrinciples
} from './portfolioData';

function isPlaceholderUrl(url) {
  return !url || url.startsWith('#');
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="John Adeleke home">
          <span>JA</span>
          <strong>John Adeleke</strong>
        </a>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
          <Menu size={20} />
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
          <button className="icon-button close-button" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            <X size={20} />
          </button>
          {['Projects', 'Experience', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Flutter Mobile Engineer | Backend Engineer | Fintech & Real-Time Systems</p>
            <h1>John Adeleke</h1>
            <p className="hero-text">
              I build production-ready Flutter mobile apps and backend services using Node.js, NestJS, Go, and TypeScript.
              I specialize in fintech, banking tools, logistics platforms, real-time tracking, authentication, notifications,
              and secure transaction workflows.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                View work <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href={`mailto:${contact.email}`}>
                <Mail size={18} /> Contact me
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Profile image and quick facts">
            <div className="profile-image-slot">
              <img src="/images/profile.png" alt="John Adeleke" />
            </div>
            <div className="profile-meta">
              <span><MapPin size={16} /> Lagos, Nigeria</span>
              <span><Phone size={16} /> {contact.phone}</span>
              <span><Mail size={16} /> {contact.email}</span>
            </div>
          </aside>
        </section>

        <section className="stats-band" aria-label="Professional highlights">
          {highlights.map((item) => (
            <div key={item.label} className="stat-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Selected systems</p>
            <h2>Selected Projects & Production Systems</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                {project.images?.length ? (
                  <div className="project-image-gallery">
                    {project.images.map((image) => (
                      <figure key={image.src} className="project-shot">
                        <img src={image.src} alt={image.alt} />
                        <figcaption>{image.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="project-image-slot">
                    <span>{project.imageLabel}</span>
                  </div>
                )}
                <div className="project-content">
                  <div>
                    <p className="project-kicker">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        className={isPlaceholderUrl(link.url) ? 'link-disabled' : ''}
                        href={link.url}
                        key={link.label}
                        rel={isPlaceholderUrl(link.url) ? undefined : 'noreferrer'}
                        target={isPlaceholderUrl(link.url) ? undefined : '_blank'}
                        aria-disabled={isPlaceholderUrl(link.url)}
                      >
                        {link.label} {link.kind === 'download' ? <Download size={16} /> : <ArrowUpRight size={16} />}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-layout">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Mobile Engineering with Backend Depth</h2>
            <p className="section-copy">
              I work across customer-facing mobile apps, internal banking tools, backend APIs, event-driven services,
              admin dashboards, and real-time delivery systems.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <group.icon size={22} />
                <h3>{group.title}</h3>
                <p>{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section-block services-band">
          <div className="section-heading">
            <p className="eyebrow">What clients can hire me for</p>
            <h2>What I Can Build for Your Team</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <div className="service-row" key={service.title}>
                <service.icon size={22} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block role-fit-section">
          <div className="section-heading">
            <p className="eyebrow">Best fit roles</p>
            <h2>Roles Where I Can Contribute Fast</h2>
            <p className="section-copy">
              I am best suited for roles where mobile engineering, backend systems, fintech, or real-time product workflows are important.
            </p>
          </div>
          <div className="role-grid">
            {bestFitRoles.map((role) => (
              <div className="role-card" key={role}>{role}</div>
            ))}
          </div>
        </section>

        <section className="section-block principles-section">
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2>Reliable Engineering, Clear Communication</h2>
          </div>
          <div className="principle-grid">
            {workPrinciples.map((principle) => (
              <article className="principle-card" key={principle.title}>
                <principle.icon size={22} />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Professional Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <article className="timeline-item" key={`${role.company}-${role.period}`}>
                <div className="timeline-date">{role.period}</div>
                <div>
                  <h3>{role.title}</h3>
                  <p className="company">{role.company}</p>
                  <ul>
                    {role.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-section">
          <div>
            <p className="eyebrow">Contact and CV</p>
            <h2>Hire Me for Flutter, Backend, or Full-Cycle Product Engineering</h2>
            <p className="section-copy">
              For Flutter/mobile roles, use my mobile CV. For backend, fintech, API, or full-cycle product engineering roles,
              use my backend CV. I am open to remote, contract, full-time, and startup opportunities.
            </p>
            <div className="social-links">
              <a href={contact.github}><Github size={18} /> GitHub</a>
              <a href={contact.linkedin}><Linkedin size={18} /> LinkedIn</a>
              <a href={`tel:${contact.phone.replaceAll(' ', '')}`}><Phone size={18} /> {contact.phone}</a>
              <a href={`mailto:${contact.email}`}><Mail size={18} /> {contact.email}</a>
            </div>
          </div>
          <div className="cv-panel">
            {cvDownloads.map((cv) => (
              <a className="cv-download" href={cv.url} download key={cv.title}>
                <span>
                  <strong>{cv.title}</strong>
                  <small>{cv.description}</small>
                </span>
                <Download size={20} />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
