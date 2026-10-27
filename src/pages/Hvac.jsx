import PageBanner from '../components/PageBanner/PageBanner'
import Accordion from '../components/Accordion/Accordion'
import Media from '../components/Media/Media'
import Reveal from '../components/Reveal/Reveal'
import CTABand from '../components/CTABand/CTABand'
import { IMG } from '../data/media'
import { HVAC, MEP } from '../data/content'
import './Pages.css'

const HVAC_CAROUSEL_TOP = [
  { label: '01 / HVAC', title: 'VRF & VRV Climate Systems' },
  { label: '02 / MECHANICAL', title: 'Central Chilled Water Plants' },
  { label: '03 / AIR SYSTEMS', title: 'Air Handling Units & Ductwork' },
  { label: '04 / CONTROLS', title: 'Building Management Systems' },
  { label: '05 / EFFICIENCY', title: 'Energy Optimisation Solutions' },
  { label: '06 / COMFORT', title: 'Indoor Environmental Quality' },
]

const HVAC_CAROUSEL_BOTTOM = [
  { label: '01 / ENGINEERING', title: 'Mechanical Design Coordination' },
  { label: '02 / INSTALLATION', title: 'Precision HVAC Installation' },
  { label: '03 / COMMISSIONING', title: 'Testing & Commissioning' },
  { label: '04 / MAINTENANCE', title: 'Preventive Maintenance Planning' },
  { label: '05 / PERFORMANCE', title: 'System Performance Optimisation' },
  { label: '06 / DELIVERY', title: 'Integrated Project Delivery' },
]

function HvacCarouselRow({ items, direction }) {
  // Duplicate items for a continuous marquee effect.
  const repeatedItems = [...items, ...items]

  return (
    <div className="hvac-carousel-row">
      <div className={`hvac-carousel-track hvac-carousel-track--${direction}`}>
        {repeatedItems.map((item, index) => (
          <article
            className="hvac-carousel-item"
            key={`${direction}-${item.label}-${index}`}
          >
            <span>{item.label}</span>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Hvac() {
  return (
    <>
      <PageBanner
        crumb="Services / HVAC"
        title="HVAC & Mechanical Engineering Services"
        sub="We engineer climate systems that optimize energy efficiency, lower lifecycle costs, and guarantee healthy indoor air for hospitals, offices, and industrial hubs."
        img={IMG.hvac}
      />

      {/* EXISTING CAPABILITIES SECTION — PRESERVED */}
      <section className="section">
        <div className="container split">
          <Reveal dir="left">
            <span className="eyebrow">Capabilities</span>

            <h2 className="title">
              Engineered for IEQ, Compliance &amp; Efficiency
            </h2>

            <p className="lead" style={{ marginBottom: 26 }}>
              VRF/VRV, central chilled water, packaged rooftop units, AHUs
              and dedicated ductwork design.
            </p>

            <Accordion items={HVAC} />
          </Reveal>

          <Reveal dir="right">
            <Media src={IMG.plant} className="tall" />
          </Reveal>
        </div>
      </section>

      {/* EXISTING MEP SECTION — PRESERVED */}
      <section id="mep" className="section alt">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Comprehensive MEP</span>
              <h2 className="title">Facility Engineering Disciplines</h2>
            </div>
          </Reveal>

          <div className="grid g3" style={{ marginTop: 44 }}>
            {MEP.map(([icon, title, description], index) => (
              <Reveal key={title} delay={(index % 3) * 120}>
                <div className="card">
                  <div style={{ fontSize: '2rem' }}>{icon}</div>

                  <h3 style={{ margin: '10px 0 8px' }}>{title}</h3>

                  <p style={{ color: 'var(--muted)' }}>
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW HVAC ANIMATED CAROUSELS */}
      <section className="hvac-carousel-section" aria-label="HVAC engineering services">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Engineering Excellence</span>
              <h2 className="title">HVAC Solutions in Motion</h2>
              <p className="lead">
                From system design to commissioning, we deliver integrated
                mechanical engineering solutions.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Top row: Left to right */}
        <HvacCarouselRow
          items={HVAC_CAROUSEL_TOP}
          direction="right"
        />

        {/* Bottom row: Right to left */}
        <HvacCarouselRow
          items={HVAC_CAROUSEL_BOTTOM}
          direction="left"
        />
      </section>

      {/* EXISTING CTA — PRESERVED */}
      <CTABand
        title="Download Our HVAC Capability Statement"
        text="Get a full overview of our HVAC engineering, BMS and maintenance services."
        btn="Download HVAC Capability Statement"
      />
    </>
  )
}