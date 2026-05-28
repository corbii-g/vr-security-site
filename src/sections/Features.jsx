import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { FEATURES, CONTENT_EN } from '../data/content.js'

export default function Features() {
  const { lang } = useLang()
  const en = CONTENT_EN.features

  const label = lang === 'en' ? en.sectionLabel : 'Funzionalità'
  const title = lang === 'en' ? en.sectionTitle : 'Cosa offre il sistema'
  const items = lang === 'en' ? en.items : FEATURES

  return (
    <section className="section-wrap" id="funzionalita">
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="features-list">
          {items.map((f, i) => (
            <div className="feature-row" key={f.title}>
              <span className="feature-idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
