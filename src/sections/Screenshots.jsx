import { useState, useRef } from 'react'
import { useLang } from '../context/LangContext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { SCREENSHOTS } from '../data/content.js'

import demoSession  from '../assets/videos/demo-session.mp4'
import safeVrIntro  from '../assets/videos/safe-vr-overview.mp4'

const BG_COLORS = ['#001418','#12000a','#000e18','#0a1000','#120008','#000a18']

/* ── Video card con play/pausa ── */
function VideoCard({ src, title, subtitle, tag, accent = 'var(--cyan)' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)

  function toggle() {
    const v = videoRef.current
    if (!v) return
    if (playing) { v.pause(); setPlaying(false) }
    else          { v.play();  setPlaying(true)  }
  }

  return (
    <div
      className="video-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ '--accent': accent }}
    >
      {/* Tag tipo di video */}
      <span className="video-tag" style={{ borderColor: accent, color: accent }}>{tag}</span>

      {/* Video */}
      <div className="video-wrapper" onClick={toggle}>
        <video
          ref={videoRef}
          src={src}
          loop
          playsInline
          style={{ width: '75%', height: '50vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}
          onEnded={() => setPlaying(false)}
        />

        {/* Overlay play/pausa */}
        <div className={`video-overlay ${playing && !hovered ? 'overlay-hidden' : ''}`}>
          <div className="video-play-btn" style={{ borderColor: accent, boxShadow: playing ? 'none' : `0 0 24px ${accent}60` }}>
            {playing
              ? <span className="pause-icon" style={{ borderColor: accent }} />
              : <span className="play-icon"  style={{ borderLeftColor: accent }} />
            }
          </div>
        </div>

        {/* Scanlines */}
        {!playing && <div className="screen-scanlines" />}
      </div>

      {/* Testo */}
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <p className="video-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

/* ── Screenshot placeholder ── */
function ScreenPlaceholder({ index }) {
  return (
    <div className="screen-preview" style={{ background: BG_COLORS[index % BG_COLORS.length] }}>
      <div className="screen-scanlines" />
      <div className="screen-glow" />
      <span className="screen-placeholder-text">[ SCREENSHOT ]</span>
    </div>
  )
}

export default function Screenshots() {
  const { lang } = useLang()
  const en = {
    label: 'Demo & Screenshots', title: 'The system in action',
    video1Title:    'Simulation Session',
    video1Sub:      'Full walkthrough of an active emergency evacuation session: procedural spawn, real-time pathfinding and emergency exit identification.',
    video1Tag:      'LIVE DEMO',
  }
  const it = {
    label: 'Demo & Screenshot', title: 'Il sistema in azione',
    video1Title:    'Sessione di simulazione',
    video1Sub:      'Walkthrough completo di una sessione di evacuazione attiva: spawn procedurale, pathfinding in tempo reale e individuazione dell\'uscita di emergenza.',
    video1Tag:      'LIVE DEMO',
  }
  const t = lang === 'en' ? en : it
  const items = lang === 'en'
    ? [{ label: 'Scenario config' }, { label: 'Fire corridor' }, { label: 'Earthquake' }, { label: 'Emergency exit' }, { label: 'Results screen' }, { label: 'A* nav map' }]
    : SCREENSHOTS

  return (
    <section className="section-wrap" id="screenshot" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,232,255,0.015), transparent)' }}>
      <div className="container">
        <SectionHeader label={t.label} title={t.title} />

        {/* ── Due video principali ── */}
        <div className="videos-grid">
          <VideoCard
            src={demoSession}
            title={t.video1Title}
            subtitle={t.video1Sub}
            tag={t.video1Tag}
            accent="var(--cyan)"
          />
        </div>

        {/* ── Screenshot placeholder ── */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', margin: '3rem 0 0.75rem' }}>
          {t.screensLabel}
        </p>
        <div className="screens-grid">
          {items.map((s, i) => (
            <div className="card screen-card" key={s.label}>
              <ScreenPlaceholder index={i} />
              <div className="screen-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
