import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { TIMELINE, CONTENT_EN } from '../data/content.js'

export default function Timeline() {
  const { lang } = useLang()
  const en = CONTENT_EN.timeline

  const label = lang === 'en' ? en.sectionLabel : 'Processo'
  const title = lang === 'en' ? en.sectionTitle : 'Timeline di sviluppo'
  const items = lang === 'en' ? en.items : TIMELINE

  return (
    <section className="section-wrap" id="timeline">
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="timeline-track">
          {items.map((item, i) => (
            <div className="timeline-item" key={item.date}>
              <div className="timeline-left">
                <span className="timeline-date">{item.date}</span>
              </div>
              <div className="timeline-center">
                <div className="timeline-dot" />
                {i < items.length - 1 && <div className="timeline-line" />}
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
