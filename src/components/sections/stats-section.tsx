'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Shield, Award } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
}

const stats: StatItem[] = [
  {
    icon: <Users className="h-8 w-8" />,
    value: 500,
    label: 'Clientes Atendidos',
    suffix: '+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    value: 1000,
    label: 'Projetos Concluídos',
    suffix: '+',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 2,
    label: 'Anos de Experiência',
    suffix: '+',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: 99,
    label: 'Taxa de Satisfação',
    suffix: '%',
    color: 'from-green-500 to-emerald-500',
  },
]

export function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(new Array(stats.length).fill(0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers()
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }

        setAnimatedValues((prev) => {
          const newValues = [...prev]
          newValues[index] = Math.floor(current)
          return newValues
        })
      }, duration / steps)
    })
  }

  return (
    <section id="stats-section" className="relative overflow-hidden py-20">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-20 top-20 h-32 w-32 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-40 w-40 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Título da seção */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Nossos Números
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Resultados que comprovam nossa excelência e compromisso com a segurança
          </p>
        </div>

        {/* Grid de estatísticas */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group relative">
              {/* Card principal */}
              <div className="relative transform rounded-3xl border border-white/20 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                {/* Borda gradiente animada */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="h-full w-full rounded-3xl bg-white" />
                </div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Ícone */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} scale-150 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:scale-100 group-hover:opacity-50`}
                      />
                      <div className={`relative bg-gradient-to-r ${stat.color} rounded-2xl p-4 shadow-lg`}>
                        <div className="transform text-white transition-transform duration-300 group-hover:scale-110">
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Valor */}
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                      {animatedValues[index]}
                    </span>
                    {stat.suffix && (
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-lg font-semibold text-gray-700 transition-colors duration-300 group-hover:text-gray-800">
                    {stat.label}
                  </p>
                </div>

                {/* Indicador de hover */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform rounded-b-3xl bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Conheça Nossa Metodologia</span>
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
