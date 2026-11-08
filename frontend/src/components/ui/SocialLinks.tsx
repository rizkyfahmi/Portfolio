import { Mail, Globe, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/ui/BrandIcons'
import type { SocialLink } from '@/types'

interface SocialLinksProps {
  links: SocialLink[]
  showLabels?: boolean
  className?: string
}

export function SocialLinks({
  links,
  showLabels = false,
  className = '',
}: SocialLinksProps) {

  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'github':
        return <GitHubIcon size={16} />
      case 'linkedin':
        return <LinkedInIcon size={16} />
      case 'instagram':
        return <InstagramIcon size={16} />
      case 'email':
        return <Mail size={16} />
      default:
        return <Globe size={16} />
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={link.label}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#222533] px-3 py-2 text-xs font-medium text-slate-300 transition-all hover:border-amber-400/50 hover:bg-[#2b2f40] hover:text-amber-400"
        >
          {getIcon(link.icon)}
          {showLabels && <span>{link.label}</span>}
          <ArrowUpRight size={12} className="opacity-50" />
        </a>
      ))}
    </div>
  )
}

