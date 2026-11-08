import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, Phone } from 'lucide-react'
import { InstagramIcon, GitHubIcon } from '@/components/ui/BrandIcons'
import type { Profile } from '@/types'

interface SectionContactProps {
  profile: Profile
}

export function SectionContact({ profile }: SectionContactProps) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setForm({ name: '', email: '', message: '', consent: false })
    }, 1500)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full py-20 sm:py-28 border-b border-slate-200/80 scroll-mt-20 bg-[#f5f5f7] flex items-center justify-center"
    >
      <div className="shell-slide w-full">
        {/* Main Card Container with Expansive Pop & Bloom Variation */}
        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.90 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] bg-gradient-to-r from-[#edeff2] via-[#e5e8ee] to-[#cdd0d5] border border-slate-300/70 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_10px_25px_-5px_rgba(15,23,42,0.04)] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Top 3D Tilted Badge Title */}
          <div className="flex justify-center sm:justify-start mb-8 sm:mb-12">
            <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300 select-none">
              <div className="rounded-2xl bg-slate-950 px-6 py-2.5 sm:px-8 sm:py-3.5 text-white font-bold text-lg sm:text-2xl tracking-wide shadow-[5px_5px_0px_0px_rgba(148,163,184,0.6)] border border-slate-800">
                Get In Touch
              </div>
            </div>
          </div>

          {/* 2-Column Split: Left Form with Pill Inputs, Right Friendly Mascot & Sleek Contact Pills */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Column: Form with Smooth Slide In */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <h2
                  id="contact-title"
                  className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
                >
                  Let's Talk<span className="text-slate-400">.</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                {/* Field 1: Name (Pill Input) */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g., John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-full border border-slate-300 bg-[#fbfcfd] px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition-all shadow-2xs font-normal"
                  />
                </div>

                {/* Field 2: Email (Pill Input) */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-full border border-slate-300 bg-[#fbfcfd] px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition-all shadow-2xs font-normal"
                  />
                </div>

                {/* Field 3: Message (Rounded Box Textarea) */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-msg" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    Message Details
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={4}
                    placeholder="Tell me about your project, technical needs, or timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-2xl border border-slate-300 bg-[#fbfcfd] px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition-all shadow-2xs resize-none font-normal"
                  />
                </div>

                {/* Checkbox consent */}
                <div className="pt-1">
                  <label className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 cursor-pointer select-none font-normal">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="rounded border-slate-300 text-slate-950 focus:ring-slate-950 h-4 w-4 cursor-pointer"
                    />
                    <span>I agree to be contacted via email for project follow-ups.</span>
                  </label>
                </div>

                {/* Submit Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sent}
                    className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-slate-800 active:scale-95 transition-all cursor-pointer disabled:opacity-70"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span>Message Sent! Thank you</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right Column: Friendly Character Mascot & Sleek Minimal Contact Pills with Pop & Settle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.86, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.35, delay: 0.2, ease: [0.34, 1.25, 0.64, 1] }}
              className="lg:col-span-5 flex flex-col items-center justify-center space-y-6"
            >
              
              {/* Waving Character Illustration */}
              <div className="relative flex flex-col items-center">
                
                {/* Comic Speech Bubble emerging from the head upwards with 2x longer duration and inView scroll trigger */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.15, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 2.6,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: 'bottom center' }}
                  className="relative mb-3.5 px-4 py-2 rounded-2xl bg-[#eaecf0] border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium shadow-2xs select-none flex items-center justify-center"
                >
                  <span>Ready to discuss your project!</span>
                  {/* Subtle triangle tail pointing down to the character */}
                  <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-[#eaecf0] border-r border-b border-slate-300 rotate-45" />
                </motion.div>

                {/* Anime Chibi Boy Sticker with Animated Waving Hand & Clean Transparent Background */}
                <div className="relative w-44 sm:w-52 aspect-[523/477] select-none my-2 flex items-center justify-center">
                  {/* Subtle soft ground shadow underneath */}
                  <div className="absolute -bottom-1.5 w-32 h-4 bg-slate-300/40 rounded-full blur-xs pointer-events-none" />

                  {/* Body (Head, hair, glasses, shirt, torso) with subtle breathing idle motion */}
                  <motion.img
                    src="/images/chibi-body.png?v=4"
                    alt="Rizky Fahmi Character"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full object-contain filter drop-shadow-sm pointer-events-none"
                  />

                  {/* Animated Waving Hand & Arm */}
                  <motion.img
                    src="/images/chibi-hand.png?v=4"
                    alt="Waving Hand"
                    animate={{
                      rotate: [0, 10, -2, 10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: 'easeInOut',
                    }}
                    style={{
                      transformOrigin: '28.3% 77.1%', // Exact pivot point at the wrist cuff
                    }}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  />
                </div>
              </div>

              {/* Contact Pills: Matching the Unified Site Font & Minimalist Palette */}
              <div className="w-full max-w-xs space-y-2.5 pt-1">
                
                {/* 1. Email Pill */}
                <a
                  href={`mailto:${profile.email || 'rzkyfhm@gmail.com'}`}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-white/90 border border-slate-300 hover:bg-white hover:border-slate-400 hover:shadow-xs transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-colors shrink-0 shadow-2xs">
                      <Mail size={13} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 truncate">
                      {profile.email || 'rzkyfhm@gmail.com'}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* 2. WhatsApp / Phone Pill */}
                <a
                  href="https://wa.me/6282338479390"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-white/90 border border-slate-300 hover:bg-white hover:border-slate-400 hover:shadow-xs transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-colors shrink-0 shadow-2xs">
                      <Phone size={13} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 tracking-normal truncate">
                      082338479390
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* 3. Instagram Pill */}
                <a
                  href="https://instagram.com/rzkyfahm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-white/90 border border-slate-300 hover:bg-white hover:border-slate-400 hover:shadow-xs transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-colors shrink-0 shadow-2xs">
                      <InstagramIcon size={13} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 tracking-normal truncate">
                      @rzkyfahm
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* 4. GitHub Pill */}
                <a
                  href="https://github.com/rizkyfahmi"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-white/90 border border-slate-300 hover:bg-white hover:border-slate-400 hover:shadow-xs transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-colors shrink-0 shadow-2xs">
                      <GitHubIcon size={13} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 tracking-normal truncate">
                      github.com/rizkyfahmi
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
