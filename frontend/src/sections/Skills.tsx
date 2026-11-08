import { motion } from 'framer-motion'
import { Code2, GitBranch, Layers, Wrench } from 'lucide-react'

const skillGroups = [
  {
    category: 'Core Fundamentals',
    icon: Code2,
    skills: [
      { name: 'HTML5', desc: 'Semantic markup & struktur web standar' },
      { name: 'CSS3', desc: 'Flexbox, CSS Grid, media queries & animasi' },
      { name: 'JavaScript (ES6+)', desc: 'DOM manipulation, Async/Await, Array methods' },
    ],
  },
  {
    category: 'Modern Frontend',
    icon: Layers,
    skills: [
      { name: 'React', desc: 'Komponen berbasis fungsi, Hooks & State Management' },
      { name: 'Tailwind CSS', desc: 'Utility-first styling, desain responsif & maintainable' },
      { name: 'TypeScript', desc: 'Type safety, interfaces & modular development' },
    ],
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    skills: [
      { name: 'Git', desc: 'Branching, commit history, merge & rebase dasar' },
      { name: 'GitHub', desc: 'Repository management, Pull Request & collaboration' },
    ],
  },
  {
    category: 'Developer Tools & Ecosystem',
    icon: Wrench,
    skills: [
      { name: 'Node.js & REST API', desc: 'Integrasi backend & konsumsi endpoint API' },
      { name: 'Vite & Build Tools', desc: 'Fast bundling, hot module replacement & build' },
      { name: 'VS Code & Linux', desc: 'Alur kerja coding harian, terminal & debugging' },
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-pad border-b border-white/5 bg-[#171822]"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-amber-400" />
            Skills & Technologies
          </span>

          <h2
            id="skills-title"
            className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Teknologi & perkakas yang digunakan untuk membangun produk digital.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Kombinasi bahasa pemrograman, library frontend, dan workflow tool yang rutin saya pakai dalam proses pengembangan aplikasi web.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, groupIdx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: groupIdx * 0.08 }}
                className="rounded-3xl bg-[#222533] p-6 border border-white/8 hover:border-amber-400/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                    <span className="p-2 rounded-xl bg-white/5 text-amber-400">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-3.5">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="group/item">
                        <div className="text-sm font-semibold text-slate-200 group-hover/item:text-amber-400 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {skill.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
