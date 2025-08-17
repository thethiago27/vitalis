import { DocumentsPageClient } from '@/components/sections/documents-page-client'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Documentações - Vitalis SSHO',
    description: 'Documentações em Segurança e Saúde Ocupacional',
    alternates: {
      canonical: 'https://vitalisseguranca.com.br/documentacoes',
    },
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://vitalisseguranca.com.br'),
    authors: [{ name: 'Vitalis SSHO' }],
    creator: 'Vitalis SSHO',
    publisher: 'Vitalis SSHO',
    other: {
      'geo.region': 'BR-SP',
      'geo.placename': 'São Paulo',
      'geo.position': '-23.5505;-46.6333',
      ICBM: '-23.5505, -46.6333',
      'DC.title': 'Documentações - Vitalis SSHO',
    },
  }
}

export default function DocumentsPage() {
  return <DocumentsPageClient />
}
