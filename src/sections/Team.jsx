import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { TEAM, SITE, CONTENT_EN } from '../data/content.js'

export default function Team() {
  const { lang } = useLang()
  const en = CONTENT_EN.team

  const label = lang === 'en' ? en.sectionLabel : 'Il Team'
  const title = lang === 'en' ? en.sectionTitle : 'Chi ha realizzato SafetyVR'
  const intro = lang === 'en'
    ? en.intro
    : `Un gruppo di studenti dell'${SITE.school} che ha unito competenze di programmazione, modellazione 3D e sviluppo VR per realizzare questo progetto.`

  return (
    <section className="section-wrap" id="team">
      <div className="container">
        <SectionHeader label={label} title={title} />
        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '2rem', fontSize: '0.97rem' }}>{intro}</p>
        <div className="team-grid">
          {TEAM.map(m => (
            <div className="card team-card" key={m.name}>
              <div className="team-avatar">{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
