import Image from 'next/image'
import { Kicker, Visuel, PlayButton, PlanCallout } from '@/components/ui/frame'
import XrEmbed from '@/components/ui/xr-embed'

// Tour D5 réel servant d'exemple sur l'accueil.
const XR_TOUR_URL = 'https://share.d5render.com/user-hub/showreel/shortLink/oPtyMV'

const SOCLE = 'Le socle — toujours inclus'
const COEUR = 'Le cœur de la présentation — inclus'
const OPTION = 'En option — selon l’enjeu du projet'

function Groupe({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6b6b6b] mb-3">
      {children}
    </p>
  )
}

export default function Livrables() {
  return (
    <section id="book" className="bg-[#ede9e2] pt-24 sm:pt-28 pb-24 sm:pb-28 px-[var(--gutter)]">
      {/* Intro offre */}
      <div className="max-w-[1080px] mx-auto reveal mb-16">
        <Kicker>Le Book de Présentation Client</Kicker>
        <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-6 max-w-[640px]">
          Un dossier complet, construit pour votre rendez-vous client.
        </h2>
        <p className="text-[1.03rem] font-light text-[#6b6b6b] max-w-[600px] leading-relaxed">
          Le Book de Présentation Client réunit tout ce dont vous avez besoin pour sécuriser
          votre chantier et emporter la décision. Certains éléments sont systématiquement
          inclus, d&apos;autres s&apos;ajoutent selon l&apos;enjeu du projet.
        </p>
      </div>

      {/* Socle 01 — Plan 2D côté avec métrés */}
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal mb-20">
        <div>
          <Groupe>{SOCLE}</Groupe>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">Le plan 2D côté avec métrés</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed mb-4">
            Il vous donne la base opérationnelle : des quantités fiables pour commander juste,
            et un document d&apos;exécution clair pour vos équipes sur le terrain. Moins
            d&apos;erreurs, moins d&apos;allers-retours, un chantier qui tourne sans accroc.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed mb-4">
            Vous savez exactement quelles quantités prévoir : surfaces de terrasse, mètres
            linéaires de bordure, volumes de terre végétale. Vous commandez juste, sans
            surplus qui plombe la marge, sans rupture qui fige le chantier.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed mb-4">
            Un chantier arrêté parce qu&apos;il manque des carreaux ou des bordures,
            c&apos;est du temps perdu, une équipe immobilisée et un client qui
            s&apos;impatiente. Un relevé propre en amont, un métré rigoureux, et ce scénario
            disparaît. Vous restez maître de vos commandes et de votre planning.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed mb-4">
            Sur le terrain, ce plan devient un vrai document d&apos;exécution pour vos
            équipes : cotes, implantations et repères clairs, là où un simple croquis transmis
            laisse place à l&apos;interprétation. Vos équipes travaillent d&apos;après un plan
            précis, font moins d&apos;erreurs et vous sollicitent moins pendant les travaux.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            Je ne touche pas à vos prix ni à vos fournisseurs — ça, c&apos;est votre métier.
            Je vous livre les quantités et un plan exploitable, vous gardez la main
            sur le reste.
          </p>
        </div>
        {/* PLACEHOLDER — plan 2D côté avec métrés à produire */}
        <Visuel ratio="aspect-[4/3]" caption="Plan 2D côté avec métrés — cotes, implantations et quantités">
          <PlanCallout top="16%" left="10%" label="Surfaces de terrasse" />
          <PlanCallout top="42%" left="46%" label="Mètres linéaires de bordure" />
          <PlanCallout top="66%" left="16%" label="Volumes de terre végétale" />
        </Visuel>
      </div>

      {/* Socle 02 — Plan 3D annoté */}
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal mb-20">
        <div className="lg:order-2">
          <Groupe>{SOCLE}</Groupe>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">Le plan 3D annoté</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            Il rend votre composition lisible d&apos;un coup d&apos;œil. Votre client comprend
            l&apos;organisation des espaces, les circulations, les zones — sans avoir à
            déchiffrer un plan technique.
          </p>
        </div>
        {/* PLACEHOLDER — remplacer par le vrai plan de composition 3D annoté */}
        <Visuel ratio="aspect-[4/3]" className="lg:order-1">
          <PlanCallout top="18%" left="12%" label="Terrasse bois" />
          <PlanCallout top="38%" left="52%" label="Bassin à débordement" />
          <PlanCallout top="64%" left="20%" label="Massif arbustif persistant" />
          <PlanCallout top="78%" left="58%" label="Cheminement enrobé" />
        </Visuel>
      </div>

      {/* Cœur 01 — Pack d'images signature */}
      <div className="max-w-[1080px] mx-auto reveal mb-20">
        <Groupe>{COEUR}</Groupe>
        <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">Le pack d&apos;images signature</h3>
        <p className="text-[1.03rem] font-light text-[#6b6b6b] max-w-[600px] mb-9 leading-relaxed">
          C&apos;est le poste qui fait signer. Des visuels ultra-réalistes de votre projet,
          cadrés à l&apos;œil du photographe, qui donnent à voir le jardin fini comme
          s&apos;il existait déjà. C&apos;est ce que votre client emporte dans sa tête
          en sortant du rendez-vous.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ['/projets/pool-house/vie-1.webp', 'Golden hour — bassin à débordement'],
            ['/projets/pool-house/vue-2_final.webp', 'Fin de journée — terrasse et foyer'],
            ['/projets/pool-house/vue-4.webp', 'Crépuscule — plage de bassin'],
          ].map(([src, label]) => (
            <div key={label} className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image src={src} alt={label} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,28,28,0.55)] to-transparent" />
              <span className="absolute bottom-2 left-3 text-[0.62rem] tracking-[0.06em] uppercase text-white/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Option 01 — Maquette 3D temps réel / visite virtuelle */}
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal mb-20">
        <div className="lg:order-2">
          <XrEmbed
            src={XR_TOUR_URL}
            poster="/projets/pool-house/vue-3.webp"
            posterAlt="Maquette 3D interactive du pool house, explorable directement dans la page"
            caption="Maquette 3D interactive — intégrée à la page, aucune installation, aucun lien externe"
          />
        </div>
        <div className="lg:order-1">
          <Groupe>{OPTION}</Groupe>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">La maquette 3D temps réel, ou visite virtuelle</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            Elle permet à votre client de se promener dans son futur jardin, à son rythme,
            depuis un simple lien — aucune installation. Idéale pour les projets où
            la spatialisation change tout.
          </p>
        </div>
      </div>

      {/* Option 02 — Vidéo immersive */}
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal mb-16">
        {/* PLACEHOLDER — remplacer par la vraie vidéo montée */}
        <Visuel
          src="/projets/pool-house/vue-5.webp"
          alt="Vidéo immersive d'un projet d'aménagement extérieur"
          ratio="aspect-video" className="lg:order-2"
        >
          <PlayButton />
          <div className="absolute bottom-[15%] left-[5%] right-[5%] h-[3px] bg-white/30 z-10">
            <div className="h-full w-[38%] bg-[#f7f5f1]" />
          </div>
        </Visuel>
        <div className="lg:order-1">
          <Groupe>{OPTION}</Groupe>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">La vidéo immersive</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            Elle fait vivre le parcours du lieu en mouvement. Le supplément d&apos;âme pour
            les projets à forte identité, quand vous voulez marquer les esprits.
          </p>
        </div>
      </div>

      {/* Révisions + CTA */}
      <div className="max-w-[1080px] mx-auto reveal pt-12 border-t border-[rgba(28,28,28,0.12)]
                      flex flex-col sm:flex-row sm:items-center justify-between gap-8">
        <p className="text-[1.03rem] font-light text-[#6b6b6b] max-w-[560px] leading-relaxed">
          <strong className="font-semibold text-[#1c1c1c]">Révisions illimitées, toujours.</strong>{' '}
          On travaille l&apos;image ensemble jusqu&apos;à ce qu&apos;elle soit juste.
        </p>
        <a
          href="#process"
          className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.1em] uppercase
                     text-[#f7f5f1] bg-[#1c1c1c] px-8 py-4 rounded-full flex-shrink-0
                     hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-200"
        >
          Voir comment ça se passe
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
