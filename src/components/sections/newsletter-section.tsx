import { Bell, CheckCircle } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Inscrição Confirmada!</h2>
          <p className="mb-8 text-lg text-gray-600">
            Obrigado por se inscrever! Você receberá nossas atualizações sobre segurança e saúde ocupacional.
          </p>
          <div className="inline-flex items-center rounded-full bg-green-100 px-6 py-3 font-medium text-green-700">
            <Bell className="mr-2 h-5 w-5" />
            <span>Receba notificações em tempo real</span>
          </div>
        </div>
      </div>
    </section>
  )
}
