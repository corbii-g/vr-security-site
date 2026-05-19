import SectionHeader from '../components/SectionHeader.jsx'
import { CHALLENGES } from '../data/content.js'

export default function Challenges() {
  return (
    <section className="section-wrap" id="sfide" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label="Sviluppo" title="Sfide affrontate" />
        <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', marginBottom: '2.5rem', fontSize: '0.97rem' }}>
          I problemi tecnici concreti che abbiamo incontrato durante lo sviluppo e come li abbiamo risolti.
        </p>

        <div className="challenges-grid">
          {CHALLENGES.map(c => (
            <div className="challenge-card card" key={c.problem}>
              <span className="challenge-icon">{c.icon}</span>
              <div className="challenge-body">
                <div className="challenge-problem">
                  <span className="challenge-label">Problema</span>
                  <h3>{c.problem}</h3>
                </div>
                <div className="challenge-divider" />
                <div className="challenge-solution">
                  <span className="challenge-label">Soluzione</span>
                  <p>{c.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
