# SafetyVR — Sito del Progetto

## Avvio rapido
```bash
npm install
npm run dev
```
Apri **http://localhost:5173**

## Struttura
```
src/
├── data/content.js          ← TUTTI i testi (modifica solo qui)
├── components/              ← Navbar, Footer, SectionHeader, ScrollUtils
├── sections/                ← Hero, ProjectSection, HowItWorks, Timeline,
│                               Features, Screenshots, FaqSection, Team
└── styles/                  ← global.css, animations.css, components.css, sections.css
```

## Come modificare
- **Testi/dati** → `src/data/content.js`
- **Colori** → `src/styles/global.css` (variabili `--cyan`, `--amber`)
- **Screenshot reali** → metti le immagini in `src/assets/`, importale in `Screenshots.jsx`
- **Team** → array `TEAM` in `content.js`
- **FAQ** → array `FAQ` in `content.js`
- **Timeline** → array `TIMELINE` in `content.js`
