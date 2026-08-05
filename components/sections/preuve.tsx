import Link from 'next/link'
import Image from 'next/image'
import { Kicker } from '@/components/ui/frame'
import { getProjectBySlug } from '@/lib/portfolio-data'

/** Cas de référence réel du portfolio.
 *  Aucune citation client ni chiffre de résultat : rien n'est inventé ici. */
const project = getProjectBySlug('pool-house-bretagne')!

export default function Preuve() {
  return (
    <section id="preuve" className="bg-[#ede9e2] py-24 sm:py-28 px-[var(--gutter)]">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-14 items-center reveal">
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
          <Image
            src={project.image}
            alt="Bassin, terrasse bois et pool house d'un projet d'aménagement extérieur en Bretagne"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(28,28,28,0.6)] to-transparent" />
          <p className="absolute bottom-3 left-4 right-4 text-[0.72rem] text-white/90">
            {project.title}
          </p>
        </div>

        <div>
          <Kicker>La preuve</Kicker>
          <h2 className="font-bold tracking-tight text-[1.6rem] leading-snug mb-6">
            Le Book de Présentation Client, en situation.
          </h2>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] mb-4 leading-relaxed">
            Sur ce projet breton, tout s&apos;est joué sur l&apos;heure : une lumière rasante
            de fin de journée qui allonge les ombres et réchauffe le bois de la terrasse.
            Le foyer extérieur devient le point d&apos;ancrage du regard, là où le client
            se projette d&apos;abord.
          </p>
          <p className="text-[1.03rem] font-light text-[#6b6b6b] mb-7 leading-relaxed">
            Chaque cadrage a été composé pour donner envie de s&apos;y trouver, pas seulement
            pour documenter l&apos;implantation. C&apos;est exactement ce déplacement — de la
            lecture technique à la projection — que le Book installe dans votre rendez-vous.
          </p>
          <Link
            href={`/projets/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-7 py-3.5 rounded-full
                       hover:border-[rgba(28,28,28,0.5)] transition-colors duration-200"
          >
            Voir le projet complet
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
