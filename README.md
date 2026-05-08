# SafetyVR — Sito del Progetto

Sito React + Vite per presentare il progetto **SafetyVR**, simulazione immersiva
per le prove di evacuazione dell'ITIS Archimede di Treviglio.

---

## Avvio rapido

```bash
npm install
npm run dev
```

Apri **http://localhost:5173**

---

## Struttura del progetto

```
src/
├── data/
│   └── content.js          ← TUTTI i testi e dati del sito
├── components/
│   ├── Navbar.jsx           ← Barra di navigazione
│   ├── Footer.jsx           ← Piè di pagina
│   └── SectionHeader.jsx   ← Intestazione riutilizzabile per ogni sezione
├── sections/
│   ├── Hero.jsx             ← Schermata iniziale
│   ├── ProjectSection.jsx  ← Descrizione del progetto + statistiche
│   ├── HowItWorks.jsx      ← Flusso, architettura e tech stack
│   ├── Features.jsx         ← Elenco funzionalità
│   ├── Screenshots.jsx     ← Galleria screenshot / demo
│   └── Team.jsx             ← Membri del gruppo
├── styles/
│   ├── global.css           ← Variabili CSS, reset, layout base
│   ├── animations.css       ← Keyframes e classi animazione
│   ├── components.css       ← Navbar, footer, card, bottoni, badge
│   └── sections.css         ← Stili specifici per ogni sezione
├── App.jsx                  ← Composizione delle sezioni
└── main.jsx                 ← Entry point React
```

---

## Come personalizzare

### 1 — Testi e contenuti → `src/data/content.js`

È l'unico file che devi modificare per aggiornare tutti i testi del sito:

| Variabile   | Cosa modifica                                  |
|-------------|------------------------------------------------|
| `SITE`      | Nome del progetto e scuola                     |
| `HERO`      | Titolo, descrizione e bottoni della hero       |
| `PROJECT`   | Testo introduttivo, obiettivi, statistiche     |
| `HOW`       | Flusso di funzionamento e architettura         |
| `TECH`      | Stack tecnologico (icone, nomi, descrizioni)   |
| `FEATURES`  | Elenco funzionalità                            |
| `SCREENSHOTS` | Etichette degli screenshot                   |
| `TEAM`      | Nomi, iniziali e ruoli dei membri              |

### 2 — Aggiungere screenshot reali

```jsx
// 1. Metti l'immagine in src/assets/
// 2. In src/sections/Screenshots.jsx, importala:
import screen1 from '../assets/screen1.png'

// 3. Sostituisci <ScreenPlaceholder> con:
<img src={screen1} alt="..." style={{ width: '100%' }} />
```

### 3 — Nomi del team → `src/data/content.js`

```js
export const TEAM = [
  { initials: 'MR', name: 'Mario Rossi',   role: 'Lead Developer' },
  { initials: 'LB', name: 'Luca Bianchi',  role: '3D Modelling'  },
  // ...
]
```

---

## Build per produzione

```bash
npm run build    # genera /dist
npm run preview  # anteprima del build
```
