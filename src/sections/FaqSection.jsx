import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { FAQ } from '../data/content.js'

export default function FaqSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section-wrap" id="faq" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label="Domande frequenti" title="FAQ" />

        <div className="faq-list">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`faq-item card ${isOpen ? 'faq-open' : ''}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
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
