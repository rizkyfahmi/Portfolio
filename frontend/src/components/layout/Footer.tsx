import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { GitHubIcon, InstagramIcon } from '@/components/ui/BrandIcons'
import type { Profile } from '@/types'

interface FooterProps {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  const year = new Date().getFullYear()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#0b0f19] border-t border-slate-800 text-slate-400 pt-16 pb-12 transition-colors">
      <div className="shell-slide w-full">
        
        {/* Top 5-Column Grid matching current website structure */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-3.5">
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                {profile.name || 'Rizky Fahmi'}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Vocational student at SMKN 1 Kepanjen specializing in Full-Stack Web Development, clean modern interfaces, and AI-assisted workflows to turn ideas into tangible digital products.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
              <MapPin size={13} className="text-slate-400 shrink-0" />
              <span>Kepanjen, Malang, East Java, Indonesia</span>
            </div>
          </div>

          {/* Column 2: Tautan Navigasi */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-[13px] font-semibold tracking-wide text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('experience')}
                  className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
                >
                  Experience &amp; Education
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Projects */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-[13px] font-semibold tracking-wide text-white uppercase">
              Projects
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/rizkyfahmi/DevAcademy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors block whitespace-nowrap truncate"
                  title="DevAcademy — Interactive Learning & Playground"
                >
                  DevAcademy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rizkyfahmi/gemini-chatbot"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors block whitespace-nowrap truncate"
                  title="Gemini AI Chatbot"
                >
                  Gemini AI Chatbot
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rizkyfahmi/E-Commerce"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors block whitespace-nowrap truncate"
                  title="Multi-Vendor E-Commerce Platform"
                >
                  E-Commerce Platform
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer text-left block whitespace-nowrap truncate"
                  title="Playtest ID — Android Testing Platform"
                >
                  Playtest ID
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Teknologi Utama */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-[13px] font-semibold tracking-wide text-white uppercase">
              Technology
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                Next.js &amp; React.js
              </li>
              <li className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                NestJS &amp; Node.js
              </li>
              <li className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                TypeScript &amp; Tailwind CSS
              </li>
              <li className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                PostgreSQL &amp; Prisma
              </li>
              <li className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                AI Tools &amp; Gemini API
              </li>
            </ul>
          </div>

          {/* Column 5: Kontak & Jejaring */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-[13px] font-semibold tracking-wide text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`mailto:${profile.email || 'rzkyfhm@gmail.com'}`}
                  className="hover:text-white transition-colors whitespace-nowrap block"
                >
                  {profile.email || 'rzkyfhm@gmail.com'}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6282338479390"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors whitespace-nowrap block"
                >
                  082338479390 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rzkyfahm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors whitespace-nowrap block"
                >
                  @rzkyfahm (Instagram)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rizkyfahmi"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors whitespace-nowrap block"
                >
                  github.com/rizkyfahmi
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-slate-400 font-medium">
          
          {/* Copyright Text */}
          <p>
            © {year} {profile.name || 'Rizky Fahmi'}. All rights reserved.
          </p>

          {/* Right Social Icons & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/rizkyfahmi"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href="https://instagram.com/rzkyfahm"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`mailto:${profile.email || 'rzkyfhm@gmail.com'}`}
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/6282338479390"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={15} />
              </a>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={backToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-semibold cursor-pointer pl-2 border-l border-slate-800"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} strokeWidth={2.4} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  )
}
