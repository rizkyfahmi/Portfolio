import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Profile } from '@/types'

interface SectionHeroProps {
  profile: Profile
}

export function SectionHero({ profile }: SectionHeroProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative z-0 w-full min-h-[calc(100vh-5rem)] flex items-center justify-center pt-28 pb-20 border-b border-slate-200/80 scroll-mt-20 bg-[#f5f5f7] overflow-visible"
    >
      <div className="shell-slide w-full">
        
        {/* Main Card Container matching Home Hero Dimensions & Squircles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-r from-[#edeff2] via-[#e5e8ee] to-[#cdd0d5] border border-slate-300/70 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_10px_25px_-5px_rgba(15,23,42,0.04)] grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-visible min-h-[460px] lg:min-h-[500px]"
        >
          
          {/* Left Column: Vertically Centered Headline, Description & Buttons */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center my-auto z-10">
            
            <div className="space-y-6">
              {/* Two-Tone Big Headline: Separately choreographed and slowed down for cinematic impact */}
              <div>
                <motion.h1
                  id="hero-title"
                  initial={{ opacity: 0, x: -65, filter: 'blur(14px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] text-balance font-sans"
                >
                  Rizky Fahmi
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0, y: 35, scale: 0.96, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-400 leading-[1.08] text-balance mt-1.5 font-sans"
                >
                  Fullstack Developer.
                </motion.span>
              </div>

              {/* Description: Gentle upward drift with soft focus resolve (Much slower) */}
              <motion.p
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 2.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 max-w-lg text-pretty"
              >
                {profile.intro ||
                  'I am a Full-Stack Developer passionate about web engineering and modern technologies. I love turning ideas into real-world projects, crafting clean interfaces, and building resilient systems through continuous learning and exploration.'}
              </motion.p>

              {/* Action Buttons: Staggered slow pop & rise from below */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <motion.button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.4, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight size={15} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.4, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/90 border border-slate-300 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>Contact Me</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Photo with Entrance Animation (Significantly slower & majestic) + Continuous Idle Loop */}
          <div className="lg:col-span-5 relative flex items-end justify-center self-end overflow-visible leading-none h-full">
            <motion.div
              initial={{ opacity: 0, y: 90, scale: 0.88, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 3.0, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full flex justify-center items-end leading-none"
            >
              <motion.img
                src="/images/hero-portrait.png?v=8"
                alt={profile.name}
                animate={{
                  scale: [1.05, 1.075, 1.05],
                  rotate: [0, 0.6, 0, -0.6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: 'bottom center' }}
                className="block w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[465px] h-auto object-contain object-bottom align-bottom filter contrast-[1.03] drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] select-none pointer-events-none"
              />
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}