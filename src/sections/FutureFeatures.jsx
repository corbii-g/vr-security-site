import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { FUTURE, CONTENT_EN } from '../data/content.js'

export default function FutureFeatures() {
  const { lang } = useLang()
  const en = CONTENT_EN.future

  const label = lang === 'en' ? en.sectionLabel : 'Roadmap'
  const title = lang === 'en' ? en.sectionTitle : 'Feature future'
  const items = lang === 'en' ? en.items : FUTURE

  return (
    <section className="section-wrap" id="future">
      <div className="container">
        <SectionHeader label={label} title={title} />
        <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', marginBottom: '2.5rem', fontSize: '0.97rem' }}>
          {lang === 'en'
            ? 'The project is in continuous evolution. These are the next planned milestones.'
            : 'Il progetto è in costante evoluzione. Queste sono le prossime milestone pianificate.'}
        </p>
        <div className="future-grid">
          {items.map((f, i) => (
            <div className="card future-card" key={f.title}>
              <span className="future-icon">{f.icon}</span>
              <h3 className="future-title">{f.title}</h3>
              <p className="future-desc">{f.desc}</p>
              <span className="future-badge">
                {lang === 'en' ? 'Coming soon' : 'In arrivo'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
