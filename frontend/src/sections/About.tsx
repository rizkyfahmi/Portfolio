import { motion } from 'framer-motion'
import { ArrowRight, Code2, Server, Wrench } from 'lucide-react'
import type { Profile } from '@/types'

export function About({ profile }: { profile: Profile }) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-pad border-b border-white/5 bg-[#171822]"
    >
      <div className="shell">
        {/* Top Split Section matching Screenshot 2 */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Perkenalan & Latar Belakang */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-400" />
              About Me
            </span>

            <h2
              id="about-title"
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              Building web applications with clean code and functional focus.
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-400">
              {(profile.about || '').split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <span>{profile.email}</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Ketertarikan & Fokus + Metrik */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">
                Technical Interests &amp; Development Focus
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                I am deeply interested in the modern frontend ecosystem, web performance, and structured, efficient API designs. Through an iterative learning approach, my focus is on delivering intuitive user interfaces and maintainable, scalable code architectures.
              </p>
            </div>

            {/* Stats row */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-10">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {profile.years_experience}
                  <span className="text-amber-400">+</span>
                </span>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Years of Learning &amp; Building
                </p>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {profile.projects_shipped}
                  <span className="text-amber-400">+</span>
                </span>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Projects &amp; Explorations
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Prominent Focus Cards matching Screenshot 2 */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Solid Warm Amber Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-amber-400 p-8 text-slate-950 flex flex-col justify-between min-h-[220px] shadow-lg"
          >
            <div>
              <Code2 size={28} className="text-slate-950" />
              <h4 className="mt-6 text-xl font-bold tracking-tight">
                Frontend Development.
              </h4>
            </div>
            <p className="text-xs font-semibold text-slate-900/80">
              HTML, CSS, JavaScript, React, Tailwind CSS
            </p>
          </motion.div>

          {/* Card 2: Dark Slate Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-[#222533] p-8 text-white border border-white/10 flex flex-col justify-between min-h-[220px] hover:border-amber-400/40 transition-colors"
          >
            <div>
              <Server size={28} className="text-amber-400" />
              <h4 className="mt-6 text-xl font-bold tracking-tight">
                Backend & REST API.
              </h4>
            </div>
            <p className="text-xs text-slate-400">
              Node.js, Express, RESTful API, Database
            </p>
          </motion.div>

          {/* Card 3: Dark Slate Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-[#222533] p-8 text-white border border-white/10 flex flex-col justify-between min-h-[220px] hover:border-amber-400/40 transition-colors"
          >
            <div>
              <Wrench size={28} className="text-amber-400" />
              <h4 className="mt-6 text-xl font-bold tracking-tight">
                Tools & Workflow.
              </h4>
            </div>
            <p className="text-xs text-slate-400">
              Git, GitHub, Vite, Linux, VS Code
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
