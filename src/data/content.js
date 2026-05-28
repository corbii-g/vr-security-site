/* ================================================================
   CONTENT.JS — Qui puoi modificare TUTTI i testi del sito.
   Cerca la sezione che vuoi cambiare, modifica il testo
   tra le virgolette e salva. Il sito si aggiorna in automatico.
   ================================================================ */


/* ----------------------------------------------------------------
   INFORMAZIONI GENERALI DEL SITO
   ---------------------------------------------------------------- */
export const SITE = {
  // Nome del progetto (appare nella navbar)
  title: 'SAFE VR',

  // Nome della scuola (appare nel footer)
  school: 'ITIS Archimede — Treviglio',
}


/* ----------------------------------------------------------------
   SEZIONE 1 — HERO (prima schermata)
   ---------------------------------------------------------------- */
export const HERO = {
  // Piccola scritta sopra il titolo
  eyebrow: 'Progetto scolastico · ITIS Archimede',

  // Testo descrittivo sotto il titolo
  description: `Simulate And Feel Emergencies — una soluzione in realtà virtuale
  progettata per la simulazione, l'addestramento e l'ottimizzazione
  delle procedure di evacuazione in edifici complessi.`,

  // Scritta in arancione sotto la descrizione
  school: 'ITIS Archimede · Treviglio · BG',

  // Bottone principale
  ctaPrimary:   { label: 'Scopri il progetto', href: '#progetto' },

  // Bottone secondario
  ctaSecondary: { label: 'Guarda la demo →',   href: '#screenshot' },
}


/* ----------------------------------------------------------------
   SEZIONE 2 — IL PROGETTO
   ---------------------------------------------------------------- */
export const PROJECT = {
  // Primo paragrafo
  intro: `Le tradizionali prove di evacuazione risultano spesso poco efficaci
  a causa della mancanza di coinvolgimento e della staticità dei protocolli.
  SAFE VR trasforma l'addestramento in un'esperienza immersiva, permettendo
  agli utenti di testare i propri tempi di reazione in scenari di emergenza realistici.`,

  // Secondo paragrafo
  goal: `Grazie alla sua architettura modulare, il sistema è scalabile e può essere
  adattato rapidamente a qualsiasi planimetria 3D. L'attuale istanza include la
  mappatura dettagliata dell'ITIS Archimede di Treviglio, ma il sistema è progettato
  per importare ed elaborare qualsiasi modello 3D architettonico: aziende, ospedali,
  centri commerciali, altre scuole.`,

  // Riquadro evidenziato
  highlight: `> Architettura scalabile: una volta inserito il modello 3D, gli algoritmi
di navigazione si adattano automaticamente alla nuova planimetria.`,

  // Badge scenari
  scenarios: [
    { label: ' Incendio',     cls: 'badge-fire'  },
    { label: ' Terremoto',    cls: 'badge-quake' },
    { label: ' Nube tossica', cls: 'badge-toxic' },
  ],

  // Statistiche (value = numero grande, label = descrizione)
  stats: [
    { value: '3',      label: 'Scenari di emergenza'     },
    { value: 'A*',     label: 'Algoritmo pathfinding'    },
    { value: '∞',      label: 'Edifici supportati'       },
  ],
}


/* ----------------------------------------------------------------
   SEZIONE 3 — COME FUNZIONA (3 step)
   ---------------------------------------------------------------- */
export const HOW = {
  flow: [
    {
      num: '01',
      title: 'Scegli lo scenario',
      desc: `Seleziona il tipo di emergenza tra Incendio, Terremoto o Nube Tossica
             e avvia la simulazione.`,
    },
    {
      num: '02',
      title: 'Generazione casuale',
      desc: `Il sistema ti posiziona in un punto casuale dell'edificio ad ogni avvio,
             costringendoti a orientarti e trovare la via di fuga più vicina.`,
    },
    {
      num: '03',
      title: 'Raggiungi l\'uscita',
      desc: `La simulazione si conclude correttamente solo quando raggiungi
             l'uscita di emergenza corretta, garantendo il completamento della procedura.`,
    },
  ],
}


/* ----------------------------------------------------------------
   SEZIONE 4 — TIMELINE
   ---------------------------------------------------------------- */
