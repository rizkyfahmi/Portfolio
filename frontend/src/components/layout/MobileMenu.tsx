import { X, ArrowRight } from 'lucide-react'
import type { Profile, SocialLink } from '@/types'

export interface NavItem {
  id: string
  label: string
  index: string
}

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  items: NavItem[]
  active: string
  profile: Profile
  socialLinks: SocialLink[]
  onNavigate: (id: string) => void
}

export function MobileMenu({
  open,
  onClose,
  items,
  active,
  profile,
  onNavigate,
}: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#171822] p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
          {profile.name} — Menu
        </span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-slate-300 hover:bg-[#222533] hover:text-white"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="mt-8 flex-1">
        <ul className="space-y-5">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`w-full text-left text-2xl font-bold transition-colors flex items-center justify-between ${
                  active === item.id ? 'text-amber-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {active === item.id && <ArrowRight size={20} className="text-amber-400" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/10 pt-6">
        <a
          href="#contact"
          onClick={onClose}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-amber-400 font-bold text-slate-950 shadow-md hover:bg-amber-300 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}
