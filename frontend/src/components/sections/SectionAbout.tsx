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
      className="relative z-10 w-full py-16 sm:py-24 border-b border-slate-200/80 scroll-mt-20 bg-[#f5f5f7] flex items-center justify-center"
    >
      <div className="shell-slide w-full">
        {/* Main Card Container: Full Horizontal Width, Scaled down Vertically by 20% (min-h-[400px]) */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 30, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-r from-[#edeff2] via-[#e5e8ee] to-[#cdd0d5] border border-slate-300/70 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_10px_25px_-5px_rgba(15,23,42,0.04)] flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[360px] lg:min-h-[400px]"
        >
          {/* Left Column: Photo slides in smoothly from Left (Crisp, No Blur) */}
          <motion.div
            initial={{ opacity: 0, x: -70, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 relative overflow-hidden self-stretch flex items-stretch justify-center bg-slate-900 m-2 sm:m-3 lg:m-3.5 rounded-[24px] sm:rounded-[34px] lg:rounded-[42px] border border-slate-300/80 shadow-[0_15px_35px_-10px_rgba(15,23,42,0.12)] max-h-[380px] lg:max-h-none"
          >
            <img
              src="/images/about-photo.jpg?v=1"
              alt={profile.name}
              className="h-full w-full lg:w-auto aspect-[682/1024] object-cover object-top select-none pointer-events-none rounded-[24px] sm:rounded-[34px] lg:rounded-[42px]"
            />
          </motion.div>

          {/* Right Column: Vertically Centered Title & About Description */}
          <div className="flex-1 p-5 sm:p-8 lg:p-10 flex flex-col justify-center my-auto space-y-4">
            <motion.h2
              id="about-title"
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 2.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              About Me<span className="text-slate-400">.</span>
            </motion.h2>

            <div className="space-y-3 text-xs sm:text-sm lg:text-[14px] leading-relaxed text-slate-600 max-w-xl text-pretty">
              {(profile.about || '').split('\n\n').map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.4, delay: 0.4 + idx * 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
