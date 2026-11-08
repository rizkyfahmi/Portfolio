import { ArrowLeft } from 'lucide-react'
import { SectionHeader } from '@/components/layout/SectionHeader'

export function NotFound() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center py-24">
      <div className="shell text-center">
        <SectionHeader
          index="404"
          eyebrow="Not Found"
          title="Page Not Found"
          description="The page you are looking for does not exist. You can return to the portfolio home page."
        />
        <div className="mt-8 flex justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </a>
        </div>
      </div>
    </section>
  )
}

