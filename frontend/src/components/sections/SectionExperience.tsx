import { motion } from 'framer-motion'
import type { Profile } from '@/types'

interface SectionExperienceProps {
  profile?: Profile
}

export function SectionExperience({ profile }: SectionExperienceProps) {
  // Work Experience data
  const workExperience = {
    role: 'Full-Stack Developer Intern',
    company: 'EXP.INC · Kepanjen',
    period: 'September 2026 — Present',
    desc: 'Participating in an internship program focused on full-stack web engineering. Learning professional software development workflows, from architectural planning to robust production implementation.',
    learningPoints: [
      'Website development workflow.',
      'Frontend and backend development.',
      'AI-assisted development using Claude and Antigravity.',
      'Individual and collaborative work.',
    ],
  }

  // Education & Activities data
  const educationList = [
    {
      title: 'SMKN 1 Kepanjen',
      period: 'Currently Studying',
      desc: '11th-grade vocational student passionate about computer science, full-stack software development, and modern web architectures.',
    },
    {
      title: 'Independent Learning',
      desc: 'Continuously exploring emerging technologies through independent study, tutorials, hands-on experiments, and AI-assisted workflows.',
    },
  ]

  // Current Learning Focus
  const learningFocus = [
    'Full-Stack Web Development',
    'Frontend Development',
    'Backend Development',
    'AI-Assisted Coding',
    'Problem Solving',
  ]

  // Technologies & Tools
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Python',
    'PHP',
    'Java',
    'SQL',
    'React.js',
    'NestJS',
    'Vue.js',
    'Tailwind CSS',
    'Bootstrap',
    'Node.js',
    'Laravel',
    'VS Code',
    'Git',
    'GitHub',
    'Figma',
    'Postman',
    'MySQL',
    'MongoDB',
    'Supabase',
    'Vercel',
  ]

  // AI Tools
  const aiTools = [
    'Lovable',
    'ChatGPT',
    'Gemini',
    'Claude',
    'Antigravity',
    'Google Stitch',
  ]

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="w-full py-20 sm:py-28 border-b border-slate-200/80 scroll-mt-20 bg-[#f5f5f7] flex items-center justify-center"
    >
      <div className="shell-slide w-full">
        {/* Main Card Container with Entrance & Exit inView Animation */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-r from-[#edeff2] via-[#e5e8ee] to-[#cdd0d5] border border-slate-300/70 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_10px_25px_-5px_rgba(15,23,42,0.04)] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Top Badge Title with subtle tilt animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center sm:justify-start mb-8 sm:mb-12"
          >
            <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300 select-none">
              <div className="rounded-2xl bg-slate-950 px-6 py-2.5 sm:px-8 sm:py-3.5 text-white font-bold text-lg sm:text-2xl tracking-wide shadow-[5px_5px_0px_0px_rgba(148,163,184,0.6)] border border-slate-800">
                Experience &amp; Education
              </div>
            </div>
          </motion.div>

          {/* TOP SECTION: Left Lanyard ID Badge + Right Work Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Realistic Hanging Lanyard ID Badge Pass */}
            <div className="lg:col-span-4 flex flex-col items-center justify-start pt-2">
              <motion.div
                initial={{ opacity: 0, y: -60, rotate: -12 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 1.4, ease: [0.34, 1.3, 0.64, 1] }}
                className="relative flex flex-col items-center select-none"
              >
                {/* Lanyard Fabric Ribbon Strap */}
                <div className="relative w-32 h-28 flex items-center justify-center -mb-5 z-20 pointer-events-none">
                  <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-sm" fill="none">
                    <path
                      d="M36 0 C38 45, 80 50, 80 88"
                      stroke="#cbd5e1"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                    <path
                      d="M124 0 C122 42, 80 48, 80 88"
                      stroke="#94a3b8"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                    <path
                      d="M124 0 C122 42, 80 48, 80 88"
                      stroke="#e2e8f0"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 0 C38 45, 80 50, 80 88"
                      stroke="#f8fafc"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <rect x="74" y="86" width="12" height="16" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
                    <circle cx="80" cy="94" r="2.5" fill="#475569" />
                    <path
                      d="M75 102 C75 116, 85 116, 85 102"
                      stroke="#64748b"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Plastic Badge Holder Sleeve */}
                <div className="relative w-64 sm:w-72 rounded-[22px] bg-white/90 border border-slate-300/80 p-3.5 sm:p-4 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xs">
                  
                  <div className="w-12 h-2.5 rounded-full bg-slate-200 border border-slate-300 mx-auto mb-3" />

                  {/* Inner Badge Card */}
                  <div className="rounded-xl bg-white border border-slate-300/80 p-3 space-y-3">
                    
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                      <span>DEVELOPER ID PASS</span>
                      <span className="font-semibold text-slate-400">2026</span>
                    </div>

                    <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300/80 flex items-end justify-center">
                      <img
                        src="/images/hero-portrait.png?v=8"
                        alt={profile?.name || 'Rizky Fahmi'}
                        className="w-full h-full object-cover object-top filter grayscale contrast-105"
                      />
                    </div>

                    <div className="px-1 pt-1 space-y-0.5">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {profile?.name || 'Rizky Fahmi'}
                      </h4>
                      <p className="text-xs font-semibold text-slate-700">
                        Full-Stack Developer Intern
                      </p>
                      <p className="text-[11px] text-slate-500">
                        EXP.INC · SMKN 1 Kepanjen
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/90 flex items-center justify-between px-1">
                      <span className="text-[9px] font-medium tracking-wider text-slate-400">
                        ID: EXP-2026
                      </span>
                      <div className="flex items-center gap-[2px] h-3.5 opacity-70">
                        <span className="w-0.5 h-full bg-slate-400" />
                        <span className="w-1.5 h-full bg-slate-900" />
                        <span className="w-0.5 h-full bg-slate-300" />
                        <span className="w-1 h-full bg-slate-900" />
                        <span className="w-0.5 h-full bg-slate-400" />
                        <span className="w-1.5 h-full bg-slate-900" />
                        <span className="w-0.5 h-full bg-slate-300" />
                        <span className="w-1 h-full bg-slate-800" />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Title + Work Experience with Entrance/Exit Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 space-y-8"
            >
              
              {/* Header Title & Paragraph with Differentiated Animations */}
              <div className="space-y-3">
                <motion.h2
                  id="experience-title"
                  initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
                >
                  My Journey &amp; Experience<span className="text-slate-400">.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl text-pretty font-normal"
                >
                  A look into my learning journey, educational background, and hands-on experience in web development.
                </motion.p>
              </div>

              {/* Work Experience Card: Wide & Spacious Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="pt-6 border-t border-slate-200 space-y-4"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200">
                  Work Experience
                </h3>
                
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {workExperience.role}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold">
                      {workExperience.company}
                    </p>
                    <p className="text-xs text-slate-400 font-normal">
                      {workExperience.period}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 max-w-3xl">
                      {workExperience.desc}
                    </p>
                  </div>

                  {/* What I'm Learning */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      What I'm Learning:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-3xl">
                      {workExperience.learningPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <span className="text-slate-400 text-sm shrink-0 select-none">•</span>
                          <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>

          </div>

          {/* BOTTOM SECTION: Spanning Full Width of the Card with Dynamic InView Animation */}
          <div className="w-full border-t border-slate-200 mt-12 pt-10 space-y-10">
            
            {/* 1. Education & Activities with In/Out Animation */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200">
                Education &amp; Activities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {educationList.map((edu, idx) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-1.5 bg-slate-50/70 hover:bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {edu.title}
                    </h4>
                    {edu.period && (
                      <p className="text-xs text-slate-400 font-normal">
                        {edu.period}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {edu.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 2. Cohesive & Balanced: Learning Focus & AI Tools (Left) + Technologies (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2 border-t border-slate-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                
                {/* Left Card (lg:col-span-5): Current Learning Focus + AI Tools, filling height symmetrically */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.15, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-5 bg-white/85 hover:bg-white rounded-2xl p-6 border border-slate-300/80 hover:border-slate-400 transition-colors shadow-xs flex flex-col justify-between space-y-6"
                >
                  {/* Part 1: Current Learning Focus */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200/90">
                      Current Learning Focus
                    </h4>
                    <div className="space-y-2">
                      {learningFocus.map((focus) => (
                        <div key={focus} className="flex items-start gap-2.5">
                          <span className="text-slate-400 text-sm shrink-0 select-none">•</span>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                            {focus}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Part 2: AI Tools */}
                  <div className="pt-4 border-t border-slate-200/80 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      AI Tools
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {aiTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-medium border border-slate-800 transition-all hover:bg-slate-800 cursor-default shadow-2xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Card (lg:col-span-7): Technologies & Tools with expansive grid filling the entire width */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-7 bg-white/85 hover:bg-white rounded-2xl p-6 border border-slate-300/80 hover:border-slate-400 transition-colors shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200/90">
                      Technologies &amp; Tools
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal mt-2">
                      Berdasarkan pembelajaran dan penggunaan aktif dalam proyek web:
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-xs font-medium text-slate-700 hover:text-slate-950 transition-all hover:scale-[1.03] cursor-default shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span>24 Technologies &amp; Frameworks</span>
                    <span>Frontend · Backend · Tools · Database</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}
