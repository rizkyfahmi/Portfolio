import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Profile } from '@/types'

const heroSlides = [
  {
    src: '/images/hero-slide-1.png?v=1',
    alt: 'Rizky Fahmi working on laptop',
  },
  {
    src: '/images/hero-slide-2.png?v=1',
    alt: 'Rizky Fahmi walking in black suit with phone',
  },
  {
    src: '/images/hero-slide-3.png?v=1',
    alt: 'Rizky Fahmi in black shirt with glasses',
  },
]

interface SectionHeroProps {
  profile: Profile
}

export function SectionHero({ profile }: SectionHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

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
              {/* Title: Part 1 slides from Left, Part 2 drops from Top (Crisp, No Blur) */}
              <div>
                <motion.h1
                  id="hero-title"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] text-balance font-sans"
                >
                  Rizky Fahmi
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0, y: -26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-400 leading-[1.08] text-balance mt-1.5 font-sans"
                >
                  Fullstack Developer.
                </motion.span>
              </div>

              {/* Description: Glides up from Bottom (Crisp, No Blur) */}
              <motion.p
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 2.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 max-w-lg text-pretty"
              >
                {profile.intro ||
                  'I am a Full-Stack Developer passionate about web engineering and modern technologies. I love turning ideas into real-world projects, crafting clean interfaces, and building resilient systems through continuous learning and exploration.'}
              </motion.p>

              {/* Action Buttons: Pops in from Center via Scale + Playful Thumbs-Up Sticker */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <motion.button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  initial={{ opacity: 0, scale: 0.65 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.0, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight size={15} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  initial={{ opacity: 0, scale: 0.65 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.0, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/90 border border-slate-300 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>Contact Me</span>
                </motion.button>

                {/* Mascot Sticker: Winking Thumbs-Up */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 1.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 1.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="hidden sm:inline-block ml-1 cursor-pointer select-none"
                  title="Let's build something great together!"
                >
                  <img
                    src="/images/sticker-thumbsup.png"
                    alt="Thumbs-up mascot sticker"
                    className="w-16 lg:w-20 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.14)] pointer-events-none"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Automatic Carousel Slide Moving Right to Left */}
          <div className="lg:col-span-5 relative flex items-end justify-center self-end overflow-hidden leading-none h-[420px] sm:h-[480px] lg:h-full min-h-[420px] rounded-b-[32px] sm:rounded-b-[44px] lg:rounded-b-none lg:rounded-r-[52px]">
            <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 140, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -140, scale: 0.95 }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex items-end justify-center leading-none"
                >
                  <img
                    src={heroSlides[currentSlide].src}
                    alt={heroSlides[currentSlide].alt}
                    className="block w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[465px] h-auto object-contain object-bottom align-bottom filter contrast-[1.03] drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] select-none pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle Slide Indicators */}
              <div className="absolute bottom-3 sm:bottom-4 z-20 flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-5 bg-white shadow-xs'
                        : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}