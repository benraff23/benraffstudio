import ClientEffects from '@/components/layout/client-effects'
import ContactForm from '@/components/layout/contact-form'
import FloatingCta from '@/components/layout/floating-cta'
import Hero from '@/components/sections/hero'
import Faq from '@/components/sections/faq'
import LaunchOffer from '@/components/sections/launch-offer'
import Portfolio from '@/components/sections/portfolio'
import Process from '@/components/sections/process'
import { ZoomParallax } from '@/components/ui/zoom-parallax'
import { TextParallaxShowcase } from '@/components/ui/text-parallax-scroll'

// ─── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
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

      <a href="#accueil" className="hover:opacity-80 transition-opacity flex-shrink-0" aria-label="BenRaff Studio">
        <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-8 w-auto" />
      </a>

      <ul className="hidden md:flex items-center gap-10" role="list">
        {[['#services','Services'],['#portfolio','Portfolio'],['#plateforme','Plateforme'],['#process','Process']].map(([href, label]) => (
          <li key={href}>
            <a href={href} className="nav__link text-xs font-medium tracking-[0.08em] uppercase text-[#b8b8b8] hover:text-white transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        {/* Numéro & WhatsApp */}
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
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                     text-[#080808] bg-[#c8e84e] px-6 py-3 rounded-full
                     hover:bg-[#d4f05a] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(200,232,78,0.3)]
                     transition-all duration-200"
        >
          Démarrer un projet
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
        {[['#services','Services'],['#portfolio','Portfolio'],['#plateforme','Plateforme'],['#process','Process']].map(([href, label]) => (
          <a key={href} href={href} className="text-4xl font-light tracking-tight text-[#d4d4d0] hover:text-white transition-colors">{label}</a>
        ))}
        <a href="#contact" className="mt-4 text-sm font-semibold tracking-wider uppercase text-[#080808] bg-[#c8e84e] px-10 py-4 rounded-full">Démarrer un projet</a>
      </div>
    </nav>
  )
}

// ─── Section wrapper ────────────────────────────────────────────────────────────
const Sec = ({ id, bg = '#f5f4f0', children }: { id?: string; bg?: string; children: React.ReactNode }) => (
  <section id={id} style={{ background: bg }} className="py-24 sm:py-32" aria-label={id}>
    <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">{children}</div>
  </section>
)

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="label reveal">{children}</span>
)

// ─── Problems ─────────────────────────────────────────────────────────────────
function Problems() {
  const items = [
    ['01', 'Absence de projection', 'Vos clients ne parviennent pas à visualiser le résultat final. L\'écart entre les plans et la réalité bloque la décision.'],
    ['02', 'Vendre avant de construire', 'Un projet non visible est un projet non vendu. Sans visuel crédible, la commercialisation est ralentie, voire impossible.'],
    ['03', 'Images trop génériques', 'Les rendus low-cost ou générés par IA manquent de cohérence, de profondeur et de crédibilité. Ils n\'inspirent pas confiance.'],
    ['04', 'Décisions bloquées', 'Sans validation visuelle en amont, les allers-retours s\'accumulent. Le temps perdu se répercute sur le budget et le planning.'],
    ['05', 'Retours clients flous', 'Vos clients ont du mal à exprimer leurs corrections. Sans outil adapté, chaque échange devient une approximation coûteuse.'],
    ['06', 'Manque de validation', 'Sans rendu intermédiaire validé, les surprises arrivent à la livraison finale, quand il est trop tard pour corriger sans coût.'],
  ]
  return (
    <Sec id="problemes">
      <div className="mb-16 sm:mb-20">
        <Label>Ce que vos prospects ressentent</Label>
        <h2 className="reveal delay-1 mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f] max-w-[20ch]">
          Ils ne voient pas. Ils n&apos;achètent pas.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.05] border border-black/[0.05] rounded-2xl overflow-hidden">
        {items.map(([num, title, text], i) => (
          <div key={num} className={`reveal delay-${i + 1} bg-[#f5f4f0] hover:bg-[#e8e5df] transition-colors duration-400 p-10`}>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e] mb-6 tabular-nums">{num}</div>
            <h3 className="text-xl font-semibold tracking-tight text-[#0f0f0f] mb-3 leading-snug">{title}</h3>
            <p className="text-base text-[#6a6a6a] leading-relaxed max-w-[32ch]">{text}</p>
          </div>
        ))}
      </div>
    </Sec>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const ServiceIcon = ({ path }: { path: string }) => (
  <div className="w-12 h-12 rounded-xl bg-[rgba(200,232,78,0.12)] flex items-center justify-center mb-6">
    <svg className="w-[22px] h-[22px] text-[#c8e84e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d={path} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

function Services() {
  const cards = [
    { icon: 'M3 3h18v18H3zM3 9h18M9 21V9', title: 'Rendus fixes', text: 'Images haute résolution composées avec intention. Cadrage, lumière, profondeur de champ, ambiance : chaque élément sert la narration visuelle.', tag: '4K / 8K' },
    { icon: 'M5 3l14 9-14 9V3z', title: 'Animations vidéo', text: 'Séquences filmiques qui font vivre le projet. Transitions, plans de coupe, ambiances dynamiques pour une présentation inoubliable.', tag: 'Cinématique' },
    { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z', title: 'Visites virtuelles', text: 'Navigation immersive à 360° dans l\'espace non encore construit. Le client explore, ressent et valide avant la pose de la première pierre.', tag: '360° Interactif' },
    { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', title: 'Accompagnement projet', text: 'Un suivi premium du brief à la livraison. Plateforme dédiée, annotations directes, versioning automatique, transparence totale à chaque étape.', tag: 'Premium' },
  ]
  return (
    <Sec id="services" bg="#e8e5df">
      <div className="grid sm:grid-cols-2 gap-16 items-end mb-20">
        <div>
          <Label>Ce que je fais</Label>
          <h2 className="reveal delay-1 mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
            La visualisation au service de votre projet
          </h2>
        </div>
        <p className="reveal-right text-lg font-light text-[#6a6a6a] leading-relaxed pb-1">
          Perspectiviste basé à Rennes, j&apos;interviens pour des architectes, promoteurs et paysagistes dans toute la France. Chaque prestation sert un objectif précis : convaincre, vendre, valider. Pas pour faire joli.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ icon, title, text, tag }, i) => (
          <div key={title} className={`reveal delay-${i + 1} service-card relative bg-[#f5f4f0] border border-black/[0.08] rounded-2xl p-8 overflow-hidden hover:border-black/[0.15] hover:-translate-y-1 transition-all duration-400 group`}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8e84e] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            <ServiceIcon path={icon} />
            <h3 className="text-lg font-semibold tracking-tight text-[#0f0f0f] mb-3">{title}</h3>
            <p className="text-sm text-[#6a6a6a] leading-relaxed">{text}</p>
            <span className="inline-block mt-6 text-xs font-medium tracking-wider uppercase text-[#5a5a5a] border border-black/[0.1] px-3 py-1 rounded-full">{tag}</span>
          </div>
        ))}
      </div>
    </Sec>
  )
}

