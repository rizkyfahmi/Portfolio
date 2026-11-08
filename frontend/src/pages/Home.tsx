import { Footer } from '@/components/layout/Footer'
import { SectionHero } from '@/components/sections/SectionHero'
import { SectionAbout } from '@/components/sections/SectionAbout'
import { SectionProjects } from '@/components/sections/SectionProjects'
import { SectionExperience } from '@/components/sections/SectionExperience'
import { SectionContact } from '@/components/sections/SectionContact'
import type { PortfolioData } from '@/types'

export function Home({ data }: { data: PortfolioData }) {
  return (
    <div className="relative w-full min-h-screen bg-[#f5f5f7] text-slate-900">
      {/* Main Single-Page Sections matching Screenshot 1 to 5 */}
      <main className="w-full">
        <SectionHero profile={data.profile} />
        <SectionAbout profile={data.profile} />
        <SectionProjects projects={data.projects} />
        <SectionExperience profile={data.profile} />
        <SectionContact profile={data.profile} />
      </main>

      {/* Modern Multi-Column Footer matching user screenshot */}
      <Footer profile={data.profile} />
    </div>
  )
}
