import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(navLinks.map((item) => item.id), 140)

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f5f5f7]/85 backdrop-blur-md border-b border-slate-300/60 transition-all shadow-xs">
      <div className="shell-slide flex h-14 items-center justify-end md:justify-center relative">
        
        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full cursor-pointer transition-all duration-200 ease-out select-none text-xs sm:text-[13px] ${
                  isActive
                    ? 'bg-slate-200/90 text-slate-950 font-bold shadow-2xs'
                    : 'text-slate-600 font-medium hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-200/60 transition-colors"
            aria-label="Open navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile nav menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f5f5f7]/95 backdrop-blur-md border-b border-slate-300/70 px-5 py-3 space-y-1 shadow-lg">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3.5 py-2 rounded-xl text-sm transition-all ${
                  isActive
                    ? 'bg-slate-200/90 text-slate-950 font-bold'
                    : 'text-slate-700 font-medium hover:bg-slate-200/50 hover:text-slate-950'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      )}
    </header>
  )
}
