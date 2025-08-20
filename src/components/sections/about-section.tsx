'use client'

import { Button } from '@/components/ui/button'
import { companyInfo } from '@/lib/data'
import { useMixpanel } from '@/lib/use-mixpanel'
import { useEffect } from 'react'

export function AboutSection() {
  const { trackCTA, trackSection } = useMixpanel()

  // Rastrear visualização da seção
  useEffect(() => {
    trackSection('About Section', {
      page: 'Home',
      company_name: companyInfo.name,
      company_description: companyInfo.description,
    })
  }, [trackSection])

  const handleWhatsAppClick = () => {
    // Rastrear clique no CTA do WhatsApp
    trackCTA('WhatsApp CTA', 'About Section', {
      page: 'Home',
      cta_text: 'Fale conosco',
      contact_method: 'whatsapp',
      phone_number: companyInfo.contact.phone,
    })

    // Abrir WhatsApp
    window.open(companyInfo.contact.whatsapp, '_blank')
  }

  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Texto principal com efeito de destaque */}
      <div className="relative mb-12">
        <p className="text-xl font-light leading-relaxed text-gray-700 md:text-2xl">
          Na{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold text-transparent">
            Vitalis SSHO
          </span>
          , acreditamos que segurança no trabalho vai além do cumprimento de normas – é sobre proteger vidas, preservar
          famílias e fortalecer empresas. Somos especialistas em
          <span className="font-semibold text-blue-600"> Saúde, Segurança e Higiene Ocupacional (SSHO)</span>,
          oferecendo soluções completas e personalizadas para transformar ambientes de trabalho em espaços seguros,
          saudáveis e produtivos.
        </p>

        {/* Linha decorativa */}
        <div className="absolute bottom-0 left-1/2 mt-6 h-1 w-32 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      {/* Botão CTA moderno */}
      <Button 
        onClick={handleWhatsAppClick}
        className="group relative transform overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
      >
        <span className="relative z-10">Fale conosco</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Ícone de WhatsApp */}
        <svg
          className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-2 transform text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.242.489 1.668.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </Button>

      {/* Estatísticas */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="group text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl font-bold text-white">500+</span>
          </div>
          <h4 className="mb-2 text-lg font-semibold text-gray-800">Empresas Atendidas</h4>
          <p className="text-gray-600">Soluções personalizadas implementadas</p>
        </div>

        <div className="group text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl font-bold text-white">100%</span>
          </div>
          <h4 className="mb-2 text-lg font-semibold text-gray-800">Conformidade</h4>
          <p className="text-gray-600">Cumprimento total das NRs</p>
        </div>

        <div className="group text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl font-bold text-white">24/7</span>
          </div>
          <h4 className="mb-2 text-lg font-semibold text-gray-800">Suporte</h4>
          <p className="text-gray-600">Atendimento sempre disponível</p>
        </div>
      </div>
    </div>
  )
}
