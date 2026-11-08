import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Experience, ProjectCategory, SkillLevel } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMonth(dateString: string): string {
  if (!dateString) return ''
  const [year, month] = dateString.split('-')
  if (!month) return year
  const date = new Date(Number(year), Number(month) - 1, 1)
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date)
}

export function formatPeriod(exp: Experience): string {
  const start = formatMonth(exp.start_date)
  const end = exp.is_current ? 'Present' : exp.end_date ? formatMonth(exp.end_date) : 'Present'
  return `${start} — ${end}`
}

export const projectCategoryLabel: Record<ProjectCategory, string> = {
  web: 'Web Application',
  mobile: 'Mobile App',
  api: 'API & Service',
  tooling: 'Tooling & Infra',
  experiment: 'Experimental',
}

export const skillLevelMeta: Record<SkillLevel, { label: string; weight: number }> = {
  advanced: { label: 'Advanced', weight: 3 },
  proficient: { label: 'Proficient', weight: 2 },
  working: { label: 'Working Knowledge', weight: 1 },
}

