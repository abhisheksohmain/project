
import { useRef } from 'react'
import './VideoShowcase.css'

export default function VideoShowcase() {
  const videoRef = useRef(null)

  const SHOWREEL = `${import.meta.env.BASE_URL}videos/cramer-showreel.mp4`

  return (
    <section className="section video-showcase video-showcase-bg">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={SHOWREEL} type="video/mp4" />
      </video>

      <div className="video-background-overlay" />

      <div className="container video-showcase-grid">
        <div className="video-showcase-content">
          <span className="eyebrow video-eyebrow">
            <span className="eyebrow-dot" />
            INSIDE CRAMER GROUP
          </span>

          <h2 className="title video-heading">
            See Our Engineering
            <span> in Action.</span>
          </h2>

          <p className="lead video-description">
            From chiller plant rooms to BIM clash detection and live site
            supervision — experience the precision behind every project.
          </p>

          <ul className="ticks vl video-feature-list">
            <li>Design to commissioning under one roof</li>
            <li>Certified TAB &amp; zero-harm site culture</li>
            <li>Mentored teams delivering consistently</li>
          </ul>

          <div className="video-bottom-note">
            <span className="video-note-line" />
            <span>ENGINEERED WITH PRECISION</span>
          </div>
        </div>
      </div>
    </section>
  )
}
