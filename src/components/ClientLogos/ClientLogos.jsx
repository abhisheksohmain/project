
import { CLIENTS } from '../../data/content';
import './ClientLogos.css';

export default function ClientLogos() {
  const clients = [...CLIENTS];

  if (!clients.length) return null;

  return (
    <section className="cl">
      <p
        className="eyebrow center"
        style={{ display: 'block' }}
      >
        Sectors We Serve &amp; Trusted By
      </p>

      {/* First row: Right to left */}
      <div className="trk">
        <div className="mv mv-left">
          {[...clients, ...clients].map((client, i) => (
            <span key={`left-${i}`}>{client}</span>
          ))}
        </div>
      </div>

      {/* Second row: Left to right */}
      <div className="trk">
        <div className="mv mv-right">
          {[...clients, ...clients].map((client, i) => (
            <span key={`right-${i}`}>{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
