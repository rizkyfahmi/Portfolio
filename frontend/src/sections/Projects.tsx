import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import type { Project } from '@/types'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-pad border-b border-white/5 bg-[#171822]"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Introduction matching Screenshot 3 */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-400" />
              Portfolio
            </span>

            <h2
              id="projects-title"
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              All Creative Works, Selected projects.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              Koleksi aplikasi web dan antarmuka yang dibangun dengan fokus pada performa responsif, fungsionalitas nyata, dan kemudahan penggunaan.
            </p>

            <div className="pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <span>Lihat repository di GitHub</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Project Showcase Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
