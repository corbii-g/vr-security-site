import { SITE } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-brand">{SITE.title}</span>
      <span className="footer-copy">
        © {new Date().getFullYear()} — {SITE.school} — Progetto di gruppo
      </span>
    </footer>
  )
}