export const TIMELINE = [
  {
    date:  'Gen 2025',
    label: 'Avvio progetto',
    desc:  'Definizione dei requisiti, scelta delle tecnologie e suddivisione dei ruoli nel gruppo.',
  },
  {
    date:  'Feb 2025',
    label: 'Modellazione 3D',
    desc:  "Ricostruzione fedele della planimetria dell'ITIS Archimede in Blender e AutoCAD.",
  },
  {
    date:  'Mar 2025',
    label: 'Sviluppo core',
    desc:  'Implementazione della logica VR, algoritmo A* di pathfinding e scenari di emergenza.',
  },
  {
    date:  'Apr 2025',
    label: 'Test e ottimizzazione',
    desc:  'Sessioni di test con utenti reali, raccolta feedback e ottimizzazione delle performance VR.',
  },
  {
    date:  'Mag 2025',
    label: 'Consegna finale',
    desc:  'Deploy, documentazione e realizzazione del sito di presentazione su Vercel.',
  },
]


/* ----------------------------------------------------------------
   SEZIONE 5 — FUNZIONALITÀ
   ---------------------------------------------------------------- */
export const FEATURES = [
  {
    title: 'Esperienza immersiva',
    desc:  'Supporto nativo per visori VR e modalità Desktop tradizionale, garantendo massima accessibilità a prescindere dall\'hardware disponibile.',
  },
  {
    title: 'Scalabilità dinamica',
    desc:  'Gli algoritmi analizzano il modello 3D importato per generare automaticamente percorsi di navigazione e gestire le dinamiche di evacuazione su qualsiasi edificio.',
  },
  {
    title: 'Algoritmo Pathfinder A*',
    desc:  'Sistema di navigazione intelligente per il calcolo delle vie di fuga ottimali, implementato tramite algoritmo A* custom integrato con Unity NavMesh.',
  },
  {
    title: 'Gestione dell\'emergenza',
    desc:  'Simulazione realistica dei flussi di uscita e dei comportamenti da adottare sotto stress, con tre scenari distinti: Incendio, Terremoto e Nube Tossica.',
  },
  {
    title: 'Supporto multi-piano',
    desc:  'Gestione verticale della navigazione per strutture disposte su più livelli, con indicatori di piano in tempo reale.',
  },
  {
    title: 'Generazione casuale',
    desc:  'Punto di partenza casuale ad ogni sessione: l\'utente non può memorizzare un percorso fisso, rendendo ogni simulazione una sfida reale.',
  },
]


/* ----------------------------------------------------------------
   SEZIONE 6 — STACK TECNOLOGICO
   ---------------------------------------------------------------- */
export const TECH_STACK = [
  {
    category: 'Simulazione VR / Desktop',
    items: [
      { label: 'Game Engine',    value: 'Unity'                          },
      { label: 'Linguaggio',     value: 'C#'                             },
      { label: 'VR SDK',         value: 'XR Interaction Toolkit / OpenXR' },
    ],
  },
  {
    category: 'Modellazione 3D',
    items: [
      { label: 'Software',       value: 'AutoCAD, Blender'               },
    ],
  },
  {
    category: 'Sito web',
    items: [
      { label: 'Framework',      value: 'React (Vite)'                   },
      { label: 'Linguaggi',      value: 'JavaScript, HTML, CSS'          },
      { label: 'Deployment',     value: 'Vercel'                         },
    ],
  },
]


/* ----------------------------------------------------------------
   SEZIONE 7 — FEATURE FUTURE
   ---------------------------------------------------------------- */
export const FUTURE = [
  {
    title: 'Audio & Visual Overhaul',
    desc:  'Sistemi audio spaziali ed effetti particellari avanzati per aumentare il realismo degli scenari.',
  },
  {
    title: 'Sistema di difficoltà',
    desc:  'Variabili di difficoltà configurabili: ostacoli imprevisti, blocchi delle uscite, timer stringenti.',
  },
  {
    title: 'Interattività avanzata',
    desc:  'Interazione fisica con oggetti di emergenza: utilizzo corretto degli estintori, apertura porte antincendio.',
  },
  {
    title: 'Dashboard delle statistiche',
    desc:  'Dashboard riassuntiva delle prestazioni: tempi di reazione, percorsi scelti e punti di debolezza dell\'utente.',
  },
  {
    title: 'Punti di raccolta esterni',
    desc:  'Estensione della simulazione fino al punto di raccolta esterno, con gestione del conteggio presenze.',
  },
]


/* ----------------------------------------------------------------
   SEZIONE 8 — SCREENSHOT / DEMO
   ---------------------------------------------------------------- */
export const SCREENSHOTS = [
]


/* ----------------------------------------------------------------
   SEZIONE 9 — FAQ
   ---------------------------------------------------------------- */
