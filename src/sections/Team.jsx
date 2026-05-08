import SectionHeader from '../components/SectionHeader.jsx'
import { TEAM, SITE } from '../data/content.js'

export default function Team() {
  return (
    <section className="section-wrap" id="team">
      <div className="container">
        <SectionHeader label="Il Team" title="Chi ha realizzato SafetyVR" />

        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '0.5rem', fontSize: '0.97rem' }}>
          Un gruppo di studenti dell&apos;{SITE.school} che ha unito competenze
          di programmazione, modellazione 3D e game design per realizzare questo progetto.
        </p>

        <div className="team-grid">
          {TEAM.map(m => (
            <div className="card team-card" key={m.initials + m.name}>
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
