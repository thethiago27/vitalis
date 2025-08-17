import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, FileText, TrendingUp, Clock, Award } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Consultoria em SST',
    description: 'Assessoria especializada para implementar e manter sistemas de segurança no trabalho.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Treinamentos',
    description: 'Capacitação profissional em todas as NRs com certificação reconhecida.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Documentação Legal',
    description: 'Elaboração e gestão de documentos obrigatórios conforme legislação vigente.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Gestão de Riscos',
    description: 'Identificação, avaliação e controle de riscos ocupacionais.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Clock,
    title: 'Auditorias',
    description: 'Verificação de conformidade e identificação de oportunidades de melhoria.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Certificações',
    description: 'Suporte para obtenção de certificações de qualidade e segurança.',
    color: 'from-yellow-500 to-orange-500',
  },
]

export function Services() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Oferecemos soluções integradas e personalizadas para transformar sua empresa em um ambiente seguro, saudável
            e produtivo.
          </p>

          {/* Linha decorativa */}
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative transform overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background gradiente sutil */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />

              {/* Borda gradiente animada */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r p-[1px] ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              >
                <div className="h-full w-full rounded-xl bg-white" />
              </div>

              <CardContent className="relative z-10 p-8 text-center">
                {/* Ícone com efeito de brilho */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} scale-150 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:scale-100 group-hover:opacity-50`}
                    />
                    <div className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-4 shadow-lg`}>
                      <service.icon className="h-8 w-8 transform text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                {/* Título */}
                <h3 className="mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>

                {/* Indicador de hover */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.color} origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100`}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex transform items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Conheça todos os nossos serviços</span>
            <svg
              className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
