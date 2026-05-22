import SectionHeader from '../components/SectionHeader.jsx'
import { SCREENSHOTS } from '../data/content.js'

/* Colori di sfondo diversi per ogni placeholder */
const BG_COLORS = ['#001418', '#12000a', '#000e18', '#0a1000', '#120008', '#000a18']

function ScreenPlaceholder({ index }) {
  return (
    <div className="screen-preview" style={{ background: BG_COLORS[index % BG_COLORS.length] }}>
      <div className="screen-scanlines" />
      <div className="screen-glow" />
      <span className="screen-placeholder-text">[ SCREENSHOT ]</span>
    </div>
  )
}

export default function Screenshots() {
  return (
    <section className="section-wrap" id="screenshot" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label="Demo & Screenshot" title="Il sistema in azione" />

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          {'// Sostituisci i placeholder importando le immagini reali in src/assets/'}
        </p>

        <div className="screens-grid">
          {SCREENSHOTS.map((s, i) => (
            <div className="card screen-card" key={s.label}>
              <ScreenPlaceholder index={i} />
              <div className="screen-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
