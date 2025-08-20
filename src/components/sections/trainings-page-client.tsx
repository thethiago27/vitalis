'use client'

import { useState, useMemo, useEffect } from 'react'
import { Header } from '@/app/(app)/components/header'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { TrainingCard } from '@/components/cards/training-card'
import { CategoryFilter } from '@/components/ui/category-filter'
import { trainingsData } from '@/lib/trainings'
import { useMixpanel } from '@/lib/use-mixpanel'
import { Search, BookOpen, Users, Award, Clock, Star, TrendingUp, Shield, ArrowRight } from 'lucide-react'

export function TrainingsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  
  const { trackSearch, trackSection, trackTraining } = useMixpanel()

  const filteredTrainings = useMemo(() => {
    return trainingsData.filter((training) => {
      const matchesCategory = selectedCategory === 'all' || training.category === selectedCategory
      const matchesSearch =
        training.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  // Rastrear mudanças de categoria
  useEffect(() => {
    if (selectedCategory !== 'all') {
      trackSearch('', selectedCategory, {
        search_type: 'category_filter',
        page: 'Trainings',
        category: selectedCategory,
        results_count: filteredTrainings.length,
      })
    }
  }, [selectedCategory, filteredTrainings.length, trackSearch])

  // Rastrear busca
  useEffect(() => {
    if (searchTerm) {
      trackSearch(searchTerm, selectedCategory, {
        search_type: 'text_search',
        page: 'Trainings',
        category: selectedCategory,
        results_count: filteredTrainings.length,
      })
    }
  }, [searchTerm, selectedCategory, filteredTrainings.length, trackSearch])

  // Rastrear visualização da página
  useEffect(() => {
    trackSection('Trainings Page', {
      page: 'Trainings',
      total_trainings: trainingsData.length,
      categories_available: [...new Set(trainingsData.map(t => t.category))],
    })
  }, [trackSection])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
  }

  const handleTrainingClick = (trainingName: string, action: string) => {
    trackTraining(action, trainingName, {
      page: 'Trainings',
      category: selectedCategory,
      search_term: searchTerm,
    })
  }

  const stats = [
    {
      icon: BookOpen,
      value: trainingsData.length,
      label: 'Treinamentos Disponíveis',
      color: 'from-blue-500 to-cyan-500',
      description: 'Cursos certificados e reconhecidos',
    },
    {
      icon: Users,
      value: trainingsData.reduce((acc, t) => acc + t.targetAudience.length, 0),
      label: 'Públicos Alvo Cobertos',
      color: 'from-purple-500 to-pink-500',
      description: 'Diferentes perfis profissionais',
    },
    {
      icon: Award,
      value: trainingsData.filter((t) => t.category === 'NR').length,
      label: 'Normas Regulamentadoras',
      color: 'from-orange-500 to-red-500',
      description: 'Conformidade legal garantida',
    },
    {
      icon: Clock,
      value: trainingsData.reduce((acc, t) => acc + parseInt(t.hours), 0),
      label: 'Horas de Capacitação',
      color: 'from-green-500 to-emerald-500',
      description: 'Conteúdo abrangente e completo',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section Modernizado */}
        <section 
          className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20"
          data-section="Trainings Hero"
          id="trainings-hero"
        >
          {/* Background com gradiente animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />

          {/* Partículas flutuantes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-20 top-20 h-2 w-2 animate-pulse rounded-full bg-white opacity-20" />
            <div className="absolute right-32 top-40 h-1 w-1 animate-ping rounded-full bg-white opacity-30" />
            <div className="absolute bottom-32 left-32 h-3 w-3 animate-bounce rounded-full bg-white opacity-20" />
            <div className="absolute bottom-20 right-20 h-1.5 w-1.5 animate-pulse rounded-full bg-white opacity-25" />
          </div>

          {/* Conteúdo principal */}
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mx-auto max-w-5xl">
              {/* Badge de destaque */}
              <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium">🎓 Capacitação Profissional em SST</span>
              </div>

              {/* Título principal */}
              <h1 className="mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
                Nossos Treinamentos
              </h1>

              {/* Subtítulo */}
              <p className="mx-auto mb-12 max-w-4xl text-xl font-light leading-relaxed text-blue-50 md:text-2xl">
                Capacitação profissional que transforma conhecimento em segurança e conformidade
              </p>

              {/* Descrição adicional */}
              <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-blue-100">
                Oferecemos uma ampla gama de treinamentos em Segurança e Saúde Ocupacional, desde cursos básicos até
                especializações avançadas, sempre em conformidade com as Normas Regulamentadoras vigentes.
              </p>

              {/* Estatísticas modernizadas */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/10">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm font-medium text-blue-100">{stat.label}</div>
                    <div className="mt-2 text-xs text-blue-200">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay de brilho */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </section>

        {/* Filtros e Busca */}
        <section 
          className="bg-white py-16"
          data-section="Trainings Filters"
          id="trainings-filters"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Filtros de categoria */}
              <div className="mb-8">
                <CategoryFilter
                  categories={[
                    { id: 'all', name: 'Todos', count: trainingsData.length },
                    { id: 'NR', name: 'Normas Regulamentadoras', count: trainingsData.filter(t => t.category === 'NR').length },
                    { id: 'basic', name: 'Básicos', count: trainingsData.filter(t => t.category === 'basic').length },
                    { id: 'advanced', name: 'Avançados', count: trainingsData.filter(t => t.category === 'advanced').length },
                    { id: 'specialized', name: 'Especializados', count: trainingsData.filter(t => t.category === 'specialized').length },
                  ]}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>

              {/* Barra de busca */}
              <div className="relative mx-auto max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar treinamentos..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-full rounded-2xl border-2 bg-white px-12 py-4 text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isSearchFocused ? 'border-blue-500 shadow-blue-500/25' : 'border-gray-200'
                    }`}
                  />
                </div>
              </div>

              {/* Resultados da busca */}
              {searchTerm && (
                <div className="mt-6 text-center text-gray-600">
                  <p>
                    {filteredTrainings.length} treinamento{filteredTrainings.length !== 1 ? 's' : ''} encontrado{filteredTrainings.length !== 1 ? 's' : ''} para "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Grid de Treinamentos */}
        <section 
          className="bg-gray-50 py-16"
          data-section="Trainings Grid"
          id="trainings-grid"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-7xl">
              {filteredTrainings.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTrainings.map((training) => (
                    <TrainingCard
                      key={training.id}
                      training={training}
                      onClick={() => handleTrainingClick(training.name, 'view_details')}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="mx-auto mb-6 h-24 w-24 text-gray-300">
                    <Search className="h-full w-full" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-700">Nenhum treinamento encontrado</h3>
                  <p className="text-gray-500">
                    Tente ajustar os filtros ou termos de busca para encontrar o que procura.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white"
          data-section="Trainings CTA"
          id="trainings-cta"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-4xl font-bold">Precisa de um treinamento personalizado?</h2>
              <p className="mb-8 text-xl text-blue-100">
                Nossa equipe está pronta para desenvolver soluções sob medida para sua empresa.
              </p>
              <button
                onClick={() => {
                  trackTraining('cta_click', 'Custom Training', {
                    page: 'Trainings',
                    cta_type: 'custom_training',
                  })
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <span className="mr-2">Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