// ─── ZoomParallax showcase ────────────────────────────────────────────────────
const zoomImages = [
  { src: '/projets/pool-house/Vue 2_final.png',                     alt: 'Rendu 3D terrasse et fire pit · perspectiviste Rennes BenRaff Studio' },
  { src: '/projets/pool-house/Vue 3.png',                           alt: 'Visualisation 3D cuisine extérieure pool-house · studio rendu 3D Rennes' },
  { src: '/projets/pool-house/Vue 4.png',                           alt: 'Rendu 3D piscine et pergola aménagement extérieur · visualisation architecturale Rennes' },
  { src: '/projets/pool-house/Vue 5.png',                           alt: 'Rendu 3D espace détente extérieur · perspectiviste BenRaff Studio Rennes' },
  { src: '/projets/pool-house/Vie 1.png',                           alt: 'Rendu 3D vue ensemble aménagement extérieur Bretagne · studio 3D Rennes' },
  { src: '/projets/interieur/Vue d\'ensemble maison_upscale04.png', alt: 'Visualisation 3D extérieure maison moderne · rendu architectural BenRaff Studio' },
  { src: '/projets/allee-paysagee/Scène 10 final 4K.jpg',          alt: 'Rendu 3D allée paysagée 4K · perspectiviste paysagiste Rennes' },
]

