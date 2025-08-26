import { Inter, Poppins } from 'next/font/google'
import type React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { MixpanelProvider } from '@/components/providers/mixpanel-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
  metadataBase: new URL('https://vitalisseguranca.com.br'),
  title: {
    default: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    template: '%s | Vitalis SSHO',
  },
  description:
    'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional. Empresas que valorizam a vida confiam na Vitalis SSHO.',
  applicationName: 'Vitalis SSHO',
  authors: [{ name: 'Vitalis SSHO' }],
  creator: 'Vitalis SSHO',
  publisher: 'Vitalis SSHO',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Vitalis SSHO',
    url: 'https://vitalisseguranca.com.br',
    title: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    description:
      'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional. Empresas que valorizam a vida confiam na Vitalis SSHO.',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitalis SSHO - Segurança e Saúde Ocupacional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vitalisssho',
    title: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    description:
      'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional.',
    images: ['/placeholder.jpg'],
  },
  alternates: {
    languages: {
      'pt-BR': 'https://vitalisseguranca.com.br',
    },
  },
  other: {
    'theme-color': '#0f172a',
    'msapplication-TileColor': '#0f172a',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <MixpanelProvider>{children}</MixpanelProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
