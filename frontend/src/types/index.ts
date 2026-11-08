export type SkillCategory = 'frontend' | 'backend' | 'database' | 'mobile' | 'tools'
export type SkillLevel = 'advanced' | 'proficient' | 'working'

export interface SocialLink {
  id: number
  label: string
  handle: string
  url: string
  icon: string
}

export interface Profile {
  id?: number
  name: string
  initials: string
  role_label: string
  headline: string
  intro: string
  about: string
  email: string
  location: string
  availability: string
  avatar_url: string
  resume_url: string
  years_experience: number
  projects_shipped: number
  response_hours: number
  social_links: SocialLink[]
}

export interface Skill {
  id: number
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string | null
  sort_order: number
}

export interface Experience {
  id: number
  position: string
  company: string
  company_url?: string | null
  location: string
  employment_type: string
  start_date: string
  end_date?: string | null
  is_current: boolean
  description: string
  achievements: string[]
  tech: string[]
  sort_order: number
}

export type ProjectCategory = 'web' | 'mobile' | 'api' | 'tooling' | 'experiment'

export interface Project {
  id: number
  title: string
  slug: string
  category: ProjectCategory
  summary: string
  description: string
  thumbnail_url: string
  year: number
  role: string
  featured: boolean
  tech: string[]
  highlights: string[]
  github_url?: string | null
  live_url?: string | null
  sort_order: number
}

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  start_year: number
  end_year: number
  description: string
  achievements: string[]
  sort_order: number
}

export interface Certification {
  id: number
  title: string
  issuer: string
  issued_at: string
  credential_url?: string | null
  sort_order: number
}

export interface PortfolioData {
  profile: Profile
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
  educations: Education[]
  certifications: Certification[]
}

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
  company_website?: string
}

export interface ContactResponse {
  message: string
  data?: {
    id: number
  }
}

