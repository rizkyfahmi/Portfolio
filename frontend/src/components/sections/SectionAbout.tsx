import { motion } from 'framer-motion'
import type { Profile } from '@/types'

interface SectionAboutProps {
  profile: Profile
}

export function SectionAbout({ profile }: SectionAboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-10 w-full py-20 sm:py-28 border-b border-slate-200/80 scroll-mt-20 bg-[#f5f5f7] flex items-center justify-center"
    >
      <div className="shell-slide w-full">
        {/* Main Card Container with Horizontal Slide & Reveal Variation (Fast framing) */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 30, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-r from-[#edeff2] via-[#e5e8ee] to-[#cdd0d5] border border-slate-300/70 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_10px_25px_-5px_rgba(15,23,42,0.04)] flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[460px] lg:min-h-[500px]"
        >
          {/* Left Column: Photo matching the full vertical length of the card with elegant rounded corners (Slower) */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 relative overflow-hidden self-stretch flex items-stretch justify-center bg-slate-900 m-2.5 sm:m-3.5 lg:m-4 rounded-[24px] sm:rounded-[34px] lg:rounded-[42px] border border-slate-300/80 shadow-[0_15px_35px_-10px_rgba(15,23,42,0.12)] max-h-[480px] lg:max-h-none"
          >
            <img
              src="/images/about-photo.jpg?v=1"
              alt={profile.name}
              className="h-full w-full lg:w-auto aspect-[682/1024] object-cover object-top select-none pointer-events-none rounded-[24px] sm:rounded-[34px] lg:rounded-[42px]"
            />
          </motion.div>

          {/* Right Column: Vertically Centered Title & About Description */}
          <div className="flex-1 p-6 sm:p-10 lg:p-14 flex flex-col justify-center my-auto space-y-6">
            <motion.h2
              id="about-title"
              initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              About Me<span className="text-slate-400">.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-600 max-w-xl text-pretty"
            >
              {(profile.about || '').split('\n\n').map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.4, delay: 0.35 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
