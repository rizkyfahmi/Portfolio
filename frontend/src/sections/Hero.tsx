import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SocialLinks } from '@/components/ui/SocialLinks'
import type { Profile } from '@/types'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/5 bg-[#171822]"
    >
      <div className="shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Big Name & Underline & Socials */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <motion.h1
                id="hero-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                {profile.name}
                <span className="text-amber-400">.</span>
              </motion.h1>
              
              {/* Yellow Accent Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 h-1.5 w-14 rounded-full bg-amber-400 origin-left"
              />
            </div>

            {/* Social Links Row on Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <SocialLinks links={profile.social_links} />
            </motion.div>
          </div>

          {/* Center Column: Portrait Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full max-w-xs sm:max-w-sm aspect-4/5 rounded-3xl overflow-hidden bg-[#222533] border border-white/10 shadow-2xl group"
            >
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-full h-full object-cover object-center filter grayscale-20 contrast-105 transition-all duration-700 group-hover:scale-103 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171822]/80 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

          {/* Right Column: Introduction, Role & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-amber-400" />
                Introduction
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                {profile.role_label}, based in {profile.location}.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {profile.intro ||
                  'I am a Full-Stack Developer passionate about web engineering and modern technologies. I love turning ideas into real-world projects, crafting clean interfaces, and building resilient systems through continuous learning and exploration.'}
              </p>

              <div className="mt-8">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
                >
                  <span>About Me</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
