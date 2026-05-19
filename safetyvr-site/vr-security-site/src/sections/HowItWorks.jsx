import SectionHeader  from '../components/SectionHeader.jsx'
import { HOW }        from '../data/content.js'

export default function HowItWorks() {
  return (
    <section className="section-wrap" id="come-funziona" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label="Come funziona" title="Il flusso della simulazione" />
        <div className="flow-grid">
          {HOW.flow.map(step => (
            <div className="card flow-card" key={step.num}>
              <div className="flow-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <SectionHeader label="Note tecniche" title={HOW.archTitle} />
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', marginBottom: '2rem', fontSize: '0.97rem' }}>{HOW.archDesc}</p>
        <div className="arch-grid">
          {HOW.archCards.map(c => (
            <div className="card arch-card" key={c.title}>
              <div className="arch-card-title"><span className="arch-icon">{c.icon}</span>{c.title}</div>
              <p>{c.desc}</p>
              <span className="arch-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
