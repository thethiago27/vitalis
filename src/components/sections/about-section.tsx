'use client'

import { Button } from '@/components/ui/button'

export function AboutSection() {
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
      <Button className="group relative transform overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
        <span className="relative z-10">Fale conosco</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Ícone de seta */}
        <svg
          className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-2 transform text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
