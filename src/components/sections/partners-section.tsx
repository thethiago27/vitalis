'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { partnersData, Partner } from '@/lib/partners'

export function PartnersSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  
  // Obter indústrias únicas
  const industries = useMemo(() => {
    const uniqueIndustries = [...new Set(partnersData.map(partner => partner.industry))]
    return ['all', ...uniqueIndustries]
  }, [])
  
  // Filtrar parceiros por indústria
  const filteredPartners = useMemo(() => {
    if (selectedIndustry === 'all') return partnersData
    return partnersData.filter(partner => partner.industry === selectedIndustry)
  }, [selectedIndustry])

  return (
    <div className="w-full">
      {/* Filtro por indústria */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
              selectedIndustry === industry
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
          >
            {industry === 'all' ? 'Todas as Indústrias' : industry}
          </button>
        ))}
      </div>

      {/* Grid de empresas parceiras */}
      {filteredPartners.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredPartners.map((partner) => (
            <Card
              key={partner.id}
              className="group relative overflow-hidden border-0 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Efeito de fundo gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <CardContent className="relative z-10 p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Logo da empresa */}
                  <div className="mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-white p-5 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      width={90}
                      height={90}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-125"
                    />
                  </div>

                  {/* Nome da empresa */}
                  <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    {partner.name}
                  </h3>

                  {/* Indústria */}
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 transition-colors duration-300 group-hover:bg-blue-200">
                      {partner.industry}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-700 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Linha decorativa */}
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-24" />
                </div>
              </CardContent>

              {/* Borda decorativa */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            Nenhuma empresa encontrada para a indústria selecionada.
          </div>
        </div>
      )}

      {/* Texto adicional */}
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 font-medium">
          Empresas que confiam na Vitalis SSHO para suas soluções de segurança e saúde ocupacional
        </p>
        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
      </div>
    </div>
  )
}
