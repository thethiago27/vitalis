'use client'

import { FileText, ArrowRight } from 'lucide-react'
import { DocumentCard } from '@/components/cards/document-card'
import { Document } from '@/lib/documents'

interface DocumentsGridProps {
  documents: Document[]
  onClearFilters: () => void
  onDocumentInteraction?: (action: string, documentName: string) => void
}

export function DocumentsGrid({ documents, onClearFilters, onDocumentInteraction }: DocumentsGridProps) {
  if (documents.length === 0) {
    return (
      <section className="relative overflow-hidden py-20">
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="py-20 text-center">
              <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm">
                <FileText className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-600">Nenhuma documentação encontrada</h3>
              <p className="mx-auto mb-8 max-w-md text-gray-500">
                Tente ajustar os filtros ou termos de busca para encontrar o que procura.
              </p>
              <button
                onClick={onClearFilters}
                className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>Limpar filtros</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((document, index) => (
              <div key={document.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <DocumentCard 
                  document={document} 
                  onClick={() => onDocumentInteraction?.('view_details', document.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
