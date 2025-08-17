'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  onSubmit?: (data: any) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (onSubmit) {
      onSubmit(formData)
    }
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset após 5 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    }, 5000)
  }

  const inputClasses = "w-full rounded-2xl border border-gray-200 px-6 py-4 text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-200 focus:shadow-lg focus:shadow-blue-100/50 placeholder-gray-400"
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-3"

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Mensagem Enviada!</h3>
        <p className="text-gray-600 mb-8">Obrigado pelo contato. Retornaremos em breve!</p>
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-medium">
          <Clock className="h-5 w-5 mr-2" />
          <span>Resposta em até 24h</span>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Informações de contato */}
      <div className="lg:col-span-1 space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Vamos Conversar?</h3>
          <p className="text-blue-100 leading-relaxed">
            Estamos aqui para ajudar sua empresa a alcançar os mais altos padrões de segurança. 
            Entre em contato e descubra como podemos transformar sua abordagem de SST.
          </p>
        </div>

        {/* Cards de informação */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Email</h4>
              <p className="text-blue-200">contato@vitalis.com.br</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Telefone</h4>
              <p className="text-blue-200">(11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Endereço</h4>
              <p className="text-blue-200">São Paulo, SP - Brasil</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Horário</h4>
              <p className="text-blue-200">Seg-Sex: 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* CTA adicional */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h4 className="font-semibold text-white mb-3">Precisa de uma resposta rápida?</h4>
          <p className="text-blue-200 text-sm mb-4">
            Nossa equipe está disponível para atendimento prioritário.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
            <Clock className="h-4 w-4 mr-2" />
            <span>Resposta em até 2h</span>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <div className="lg:col-span-2">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
            disabled={isSubmitting}
            className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                <span>Enviando...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10 flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
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
