import { ArrowRight } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { SocialLinks } from '@/components/ui/SocialLinks'
import type { Profile } from '@/types'

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad border-b border-white/5 bg-[#171822]"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column matching Screenshot 5 */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-amber-400" />
              Contact
            </span>

            <h2
              id="contact-title"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Got a project? Let's talk.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              Apakah Anda memiliki ide proyek, tawaran pekerjaan, atau ingin berdiskusi mengenai pengembangan web? Jangan ragu untuk menghubungi saya.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <span>{profile.email}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Social media links */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Sosial Media & Jaringan Profesional
              </p>
              <SocialLinks links={profile.social_links} showLabels />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
