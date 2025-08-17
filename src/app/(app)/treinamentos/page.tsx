import { TrainingsPageClient } from '@/components/sections/trainings-page-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treinamentos | Vitalis SSHO',
  description: 'Treinamentos da Vitalis SSHO',
}

export default function TrainingsPage() {
  return <TrainingsPageClient />
}
