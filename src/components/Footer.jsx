import { useLang } from '../context/LangContext.jsx'
import { SITE, CONTENT_EN } from '../data/content.js'

export default function Footer() {
  const { lang } = useLang()
  const copy = lang === 'en' ? CONTENT_EN.footer.copy : 'Progetto scolastico · Progetto di gruppo'

  return (
    <footer className="footer">
      <span className="footer-brand">{SITE.title}</span>
      <span className="footer-copy">© {new Date().getFullYear()} — {SITE.school} — {copy}</span>
    </footer>
  )
}
