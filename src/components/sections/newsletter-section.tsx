'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Bell, Shield, CheckCircle } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    
    // Reset após 8 segundos
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 8000)
  }

  if (isSubscribed) {
    return (
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Inscrição Confirmada!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Obrigado por se inscrever! Você receberá nossas atualizações sobre segurança e saúde ocupacional.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-700 font-medium">
              <Bell className="h-5 w-5 mr-2" />
              <span>Receba notificações em tempo real</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Receba insights exclusivos sobre SST, atualizações regulamentares e dicas para manter sua empresa segura
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <span>Inscrever-se</span>
                )}
              </Button>
            </div>
          </form>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white">Atualizações em Tempo Real</h3>
              <p className="text-blue-200 text-sm text-center">
                Seja o primeiro a saber sobre mudanças nas NRs
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white">Dicas de Segurança</h3>
              <p className="text-blue-200 text-sm text-center">
                Conteúdo exclusivo para sua equipe
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white">Newsletter Semanal</h3>
              <p className="text-blue-200 text-sm text-center">
                Resumos semanais das principais notícias
              </p>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 text-center">
            <p className="text-blue-200 text-sm">
              🔒 Seus dados estão seguros. Não compartilhamos informações pessoais.
            </p>
            <p className="text-blue-200 text-sm mt-2">
              📧 Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
