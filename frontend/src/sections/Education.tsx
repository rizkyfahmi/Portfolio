import { motion } from 'framer-motion'
import { Award, CheckCircle2, GraduationCap } from 'lucide-react'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { EASE_EXPO, viewportOnce } from '@/animations/variants'
import { formatMonth } from '@/lib/utils'
import type { Certification, Education as EducationItem } from '@/types'

interface EducationProps {
  educations: EducationItem[]
  certifications: Certification[]
}

export function Education({ educations, certifications }: EducationProps) {
  return (
    <section id="education" aria-labelledby="education-title" className="section-pad border-b border-amber-100/70 bg-white">
      <div className="shell">
        <SectionHeader
          index="06"
          titleId="education-title"
          eyebrow="Credentials & Academic Foundation"
          title="Formal grounding, continuously updated."
          description="A strong foundation in computer science and distributed computing, complemented by industry-standard technical certifications."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Education list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 border-b border-amber-100 pb-3">
              <GraduationCap size={19} className="text-orange-500" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                Academic Degrees & Higher Education
              </h3>
            </div>

            <div className="space-y-6">
              {educations.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_EXPO }}
                  className="rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50/30 to-white p-6 shadow-2xs sunrise-border-glow"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-lg font-bold text-slate-900">{item.degree}</h4>
                    <span className="font-mono text-xs text-amber-800 font-semibold">
                      {item.start_year} — {item.end_year}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-orange-600">
                    {item.institution} · <span className="text-slate-500 font-normal">{item.field}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  {item.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1.5 border-t border-amber-100 pt-3">
                      {item.achievements.map((ach) => (
                        <li key={ach} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={13} className="text-orange-500 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications list */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 border-b border-amber-100 pb-3">
              <Award size={19} className="text-orange-500" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: EASE_EXPO }}
                  className="flex items-center justify-between rounded-xl border border-amber-200/70 bg-white p-4 shadow-2xs transition-all hover:border-orange-300 hover:shadow-xs"
                >
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{cert.title}</h5>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {cert.issuer} · {formatMonth(cert.issued_at)}
                    </p>
                  </div>
                  {cert.credential_url && (
                    <a
                      href={cert.credential_url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-lg bg-amber-100/70 px-2.5 py-1 font-mono text-[0.65rem] font-bold text-orange-700 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      Verify
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50/40 p-5 text-xs text-slate-700 leading-relaxed shadow-xs">
              <span className="font-bold text-slate-900 block mb-1">Applied Engineering Standard</span>
              Every certification listed above reflects verified competencies that are directly exercised in production environments and software delivery.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

