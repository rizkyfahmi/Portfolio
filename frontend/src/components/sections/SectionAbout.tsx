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
      className="relative z-10 w-full py-10 sm:py-16 border-b border-slate-200/80 scroll-mt-20 bg-[#f5f5f7] flex items-center justify-center overflow-visible"
    >
      <div className="shell-slide w-full overflow-visible">
        {/* Main Card Container: Reduced vertically by 40% (Strict compact height, does not blow up) */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 30, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-r from-[#edeff2] via-[#e5e8ee] to-[#cdd0d5] border border-slate-300/70 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08),0_10px_20px_-5px_rgba(15,23,42,0.04)] flex flex-col lg:flex-row items-stretch overflow-visible min-h-[240px] lg:min-h-[250px] lg:max-h-[300px]"
        >
          {/* Mascot Sticker: Thinking / Contemplating at Top-Right Corner of Card (Half inside, half outside) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            whileHover={{ scale: 1.15, rotate: 0 }}
            animate={{ y: [0, -6, 0], rotate: [6, 9, 6] }}
            transition={{
              y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 1.8, delay: 0.4 },
              scale: { duration: 1.8, delay: 0.4 },
            }}
            className="absolute -top-7 -right-4 sm:-top-9 sm:-right-6 lg:-top-11 lg:-right-7 z-30 cursor-pointer select-none"
            title="Reflecting on continuous learning & growth"
          >
            <img
              src="/images/sticker-thinking.png"
              alt="Thinking mascot sticker"
              className="w-18 sm:w-22 lg:w-26 h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] pointer-events-none"
            />
          </motion.div>

          {/* Left Column: Portrait Photo (Strictly compact 2:3 ratio, natural image, does not stretch the card) */}
          <motion.div
            initial={{ opacity: 0, x: -70, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 relative overflow-hidden flex items-center justify-center bg-slate-900 m-2 sm:m-2.5 lg:m-3 rounded-[20px] sm:rounded-[28px] lg:rounded-[34px] border border-slate-300/80 shadow-[0_12px_28px_-10px_rgba(15,23,42,0.12)] w-[160px] sm:w-[175px] lg:w-[185px] h-[240px] sm:h-[255px] lg:h-[270px]"
          >
            <img
              src="/images/about-photo.jpg?v=5"
              alt={profile.name}
              className="w-full h-full object-cover object-top select-none pointer-events-none rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]"
            />
          </motion.div>

          {/* Right Column: Vertically Centered Title & About Description Compacted 40% */}
          <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center my-auto space-y-2 sm:space-y-2.5 overflow-hidden">
            <motion.h2
              id="about-title"
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 2.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              About Me<span className="text-slate-400">.</span>
            </motion.h2>

            <div className="space-y-2 text-xs sm:text-[13px] lg:text-[13.5px] leading-relaxed text-slate-600 max-w-4xl text-pretty">
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
