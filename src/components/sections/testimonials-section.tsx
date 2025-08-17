'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Diretora de RH',
    company: 'TechCorp Ltda',
    content:
      'A Vitalis transformou completamente nossa abordagem de segurança. Em apenas 6 meses, reduzimos os acidentes em 80% e criamos uma cultura de segurança que todos abraçaram.',
    rating: 5,
    avatar: '/placeholder-user.jpg',
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Gerente de Operações',
    company: 'Indústria Moderna',
    content:
      'Profissionalismo e resultados excepcionais. A equipe da Vitalis não apenas implementou as melhorias necessárias, mas também treinou nossa equipe para manter os padrões.',
    rating: 5,
    avatar: '/placeholder-user.jpg',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'CEO',
    company: 'Startup Inovadora',
    content:
      'Como startup, precisávamos de uma solução ágil e eficiente. A Vitalis entregou exatamente isso, com um processo personalizado que se adaptou às nossas necessidades.',
    rating: 5,
    avatar: '/placeholder-user.jpg',
  },
  {
    id: 4,
    name: 'Roberto Almeida',
    role: 'Diretor de Segurança',
    company: 'Construções Rápidas',
    content:
      '15 anos no setor e nunca vi uma empresa tão comprometida com a excelência. A Vitalis não apenas cumpriu todas as expectativas, mas as superou.',
    rating: 5,
    avatar: '/placeholder-user.jpg',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-pink-400 opacity-20 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Título da seção */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">O que nossos clientes dizem</h2>
          <p className="mx-auto max-w-2xl text-xl text-blue-100">
            Depoimentos reais de empresas que transformaram sua segurança com a Vitalis
          </p>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="relative mx-auto max-w-4xl">
          {/* Depoimento atual */}
          <div className="relative">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              {/* Ícone de aspas */}
              <div className="absolute right-8 top-8 text-white/20">
                <Quote className="h-16 w-16" />
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Avaliação */}
                <div className="mb-6 flex items-center">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <blockquote className="mb-8 text-xl font-light leading-relaxed text-white md:text-2xl">
                  &quot;{testimonials[currentIndex].content}&quot;
                </blockquote>

                {/* Autor */}
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <Image
                      width={100}
                      height={100}
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="h-16 w-16 rounded-full border-2 border-white/20 object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-200">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de navegação */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            <button
              onClick={goToPrevious}
              className="transform rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'scale-125 bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="transform rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Estatísticas adicionais */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-white">98%</div>
            <div className="text-blue-200">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-white">500+</div>
            <div className="text-blue-200">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-white">4.9/5</div>
            <div className="text-blue-200">Avaliação Média</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Seja nosso próximo caso de sucesso</span>
            <svg className="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
