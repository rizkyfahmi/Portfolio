import axios from 'axios'
import type { ContactPayload, ContactResponse, PortfolioData } from '@/types'

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api'

export const api = axios.create({
  baseURL,
  timeout: 6000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export async function fetchPortfolio(signal?: AbortSignal): Promise<PortfolioData> {
  const response = await api.get<{ data: PortfolioData }>('/portfolio', { signal })
  return response.data.data
}

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResponse> {
  const response = await api.post<ContactResponse>('/contact', payload)
  return response.data
}

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const errors = error.response?.data?.errors as Record<string, string[]> | undefined
    if (errors) {
      const first = Object.values(errors).flat().filter(Boolean)[0]
      if (first) return first
    }

    const message = error.response?.data?.message
    if (typeof message === 'string' && message.trim()) return message

    if (error.code === 'ECONNABORTED') {
      return 'The request took too long. Please try again, or email me directly.'
    }

    if (!error.response) {
      return 'The server is unreachable right now. Please email me directly instead.'
    }
  }

  return fallback
}

