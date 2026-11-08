import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_EXPO, viewportOnce } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  index?: string
  eyebrow?: string
  title: ReactNode
  description?: string
  tone?: 'light' | 'dark'
  titleId?: string
}

export function SectionHeader({
  title,
  description,
  tone = 'light',
  titleId,
}: SectionHeaderProps) {
  const isDark = tone === 'dark'

  return (
    <div className="max-w-3xl">
      <motion.h2
        id={titleId}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.55, ease: EASE_EXPO }}
        className={cn(
          'text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight',
          isDark ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE_EXPO }}
          className={cn(
            'mt-3.5 text-base leading-relaxed sm:text-lg',
            isDark ? 'text-slate-400' : 'text-slate-600',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

