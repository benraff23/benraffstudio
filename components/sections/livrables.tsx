import Image from 'next/image'
import { Kicker, Visuel, PlayButton, PlanCallout } from '@/components/ui/frame'
import XrEmbed from '@/components/ui/xr-embed'

// Tour D5 réel servant d'exemple sur l'accueil.
const XR_TOUR_URL = 'https://share.d5render.com/user-hub/showreel/shortLink/oPtyMV'

export default function Livrables() {
  return (
    <section id="book" className="bg-[#ede9e2] pt-24 sm:pt-28 pb-24 sm:pb-28 px-[var(--gutter)]">
      {/* Intro offre */}
      <div className="max-w-[1080px] mx-auto reveal mb-16">
        <Kicker>Le Book de Présentation Client</Kicker>
        <h2 className="font-bold tracking-tight text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight mb-6 max-w-[640px]">
          Quatre livrables, un seul objectif : faire ressentir votre projet.
        </h2>
        <p className="text-[1.03rem] font-light text-[#6b6b6b] max-w-[600px] leading-relaxed">
          Chaque Book de Présentation Client est une production sur-mesure, réalisée à partir
          de votre relevé, de votre plan de plantation et de votre sélection de mobilier
          et matériaux — pas un gabarit générique.
        </p>
      </div>

      {/* 01 — Plan de composition en 3D annoté */}
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal mb-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6b6b6b] mb-3">01 — Le support de lecture</p>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">Le plan de composition, en 3D et annoté</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed mb-4">
            Terrasse bois, allée en pas japonais, massif de graminées, bassin à débordement —
            chaque zone de votre plan d&apos;aménagement prend du relief et devient lisible
            pour votre client, sans jargon technique à expliquer.
          </p>
          <p className="text-[1.03rem] font-light text-[#9a9a9a] italic leading-relaxed">
            Exemple : plan de composition annoté d&apos;un jardin littoral.
          </p>
        </div>
        {/* PLACEHOLDER — remplacer par le vrai plan de composition 3D annoté */}
        <Visuel ratio="aspect-[4/3]">
          <PlanCallout top="18%" left="12%" label="Terrasse bois" />
          <PlanCallout top="38%" left="52%" label="Bassin à débordement" />
          <PlanCallout top="64%" left="20%" label="Massif arbustif persistant" />
          <PlanCallout top="78%" left="58%" label="Cheminement enrobé" />
        </Visuel>
      </div>

      {/* 02 — Maquette interactive intégrée au mini-site */}
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
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6b6b6b] mb-3">02 — L&apos;exploration libre</p>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">La maquette interactive, intégrée à votre mini-site</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            Export D5 XR Tour, intégré directement dans le mini-site de présentation remis à
            votre client — pas un lien séparé à cliquer. Il explore le futur jardin depuis la
            même page, sans rien installer, et découvre les volumes, les perspectives,
            la distance réelle entre la terrasse et le bassin.
          </p>
        </div>
      </div>

      {/* 03 — Images signature */}
      <div className="max-w-[1080px] mx-auto reveal mb-20">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6b6b6b] mb-3">03 — L&apos;émotion</p>
        <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">Les images signature, dans leur plus belle lumière</h3>
        <p className="text-[1.03rem] font-light text-[#6b6b6b] max-w-[600px] mb-9 leading-relaxed">
          Golden hour sur le bassin à débordement, fin de journée autour du foyer, ambiance
          crépusculaire sur la plage de piscine — chaque vue est composée pour donner envie,
          pas pour documenter.
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

      {/* 04 — Vidéo immersive */}
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal">
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
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6b6b6b] mb-3">04 — Le récit</p>
          <h3 className="font-bold tracking-tight text-[1.6rem] mb-4">La vidéo immersive, pour raconter le jardin dans le temps</h3>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed mb-4">
            Un mouvement fluide qui traverse l&apos;allée d&apos;entrée, longe le massif,
            s&apos;arrête sur la terrasse au coucher du soleil — il fait ressentir
            l&apos;échelle et l&apos;ambiance du lieu, bien au-delà d&apos;une image fixe.
          </p>
          <p className="text-[1.03rem] font-light text-[#9a9a9a] italic leading-relaxed">
            Exemple : séquence de 30 secondes, du portail à la terrasse.
          </p>
        </div>
      </div>
    </section>
  )
}
