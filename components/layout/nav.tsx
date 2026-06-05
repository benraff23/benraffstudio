interface NavProps {
  base?: string
}

export default function Nav({ base = '' }: NavProps) {
  const logoHref = base === '' ? '#accueil' : '/'
  const links: [string, string][] = [
    ['/projets', 'Projets'],
    ['/benjamin-raffegeau', 'À propos'],
    ['/blog', 'Blog'],
  ]

  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
                 px-[var(--gutter)] py-6 transition-all duration-700 bg-[#080808]"
      role="navigation"
      aria-label="Navigation principale"
      style={{ transition: 'background 700ms, padding 700ms, backdrop-filter 700ms' }}
    >
      <style>{`
        #nav.scrolled {
          background: rgba(8,8,8,0.85);
          backdrop-filter: blur(20px) saturate(1.5);
          padding-top: 1rem; padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav__link { position: relative; }
        .nav__link::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1px; background: #c8e84e;
          transition: width 400ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav__link:hover::after { width: 100%; }
        #nav.menu-open .nav__mobile { opacity: 1; pointer-events: all; }
        #nav.menu-open .nav__hamburger span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        #nav.menu-open .nav__hamburger span:nth-child(2) { opacity: 0; }
        #nav.menu-open .nav__hamburger span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
      `}</style>

      <a href={logoHref} className="hover:opacity-80 transition-opacity flex-shrink-0" aria-label="BenRaff Studio">
        <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-8 w-auto" />
      </a>

      <ul className="hidden md:flex items-center gap-10" role="list">
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="nav__link text-xs font-medium tracking-[0.08em] uppercase text-[#b8b8b8] hover:text-white transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20visualisation%20architecturale."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="06 24 51 76 41 — WhatsApp"
          className="flex items-center gap-2 text-xs font-medium text-[#9a9a9a] hover:text-[#25D366] transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          06 24 51 76 41
        </a>
        <span className="w-px h-4 bg-white/[0.12]" />
        <a
          href={`${base}#contact`}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                     text-[#080808] bg-[#c8e84e] px-6 py-3 rounded-full
                     hover:bg-[#d4f05a] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(200,232,78,0.3)]
                     transition-all duration-200"
        >
          Démarrer mon projet
        </a>
      </div>

      <button
        id="hamburger"
        className="nav__hamburger md:hidden flex flex-col gap-[5px] p-2"
        aria-label="Menu" aria-expanded="false"
      >
        <span className="block w-6 h-px bg-white transition-transform duration-400" />
        <span className="block w-6 h-px bg-white transition-opacity duration-400" />
        <span className="block w-6 h-px bg-white transition-transform duration-400" />
      </button>

      <div id="mobileMenu" className="nav__mobile fixed inset-0 bg-[#080808] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-400 z-[999]">
        {links.map(([href, label]) => (
          <a key={href} href={href} className="text-4xl font-light tracking-tight text-[#d4d4d0] hover:text-white transition-colors">{label}</a>
        ))}
        <a href={`${base}#contact`} className="mt-4 text-sm font-semibold tracking-wider uppercase text-[#080808] bg-[#c8e84e] px-10 py-4 rounded-full">Démarrer mon projet</a>
      </div>
    </nav>
  )
}
