import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { TECH_STACK } from '../data/content.js'

export default function TechStack() {
  const { lang } = useLang()
  const label = lang === 'en' ? 'Technology' : 'Tecnologie'
  const title = lang === 'en' ? 'Tech stack' : 'Stack tecnologico'

  return (
    <section className="section-wrap" id="stack" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="techstack-grid">
          {TECH_STACK.map(group => (
            <div className="card techstack-card" key={group.category}>
              <h3 className="techstack-category">{group.category}</h3>
              <div className="techstack-items">
                {group.items.map(item => (
                  <div className="techstack-row" key={item.label}>
                    <span className="techstack-label">{item.label}</span>
                    <span className="techstack-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
