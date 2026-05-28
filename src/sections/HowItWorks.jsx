import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { HOW, CONTENT_EN } from '../data/content.js'

export default function HowItWorks() {
  const { lang } = useLang()
  const en = CONTENT_EN.how

  const label = lang === 'en' ? en.sectionLabel : 'Come funziona'
  const title = lang === 'en' ? en.sectionTitle : 'Il flusso della simulazione'
  const flow  = lang === 'en' ? en.flow : HOW.flow

  return (
    <section className="section-wrap" id="come-funziona" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="flow-grid">
          {flow.map(step => (
            <div className="card flow-card" key={step.num}>
              <div className="flow-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
