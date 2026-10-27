
import { Link } from 'react-router-dom'
import './Brand.css'

export default function Brand({ size = 'md', onClick }) {
  const logoPath = `${import.meta.env.BASE_URL}logo-emblem.png`

  return (
    <Link
      to="/"
      className={`brand brand-${size}`}
      onClick={onClick}
      aria-label="Cramer Group home"
    >
      <img
        className="brand-mark"
        src={logoPath}
        alt="Cramer Group logo"
      />

      <span className="brand-text">
        <span className="brand-name">CRAMER</span>
        <span className="brand-group">GROUP</span>
        <span className="brand-tag">
          Engineering<b>|</b>Projects<b>|</b>Mentoring
        </span>
      </span>
    </Link>
  )
}
