import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ExternalLink, X } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/BrandIcons'
import { useEffect, useRef } from 'react'
import { EASE_EXPO } from '@/animations/variants'
import { projectCategoryLabel } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const reduce = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop with warm dark blur */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl border border-amber-200"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.25, ease: EASE_EXPO }}
          >
            {/* Header image with close button */}
            <div className="relative aspect-16/9 w-full overflow-hidden bg-amber-50">
              <img
                src={project.thumbnail_url}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md backdrop-blur-xs transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Close dialog"
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-amber-100/70 px-2.5 py-1 font-mono text-xs font-bold text-orange-700">
                    {projectCategoryLabel[project.category]}
                  </span>
                  <span className="text-amber-300">·</span>
                  <span className="font-mono text-xs text-slate-500 font-semibold">{project.year}</span>
                </div>
                <span className="font-mono text-xs text-amber-800 font-medium">{project.role}</span>
              </div>

              <h2 id="dialog-title" className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {project.title}
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                {project.summary}
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200/60 bg-amber-50/40 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Architecture & Implementation Details
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {project.description}
                </p>
              </div>

              {/* Key Achievements */}
              {project.highlights.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                    Key Outcomes & Engineering Impact
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-6 border-t border-amber-100 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Technology Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-amber-200/70 bg-amber-50/60 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-amber-100 pt-6">
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 text-xs font-bold text-white shadow-xs hover:from-orange-600 hover:to-orange-700"
                  >
                    Launch Live Deployment
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-amber-200 bg-white px-5 text-xs font-bold text-slate-900 shadow-2xs hover:bg-amber-50 hover:border-orange-300"
                  >
                    <GitHubIcon size={14} />
                    View Source Code
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

