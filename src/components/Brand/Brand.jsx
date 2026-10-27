import { Link } from 'react-router-dom'
import './Brand.css'

/* Logo lock-up: QG emblem + CRAMER GROUP wordmark + tagline underneath.
   size = "md" (header) | "lg" (footer) */
export default function Brand({ size = 'md', onClick }) {
  return (
    <Link to="/" className={`brand brand-${size}`} onClick={onClick} aria-label="Cramer Group home">
      <img className="brand-mark" src="/logo-emblem.png" alt="" />
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
