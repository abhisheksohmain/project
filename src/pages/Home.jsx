
import Hero from '../components/Hero/Hero'
import ClientLogos from '../components/ClientLogos/ClientLogos'
import Pillars from '../components/Pillars/Pillars'
import Stats from '../components/Stats/Stats'
import VideoShowcase from '../components/VideoShowcase/VideoShowcase'
import Media from '../components/Media/Media'
import Reveal from '../components/Reveal/Reveal'
import CTABand from '../components/CTABand/CTABand'

import { Link } from 'react-router-dom'
import { IMG } from '../data/media'
import { MEP } from '../data/content'

import './Home.css'

/* Inline SVG icons — no additional package required */
function MepIcon({ title, index }) {
  const name = title.toLowerCase()

  let type = 'engineering'

  if (/hvac|air|cool|climate|mechanical/.test(name)) {
    type = 'hvac'
  } else if (/electric|power|lighting/.test(name)) {
    type = 'electrical'
  } else if (/plumb|water|drain|sanitary/.test(name)) {
    type = 'water'
  } else if (/fire|safety|alarm|protection/.test(name)) {
    type = 'safety'
  } else if (/bim|design|coordination|model/.test(name)) {
    type = 'design'
  } else if (/maintenance|management|control|building/.test(name)) {
    type = 'control'
  } else {
    const fallback = [
      'engineering',
      'hvac',
      'electrical',
      'water',
      'safety',
      'design',
    ]
    type = fallback[index % fallback.length]
  }

  const shapes = {
    engineering: (
      <>
        <path d="M4 20V8l8-5 8 5v12" />
        <path d="M2 20h20M9 20v-6h6v6M8 9h.01M16 9h.01" />
      </>
    ),
    hvac: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17M4.6 7.7l14.8 8.6M19.4 7.7 4.6 16.3" />
      </>
    ),
    electrical: (
      <>
        <path d="M13 2 5 13h6l-1 9 9-12h-6l0-8Z" />
      </>
    ),
    water: (
      <>
        <path d="M12 3C9 7 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-4-8-7-12Z" />
        <path d="M9 16a3 3 0 0 0 3 3" />
      </>
    ),
    safety: (
      <>
        <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    design: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8v8H8zM4 9h4M16 15h4M9 4v4M15 16v4" />
      </>
    ),
    control: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M22 12h-4M12 22v-4M2 12h4" />
      </>
    ),
  }

  return (
    <svg
      className="mc-svg-icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[type]}
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      <ClientLogos />

      <Pillars />

      <Stats />

      {/* About / Who We Are Section — unchanged */}
      <section className="section who-section">
        <div className="container split">
          <Reveal dir="left">
            <div className="collage">
              <div className="collage-orbit orbit-one" />
              <div className="collage-orbit orbit-two" />

              <div className="collage-image image-primary">
                <Media src={IMG.hvac} className="c1" />
                <span className="image-corner corner-tl" />
                <span className="image-corner corner-br" />
              </div>

              <div className="collage-image image-secondary">
                <Media src={IMG.bim} className="c2" />
              </div>

              <div className="collage-marker">
                <span className="marker-dot" />
                <span>Engineering Excellence</span>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="who-content">
              <span className="eyebrow who-eyebrow">
                <span className="eyebrow-line" />
                Who We Are
              </span>

              <h2 className="title who-title">
                Integrated Consulting &amp; Contracting Rooted in Technical
                <span className="who-title-accent">
                  {' '}Excellence
                </span>
              </h2>

              <p className="lead who-lead">
                Our mission is to engineer high-performance, energy-efficient
                environments and deliver complex projects seamlessly while
                empowering teams and industry talent through dedicated mentorship.
              </p>

              <ul className="ticks who-ticks" style={{ margin: '20px 0 28px' }}>
                <li>Technical Integrity &amp; Operational Excellence</li>
                <li>Sustainable Innovation &amp; Client Partnership</li>
                <li>
                  Commercial, industrial, institutional &amp; residential
                </li>
              </ul>

              <Link to="/about" className="btn btn-dark who-button">
                <span>Learn About Us</span>
                <span className="who-button-arrow" aria-hidden="true">
                  →
                </span>
                <span className="button-wave" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

 
{/* CAPABILITIES SECTION */}
<section className="section alt home-capabilities">
  {/* Actual full-section background image */}
  <div className="home-cap-bg" aria-hidden="true" />

  <div className="container home-cap-container">
    <Reveal>
      <div className="center home-cap-heading">
        <span className="eyebrow">Capabilities</span>

        <h2 className="title">
          Complete MEP &amp; Building Services
        </h2>

        <p className="lead">
          Integrated engineering solutions designed for performance,
          safety, efficiency and long-term reliability.
        </p>
      </div>
    </Reveal>

    <div className="grid g3 mg home-mep-grid">
      {MEP.map(([icon, title, description], index) => (
        <Reveal key={title} delay={(index % 3) * 100}>
          <article className="card mc home-mep-card">
            <div className="home-mep-card-top">
              <div className="ic home-mep-icon">
                {icon}
              </div>

              <span className="home-mep-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3>{title}</h3>

            <span className="home-mep-underline" />

            <p>{description}</p>

            <span
              className="home-mep-decoration"
              aria-hidden="true"
            />
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


      {/* Video Showcase — unchanged */}
      <VideoShowcase />

      
{/* Emergency Support — Interactive HVAC Image */}
<section className="section dark emergency-support">
  <div className="container split emergency-support-grid">
    <Reveal dir="left">
      <div className="emergency-content">
        <span className="eyebrow emergency-eyebrow">
          <span className="emergency-status-dot" />
          24/7 Support
        </span>

        <h2 className="title emergency-title">
          HVAC Breakdown? We Respond Fast.
        </h2>

        <p className="lead emergency-description">
          Emergency dispatch, preventative maintenance contracts and
          SLA-backed response — 2-hour emergency vs. 24-hour scheduled
          windows.
        </p>

        <a href="tel:1800CRAMER" className="btn btn-primary emergency-button">
          Call 1800-CRAMER <span aria-hidden="true">→</span>
        </a>
      </div>
    </Reveal>

    <Reveal dir="right">
      <div className="emergency-image-card">
        <Media
          src={IMG.plant}
          className="emergency-main-image"
        />

        {/* Technical image revealed on hover */}
        <div className="emergency-hover-image">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85"
            alt="Engineering technician inspecting industrial equipment"
            loading="lazy"
          />
        </div>

        <div className="emergency-image-overlay" />

        <div className="emergency-image-label">
          <span className="emergency-label-dot" />
          <span>TECHNICAL RESPONSE TEAM</span>
        </div>

        <div className="emergency-image-caption">
          <span>HVAC SERVICE &amp; MAINTENANCE</span>
          <span className="emergency-caption-arrow">↗</span>
        </div>

        <span className="emergency-corner emergency-corner-tl" />
        <span className="emergency-corner emergency-corner-br" />
      </div>
    </Reveal>
  </div>
</section>


      {/* Final Call to Action — unchanged */}
      <CTABand />
    </>
  )
}
