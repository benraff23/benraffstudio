interface NavProps {
  base?: string
}

export default function Nav({ base = '' }: NavProps) {
  const logoHref = base === '' ? '#accueil' : '/'

  const links: [string, string][] = [
    ['/projets', 'Projets réalisés'],
    ['/benjamin-raffegeau', 'Qui suis-je ?'],
    ['/blog', 'Blog'],
  ]

  // NOTE : le mobileMenu est rendu HORS du <nav> pour éviter que
  // le backdrop-filter de la pilule crée un containing block
  // et empêche le fixed inset-0 de couvrir tout l'écran.

  return (
    <>
    <div
      id="nav"
      className="fixed top-0 left-0 right-0 z-[1000] px-[var(--gutter)] pt-4 sm:pt-6
                 transition-[padding] duration-300"
    >
      <style>{`
        /* ── Pilule flottante ── */
        .nav__pill {
          background: rgba(247,245,241,0.88);
          backdrop-filter: blur(20px) saturate(1.2);
          border: 1px solid rgba(28,28,28,0.07);
          box-shadow: 0 6px 26px rgba(28,28,28,0.08);
          transition: background 300ms ease, box-shadow 300ms ease;
        }
        /* ── État scrollé : la pilule se densifie ── */
        #nav.scrolled { padding-top: 0.75rem; }
        #nav.scrolled .nav__pill {
          background: rgba(247,245,241,0.97);
          box-shadow: 0 10px 34px rgba(28,28,28,0.14);
        }

        /* ── Underline hover ── */
        .nav__link { position: relative; color: #6b6b6b; }
        .nav__link:hover { color: #1c1c1c; }
        .nav__link::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1px; background: currentColor;
          transition: width 400ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav__link:hover::after { width: 100%; }

        /* ── Menu mobile — animation hamburger → X ── */
        #nav.menu-open .nav__hamburger span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
        #nav.menu-open .nav__hamburger span:nth-child(2) { opacity: 0; }
        #nav.menu-open .nav__hamburger span:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }
        /* Visibilité du mobileMenu gérée via JS (classes opacity-0/opacity-100 sur #mobileMenu) */
      `}</style>

      <nav
        className="nav__pill mx-auto max-w-[1080px] rounded-full
                   grid grid-cols-[auto_1fr_auto] items-center gap-4
                   pl-5 pr-2 py-2"
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a href={logoHref} className="hover:opacity-60 transition-opacity flex-shrink-0" aria-label="BenRaff Studio">
          <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
        </a>

        {/* Liens — centrés dans la colonne fluide */}
        <ul className="hidden md:flex items-center justify-center gap-8" role="list">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="nav__link text-xs font-medium tracking-[0.1em] uppercase transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* Cale la colonne centrale sur mobile, où les liens sont masqués */}
        <span className="md:hidden" aria-hidden="true" />

        {/* Actions */}
        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20d%27am%C3%A9nagement%20ext%C3%A9rieur."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp · 06 24 51 76 41"
            title="06 24 51 76 41"
            className="nav__link hidden lg:flex items-center gap-2 text-xs font-medium tracking-wider uppercase px-3 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            06 24 51 76 41
          </a>

          <a
            href={`${base}#contact`}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#f7f5f1] bg-[#1c1c1c] px-6 py-3.5 rounded-full
                       hover:bg-[#333333] transition-colors duration-200"
          >
            Prendre contact
          </a>

          {/* Hamburger mobile */}
          <button
            id="hamburger"
            className="nav__hamburger md:hidden flex flex-col gap-[5px] w-11 h-11 items-center justify-center
                       rounded-full hover:bg-[rgba(28,28,28,0.05)] transition-colors"
            aria-label="Menu" aria-expanded="false"
          >
            <span className="block w-5 h-px bg-[#1c1c1c] transition-transform duration-300" />
            <span className="block w-5 h-px bg-[#1c1c1c] transition-opacity duration-300" />
            <span className="block w-5 h-px bg-[#1c1c1c] transition-transform duration-300" />
          </button>
        </div>
      </nav>
    </div>

    {/* ── Menu mobile HORS du wrapper nav ────────────────────────────────────
        Rendu en dehors pour que fixed inset-0 soit relatif au viewport et non
        au containing block créé par le backdrop-filter de la pilule.
        Visibilité contrôlée directement par client-effects.tsx (JS).          */}
    <div
      id="mobileMenu"
      className="fixed inset-0 bg-[#f7f5f1] flex flex-col items-center justify-center gap-5
                 overflow-y-auto py-24
                 opacity-0 pointer-events-none transition-opacity duration-300 z-[2000]"
    >
      {/* Bouton fermer */}
      <button
        id="mobileClose"
        aria-label="Fermer le menu"
        className="absolute top-6 right-5 w-10 h-10 flex items-center justify-center text-[#1c1c1c]
                   hover:text-[#6b6b6b] transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 4l12 12M16 4l-12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      {links.map(([href, label]) => (
        <a key={href} href={href}
          className="text-3xl font-light tracking-tight text-[#1c1c1c] hover:text-[#6b6b6b] transition-colors">
          {label}
        </a>
      ))}

      <a href={`${base}#contact`}
        className="mt-3 text-sm font-medium tracking-wider uppercase text-[#f7f5f1]
                   bg-[#1c1c1c] px-10 py-4 rounded-full hover:bg-[#333333] transition-colors">
        Prendre contact
      </a>
    </div>
    </>
  )
}
