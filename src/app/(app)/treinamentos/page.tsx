import { TrainingsPageClient } from '@/components/sections/trainings-page-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalisseguranca.com.br'),
  title: 'Treinamentos | Vitalis SSHO',
  description:
    'Treinamentos em Segurança do Trabalho: NR 05, NR 10, NR 33, NR 35, Primeiros Socorros e mais. Capacitação com instrutores certificados.',
  alternates: {
    canonical: 'https://vitalisseguranca.com.br/treinamentos',
  },
  openGraph: {
    type: 'article',
    url: 'https://vitalisseguranca.com.br/treinamentos',
    title: 'Treinamentos | Vitalis SSHO',
    description:
      'Capacitação em SST: cursos práticos e atualizados conforme NRs. Instrutores certificados e foco em resultados.',
    images: [
      { url: '/placeholder.jpg', width: 1200, height: 630, alt: 'Treinamentos em SST' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treinamentos | Vitalis SSHO',
    description:
      'Capacitação em SST: cursos práticos e atualizados conforme NRs. Instrutores certificados e foco em resultados.',
    images: ['/placeholder.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function TrainingsPage() {
  return <TrainingsPageClient />
}
