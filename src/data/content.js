/* ══════════════════════════════════════════════
   DATA — contenuto reale di SafetyVR
   Modifica qui per aggiornare tutto il sito.
   ══════════════════════════════════════════════ */

export const SITE = {
  title:    'SafetyVR',
  subtitle: 'Simulazione Immersiva per la Sicurezza',
  school:   'ITIS Archimede — Treviglio',
}

export const HERO = {
  eyebrow:     'Progetto scolastico · ITIS Archimede',
  titleLine1:  'Safety',
  titleAccent: 'VR',
  titleLine2:  '',
  description: `Un sistema di Realtà Virtuale per trasformare le prove di evacuazione
  in un'esperienza formativa attiva, immersiva e direttamente applicabile
  alla struttura reale dell'istituto.`,
  school: 'ITIS Archimede · Treviglio · BG',
  ctaPrimary:   { label: 'Scopri il progetto', href: '#progetto' },
  ctaSecondary: { label: 'Guarda la demo →',   href: '#screenshot' },
}

export const PROJECT = {
  intro: `Il progetto nasce dall\'esigenza di trasformare le procedure di sicurezza
  scolastica in un\'esperienza formativa attiva e coinvolgente. Utilizzando la
  Realtà Virtuale, abbiamo sviluppato un sistema per la simulazione delle prove
  di evacuazione in un ambiente controllato ad alto impatto psicologico.`,
  goal: `L\'obiettivo primario è preparare studenti e personale docente a gestire
  situazioni critiche con consapevolezza, riducendo i tempi di reazione e lo
  stress da panico. La simulazione è stata mappata e modellata specificatamente
  sulla struttura dell\'ITIS Archimede di Treviglio.`,
  highlight: `> Ogni sessione è generata proceduralmente: l\'utente viene posizionato in un punto
    casuale dell\'edificio e deve individuare autonomamente la via di fuga più vicina.`,
  scenarios: [
    { label: '🔥 Incendio',     cls: 'badge-fire' },
    { label: '🌍 Terremoto',    cls: 'badge-quake' },
    { label: '☣️ Nube tossica', cls: 'badge-toxic' },
  ],
  stats: [
    { value: '3',       label: 'Scenari di emergenza' },
    { value: '100%',    label: 'Stand-alone · no rete' },
    { value: 'ITIS',    label: 'Archimede · Treviglio' },
    { value: '~0ms',    label: 'Latenza · esecuzione locale' },
  ],
}

export const HOW = {
  flow: [
    {
      num: '01',
      title: 'Menu di configurazione',
      desc:  `L\'utente sceglie il tipo di emergenza (Incendio, Terremoto o Nube Tossica)
              e il livello di difficoltà prima di avviare la simulazione.`,
    },
    {
      num: '02',
      title: 'Generazione procedurale',
      desc:  `All\'avvio il sistema posiziona l\'utente in un punto casuale della scuola,
              obbligandolo a orientarsi e a individuare la via di fuga più vicina.`,
    },
    {
      num: '03',
      title: 'Conclusione guidata',
      desc:  `La simulazione si conclude correttamente solo quando l\'utente raggiunge
              il punto di raccolta esterno, garantendo il completamento della procedura.`,
    },
  ],
  archTitle: 'Architettura Stand-alone',
  archDesc:  `Per garantire la massima fluidità VR e l\'indipendenza da infrastrutture
  di rete, il software è progettato per girare nativamente sull\'hardware locale.`,
  archCards: [
    {
      icon: '⚡',
      title: 'Nessuna autenticazione',
      desc:  'Accesso immediato senza login o database esterni, privilegiando la velocità e la semplicità d\'uso.',
      tag:   'No Auth · No DB',
    },
    {
      icon: '🔒',
      title: 'Privacy totale',
      desc:  'Nessun dato viene trasmesso in rete. Il sistema opera completamente offline, senza TLS/SSL o cloud.',
      tag:   'Offline · No Cloud',
    },
    {
      icon: '🖥️',
      title: 'Esecuzione nativa',
      desc:  'Nessuna containerizzazione Docker: l\'app gira direttamente sull\'hardware per prestazioni massime.',
      tag:   'No Docker · Native',
    },
    {
      icon: '🥽',
      title: 'Latenza zero',
      desc:  'Operando localmente si elimina qualsiasi latenza di rete, fondamentale per il comfort nell\'uso VR.',
      tag:   '~0ms latency',
    },
  ],
}

export const TECH = [
  { icon: '🎮', name: 'Unity',       desc: 'Game engine 3D' },
  { icon: '💻', name: 'C#',          desc: 'Linguaggio principale' },
  { icon: '🥽', name: 'OpenXR',      desc: 'Standard VR' },
  { icon: '🗺️', name: 'Blender',     desc: 'Modellazione 3D' },
  { icon: '🧭', name: 'NavMesh',     desc: 'Pathfinding AI' },
  { icon: '🔊', name: 'FMOD',        desc: 'Audio spaziale' },
  { icon: '🖼️', name: 'URP',         desc: 'Universal Render Pipeline' },
  { icon: '📦', name: 'Git',         desc: 'Versionamento' },
]

