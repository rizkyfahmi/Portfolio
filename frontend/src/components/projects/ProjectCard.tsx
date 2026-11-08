import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/BrandIcons'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#222533] transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
      {/* Preview Image with sleek overlay */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
        <img
          src={project.thumbnail_url}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
        />
        <div className="absolute top-4 right-4 rounded-full bg-slate-950/80 px-3 py-1 text-[0.7rem] font-mono font-medium text-amber-400 backdrop-blur-md border border-white/10">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[0.7rem] text-slate-300 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <GitHubIcon size={14} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
