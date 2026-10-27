
import { Link } from 'react-router-dom';

import Media from '../Media/Media';
import { IMG } from '../../data/media';

import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <Media
        video
        src="/videos/hero_videos.mp4"
        poster={IMG.hero}
        className="hbg"
      />

      {/* Background Overlays */}
      <div className="hov" />
      <div className="grid-lines" />

      {/* Hero Content */}
      <div className="container hc">
        <span className="eyebrow">
          Engineering | Projects | Mentoring
        </span>

        <h1>
          Precision Engineering.{' '}
          <em>Turnkey Project Delivery.</em>{' '}
          Industry Mentorship.
        </h1>

        <p>
          Cramer Group provides high-performance commercial HVAC,
          multidisciplinary MEP engineering, and comprehensive project
          governance—backed by an enduring commitment to building the
          next generation of technical leaders.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hb">
          <Link to="/contact" className="btn btn-primary">
            Request a Project Consultation →
          </Link>

          <a
            href="tel:1800CRAMER"
            className="btn btn-ghost"
          >
            24/7 HVAC Emergency Service Line →
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll">
        <span />
      </div>
    </section>
  );
}
