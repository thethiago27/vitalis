'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Shield, Users } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
  variant?: 'primary' | 'secondary' | 'gradient'
  features?: Array<{
    icon: React.ReactNode
    text: string
  }>
}

export function CTASection({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  variant = 'primary',
  features = [],
}: CTASectionProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
      case 'gradient':
        return 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500'
      default:
        return 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900'
    }
  }

  const getTextClasses = () => {
    if (variant === 'gradient') {
      return 'text-white'
    }
    return variant === 'secondary' ? 'text-gray-800' : 'text-white'
  }

  const getSubtitleClasses = () => {
    if (variant === 'gradient') {
      return 'text-blue-100'
    }
    return variant === 'secondary' ? 'text-gray-600' : 'text-blue-100'
  }

  const getButtonClasses = () => {
    if (variant === 'gradient') {
      return 'bg-white text-blue-600 hover:bg-gray-50'
    }
    return variant === 'secondary'
      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
      : 'bg-white text-blue-900 hover:bg-gray-50'
  }

  return (
    <section className={`relative overflow-hidden py-20 ${getBackgroundClasses()}`}>
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-white/10 blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-white/10 blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Título */}
          <h2 className={`mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${getTextClasses()}`}>
            {title}
          </h2>

          {/* Subtítulo */}
          <p className={`mx-auto mb-12 max-w-3xl text-xl leading-relaxed md:text-2xl ${getSubtitleClasses()}`}>
            {subtitle}
          </p>

          {/* Features (se houver) */}
          {features.length > 0 && (
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <p className={`text-sm font-medium ${getSubtitleClasses()}`}>{feature.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={onCtaClick}
              className={`group relative transform rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl ${getButtonClasses()}`}
            >
              <span className="relative z-10 flex items-center">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            {/* CTA secundário */}
            <Button className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              Saiba Mais
            </Button>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-sm sm:flex-row sm:space-x-8 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className={getSubtitleClasses()}>15+ anos de experiência</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span className={getSubtitleClasses()}>500+ empresas atendidas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className={getSubtitleClasses()}>Equipe certificada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
