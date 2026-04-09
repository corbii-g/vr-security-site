# VR Security Site — React + Vite

## Avvio rapido

```bash
npm install
npm run dev
```

Apri http://localhost:5173

## Personalizzazione

Tutto il contenuto si trova in cima ad `src/App.jsx` — modifica i dati:

| Variabile        | Cosa cambia                    |
|-----------------|-------------------------------|
| `PROJECT_NAME`  | Nome del progetto              |
| `PROJECT_SUBTITLE` | Sottotitolo nella hero      |
| `PROJECT_DESCRIPTION` | Descrizione principale  |
| `TEAM_MEMBERS`  | Nome, iniziali e ruolo         |
| `PROCESS_STEPS` | Fasi del processo di sviluppo  |
| `TECH_STACK`    | Tecnologie usate               |
| `FEATURES`      | Funzionalità del sistema       |
| `SCREENSHOTS`   | Etichette degli screenshot     |

## Aggiungere screenshot reali

1. Metti le immagini in `src/assets/`
2. In `App.jsx`, importale: `import screen1 from './assets/screen1.png'`
3. Nel componente `Screenshots`, sostituisci `<ScreenshotPlaceholder>` con `<img src={screen1} />`

## Build per produzione

```bash
npm run build
```

I file statici saranno in `/dist`.
