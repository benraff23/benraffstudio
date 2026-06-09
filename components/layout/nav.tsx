interface NavProps {
  base?: string
}

export default function Nav({ base = '' }: NavProps) {
  const logoHref = base === '' ? '#accueil' : '/'
  const links: [string, string][] = [
    ['/projets', 'Projets'],
    ['/secteurs', 'Secteurs'],
    ['/benjamin-raffegeau', 'À propos'],
    ['/blog', 'Blog'],
  ]

  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
                 px-[var(--gutter)] py-6 transition-all duration-500"
      role="navigation"
      aria-label="Navigation principale"
    >
      <style>{`
        /* ── État initial (sur hero sombre) ── */
        #nav {
          background: transparent;
        }
        #nav #logoLight { display: block; }
        #nav #logoDark  { display: none; }
        #nav .nav__link { color: rgba(247,245,241,0.75); }
        #nav .nav__link:hover { color: #f7f5f1; }
        #nav .nav__cta {
          color: #f7f5f1;
          border-color: rgba(247,245,241,0.3);
        }
        #nav .nav__cta:hover { background: rgba(247,245,241,0.1); border-color: rgba(247,245,241,0.6); }

        /* ── État scrollé (sections claires) ── */
        #nav.scrolled {
          background: rgba(247,245,241,0.97);
          backdrop-filter: blur(20px) saturate(1.2);
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(28,28,28,0.07);
        }
        #nav.scrolled #logoLight { display: none; }
        #nav.scrolled #logoDark  { display: block; }
        #nav.scrolled .nav__link { color: #6b6b6b; }
        #nav.scrolled .nav__link:hover { color: #1c1c1c; }
        #nav.scrolled .nav__cta {
          color: #f7f5f1;
          background: #1c1c1c;
          border-color: #1c1c1c;
        }
        #nav.scrolled .nav__cta:hover { background: #333333; border-color: #333333; }

        /* ── Underline hover ── */
        .nav__link { position: relative; }
        .nav__link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: currentColor;
          transition: width 400ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav__link:hover::after { width: 100%; }

        /* ── Menu mobile ── */
        #nav.menu-open .nav__mobile { opacity: 1; pointer-events: all; }
        #nav.menu-open .nav__hamburger span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        #nav.menu-open .nav__hamburger span:nth-child(2) { opacity: 0; }
        #nav.menu-open .nav__hamburger span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
      `}</style>

      {/* Logo */}
      <a href={logoHref} className="hover:opacity-70 transition-opacity flex-shrink-0" aria-label="BenRaff Studio">
        <img id="logoLight" src="/logo-blanc.webp" alt="BenRaff Studio" className="h-8 w-auto" />
        <img id="logoDark"  src="/logo-noir.webp"  alt="BenRaff Studio" className="h-8 w-auto" />
      </a>

      {/* Liens desktop */}
      <ul className="hidden md:flex items-center gap-10" role="list">
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="nav__link text-xs font-medium tracking-[0.1em] uppercase transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions desktop */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20visualisation%20architecturale."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="06 24 51 76 41"
          className="text-xs font-medium tracking-wider uppercase nav__link transition-colors hidden lg:flex items-center gap-2"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          06 24 51 76 41
        </a>
        <a
          href={`${base}#contact`}
          className="nav__cta inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                     px-6 py-3 rounded-full border transition-all duration-200"
        >
          Démarrer mon projet
        </a>
      </div>

      {/* Hamburger mobile */}
      <button
        id="hamburger"
        className="nav__hamburger md:hidden flex flex-col gap-[5px] p-2"
        aria-label="Menu" aria-expanded="false"
      >
        <span className="block w-6 h-px bg-current transition-transform duration-300" style={{ color: 'inherit' }} />
        <span className="block w-6 h-px bg-current transition-opacity duration-300" />
        <span className="block w-6 h-px bg-current transition-transform duration-300" />
      </button>

      {/* Menu mobile overlay */}
      <div
        id="mobileMenu"
        className="nav__mobile fixed inset-0 bg-[#f7f5f1] flex flex-col items-center justify-center gap-8
                   opacity-0 pointer-events-none transition-opacity duration-300 z-[999]"
      >
        {links.map(([href, label]) => (
          <a key={href} href={href}
            className="text-4xl font-light tracking-tight text-[#1c1c1c] hover:text-[#6b6b6b] transition-colors">
            {label}
          </a>
        ))}
        <a href={`${base}#contact`}
          className="mt-4 text-sm font-medium tracking-wider uppercase text-[#f7f5f1]
                     bg-[#1c1c1c] px-10 py-4 rounded-full hover:bg-[#333333] transition-colors">
          Démarrer mon projet
        </a>
      </div>
    </nav>
  )
}
