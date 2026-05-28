import { useLang } from '../context/LangContext.jsx'

const NAV_IT = [
  { label: 'Progetto',      href: '#progetto'      },
  { label: 'Come funziona', href: '#come-funziona' },
  { label: 'Funzionalità',  href: '#funzionalita'  },
  { label: 'Stack',         href: '#stack'         },
  { label: 'Future',        href: '#future'        },
  { label: 'Demo',          href: '#screenshot'    },
  { label: 'FAQ',           href: '#faq'           },
  { label: 'Team',          href: '#team'          },
]
const NAV_EN = [
  { label: 'Project',      href: '#progetto'      },
  { label: 'How it works', href: '#come-funziona' },
  { label: 'Features',     href: '#funzionalita'  },
  { label: 'Stack',        href: '#stack'         },
  { label: 'Future',       href: '#future'        },
  { label: 'Demo',         href: '#screenshot'    },
  { label: 'FAQ',          href: '#faq'           },
  { label: 'Team',         href: '#team'          },
]

export default function Navbar() {
  const { lang, setLang } = useLang()
  const links = lang === 'it' ? NAV_IT : NAV_EN
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="navbar-logo-dot" />
        SAFE VR
      </a>
      <ul className="navbar-links">
        {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
      </ul>
      <div className="lang-switcher">
        <button className={lang === 'it' ? 'lang-btn lang-active' : 'lang-btn'} onClick={() => setLang('it')}>IT</button>
        <span className="lang-sep">|</span>
        <button className={lang === 'en' ? 'lang-btn lang-active' : 'lang-btn'} onClick={() => setLang('en')}>EN</button>
      </div>
    </nav>
  )
}
