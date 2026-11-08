import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { Education as EducationType, Experience as ExperienceType } from '@/types'

interface ExperienceProps {
  experiences: ExperienceType[]
  educations: EducationType[]
}

type TimelineItem = {
  id: string
  period: string
  category: 'Work' | 'Internship' | 'Organization' | 'Freelance' | 'Education'
  title: string
  subtitle: string
  location?: string
  description: string
  achievements?: string[]
  tech?: string[]
}

export function Experience({ experiences, educations }: ExperienceProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Combine experiences and educations into a unified milestones timeline
  const items: TimelineItem[] = [
    // Experiences
    ...experiences.map((exp) => ({
      id: `exp-${exp.id}`,
      period: exp.is_current ? `${exp.start_date.slice(0, 4)} — Sekarang` : `${exp.start_date.slice(0, 4)} — ${exp.end_date ? exp.end_date.slice(0, 4) : 'Selesai'}`,
      category: (exp.employment_type === 'Magang' ? 'Magang' : exp.employment_type === 'Organisasi' ? 'Organisasi' : exp.employment_type === 'Freelance' ? 'Freelance' : 'Pekerjaan') as TimelineItem['category'],
      title: exp.position,
      subtitle: exp.company,
      location: exp.location,
      description: exp.description,
      achievements: exp.achievements,
      tech: exp.tech,
    })),
    // Educations
    ...educations.map((edu) => ({
      id: `edu-${edu.id}`,
      period: `${edu.start_year} — ${edu.end_year}`,
      category: 'Education' as TimelineItem['category'],
      title: edu.degree,
      subtitle: edu.institution,
      description: edu.description,
      achievements: edu.achievements,
      tech: undefined,
    })),
  ]

  const getCategoryBadge = (category: TimelineItem['category']) => {
    switch (category) {
      case 'Work':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20'
      case 'Internship':
        return 'text-sky-400 bg-sky-400/10 border-sky-400/20'
      case 'Freelance':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
      case 'Organization':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
      case 'Education':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20'
    }
  }

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad border-b border-white/5 bg-[#171822]"
    >
      <div className="shell">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-amber-400" />
            Experience &amp; Education
          </span>

          <h2
            id="experience-title"
            className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Education history, work experience, organizations &amp; projects.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A progressive journey of academic learning and sharpening technical engineering through hands-on development.
          </p>
        </div>

        {/* Clean Line-List Timeline matching Screenshot 4 */}
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {items.map((item) => {
            const isExpanded = expandedId === item.id
            return (
              <div key={item.id} className="group">
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                >
                  {/* Left: Period & Category */}
                  <div className="flex items-center gap-4 sm:w-64 shrink-0">
                    <span className="font-mono text-xs text-slate-400">
                      {item.period}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold ${getCategoryBadge(
                        item.category,
                      )}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Middle: Title & Subtitle */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {item.subtitle} {item.location && `· ${item.location}`}
                    </p>
                  </div>

                  {/* Right: Expand chevron */}
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-amber-400 transition-colors shrink-0">
                    <span className="text-xs font-medium hidden sm:inline">
                      {isExpanded ? 'Tutup' : 'Detail'}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pb-6"
                    >
                      <div className="rounded-2xl bg-[#222533] p-5 sm:p-6 border border-white/5 space-y-3">
                        <p className="text-sm leading-relaxed text-slate-300">
                          {item.description}
                        </p>

                        {item.achievements && item.achievements.length > 0 && (
                          <ul className="space-y-1.5 pt-2 border-t border-white/5">
                            {item.achievements.map((ach) => (
                              <li key={ach} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.tech && item.tech.length > 0 && (
                          <div className="pt-2 flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-mono text-slate-400 mr-1">Teknologi:</span>
                            {item.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded bg-white/5 px-2 py-0.5 font-mono text-[0.65rem] text-amber-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
