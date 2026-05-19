import SectionHeader from '../components/SectionHeader.jsx'
import { TIMELINE } from '../data/content.js'

export default function Timeline() {
  return (
    <section className="section-wrap" id="timeline">
      <div className="container">
        <SectionHeader label="Processo" title="Timeline di sviluppo" />

        <div className="timeline-track">
          {TIMELINE.map((item, i) => (
            <div className="timeline-item" key={item.date}>
              <div className="timeline-left">
                <span className="timeline-date">{item.date}</span>
              </div>
              <div className="timeline-center">
                <div className="timeline-dot" />
                {i < TIMELINE.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-right card">
                <h3 className="timeline-label">{item.label}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
