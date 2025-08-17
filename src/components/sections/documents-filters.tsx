'use client'

import { useState } from 'react'
import { Search, TrendingUp } from 'lucide-react'
import { DocumentCategoryFilter } from '@/components/ui/document-category-filter'

interface DocumentsFiltersProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  filteredCount: number
}

export function DocumentsFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  filteredCount,
}: DocumentsFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Título da seção */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Encontre a Documentação Ideal
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Use os filtros abaixo para encontrar exatamente o que sua empresa precisa
            </p>
          </div>

          {/* Barra de busca moderna */}
          <div className="relative mx-auto mb-12 max-w-2xl">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome, descrição ou acrônimo..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full rounded-2xl border-2 border-gray-200 bg-white/80 py-4 pl-12 pr-4 text-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
              {searchTerm && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {filteredCount} resultado{filteredCount !== 1 ? 's' : ''}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Filtros de categoria modernizados */}
          <DocumentCategoryFilter selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />

          {/* Resultados da busca */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">
                {filteredCount} documentação{filteredCount !== 1 ? 'ões' : ''} encontrada
                {filteredCount !== 1 ? 's' : ''}
                {selectedCategory !== 'all' && ` na categoria selecionada`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
