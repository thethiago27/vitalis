'use client'

import { useState } from 'react'
import { Shield, FileText, Users, Target, CheckCircle, ArrowRight } from 'lucide-react'

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  color: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Consultoria em SST',
    description: 'Assessoria completa para implementação e manutenção de sistemas de segurança e saúde ocupacional',
    icon: <Shield className="h-8 w-8" />,
    features: [
      'Diagnóstico completo da empresa',
      'Planejamento estratégico personalizado',
      'Implementação de melhorias',
      'Monitoramento contínuo',
      'Conformidade com NRs',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Elaboração de Documentos',
    description: 'Criação e atualização de toda documentação necessária para conformidade legal',
    icon: <FileText className="h-8 w-8" />,
    features: [
      'PPRA e PCMSO',
      'Laudos técnicos',
      'Procedimentos de trabalho',
      'Registros de acidentes',
      'Relatórios de inspeção',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Treinamentos',
    description: 'Programas de capacitação personalizados para diferentes níveis e funções',
    icon: <Users className="h-8 w-8" />,
    features: [
      'Treinamentos presenciais e online',
      'Certificação reconhecida',
      'Conteúdo personalizado',
      'Avaliação de aprendizagem',
      'Suporte pós-treinamento',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Auditorias e Inspeções',
    description: 'Verificação e validação de conformidade com padrões de segurança',
    icon: <Target className="h-8 w-8" />,
    features: [
      'Auditorias internas e externas',
      'Inspeções de segurança',
      'Relatórios detalhados',
      'Planos de ação',
      'Acompanhamento de correções',
    ],
    color: 'from-green-500 to-emerald-500',
  },
]

export function ServicesOverview() {
  const [activeService, setActiveService] = useState(1)

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Título da seção */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Nossos Serviços em Detalhes
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Soluções completas e personalizadas para transformar a segurança da sua empresa
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Lista de serviços */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeService === service.id ? 'scale-105 transform' : ''
                }`}
              >
                <div
                  className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${
                    activeService === service.id
                      ? 'border-blue-500 bg-white shadow-xl'
                      : 'border-gray-200 bg-white/80 hover:border-blue-300 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  {/* Borda gradiente ativa */}
                  {activeService === service.id && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-20`} />
                  )}

                  <div className="relative z-10 flex items-start space-x-4">
                    {/* Ícone */}
                    <div
                      className={`h-14 w-14 flex-shrink-0 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {service.icon}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3
                        className={`mb-2 text-xl font-bold transition-colors duration-300 ${
                          activeService === service.id ? 'text-blue-600' : 'text-gray-800'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                    </div>

                    {/* Indicador de seleção */}
                    <div
                      className={`h-6 w-6 flex-shrink-0 rounded-full border-2 transition-all duration-300 ${
                        activeService === service.id
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 group-hover:border-blue-300'
                      }`}
                    >
                      {activeService === service.id && <CheckCircle className="h-5 w-5 text-white" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detalhes do serviço selecionado */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
                {(() => {
                  const service = services.find((s) => s.id === activeService)
                  if (!service) return null

                  return (
                    <div className="space-y-6">
                      {/* Cabeçalho */}
                      <div className="text-center">
                        <div
                          className={`inline-flex h-20 w-20 items-center justify-center bg-gradient-to-r ${service.color} mb-6 rounded-2xl shadow-lg`}
                        >
                          <div className="text-white">{service.icon}</div>
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-800">{service.title}</h3>
                        <p className="leading-relaxed text-gray-600">{service.description}</p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">O que incluímos:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div
                                className={`h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r ${service.color} mt-0.5 flex items-center justify-center`}
                              >
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-6">
                        <button
                          className={`group relative w-full bg-gradient-to-r px-6 py-4 ${service.color} transform rounded-2xl font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Solicitar Orçamento
                            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Fale com nossos especialistas</span>
            <svg className="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
