'use client'

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
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { FAQSection } from '@/components/sections/faq-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { ContactForm } from '@/components/forms/contact-form'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { heroData } from '@/lib/data'

export default function Home() {
  const handleContactSubmit = (data: any) => {
    console.log('Form data:', data)
    // Implementar lógica de envio do formulário
  }

  const handleHeroCta = () => {
    // Scroll para seção de contato
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

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
            url: 'https://vitalisssho.org',
            logo: 'https://vitalisssho.org/logo.png',
            image: 'https://vitalisssho.org/og-image.jpg',
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
              email: 'comercial.01@vitalisssho.org',
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
          <Hero
            title={heroData.title}
            subtitle={heroData.subtitle}
            ctaText={heroData.ctaText}
            onCtaClick={handleHeroCta}
          />

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

          {/* Depoimentos */}
          <TestimonialsSection />

          {/* FAQ */}
          <FAQSection />

          {/* Newsletter */}
          <NewsletterSection />

          {/* Contato */}
          <Section id="contato" title="Entre em contato" background="dark" variant="centered">
            <ContactForm onSubmit={handleContactSubmit} />
          </Section>
        </main>

        <Footer />

        <ScrollToTop />
      </div>
    </>
  )
}
