import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { presentations, getPresentationBySlug } from '@/lib/presentation-data'
import HeroPresentation from './hero-presentation'
import PlanEtVues from './plan-et-vues'
import MaquetteXr from './maquette-xr'
import VideoImmersive from './video-immersive'
import Livrables, { type Livrable } from './livrables'

export function generateStaticParams() {
  return presentations.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const projet = getPresentationBySlug(slug)
  if (!projet) return {}
  return {
    title: projet.localisation ? `${projet.titre} - ${projet.localisation}` : projet.titre,
    // Page privée : jamais indexée, jamais listée dans le sitemap, aucun lien entrant.
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  }
}

function formatOf(href: string) {
  const ext = href.split('?')[0].split('.').pop()
  return ext ? ext.toUpperCase() : 'FICHIER'
}

export default async function PresentationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projet = getPresentationBySlug(slug)
  if (!projet) notFound()

  const premiere = projet.imagesSignature[0]
  const heroImage = projet.heroImage ?? premiere?.src
  const heroAlt = projet.heroImage ? projet.titre : (premiere?.alt ?? projet.titre)

  const livrables: Livrable[] = [
    ...(projet.metre
      ? [{
          href: projet.metre.download,
          label: projet.metre.label ?? 'Plan 2D côté avec métrés',
          format: formatOf(projet.metre.download),
        }]
      : []),
    { href: projet.plan3d.download, label: 'Plan de composition', format: formatOf(projet.plan3d.download) },
    ...projet.imagesSignature.flatMap((img, i) =>
      img.downloadHd
        ? [{ href: img.downloadHd, label: img.zone ?? `Vue ${i + 1}`, format: formatOf(img.downloadHd) }]
        : []
    ),
    ...(projet.video?.download
      ? [{ href: projet.video.download, label: 'Vidéo', format: formatOf(projet.video.download) }]
      : []),
  ]

  return (
    <div className="presentation-page min-h-screen bg-[#f7f5f1] text-[#1c1c1c]">
      {/* Le site masque le curseur natif au profit d'un curseur custom piloté par
          ClientEffects. Cette page ne le charge pas : on rétablit le curseur système,
          plus fiable quand la page est projetée en rendez-vous. */}
      <style>{`
        .presentation-page, .presentation-page * { cursor: auto; }
        .presentation-page a, .presentation-page button { cursor: pointer; }
        .presentation-page .cursor-zoom-in { cursor: zoom-in; }
      `}</style>

      <div className="noise" aria-hidden="true" />

      <HeroPresentation
        image={heroImage}
        alt={heroAlt}
        titre={projet.titre}
        localisation={projet.localisation}
        logoUrl={projet.paysagiste?.logoUrl}
        nomPaysagiste={projet.paysagiste?.nom}
      />

      <PlanEtVues
        planImage={projet.plan3d.image}
        planDownload={projet.plan3d.download}
        hotspots={projet.plan3d.hotspots ?? []}
        images={projet.imagesSignature}
        titre={projet.titre}
      />

      {projet.maquetteXR && (
        <MaquetteXr embedUrl={projet.maquetteXR.embedUrl} titre={projet.titre} />
      )}

      {projet.video && (
        <VideoImmersive url={projet.video.url} poster={projet.video.poster} titre={projet.titre} />
      )}

      <Livrables items={livrables} />

      {projet.branding?.whiteLabel !== true && (
        <footer className="bg-[#f7f5f1] border-t border-[rgba(28,28,28,0.07)] px-[var(--gutter)] py-10">
          <p className="max-w-[1400px] mx-auto text-[10px] font-medium tracking-[0.18em] uppercase text-[#9a9a9a]">
            Réalisation 3D - BenRaff Studio
          </p>
        </footer>
      )}
    </div>
  )
}
