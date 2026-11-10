import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/BrandIcons'
import type { Project } from '@/types'

interface SectionProjectsProps {
  projects: Project[]
}

export function SectionProjects({ projects }: SectionProjectsProps) {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-24 sm:py-32 border-b border-slate-200/80 scroll-mt-20 overflow-hidden bg-[#f5f5f7]"
    >
      <div className="shell-slide w-full">
        
        {/* Title: On top and centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <motion.h2
            id="portfolio-title"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Featured Projects<span className="text-slate-400">.</span>
          </motion.h2>
        </div>

        {/* Alternating Zig-Zag Project Rows: Kanan - Kiri - Kanan - Kiri */}
        <div className="space-y-28 sm:space-y-36">
          {projects.map((project, idx) => {
            const isImageRight = idx % 2 === 0
            
            // Asymmetric tilt rotation: alternating between positive & negative tilt, leveling ONLY on image hover
            const tiltClass = isImageRight
              ? 'lg:rotate-3 lg:group-hover/image:rotate-0'
              : 'lg:-rotate-3 lg:group-hover/image:rotate-0'

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  x: isImageRight ? -80 : 80,
                  y: 40,
                  scale: 0.94,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                
                {/* Description Column (Independent hover) */}
                <div
                  className={`space-y-5 ${
                    isImageRight
                      ? 'lg:col-span-5 lg:order-1'
                      : 'lg:col-span-5 lg:order-2'
                  }`}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: isImageRight ? -30 : 30, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                    className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 hover:text-slate-600 transition-colors leading-tight inline-block"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm sm:text-base leading-relaxed text-slate-600"
                  >
                    {project.description || project.summary}
                  </motion.p>

                  {/* Action buttons */}
                  {project.live_url && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="pt-2 flex flex-wrap items-center gap-4"
                    >
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>View on GitHub</span>
                        <ArrowUpRight size={16} strokeWidth={2.4} />
                      </a>
                    </motion.div>
                  )}
                </div>

                {/* Image Column: Animates ONLY when mouse is on the image */}
                <div
                  className={`${
                    isImageRight
                      ? 'lg:col-span-7 lg:order-2'
                      : 'lg:col-span-7 lg:order-1'
                  }`}
                >
                  <div className="relative group/image">
                    {/* Asymmetric background decorative frame accent */}
                    <div
                      className={`absolute -inset-3 sm:-inset-4 rounded-3xl bg-slate-900/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 blur-xl ${tiltClass}`}
                    />

                    {/* Main Image Container with Tilt and Smooth Leveling ONLY on Image Hover */}
                    <div
                      className={`relative aspect-16/10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#edeff2] via-[#e5e8ee] to-[#d6d9df] border border-slate-300/80 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out group-hover/image:scale-[1.02] group-hover/image:border-slate-400 group-hover/image:shadow-2xl ${tiltClass}`}
                    >
                      <img
                        src={project.thumbnail_url}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-104"
                      />

                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="absolute bottom-4 right-4 p-3 rounded-2xl bg-slate-950 text-white shadow-xl opacity-0 group-hover/image:opacity-100 transition-all duration-300 hover:bg-slate-800 hover:scale-105"
                          aria-label="Visit Project"
                        >
                          <ArrowUpRight size={18} strokeWidth={2.4} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.article>
            )
          })}
        </div>

        {/* Bottom GitHub CTA link with Dynamic Scroll & Hover Animations */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 sm:mt-32 flex justify-center text-center"
        >
          <motion.a
            href="https://github.com/rizkyfahmi"
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/90 hover:bg-slate-950 border border-slate-300 hover:border-slate-950 text-slate-800 hover:text-white shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
          >
            <GitHubIcon size={18} className="text-slate-700 group-hover:text-white transition-colors" />
            <span className="text-xs sm:text-sm font-bold tracking-tight">
              Explore more projects and repositories on GitHub
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
