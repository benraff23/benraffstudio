import Link from 'next/link'
import type { PortfolioProject } from '@/lib/portfolio-data'

export default function ProjetsGrid({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projets/${project.slug}`}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c] rounded-xl"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#ede9e2]">
            <img
              src={project.image}
              alt={`${project.title} — ${project.category}, ${project.year}`}
              className="w-full h-full object-cover object-center
                         transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[rgba(28,28,28,0.25)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-[rgba(247,245,241,0.9)] backdrop-blur-sm text-[#1c1c1c]
                               text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full">
                Voir le projet
              </span>
            </div>
            <div className="absolute top-3 left-3">
              <span className="text-[9px] font-medium tracking-widest uppercase
                               bg-[rgba(247,245,241,0.85)] text-[#1c1c1c] px-2.5 py-1 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#9a9a9a]">
              {project.category}
            </span>
            <span className="text-[10px] text-[#9a9a9a]">· {project.year}</span>
          </div>
          <h2 className="text-base font-semibold text-[#1c1c1c] leading-snug group-hover:text-[#6b6b6b] transition-colors duration-200 mb-1">
            {project.title}
          </h2>
          <p className="text-sm font-light text-[#9a9a9a] leading-relaxed line-clamp-2">
            {project.intention}
          </p>
        </Link>
      ))}
    </div>
  )
}
