import { useState } from 'react'
import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { FAQ, CONTENT_EN } from '../data/content.js'

export default function FaqSection() {
  const [open, setOpen] = useState(null)
  const { lang } = useLang()
  const en = CONTENT_EN.faq

  const label = lang === 'en' ? en.sectionLabel : 'Domande frequenti'
  const title = lang === 'en' ? en.sectionTitle : 'FAQ'
  const items = lang === 'en' ? en.items : FAQ

  return (
    <section className="section-wrap" id="faq">
      <div className="container">
        <SectionHeader label={label} title={title} />
        <div className="faq-list">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`faq-item card ${isOpen ? 'faq-open' : ''}`} onClick={() => setOpen(isOpen ? null : i)}>
                <div className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-chevron">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
