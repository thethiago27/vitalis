import { Shield, Award, Zap } from 'lucide-react'

export function DocumentsBenefits() {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: 'Conformidade Legal',
      description: 'Documentos sempre atualizados conforme as NRs vigentes e legislação trabalhista',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Qualidade Garantida',
      description: 'Elaborados por especialistas habilitados e com vasta experiência no mercado',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Entrega Rápida',
      description: 'Prazos otimizados para não atrasar sua adequação legal',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
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
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Por que escolher nossas documentações?</h2>
          <p className="mx-auto mb-16 max-w-3xl text-xl text-blue-100">
            Oferecemos a melhor experiência com qualidade e resultados comprovados
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${benefit.color}`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-blue-100">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