function ZoomParallaxShowcase() {
  return (
    <div className="bg-[#1a1a1a]">
      <ZoomParallax images={zoomImages} />
    </div>
  )
}

// ─── Why ──────────────────────────────────────────────────────────────────────
function Why() {
  const points = [
    { icon: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', title: 'Maîtrise du regard', text: 'Composition en règle des tiers, profondeur de champ calculée, cadrage narratif. L\'image guide l\'œil exactement où il doit aller.' },
    { icon: 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z', title: 'Ambiance lumineuse juste', text: 'La lumière n\'est pas réglée par défaut. Elle est choisie pour raconter l\'heure, la saison, l\'atmosphère, et rendre le projet désirable.' },
    { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', title: 'Cohérence architecturale', text: 'Matériaux, végétation, mobilier, ombres portées : chaque élément est pensé pour que le rendu soit crédible, pas seulement beau.' },
    { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3', title: 'Résultat vendable, pas décoratif', text: 'Chaque rendu sert un objectif : commercialiser, présenter en comité, valider une direction. Le beau est un moyen, pas une fin.' },
  ]
  return (
    <Sec id="pourquoi">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="reveal-left relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-[#e8e5df]">
          <img
            src="/Portrait benjamin Raffegeau.webp"
            alt="Benjamin Raffegeau, perspectiviste et fondateur BenRaff Studio, studio de rendu 3D à Rennes"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.65)] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-[rgba(8,8,8,0.85)] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#c8e84e] flex-shrink-0" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <div className="text-sm text-[#b8b8b8]">
              <strong className="text-white font-semibold">Benjamin Raffegeau</strong><br/>
              Perspectiviste &amp; fondateur · Rennes
            </div>
          </div>
        </div>
        <div>
          <Label>Pourquoi BenRaff Studio</Label>
          <h2 className="reveal delay-1 mt-4 mb-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
            Pas un prestataire.<br/>Un partenaire de vision.
          </h2>
          <p className="reveal delay-2 text-lg font-light text-[#6a6a6a] leading-relaxed mb-8">
            Mon travail ne s&apos;arrête pas à la technique. Il commence par la compréhension de votre projet, de vos clients, et de ce que l&apos;image doit leur faire ressentir. Studio indépendant basé à Rennes, j&apos;interviens partout en France.
          </p>
          <a
            href="/benjamin-raffegeau"
            className="reveal delay-3 inline-flex items-center gap-2 mb-10 text-xs font-semibold tracking-wider uppercase
                       text-[#080808] bg-[#c8e84e] px-7 py-3.5 rounded-full
                       hover:bg-[#d4f05a] hover:-translate-y-0.5
                       hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                       transition-all duration-200"
          >
            Voir mon profil complet
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="flex flex-col gap-6">
            {points.map(({ icon, title, text }, i) => (
              <div key={title} className={`reveal delay-${i + 2} why-point flex gap-5 items-start p-5 rounded-xl hover:bg-[#e8e5df] transition-colors`}>
                <div className="w-9 h-9 rounded-lg bg-[rgba(200,232,78,0.12)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c8e84e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={icon} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-[#0f0f0f] mb-1">{title}</div>
                  <p className="text-sm text-[#6a6a6a] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  )
}

// ─── Craft (AI vs Studio) ──────────────────────────────────────────────────────
function Craft() {
  const aiItems = [
    'Composition aléatoire, pas de règle des tiers',
    'Lumière générique, sans intention narrative',
    'Incohérences architecturales visibles',
    'Pas de profondeur de champ contrôlée',
    'Impossible à justifier devant un comité',
    'Suivi de projet par email, sans traçabilité',
  ]
  const studioItems = [
    'Chaque cadrage est une décision narrative consciente',
    'Lumière heure par heure, saison par saison',
    'Matériaux, végétation, ombres : tout est cohérent',
    'Profondeur de champ maîtrisée pour guider le regard',
    'Rendu crédible, vendable, présentable',
    'Plateforme dédiée, annotations, versioning, clarté totale',
  ]
  const Cross = () => (
    <div className="w-4 h-4 rounded-full bg-[rgba(255,80,80,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-2.5 h-2.5 text-[#ff5252]" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 2l6 6M8 2l-6 6"/></svg>
    </div>
  )
  const Check = () => (
    <div className="w-4 h-4 rounded-full bg-[rgba(200,232,78,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-2.5 h-2.5 text-[#c8e84e]" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5l2.5 2.5L8 2"/></svg>
    </div>
  )
  const pillars = [
    ['🎯', 'Composition', 'Règle des tiers, lignes directrices, équilibre des masses'],
    ['🌤️', 'Lumière', 'Ambiance, heure, saison, température de couleur'],
    ['🔭', 'Profondeur de champ', 'Mise au point, flou d\'arrière-plan, hiérarchie visuelle'],
    ['🏗️', 'Cohérence', 'Matériaux, échelles, végétation, mobilier contextualisé'],
  ]
  return (
    <Sec id="difference" bg="#e8e5df">
      <div className="text-center max-w-[60ch] mx-auto mb-16 sm:mb-20">
        <Label>La vraie différence</Label>
        <h2 className="reveal delay-1 mt-4 mb-5 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
          L&apos;IA génère une image.<br/>Je construis une intention.
        </h2>
        <p className="reveal delay-2 text-lg font-light text-[#6a6a6a] leading-relaxed">
          Un outil peut produire un visuel en secondes. Ce qu&apos;il ne peut pas faire : décider de la hauteur de point de vue, du rapport entre végétation et minéral, de la lecture spatiale qui fera dire &ldquo;oui&rdquo; à votre client.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 mb-16 sm:mb-20">
        <div className="reveal-left">
          <div className="text-xs font-medium tracking-[0.15em] uppercase text-[#5a5a5a] mb-6 pb-4 border-b border-black/[0.1]">Image générée / Low-cost</div>
          <div className="flex flex-col gap-4">
            {aiItems.map(t => (
              <div key={t} className="flex gap-3 items-start">
                <Cross /><span className="text-base text-[#6a6a6a] leading-normal">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center gap-2">
          <div className="w-px h-10 bg-black/10" />
          <span className="text-xs font-semibold tracking-wider text-[#5a5a5a] uppercase">vs</span>
          <div className="w-px h-10 bg-black/10" />
        </div>
        <div className="reveal-right">
          <div className="text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e] mb-6 pb-4 border-b border-[rgba(200,232,78,0.2)]">BenRaff Studio</div>
          <div className="flex flex-col gap-4">
            {studioItems.map(t => (
              <div key={t} className="flex gap-3 items-start">
                <Check /><span className="text-base text-[#0f0f0f] leading-normal">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-black/[0.08]">
        {pillars.map(([icon, title, text], i) => (
          <div key={title} className={`reveal delay-${i + 1} text-center p-6`}>
            <div className="text-2xl mb-3">{icon}</div>
            <div className="text-sm font-semibold text-[#0f0f0f] mb-2">{title}</div>
            <p className="text-xs text-[#6a6a6a] leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Sec>
  )
}

// ─── Platform ─────────────────────────────────────────────────────────────────
function Platform() {
  const features = [
    ['Avancement en temps réel', 'Vous voyez exactement à quelle étape se trouve votre projet, sans avoir à relancer.'],
    ['Annotations directes sur le rendu', 'Pointez directement sur l\'image pour exprimer une correction. Plus besoin de décrire avec des mots ce qui se voit.'],
    ['Versioning automatique', 'Chaque version est sauvegardée. Retrouvez n\'importe quelle étape en un clic, sans risque de perte.'],
    ['Livraison multi-formats', 'PNG, TIFF, PDF, vidéo : tout est disponible au téléchargement dès validation.'],
    ['Page de présentation automatique', 'À la validation finale, une page de présentation client est générée, prête à partager avec vos investisseurs.'],
  ]
  return (
    <Sec id="plateforme" bg="#e8e5df">
      <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-center">
        <div>
          <Label>Plateforme client</Label>
          <h2 className="reveal delay-1 mt-4 mb-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
            Un tableau de bord,<br/>zéro zone d&apos;ombre.
          </h2>
          <p className="reveal delay-2 text-lg font-light text-[#6a6a6a] leading-relaxed mb-10">
            Pas d&apos;emails perdus, pas de versions nommées &ldquo;final_v3_ok_bis&rdquo;. Votre projet vit dans un espace unique, clair et accessible à tout moment.
          </p>
          <div className="flex flex-col gap-5">
            {features.map(([title, text], i) => (
              <div key={title} className={`reveal delay-${i + 2} flex gap-4 items-start`}>
                <div className="w-7 h-7 rounded-full border border-[#c8e84e] flex items-center justify-center text-xs font-semibold text-[#c8e84e] flex-shrink-0 tabular-nums">{i + 1}</div>
                <div>
                  <div className="text-base font-semibold text-[#0f0f0f] mb-1">{title}</div>
                  <p className="text-sm text-[#6a6a6a] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup */}
        <div className="reveal-right bg-[#f5f4f0] border border-black/[0.1] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
          <div className="bg-[#dedad4] px-5 py-3 flex items-center gap-2 border-b border-black/[0.08]">
            <div className="flex gap-1.5">
              {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
            </div>
            <div className="flex-1 bg-[#ece9e3] rounded px-3 py-1 text-xs text-[#6a6a6a] text-center">
              studio.benraffstudio.com/projets/villa-moderne
            </div>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#0f0f0f]">Villa Moderne · Aix-en-Provence</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c8e84e] bg-[rgba(200,232,78,0.12)] px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8e84e]" />
                En cours
              </span>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-[#6a6a6a]">Avancement global</span>
                <span className="text-xs font-semibold text-[#c8e84e]">68%</span>
              </div>
              <div className="h-1 bg-black/[0.08] rounded-full overflow-hidden">
                <div id="progressFill" className="h-full bg-[#c8e84e] rounded-full transition-[width] duration-[1500ms]" style={{ width: '0%' }} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[['Étape', 'Modélisation'], ['Versions', 'v3 / active'], ['Livraison', 'J+3']].map(([l, v]) => (
                <div key={l} className="bg-black/[0.03] border border-black/[0.08] rounded-xl p-3">
                  <div className="text-xs text-[#6a6a6a] mb-1">{l}</div>
                  <div className="text-sm font-semibold text-[#0f0f0f]">{v}</div>
                </div>
              ))}
            </div>
            <div className="aspect-video rounded-xl relative overflow-hidden">
              <img
                src="/projets/Intérieur scandinave/Close up Salon.jpeg"
                alt="Aperçu rendu · Close up Salon"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#080808]/20" />
              <div className="absolute top-[30%] left-[40%] flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#c8e84e] flex items-center justify-center text-[10px] font-bold text-[#080808]" style={{ animation: 'annotationPulse 2s ease-in-out infinite' }}>1</div>
                <div className="bg-[#c8e84e] text-[#080808] text-[10px] font-semibold px-2 py-0.5 rounded whitespace-nowrap">Teinte trop froide ici</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sec>
  )
}


// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Sec id="contact" bg="#e8e5df">
      <div className="grid lg:grid-cols-[5fr_7fr] gap-24 items-start">
        <div>
          <Label>Contact</Label>
          <h2 className="reveal delay-1 mt-4 mb-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
            Votre projet mérite un rendu à sa hauteur.
          </h2>
          <p className="reveal delay-2 text-lg font-light text-[#6a6a6a] leading-relaxed mb-10">
            Je travaille avec des architectes, promoteurs, paysagistes et maîtres d&apos;ouvrage qui ont un projet sérieux et l&apos;ambition de le montrer à sa juste valeur. Basé à Rennes, j&apos;interviens dans toute la France et à l&apos;international.
          </p>
          {/* Pricing anchor */}
          <div className="reveal delay-3 grid grid-cols-2 gap-3 mb-8">
            {[
              ['Rendu fixe', 'à partir de 350€'],
              ['Pack 3 vues', 'à partir de 950€'],
              ['Animation vidéo', 'sur devis'],
              ['Visite virtuelle', 'sur devis'],
            ].map(([label, price]) => (
              <div key={label} className="bg-black/[0.03] border border-black/[0.08] rounded-xl px-4 py-3">
                <p className="text-[11px] font-medium tracking-wider uppercase text-[#5a5a5a] mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#0f0f0f]">{price}</p>
              </div>
            ))}
          </div>

          {/* Garantie */}
          <div className="reveal delay-4 bg-[rgba(200,232,78,0.06)] border border-[rgba(200,232,78,0.2)] rounded-xl p-5 text-sm text-[#4a4a4a] leading-relaxed mb-8">
            <strong className="text-[#c8e84e]">Garantie :</strong> Si le premier rendu ne correspond pas à votre brief, on le retravaille sans frais supplémentaires. Toujours.
          </div>

          {/* Contacts directs */}
          <div className="reveal delay-4 flex flex-col gap-3">
            <a
              href="https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20visualisation%20architecturale."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-base font-medium text-[#0f0f0f] hover:text-[#25D366] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp · 06 24 51 76 41
            </a>
            <a href="mailto:contact@benraffstudio.com" className="inline-flex items-center gap-3 text-base font-medium text-[#0f0f0f] hover:text-[#c8e84e] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              contact@benraffstudio.com
            </a>
          </div>
        </div>
        <div className="reveal-right bg-[#f5f4f0] border border-black/[0.08] rounded-3xl p-10">
          <ContactForm />
        </div>
      </div>
    </Sec>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#080808] py-14 border-t border-black/[0.08]" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          <div>
            <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
          </div>
          <a href="mailto:contact@benraffstudio.com" className="text-sm text-[#7a7a7a] hover:text-white transition-colors">
            contact@benraffstudio.com
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <p className="text-xs text-[#5a5a5a]">
            &copy; <span id="year" /> BenRaff Studio · Tous droits réservés. Studio de visualisation architecturale 3D à Rennes.
          </p>
          <nav className="flex items-center gap-5" aria-label="Liens légaux">
            <a href="/mentions-legales" className="text-xs text-[#5a5a5a] hover:text-[#9a9a9a] transition-colors">
              Mentions légales
            </a>
            <a href="/politique-de-confidentialite" className="text-xs text-[#5a5a5a] hover:text-[#9a9a9a] transition-colors">
              Confidentialité
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <ClientEffects />
      <FloatingCta />
      <Nav />
      <main>
        <Hero />
        <TextParallaxShowcase />
        <Problems />
        <Services />
        <ZoomParallaxShowcase />
        <Why />
        <Craft />
        <Portfolio />
        <LaunchOffer />
        <Platform />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
