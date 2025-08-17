'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/app/(app)/components/header'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { TrainingCard } from '@/components/cards/training-card'
import { CategoryFilter } from '@/components/ui/category-filter'
import { trainingsData } from '@/lib/trainings'
import { Search, BookOpen, Users, Award, Clock, Star, TrendingUp, Shield, ArrowRight } from 'lucide-react'

export function TrainingsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const filteredTrainings = useMemo(() => {
    return trainingsData.filter((training) => {
      const matchesCategory = selectedCategory === 'all' || training.category === selectedCategory
      const matchesSearch =
        training.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

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
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
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
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="mb-2 text-3xl font-bold text-white">{stat.value}</div>
                      <div className="mb-2 font-medium text-blue-100">{stat.label}</div>
                      <div className="text-sm text-blue-200 opacity-80">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay de brilho */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </section>

        {/* Filtros e Busca Modernizados */}
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
                  Encontre o Treinamento Ideal
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-gray-600">
                  Use os filtros abaixo para encontrar o treinamento perfeito para sua equipe
                </p>
              </div>

              {/* Barra de busca moderna */}
              <div className="relative mx-auto mb-12 max-w-2xl">
                <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                  <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar treinamentos por nome ou descrição..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full rounded-2xl border-2 border-gray-200 bg-white/80 py-4 pl-12 pr-4 text-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  />
                  {searchTerm && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                        {filteredTrainings.length} resultado{filteredTrainings.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Filtros de categoria modernizados */}
              <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

              {/* Resultados da busca */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">
                    {filteredTrainings.length} treinamento{filteredTrainings.length !== 1 ? 's' : ''} encontrado
                    {filteredTrainings.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'all' && ` na categoria selecionada`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Treinamentos Modernizado */}
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
              {filteredTrainings.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTrainings.map((training, index) => (
                    <div key={training.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <TrainingCard training={training} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm">
                    <BookOpen className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-600">Nenhum treinamento encontrado</h3>
                  <p className="mx-auto mb-8 max-w-md text-gray-500">
                    Tente ajustar os filtros ou termos de busca para encontrar o que procura.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('all')
                    }}
                    className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span>Limpar filtros</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="relative overflow-hidden py-20">
          {/* Background escuro */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-32 w-32 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Por que escolher nossos treinamentos?</h2>
              <p className="mx-auto mb-16 max-w-3xl text-xl text-blue-100">
                Oferecemos a melhor experiência de aprendizagem com qualidade e resultados comprovados
              </p>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">Certificação Reconhecida</h3>
                    <p className="text-blue-100">
                      Todos os nossos treinamentos emitem certificados válidos e reconhecidos pelo MTE
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">Resultados Comprovados</h3>
                    <p className="text-blue-100">
                      Empresas que utilizam nossos treinamentos reduzem acidentes em até 80%
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">Qualidade Premium</h3>
                    <p className="text-blue-100">Conteúdo atualizado e instrutores com vasta experiência no mercado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section Modernizado */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-white/10 blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Pronto para começar?</h2>
              <p className="mx-auto mb-12 max-w-3xl text-xl text-blue-100">
                Entre em contato conosco para agendar seu treinamento ou tirar dúvidas sobre nossos cursos. Nossa equipe
                está pronta para ajudar você a escolher o treinamento ideal para sua empresa e colaboradores.
              </p>

              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a
                  href="tel:+5511992541052"
                  className="group inline-flex transform items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="mr-2">📞</span>
                  <span>Ligar agora</span>
                  <div className="ml-2 h-5 w-5 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href="mailto:comercial.01@vitalisssho.org"
                  className="group inline-flex transform items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  <span className="mr-2">✉️</span>
                  <span>Enviar e-mail</span>
                  <div className="ml-2 h-5 w-5 rounded-full bg-white transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>

              {/* Informações adicionais */}
              <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-white">24/7</div>
                  <div className="text-blue-100">Suporte disponível</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-white">100%</div>
                  <div className="text-blue-100">Online ou presencial</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-white">Flexível</div>
                  <div className="text-blue-100">Horários adaptáveis</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  )
}
