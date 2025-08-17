'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Quanto tempo leva para implementar um sistema de SST?',
    answer:
      'O tempo varia de acordo com o tamanho da empresa e complexidade dos processos. Em média, implementações básicas levam de 4 a 8 semanas, enquanto sistemas mais complexos podem levar de 3 a 6 meses.',
    category: 'Implementação',
  },
  {
    id: 2,
    question: 'Vocês oferecem suporte contínuo após a implementação?',
    answer:
      'Sim! Oferecemos suporte contínuo, monitoramento e atualizações para garantir que seu sistema de SST continue funcionando perfeitamente e em conformidade com as regulamentações.',
    category: 'Suporte',
  },
  {
    id: 3,
    question: 'Como vocês garantem a conformidade com as normas regulamentadoras?',
    answer:
      'Nossa equipe é especializada em todas as NRs vigentes e mantém-se constantemente atualizada sobre mudanças na legislação. Utilizamos metodologias comprovadas para garantir 100% de conformidade.',
    category: 'Conformidade',
  },
  {
    id: 4,
    question: 'Vocês trabalham com empresas de todos os portes?',
    answer:
      'Sim! Atendemos desde pequenas empresas até grandes corporações. Nossas soluções são adaptáveis e personalizadas para cada realidade empresarial.',
    category: 'Porte da Empresa',
  },
  {
    id: 5,
    question: 'Quais são os benefícios de investir em SST?',
    answer:
      'Investir em SST reduz acidentes, melhora a produtividade, diminui custos com afastamentos, aumenta a satisfação dos colaboradores e melhora a imagem da empresa no mercado.',
    category: 'Benefícios',
  },
  {
    id: 6,
    question: 'Como funciona o processo de treinamento da equipe?',
    answer:
      'Desenvolvemos programas de treinamento personalizados, incluindo treinamentos presenciais, online e híbridos. Todos os treinamentos são certificados e seguem as diretrizes das NRs aplicáveis.',
    category: 'Treinamento',
  },
]

const categories = [
  'Todos',
  'Implementação',
  'Suporte',
  'Conformidade',
  'Porte da Empresa',
  'Benefícios',
  'Treinamento',
]

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = activeCategory === 'Todos' ? faqData : faqData.filter((faq) => faq.category === activeCategory)

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
        {/* Título da seção */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Tire suas dúvidas sobre nossos serviços e metodologia
          </p>
        </div>

        {/* Filtros de categoria */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`transform rounded-full px-6 py-3 font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'border border-gray-200 bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lista de FAQs */}
        <div className="mx-auto max-w-4xl space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Pergunta */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-300 hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  <ChevronDown
                    className={`h-6 w-6 transform text-gray-400 transition-transform duration-300 ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Resposta */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>

                  {/* Categoria */}
                  <div className="mt-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Ainda tem dúvidas?</span>
            <svg className="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
