import SectionHeader from '../components/SectionHeader.jsx'
import { PROJECT } from '../data/content.js'

export default function ProjectSection() {
  return (
    <section className="section-wrap" id="progetto">
      <div className="container">
        <SectionHeader label="Il Progetto" title="SafetyVR — Di cosa si tratta" />

        <div className="about-grid">
          {/* Testo descrittivo */}
          <div>
            <div className="about-text">
              <p>{PROJECT.intro}</p>
              <p>{PROJECT.goal}</p>
            </div>

            <div className="about-highlight">{PROJECT.highlight}</div>

            <div className="scenario-tags">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', alignSelf: 'center' }}>
                SCENARI:
              </span>
              {PROJECT.scenarios.map(s => (
                <span key={s.label} className={`scenario-badge ${s.cls}`}>
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Statistiche */}
          <div className="about-stats">
            {PROJECT.stats.map(s => (
              <div className="stat-card" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
