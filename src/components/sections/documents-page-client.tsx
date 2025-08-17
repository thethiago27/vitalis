'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/app/(app)/components/header'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { DocumentsHero } from './documents-hero'
import { DocumentsFilters } from './documents-filters'
import { DocumentsGrid } from './documents-grid'
import { DocumentsBenefits } from './documents-benefits'
import { DocumentsCTA } from './documents-cta'
import { documentsData } from '@/lib/documents'
import { FileText, Users, Award, Shield } from 'lucide-react'

export function DocumentsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDocuments = useMemo(() => {
    return documentsData.filter((document) => {
      const matchesCategory = selectedCategory === 'all' || document.category === selectedCategory
      const matchesSearch =
        document.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.acronym.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const stats = [
    {
      icon: FileText,
      value: documentsData.length,
      label: 'Documentações Disponíveis',
      color: 'from-blue-500 to-cyan-500',
      description: 'Documentos técnicos especializados',
    },
    {
      icon: Users,
      value: documentsData.reduce((acc, d) => acc + d.targetAudience.length, 0),
      label: 'Públicos Alvo Cobertos',
      color: 'from-purple-500 to-pink-500',
      description: 'Diferentes perfis profissionais',
    },
    {
      icon: Award,
      value: documentsData.filter(d => d.category === 'Obrigatória').length,
      label: 'Documentações Obrigatórias',
      color: 'from-orange-500 to-red-500',
      description: 'Conformidade legal garantida',
    },
    {
      icon: Shield,
      value: documentsData.filter(d => d.category === 'Recomendada').length,
      label: 'Documentações Recomendadas',
      color: 'from-green-500 to-emerald-500',
      description: 'Melhores práticas do mercado',
    }
  ]

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow">
        <DocumentsHero stats={stats} />
        
        <DocumentsFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          filteredCount={filteredDocuments.length}
        />

        <DocumentsGrid
          documents={filteredDocuments}
          onClearFilters={handleClearFilters}
        />

        <DocumentsBenefits />

        <DocumentsCTA />
      </main>

      <ScrollToTop />
    </div>
  )
}