export const FAQ = [
  {
    q: 'Funziona senza un visore VR?',
    a: 'Sì, il software supporta anche la modalità desktop con mouse e tastiera. L\'esperienza ottimale è progettata per visori OpenXR compatibili, ma non è un requisito obbligatorio.',
  },
  {
    q: 'Può essere usato in edifici diversi dall\'ITIS Archimede?',
    a: 'Sì. L\'architettura è modulare e scalabile: basta importare un modello 3D dell\'edificio (azienda, ospedale, scuola...) e gli algoritmi di navigazione si adattano automaticamente alla nuova planimetria.',
  },
  {
    q: 'Quanto dura una simulazione?',
    a: 'Dipende dallo scenario e dal punto di partenza casuale, ma una sessione si conclude mediamente in 3–7 minuti, paragonabile a una prova di evacuazione reale.',
  },
  {
    q: 'I dati delle sessioni vengono salvati?',
    a: 'Nella versione attuale no — l\'applicazione è stand-alone e offline. La Dashboard delle Statistiche è prevista come feature futura.',
  },
  {
    q: 'Quali visori sono supportati?',
    a: 'Grazie allo standard OpenXR tramite XR Interaction Toolkit, il sistema è compatibile con i principali visori sul mercato (Meta Quest, HTC Vive, Valve Index e altri).',
  },
]


/* ----------------------------------------------------------------
   SEZIONE 10 — TEAM
   ---------------------------------------------------------------- */
export const TEAM = [
  { initials: 'AB', name: 'Andrea Bagnato',    role: 'Sviluppo sito React'     },
  { initials: 'GC', name: 'Gioia Chen',        role: 'Sviluppo simulazione VR' },
  { initials: 'GC', name: 'Gabriele Corbetta', role: '3D Modelling'            },
]


/* ================================================================
   TRADUZIONE INGLESE
   ================================================================ */
