import { useLang } from '../context/LangContext.jsx'
import { HERO, CONTENT_EN } from '../data/content.js'

export default function Hero() {
  const { lang } = useLang()
  const h = lang === 'en' ? CONTENT_EN.hero : HERO
  return (
    <div className="hero-wrap" id="home">
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">
          <div className="hero-eyebrow anim-fade-up delay-1">
            <span className="hero-eyebrow-line" />
            {h.eyebrow}
          </div>
          <h1 className="hero-title anim-fade-up delay-2">
            SAFE<span className="accent"> VR</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', letterSpacing: '0.15em', marginBottom: '1rem', opacity: 0.75 }} className="anim-fade-up delay-2">
            Simulate And Feel Emergencies
          </p>
          <p className="hero-sub anim-fade-up delay-3">{h.description}</p>
          <p className="hero-school anim-fade-up delay-3">{h.school}</p>
          <div className="hero-cta anim-fade-up delay-4">
            <a href={h.ctaPrimary.href}   className="btn btn-primary">{h.ctaPrimary.label}</a>
            <a href={h.ctaSecondary.href} className="btn btn-ghost">{h.ctaSecondary.label}</a>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hex-ring hex-ring-1" />
        <div className="hex-ring hex-ring-2" />
        <div className="hex-ring hex-ring-3" />
        <div className="hex-core" />
      </div>
    </div>
  )
}
