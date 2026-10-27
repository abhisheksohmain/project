
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="container fg">

        {/* Brand */}
        <div className="footer-brand">
          <Brand size="lg" />

          <p>
            Engineering high-performance, energy-efficient environments,
            delivering complex projects seamlessly, and empowering industry
            talent through mentorship.
          </p>

          <div className="soc">
            {['in', 'f', 'x', '▶'].map((s) => (
              <a key={s} href="#" aria-label={`Social media ${s}`}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <Link to="/services/hvac">HVAC &amp; Mechanical</Link>
          <Link to="/services/hvac#mep">MEP Engineering</Link>
          <Link to="/services/projects">Project Delivery</Link>
          <Link to="/mentoring">Mentoring &amp; Advisory</Link>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/about#values">Our Values</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h4>Get in Touch</h4>
          <p>📍 [Street Address / Suite #, City, Country]</p>
          <p>📞 +61 452 456 745</p>
          <p>☎ +1 (800) CRAMER-HQ</p>
          <p>
            ✉{' '}
            <a href="mailto:info@cramergroup.com">
              info@cramergroup.com
            </a>
          </p>
          <p>
            ✉{' '}
            <a href="mailto:careers@cramergroup.com">
              careers@cramergroup.com
            </a>
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="fb">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Cramer Group. All rights reserved.
          </span>

          <span className="ftag">
            Engineering<b>|</b>Projects<b>|</b>Mentoring
          </span>
        </div>
      </div>
    </footer>
  )
}
