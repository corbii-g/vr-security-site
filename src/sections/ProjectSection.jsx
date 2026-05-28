import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { PROJECT, CONTENT_EN } from '../data/content.js'

export default function ProjectSection() {
  const { lang } = useLang()
  const p  = lang === 'en' ? CONTENT_EN.project : null
  const it = PROJECT

  const intro     = p ? p.intro     : it.intro
  const goal      = p ? p.goal      : it.goal
  const highlight = p ? p.highlight : it.highlight
  const scenarios = p ? p.scenarios : it.scenarios
  const stats     = p ? p.stats     : it.stats
  const label     = p ? p.sectionLabel : 'Il Progetto'
  const title     = p ? p.sectionTitle : 'SafetyVR — Di cosa si tratta'
  const scenLabel = p ? p.scenariosLabel : 'SCENARI:'

  return (
    <section className="section-wrap" id="progetto">
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="about-grid">
          <div>
            <div className="about-text">
              <p>{intro}</p>
              <p>{goal}</p>
            </div>
            <div className="about-highlight">{highlight}</div>
            <div className="scenario-tags">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', alignSelf: 'center' }}>{scenLabel}</span>
              {scenarios.map(s => (
                <span key={s.label} className={`scenario-badge ${s.cls}`}>{s.label}</span>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map(s => (
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