export const CONTENT_EN = {
  site: { title: 'SAFE VR', school: 'ITIS Archimede — Treviglio' },
  hero: {
    eyebrow:      'School project · ITIS Archimede',
    description:  `Simulate And Feel Emergencies — an advanced VR solution
    designed for simulation, training and optimisation of evacuation
    procedures in complex buildings.`,
    school:       'ITIS Archimede · Treviglio · Italy',
    ctaPrimary:   { label: 'Discover the project', href: '#progetto' },
    ctaSecondary: { label: 'Watch the demo →',     href: '#screenshot' },
  },
  project: {
    sectionLabel:  'The Project',
    sectionTitle:  'SAFE VR — What it is',
    intro: `Traditional evacuation drills are often ineffective due to lack of
    engagement and static protocols. SAFE VR transforms training into an immersive
    experience, allowing users to test their reaction times in realistic emergency scenarios.`,
    goal: `Thanks to its modular architecture, the system is scalable and can be quickly
    adapted to any 3D floor plan. The current instance includes a detailed mapping of
    ITIS Archimede in Treviglio, but the system is designed to import any 3D architectural
    model: companies, hospitals, shopping centres, other schools.`,
    highlight: `> Scalable architecture: once a 3D model is imported, the navigation algorithms
automatically adapt to the new floor plan.`,
    scenariosLabel: 'SCENARIOS:',
    scenarios: [
      { label: 'Fire',        cls: 'badge-fire'  },
      { label: 'Earthquake',  cls: 'badge-quake' },
      { label: 'Toxic cloud', cls: 'badge-toxic' },
    ],
    stats: [
      { value: '3',    label: 'Emergency scenarios'  },
      { value: 'A*',   label: 'Pathfinding algorithm' },
      { value: '∞',    label: 'Buildings supported'  },
    ],
  },
  how: {
    sectionLabel: 'How it works',
    sectionTitle: 'Simulation flow',
    flow: [
      { num: '01', title: 'Choose the scenario',      desc: 'Select the emergency type — Fire, Earthquake or Toxic Cloud — and start the simulation.' },
      { num: '02', title: 'Random generation',    desc: 'The system places you at a random point in the building each time, forcing you to navigate to the nearest exit.' },
      { num: '03', title: 'Reach the emergency exit', desc: 'The simulation ends correctly only when you reach the correct emergency exit, ensuring the full procedure is completed.' },
    ],
  },
  timeline: {
    sectionLabel: 'Process',
    sectionTitle: 'Development timeline',
    items: [
      { date: 'Jan 2025', label: 'Project kickoff',        desc: 'Requirements definition, technology selection and role assignment.' },
      { date: 'Feb 2025', label: '3D Modelling',           desc: 'Faithful reconstruction of ITIS Archimede in Blender and AutoCAD.' },
      { date: 'Mar 2025', label: 'Core development',       desc: 'VR logic, A* pathfinding algorithm and emergency scenarios.' },
      { date: 'Apr 2025', label: 'Testing & optimisation', desc: 'Real-user test sessions, feedback collection and performance tuning.' },
      { date: 'May 2025', label: 'Final delivery',         desc: 'Deployment, documentation and presentation website on Vercel.' },
    ],
  },
  features: {
    sectionLabel: 'Features',
    sectionTitle: 'What the system offers',
    items: [
      { title: 'Immersive experience',    desc: 'Native support for VR headsets and traditional Desktop mode, ensuring maximum accessibility.' },
      { title: 'Dynamic scalability',     desc: 'Algorithms analyse the imported 3D model to automatically generate navigation paths for any building.' },
      { title: 'A* Pathfinder algorithm', desc: 'Intelligent navigation system for calculating optimal escape routes, implemented via custom A* algorithm with Unity NavMesh.' },
      { title: 'Emergency management',    desc: 'Realistic simulation of evacuation flows and stress behaviours across three distinct scenarios.' },
      { title: 'Multi-floor support',     desc: 'Vertical navigation management for multi-level structures with real-time floor indicators.' },
      { title: 'Random generation',   desc: 'Random starting point each session — the user cannot memorise a fixed route, making every simulation a real challenge.' },
    ],
  },
  future: {
    sectionLabel: 'Roadmap',
    sectionTitle: 'Future features',
    items: [
      { title: 'Audio & Visual Overhaul',   desc: 'Spatial audio systems and advanced particle effects to increase scenario realism.' },
      { title: 'Difficulty system',         desc: 'Configurable difficulty variables: unexpected obstacles, blocked exits, tight timers.' },
      { title: 'Advanced interactivity',    desc: 'Physical interaction with emergency objects: fire extinguishers, fire doors and more.' },
      { title: 'Statistics dashboard',      desc: 'Summary dashboard of user performance: reaction times, chosen paths and weak points.' },
      { title: 'External assembly points',  desc: 'Extension of the simulation to the outdoor assembly point with headcount management.' },
    ],
  },
  screenshots: {
    sectionLabel: 'Demo & Screenshots',
    sectionTitle: 'The system in action',
    placeholder:  '// Replace placeholders by importing real images into src/assets/',
    items: [
      { label: 'Scenario configuration menu'     },
      { label: 'Corridor view — Fire scenario'   },
      { label: 'Classroom view — Earthquake'     },
      { label: 'Emergency exit'                  },
      { label: 'Session result screen'           },
      { label: 'A* navigation map'               },
    ],
  },
  faq: {
    sectionLabel: 'Frequently asked questions',
    sectionTitle: 'FAQ',
    items: [
      { q: 'Does it work without a VR headset?',        a: 'Yes, the software also supports standard Desktop mode with mouse and keyboard. A VR headset is not required.' },
      { q: 'Can it be used in other buildings?',        a: 'Yes. The modular architecture allows importing any 3D model — companies, hospitals, schools — and the algorithms adapt automatically.' },
      { q: 'How long does an average simulation last?', a: 'It depends on the scenario and random starting point, but sessions typically conclude in 3–7 minutes.' },
      { q: 'Is session data saved?',                    a: 'Not in the current version. The Statistics Dashboard is planned as a future feature.' },
      { q: 'Which headsets are supported?',             a: 'Thanks to OpenXR via XR Interaction Toolkit: Meta Quest, HTC Vive, Valve Index and others.' },
    ],
  },
  team: {
    sectionLabel: 'The Team',
    sectionTitle: 'Who built SAFE VR',
    intro: 'A group of students from ITIS Archimede, Treviglio, combining VR development, 3D modelling and web skills.',
  },
  footer: { copy: 'School project · Group work' },
  nav: [
    { label: 'Project',      href: '#progetto'      },
    { label: 'How it works', href: '#come-funziona' },
    { label: 'Timeline',     href: '#timeline'      },
    { label: 'Features',     href: '#funzionalita'  },
    { label: 'Future',       href: '#future'        },
    { label: 'Demo',         href: '#screenshot'    },
    { label: 'FAQ',          href: '#faq'           },
    { label: 'Team',         href: '#team'          },
  ],
}
