import SectionHeader from '../components/SectionHeader.jsx'
import { FEATURES }  from '../data/content.js'

export default function Features() {
  return (
    <section className="section-wrap" id="funzionalita">
      <div className="container">
        <SectionHeader label="Funzionalità" title="Cosa offre il sistema" />
        <div className="features-list">
          {FEATURES.map((f, i) => (
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
