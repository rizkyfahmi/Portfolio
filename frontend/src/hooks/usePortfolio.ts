import { useEffect, useState } from 'react'
import { fallbackPortfolio } from '@/data/content'
import { fetchPortfolio } from '@/lib/api'
import type { PortfolioData } from '@/types'

type Source = 'fallback' | 'api'

export function usePortfolio() {
  const [data, setData] = useState<PortfolioData>(fallbackPortfolio)
  const [source, setSource] = useState<Source>('fallback')

  useEffect(() => {
    const controller = new AbortController()

    fetchPortfolio(controller.signal)
      .then((payload) => {
        setData(payload)
        setSource('api')
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        console.info('[portfolio] Backend API idle, active with bundled content.', error)
      })

    return () => controller.abort()
  }, [])

  return { data, source }
}