export const FEATURES = [
  {
    title: 'Tre scenari di emergenza',
    desc:  'Incendio, Terremoto e Nube Tossica — ognuno con dinamiche visive, sonore e comportamentali specifiche che simulano le condizioni reali di pericolo.',
  },
  {
    title: 'Generazione procedurale del punto di partenza',
    desc:  'Ad ogni avvio l\'utente viene collocato in una posizione casuale della scuola, rendendo ogni sessione unica e impedendo la memorizzazione automatica del percorso.',
  },
  {
    title: 'Mappatura fedele dell\'ITIS Archimede',
    desc:  'Gli ambienti 3D sono modellati sulla planimetria reale dell\'istituto: aule, corridoi, scale e uscite di sicurezza corrispondono esattamente alla struttura fisica.',
  },
  {
    title: 'Livelli di difficoltà',
    desc:  'Il menu di configurazione permette di scegliere la difficoltà, variando visibilità, intensità degli effetti e il numero di ostacoli presenti nel percorso di fuga.',
  },
  {
    title: 'Obiettivo verificabile: il punto di raccolta',
    desc:  'La simulazione si considera completata solo al raggiungimento del punto di raccolta esterno, garantendo che la procedura di sicurezza sia eseguita per intero.',
  },
  {
    title: 'Audio spaziale 3D immersivo',
    desc:  'Allarmi, rumori d\'ambiente e indicazioni sonore direzionali aumentano il realismo psicologico e aiutano l\'orientamento nello spazio virtuale.',
  },
]

export const SCREENSHOTS = [
  { label: 'Menu di configurazione scenari' },
  { label: 'Vista corridoio — scenario Incendio' },
  { label: 'Vista aula — scenario Terremoto' },
  { label: 'Punto di raccolta esterno' },
  { label: 'Schermata di risultato sessione' },
  { label: 'Mappa di navigazione interna' },
]

export const TEAM = [
  { initials: 'AB', name: 'Andrea Bagnato',   role: 'Sviluppo sito React' },
  { initials: 'GC', name: 'Gioia Chen',       role: 'Sviluppo simulazione VR' },
  { initials: 'GC', name: 'Gabriele Corbetta', role: '3D Modelling' },
]

export const CHALLENGES = [
  {
    icon: '🧭',
    problem: 'Navigazione su geometrie complesse',
    solution: 'La navmesh di Unity non gestiva correttamente scale e porte strette. Abbiamo suddiviso la mappa in zone e ricostruito manualmente le aree critiche con NavMesh Obstacles e Off-Mesh Links.',
  },
  {
    icon: '⚡',
    problem: 'Performance VR sotto i 90fps',
    solution: 'I modelli 3D erano troppo dettagliati per il rendering VR. Abbiamo applicato LOD (Level of Detail), ridotto i poligoni non visibili e ottimizzato i materiali con il Universal Render Pipeline.',
  },
  {
    icon: '🎲',
    problem: 'Generazione procedurale bilanciata',
    solution: 'Posizionare l\'utente casualmente rischiava di creare situazioni impossibili. Abbiamo implementato spawn points pre-validati che garantiscono sempre un percorso di fuga raggiungibile.',
  },
  {
    icon: '🌫️',
    problem: 'Effetti visivi senza cali di framerate',
    solution: 'Fumo e fiamme abbassavano drasticamente gli fps. Abbiamo usato sistemi di particelle con object pooling e limitato il numero massimo di particelle attive contemporaneamente.',
  },
]

export const TIMELINE = [
  { date: 'Gen 2025', label: 'Avvio progetto',        desc: 'Definizione dei requisiti, scelta delle tecnologie e suddivisione dei ruoli nel gruppo.' },
  { date: 'Feb 2025', label: 'Modellazione 3D',       desc: 'Ricostruzione fedele della planimetria dell\'ITIS Archimede in Blender e importazione in Unity.' },
  { date: 'Mar 2025', label: 'Sviluppo core',          desc: 'Implementazione della logica di gioco: spawn procedurale, scenari di emergenza e sistema di navigazione.' },
  { date: 'Apr 2025', label: 'Test e ottimizzazione', desc: 'Sessioni di test con utenti reali, raccolta feedback e ottimizzazione delle performance VR.' },
  { date: 'Mag 2025', label: 'Consegna finale',       desc: 'Deploy, documentazione e realizzazione del sito di presentazione.' },
]

export const FAQ = [
  {
    q: 'Funziona senza un visore VR?',
    a: 'Sì, il software supporta anche la modalità desktop con mouse e tastiera, ma l\'esperienza ottimale è progettata per visori OpenXR compatibili.',
  },
  {
    q: 'Perché è stato mappato solo l\'ITIS Archimede?',
    a: 'L\'obiettivo era creare uno strumento direttamente utilizzabile dagli studenti e dal personale dell\'istituto. Una mappatura fedele rende l\'addestramento immediatamente applicabile alla realtà quotidiana.',
  },
  {
    q: 'È possibile aggiungere altri edifici?',
    a: 'L\'architettura è modulare: basta importare una nuova planimetria 3D e configurare i punti di spawn e raccolta. L\'espansione ad altri edifici è tecnicamente fattibile.',
  },
  {
    q: 'I dati delle sessioni vengono salvati?',
    a: 'No. L\'applicazione è completamente stand-alone e offline: non raccoglie né trasmette alcun dato. Ogni sessione è indipendente e privata.',
  },
  {
    q: 'Quanto dura una simulazione media?',
    a: 'Dipende dallo scenario e dal punto di partenza, ma una sessione completa si conclude mediamente in 3-7 minuti, paragonabile a una prova di evacuazione reale.',
  },
]
