'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Clock, Users, FileText, Target, TrendingUp } from 'lucide-react'

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  duration: string
  benefits: string[]
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Diagnóstico Inicial',
    description:
      'Análise completa da situação atual da empresa em relação à segurança e saúde ocupacional, identificando pontos críticos e oportunidades de melhoria.',
    icon: <Target className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500',
    duration: '1-2 semanas',
    benefits: ['Avaliação completa', 'Identificação de riscos', 'Relatório detalhado'],
  },
  {
    id: 2,
    title: 'Planejamento Estratégico',
    description:
      'Desenvolvimento de um plano personalizado para implementar as melhorias necessárias, considerando recursos, prazos e prioridades da empresa.',
    icon: <FileText className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
    duration: '2-3 semanas',
    benefits: ['Plano personalizado', 'Cronograma realista', 'Alocação de recursos'],
  },
  {
    id: 3,
    title: 'Implementação',
    description:
      'Execução do plano com acompanhamento contínuo e ajustes conforme necessário, garantindo que todas as melhorias sejam implementadas corretamente.',
    icon: <Users className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500',
    duration: '4-8 semanas',
    benefits: ['Execução supervisionada', 'Ajustes em tempo real', 'Treinamento da equipe'],
  },
  {
    id: 4,
    title: 'Monitoramento Contínuo',
    description:
      'Acompanhamento contínuo dos resultados e manutenção dos padrões estabelecidos, com relatórios periódicos e melhorias contínuas.',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-500',
    duration: 'Contínuo',
    benefits: ['Relatórios mensais', 'Melhorias contínuas', 'Suporte 24/7'],
  },
]

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step') || '1')
            setActiveStep(stepId)
          }
        })
      },
      { threshold: 0.3 }
    )

    processSteps.forEach((step) => {
      const element = document.getElementById(`step-${step.id}`)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute left-40 top-40 h-24 w-24 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Título da seção */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Nossa Metodologia
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Um processo estruturado e comprovado para transformar a segurança da sua empresa
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Seguimos uma abordagem sistemática que garante resultados consistentes e duradouros
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-7xl">
          {/* Linha central */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200" />

          {/* Passos do processo */}
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                id={`step-${step.id}`}
                data-step={step.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Conteúdo do passo */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                  <div
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Card do passo */}
                    <div
                      className={`relative transform rounded-2xl border border-white/20 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                        activeStep === step.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                      } ${hoveredStep === step.id ? 'scale-105' : 'scale-100'}`}
                    >
                      {/* Borda gradiente animada */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px] ${step.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      >
                        <div className="h-full w-full rounded-2xl bg-white" />
                      </div>

                      {/* Conteúdo */}
                      <div className="relative z-10">
                        {/* Cabeçalho */}
                        <div className="mb-4 flex items-center">
                          <div
                            className={`inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 ${step.color} mr-3 text-sm font-semibold text-white shadow-lg`}
                          >
                            {step.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                            {step.title}
                          </h3>
                        </div>

                        {/* Descrição */}
                        <p className="mb-6 leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          {step.description}
                        </p>

                        {/* Benefícios */}
                        <div className="mb-4">
                          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Benefícios
                          </h4>
                          <ul className="space-y-2">
                            {step.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Duração */}
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="mr-2 h-4 w-4" />
                          <span className="font-medium">{step.duration}</span>
                        </div>
                      </div>

                      {/* Indicador de hover */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${step.color} origin-left scale-x-0 transform rounded-b-2xl transition-transform duration-500 group-hover:scale-x-100`}
                      />
                    </div>
                  </div>
                </div>

                {/* Círculo central */}
                <div className="relative z-20 flex-shrink-0">
                  <div
                    className={`h-20 w-20 rounded-full bg-gradient-to-r ${step.color} flex transform items-center justify-center shadow-lg transition-all duration-500 ${
                      activeStep === step.id ? 'scale-125' : 'scale-100'
                    } ${hoveredStep === step.id ? 'scale-110' : ''}`}
                  >
                    <div className="text-white">{step.icon}</div>
                  </div>

                  {/* Anel de brilho */}
                  <div
                    className={`absolute inset-0 h-20 w-20 rounded-full bg-gradient-to-r ${step.color} opacity-0 blur-lg transition-opacity duration-500 ${
                      activeStep === step.id ? 'opacity-50' : ''
                    } ${hoveredStep === step.id ? 'opacity-30' : ''}`}
                  />

                  {/* Linha de conexão */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full h-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-200 to-transparent" />
                  )}
                </div>

                {/* Seta de direção */}
                {index < processSteps.length - 1 && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 transform ${index % 2 === 0 ? 'right-0' : 'left-0'}`}
                  >
                    <ArrowRight
                      className={`h-8 w-8 transform text-gray-300 transition-all duration-300 ${index % 2 === 0 ? 'rotate-0' : 'rotate-180'} ${
                        hoveredStep === step.id ? 'scale-110 text-blue-400' : ''
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex transform cursor-pointer items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Comece Agora</span>
            <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <p className="mt-4 text-sm text-gray-500">Entre em contato e inicie sua transformação em segurança</p>
        </div>
      </div>
    </section>
  )
}
