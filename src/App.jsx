import { useState } from 'react'

// ── DATA – modifica questi dati con le info del tuo progetto ──────────────────

const PROJECT_NAME = 'VR SECURE'
const PROJECT_SUBTITLE = 'Sicurezza nel Mondo Virtuale'
const PROJECT_DESCRIPTION =
  'Un sistema innovativo che integra la realtà virtuale con protocolli di sicurezza avanzati, permettendo simulazioni di ambienti protetti e formazione immersiva per esperti di cybersecurity.'

const TEAM_MEMBERS = [
  { initials: 'TU', name: 'Il Tuo Nome', role: 'Lead Developer' },
  { initials: 'M2', name: 'Membro 2', role: 'Backend Dev' },
  { initials: 'M3', name: 'Membro 3', role: 'UX / Design' },
  { initials: 'M4', name: 'Membro 4', role: 'Security Expert' },
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Analisi dei Requisiti',
    desc: 'Abbiamo definito gli obiettivi del progetto, analizzato le esigenze degli utenti e stabilito le linee guida di sicurezza da rispettare.',
  },
  {
    num: '02',
    title: 'Progettazione dell\'Architettura',
    desc: 'Abbiamo progettato l\'architettura del sistema VR, definendo i moduli di sicurezza, i flussi di dati e le interfacce tra i componenti.',
  },
  {
    num: '03',
    title: 'Sviluppo e Integrazione',
    desc: 'Sviluppo iterativo con sprint settimanali, integrazione continua e code review tra i membri del gruppo.',
  },
  {
    num: '04',
    title: 'Test e Validazione',
    desc: 'Test funzionali, di sicurezza e di usabilità. Simulazioni di attacchi per verificare la robustezza del sistema.',
  },
  {
    num: '05',
    title: 'Deploy e Presentazione',
    desc: 'Deployment dell\'applicazione, documentazione finale e preparazione della demo per la presentazione.',
  },
]

const TECH_STACK = [
  { icon: '⚛️', name: 'React', role: 'Frontend' },
  { icon: '🟢', name: 'Node.js', role: 'Backend' },
  { icon: '🥽', name: 'WebXR', role: 'VR Engine' },
  { icon: '🔐', name: 'JWT / OAuth', role: 'Auth' },
  { icon: '🗄️', name: 'MongoDB', role: 'Database' },
  { icon: '🐳', name: 'Docker', role: 'Container' },
  { icon: '🔒', name: 'TLS / SSL', role: 'Encryption' },
  { icon: '☁️', name: 'AWS', role: 'Cloud' },
]

const FEATURES = [
  {
    title: 'Ambienti VR Sicuri',
    desc: 'Simulazioni di ambienti virtuali con protocolli di sicurezza integrati. Ogni sessione è criptata end-to-end.',
  },
  {
    title: 'Autenticazione Multi-Fattore',
    desc: 'Accesso protetto tramite MFA con biometria, token OTP e verifica del dispositivo VR.',
  },
  {
    title: 'Monitoraggio in Tempo Reale',
    desc: 'Dashboard di sicurezza con log degli accessi, rilevamento anomalie e alert automatici.',
  },
  {
    title: 'Simulazioni di Attacchi',
    desc: 'Moduli formativi per simulare scenari di cyberattacco in ambiente virtuale sicuro e controllato.',
  },
  {
    title: 'Gestione degli Utenti',
    desc: 'Sistema di ruoli e permessi granulari per amministratori, istruttori e partecipanti.',
  },
]

const SCREENSHOTS = [
  { label: 'Dashboard principale' },
  { label: 'Ambiente VR – Scenario 01' },
  { label: 'Pannello di sicurezza' },
  { label: 'Monitor attività' },
  { label: 'Scenario simulazione' },
  { label: 'Report & Analytics' },
]

// ── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">{PROJECT_NAME}</div>
      <ul className="navbar-links">
        {['progetto', 'come-fatto', 'funzionalita', 'screenshot', 'team'].map((id) => (
          <li key={id}>
            <a href={`#${id}`}>{id.replace('-', ' ')}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <div className="hero" id="home">
      <div style={{ maxWidth: '580px' }}>
        <div className="hero-eyebrow animate-fade-up delay-1">
          Progetto di Gruppo
        </div>
        <h1 className="animate-fade-up delay-2">
          <span className="accent">{PROJECT_NAME}</span>
          <br />
          {PROJECT_SUBTITLE}
        </h1>
        <p className="hero-sub animate-fade-up delay-3">
          {PROJECT_DESCRIPTION}
        </p>
        <div className="hero-cta animate-fade-up delay-4">
          <a href="#progetto" className="btn-primary">Scopri il progetto</a>
          <a href="#screenshot" className="btn-secondary">Guarda la demo →</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hex-ring" />
        <div className="hex-ring" />
        <div className="hex-ring" />
        <div className="hex-core" />
      </div>
    </div>
  )
}

function ProjectSection() {
  return (
    <section id="progetto">
      <p className="section-label">Il Progetto</p>
      <h2 className="section-title">Di cosa si tratta</h2>
      <div className="section-divider" />

      <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
        {PROJECT_DESCRIPTION} Il nostro obiettivo era creare una piattaforma che combinasse
        l'immersività della realtà virtuale con standard di sicurezza enterprise.
      </p>

      <div className="project-grid">
        {[
          { icon: '🎯', title: 'Obiettivo', text: 'Creare un sistema sicuro per la formazione immersiva in ambito cybersecurity, accessibile da qualsiasi dispositivo VR.' },
          { icon: '🔬', title: 'Sfida tecnica', text: 'Integrare protocolli di sicurezza avanzati in un ambiente real-time 3D senza compromettere le performance visive.' },
          { icon: '👥', title: 'Target', text: 'Professionisti della sicurezza informatica, aziende e istituti formativi che necessitano di training in ambienti simulati.' },
          { icon: '📈', title: 'Risultato', text: 'Una piattaforma funzionante con latenza sotto i 50ms, autenticazione robusta e scenari di simulazione personalizzabili.' },
        ].map((card) => (
          <div className="project-card" key={card.title}>
            <div className="project-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowWeDidIt() {
  return (
    <section id="come-fatto" className="section-alt">
      <p className="section-label">Come è stato fatto</p>
      <h2 className="section-title">Il nostro processo</h2>
      <div className="section-divider" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div className="process-timeline">
          {PROCESS_STEPS.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-step-num">STEP {step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>Tech Stack</p>
          <div className="tech-grid">
            {TECH_STACK.map((tech) => (
              <div className="tech-badge" key={tech.name}>
                <span className="tech-badge-icon">{tech.icon}</span>
                <span className="tech-badge-name">{tech.name}</span>
                <span className="tech-badge-role">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="funzionalita">
      <p className="section-label">Funzionalità</p>
      <h2 className="section-title">Cosa fa il sistema</h2>
      <div className="section-divider" />

      <div className="features-list">
        {FEATURES.map((f, i) => (
          <div className="feature-item" key={f.title}>
            <span className="feature-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="feature-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ScreenshotPlaceholder({ index }) {
  const colors = ['#001a1f', '#001a10', '#0a0010', '#001a1f', '#001a10', '#0a0010']
  return (
    <div className="screenshot-preview" style={{ background: colors[index % colors.length] }}>
      <div className="screenshot-scanlines" />
      <span style={{ position: 'relative', zIndex: 1 }}>[ SCREENSHOT ]</span>
    </div>
  )
}

function Screenshots() {
  return (
    <section id="screenshot" className="section-alt">
      <p className="section-label">Demo & Screenshot</p>
      <h2 className="section-title">Il sistema in azione</h2>
      <div className="section-divider" />

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
        // Sostituisci i placeholder con gli screenshot reali del tuo progetto
      </p>

      <div className="screenshots-grid">
        {SCREENSHOTS.map((s, i) => (
          <div className="screenshot-card" key={s.label}>
            <ScreenshotPlaceholder index={i} />
            <div className="screenshot-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team">
      <p className="section-label">Il Team</p>
      <h2 className="section-title">Chi ha costruito questo</h2>
      <div className="section-divider" />

      <div className="team-grid">
        {TEAM_MEMBERS.map((m) => (
          <div className="team-card" key={m.initials}>
            <div className="team-avatar">{m.initials}</div>
            <div className="team-name">{m.name}</div>
            <div className="team-role">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>©</span>
      {new Date().getFullYear()} {PROJECT_NAME} — Progetto scolastico / universitario
    </footer>
  )
}

// ── APP ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectSection />
        <HowWeDidIt />
        <Features />
        <Screenshots />
        <Team />
      </main>
      <Footer />
    </>
  )
}
