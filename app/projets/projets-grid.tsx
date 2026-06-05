import Link from 'next/link'
import type { PortfolioProject } from '@/lib/portfolio-data'

export default function ProjetsGrid({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projets/${project.slug}`}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8e84e] rounded-2xl"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
            <img
              src={project.image}
              alt={`${project.title} — ${project.category}, ${project.year}`}
              className="w-full h-full object-cover object-center
                         transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white
                               text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full">
                Voir le projet
              </span>
            </div>
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-medium tracking-wider uppercase
                               bg-black/50 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c8e84e]">
              {project.category}
            </span>
            <span className="text-[10px] text-white/40">· {project.year}</span>
          </div>
          <h2 className="text-base font-semibold text-white leading-snug group-hover:text-[#c8e84e] transition-colors duration-200">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-[#9a9a9a] leading-relaxed line-clamp-2">
            {project.intention}
          </p>
        </Link>
      ))}
    </div>
  )
}
