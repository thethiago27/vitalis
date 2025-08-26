import { Header } from './components/header'
import { Values } from './components/values'
import { Services } from './components/services'
import { Hero } from '@/components/sections/hero'
import { Section } from '@/components/sections/section'
import { BenefitsSection } from '@/components/sections/benefits-section'
import { TrainingSection } from '@/components/sections/training-section'
import { DocumentsSection } from '@/components/sections/documents-section'
import { AboutSection } from '@/components/sections/about-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { FAQSection } from '@/components/sections/faq-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { ContactForm } from '@/components/forms/contact-form'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { heroData } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalisseguranca.com.br'),
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
    url: 'https://vitalisseguranca.com.br',
    siteName: 'Vitalis SSHO',
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
    title: 'Vitalis SSHO - Soluções em Segurança e Saúde Ocupacional',
    description:
      'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional.',
    images: ['/placeholder.jpg'],
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
    canonical: 'https://vitalisseguranca.com.br',
    languages: {
      'pt-BR': 'https://vitalisseguranca.com.br',
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
    'DC.identifier': 'https://vitalisseguranca.com.br',
    'DC.language': 'pt-BR',
    'DC.coverage': 'Brasil',
    'DC.rights': 'Copyright 2024 Vitalis SSHO',
  },
}

export default function Home() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Vitalis SSHO',
            alternateName: 'Vitalis Segurança e Saúde Ocupacional',
            description:
              'Especialistas em SST: Treinamentos NRs, Documentação Legal e Consultoria em Segurança e Saúde Ocupacional',
            url: 'https://vitalisseguranca.com.br',
            logo: 'https://vitalisseguranca.com.br/placeholder-logo.png',
            image: 'https://vitalisseguranca.com.br/placeholder.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Av. Paulista, 777, sala 102, parte 946, Bela Vista',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              postalCode: '01311-914',
              addressCountry: 'BR',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+55-11-99254-1052',
              contactType: 'customer service',
              email: 'comercial@vitalisseguranca.com.br',
              availableLanguage: 'Portuguese',
            },
            sameAs: ['https://instagram.com/vitalisssho', 'https://wa.me/5511992541052'],
            serviceArea: {
              '@type': 'Country',
              name: 'Brasil',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Serviços de SST',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Treinamentos em Normas Regulamentadoras',
                    description: 'Cursos de segurança do trabalho conforme NRs vigentes',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Elaboração de Documentação Legal',
                    description: 'Documentos técnicos para compliance trabalhista',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Consultoria em SST',
                    description: 'Assessoria especializada em segurança e saúde ocupacional',
                  },
                },
              ],
            },
            foundingDate: '2020',
            numberOfEmployees: '10-50',
            areaServed: 'Brasil',
          }),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          <Header />

          {/* Hero Section */}
          <Hero title={heroData.title} subtitle={heroData.subtitle} ctaText={heroData.ctaText} />

          {/* Estatísticas */}
          <StatsSection />

          {/* Serviços */}
          <Services />

          {/* Valores */}
          <Values />

          {/* Metodologia */}
          <ProcessTimeline />

          {/* Abordagem */}
          <Section
            title="ABORDAGEM"
            subtitle="Protegemos Pessoas e Negócios com Excelência em SST"
            variant="centered"
            background="white"
          >
            <AboutSection />
          </Section>

          {/* Benefícios */}
          <Section
            title="BENEFÍCIOS"
            subtitle="Juntos, vamos construir um futuro mais seguro!"
            background="gradient"
            variant="centered"
          >
            <BenefitsSection />
          </Section>

          {/* Treinamentos */}
          <Section
            id="treinamentos"
            title="Treinamentos"
            subtitle="Capacitação que transforma conhecimento em segurança!"
            variant="centered"
            background="white"
          >
            <TrainingSection />
          </Section>

          {/* Documentos */}
          <Section
            id="documentos"
            title="Elaboração de Documentos"
            subtitle="Documentação segura, empresa protegida!"
            background="gradient"
            variant="centered"
          >
            <DocumentsSection />
          </Section>

          {/* Empresas Parceiras */}
          <Section
            id="parceiros"
            title="Empresas Parceiras"
            subtitle="Empresas que confiam na Vitalis SSHO"
            background="white"
            variant="centered"
          >
            <PartnersSection />
          </Section>

          {/* FAQ */}
          <FAQSection />

          {/* Newsletter */}

          {/* Contato */}
          <Section id="contato" title="Entre em contato" background="dark" variant="centered">
            <ContactForm />
          </Section>
        </main>

        <Footer />

        <ScrollToTop />
      </div>
    </>
  )
}
