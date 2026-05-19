import { SITE } from '../data/content.js'

const NAV_LINKS = [
  { label: 'Progetto',    href: '#progetto' },
  { label: 'Come funziona', href: '#come-funziona' },
  { label: 'Timeline',    href: '#timeline' },
  { label: 'Sfide',       href: '#sfide' },
  { label: 'Funzionalità', href: '#funzionalita' },
  { label: 'Demo',        href: '#screenshot' },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Team',        href: '#team' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="navbar-logo-dot" />
        {SITE.title}
      </a>
      <ul className="navbar-links">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
