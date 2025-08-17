'use client'

import { ValueItem } from '@/components/value-item'
import { companyValues } from '@/lib/data'

export function Values() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Nossos Valores
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Nossa missão é guiada por princípios fundamentais que definem quem somos e como atuamos para proteger vidas
            e fortalecer empresas.
          </p>

          {/* Linha decorativa */}
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Grid de valores */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companyValues.map((value, index) => (
            <div key={value.title} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              <ValueItem title={value.title} description={value.description} />
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Conheça nossa história</span>
            <svg
              className="ml-3 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
