import { HERO } from '../data/content.js'

export default function Hero() {
  return (
    <div className="hero-wrap" id="home">
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">
          <div className="hero-eyebrow anim-fade-up delay-1">
            <span className="hero-eyebrow-line" />
            {HERO.eyebrow}
          </div>
          <h1 className="hero-title anim-fade-up delay-2">
            Safety<span className="accent">VR</span>
          </h1>
          <p className="hero-sub anim-fade-up delay-3">{HERO.description}</p>
          <p className="hero-school anim-fade-up delay-3">{HERO.school}</p>
          <div className="hero-cta anim-fade-up delay-4">
            <a href={HERO.ctaPrimary.href}   className="btn btn-primary">{HERO.ctaPrimary.label}</a>
            <a href={HERO.ctaSecondary.href} className="btn btn-ghost">{HERO.ctaSecondary.label}</a>
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
