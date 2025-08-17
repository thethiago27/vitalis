import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import type React from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalisssho.org'),
  title: {
    default: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    template: '%s | Vitalis SSHO',
  },
  description:
    'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional. Empresas que valorizam a vida confiam na Vitalis SSHO.',
  keywords: [
    'segurança do trabalho',
    'saúde ocupacional',
    'treinamentos NRs',
    'CIPA',
    'documentação SST',
    'consultoria SST',
    'prevenção de acidentes',
    'compliance trabalhista',
    'treinamento segurança',
    'NR 05',
    'NR 10',
    'NR 35',
    'primeiros socorros',
    'equipamentos proteção individual',
    'espaços confinados',
    'trabalho altura',
    'prevenção incêndio',
    'ergonomia',
    'laudo técnico',
    'programa PCMSO',
    'programa PGR',
    'São Paulo',
    'Brasil',
  ],
  authors: [{ name: 'Vitalis SSHO' }],
  creator: 'Vitalis SSHO',
  publisher: 'Vitalis SSHO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vitalisssho.org',
    siteName: 'Vitalis SSHO',
    title: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    description:
      'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional. Empresas que valorizam a vida confiam na Vitalis SSHO.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitalis SSHO - Segurança e Saúde Ocupacional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    description:
      'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional.',
    images: ['/og-image.jpg'],
    creator: '@vitalisssho',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vitalisssho.org',
    languages: {
      'pt-BR': 'https://vitalisssho.org',
    },
  },
  category: 'Business',
  classification: 'Business Services',
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    ICBM: '-23.5505, -46.6333',
    'DC.title': 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    'DC.description':
      'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional',
    'DC.subject': 'Segurança do Trabalho, Saúde Ocupacional, Treinamentos NRs, Consultoria SST',
    'DC.creator': 'Vitalis SSHO',
    'DC.publisher': 'Vitalis SSHO',
    'DC.contributor': 'Vitalis SSHO',
    'DC.date': '2024',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://vitalisssho.org',
    'DC.language': 'pt-BR',
    'DC.coverage': 'Brasil',
    'DC.rights': 'Copyright 2024 Vitalis SSHO',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://vitalisssho.org" />
        <link rel="alternate" hrefLang="pt-BR" href="https://vitalisssho.org" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
