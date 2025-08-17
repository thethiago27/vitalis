'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [isSubmitted] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const inputClasses =
    'w-full rounded-2xl border border-gray-200 px-6 py-4 text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-200 focus:shadow-lg focus:shadow-blue-100/50 placeholder-gray-400'
  const labelClasses = 'block text-sm font-semibold text-gray-700 mb-3'

  if (isSubmitted) {
    return (
      <div className="py-16 text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-gray-800">Mensagem Enviada!</h3>
        <p className="mb-8 text-gray-600">Obrigado pelo contato. Retornaremos em breve!</p>
        <div className="inline-flex items-center rounded-full bg-blue-100 px-6 py-3 font-medium text-blue-700">
          <Clock className="mr-2 h-5 w-5" />
          <span>Resposta em até 24h</span>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Informações de contato */}
      <div className="space-y-8 lg:col-span-1">
        <div>
          <h3 className="mb-6 text-2xl font-bold text-white">Vamos Conversar?</h3>
          <p className="leading-relaxed text-blue-100">
            Estamos aqui para ajudar sua empresa a alcançar os mais altos padrões de segurança. Entre em contato e
            descubra como podemos transformar sua abordagem de SST.
          </p>
        </div>

        {/* Cards de informação */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-white">Email</h4>
              <p className="text-blue-200">comercial@vitalisseguranca.com.br</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-white">Telefone</h4>
              <p className="text-blue-200">(11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-white">Endereço</h4>
              <p className="text-blue-200">São Paulo, SP - Brasil</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-white">Horário</h4>
              <p className="text-blue-200">Seg-Sex: 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* CTA adicional */}
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
          <h4 className="mb-3 font-semibold text-white">Precisa de uma resposta rápida?</h4>
          <p className="mb-4 text-sm text-blue-200">Nossa equipe está disponível para atendimento prioritário.</p>
          <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Clock className="mr-2 h-4 w-4" />
            <span>Resposta em até 2h</span>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <div className="lg:col-span-2">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <label htmlFor="firstName" className={labelClasses}>
                Nome*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Seu nome"
                className={inputClasses}
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="lastName" className={labelClasses}>
                Sobrenome*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Seu sobrenome"
                className={inputClasses}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <label htmlFor="email" className={labelClasses}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                className={inputClasses}
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="phone" className={labelClasses}>
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="company" className={labelClasses}>
              Empresa/Organização
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Nome da sua empresa"
              className={inputClasses}
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className={labelClasses}>
              Como podemos ajudar?*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Descreva sua necessidade, desafios ou objetivos relacionados à segurança e saúde ocupacional..."
              rows={5}
              className={`${inputClasses} resize-none`}
              required
            />
          </div>

          <Button
            type="submit"
            className="group relative w-full transform overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center">
              <Send className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>

          {/* Informações adicionais */}
          <div className="text-center text-sm text-blue-200">
            <p>Seus dados estão seguros conosco. Não compartilhamos informações pessoais.</p>
          </div>
        </form>
      </div>
    </div>
  )
}
