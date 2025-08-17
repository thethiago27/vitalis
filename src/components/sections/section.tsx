import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'glass' | 'gradient' | 'dark'
  variant?: 'default' | 'centered' | 'split'
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
  variant = 'default',
}: SectionProps) {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'glass':
        return 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl'
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      case 'dark':
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white'
      default:
        return 'bg-white'
    }
  }

  const getTitleClasses = () => {
    const baseClasses = 'font-bold leading-tight'
    const sizeClasses = 'text-4xl md:text-5xl lg:text-6xl'

    if (background === 'dark') {
      return `${baseClasses} ${sizeClasses} bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent`
    }

    return `${baseClasses} ${sizeClasses} bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`
  }

  const getSubtitleClasses = () => {
    if (background === 'dark') {
      return 'text-xl md:text-2xl text-blue-100 font-medium'
    }
    return 'text-xl md:text-2xl text-gray-600 font-medium'
  }

  return (
    <section id={id} className={`relative py-20 lg:py-32 ${getBackgroundClasses()} ${className}`}>
      {/* Decoração de fundo */}
      {background === 'gradient' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-200 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-4000 absolute left-40 top-40 h-80 w-80 rounded-full bg-pink-200 opacity-70 mix-blend-multiply blur-xl filter" />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4">
        {(title || subtitle) && (
          <div className={`mb-16 ${variant === 'centered' ? 'text-center' : ''}`}>
            {title && (
              <h2 className={`${getTitleClasses()} mb-6 ${variant === 'centered' ? 'text-center' : ''}`}>{title}</h2>
            )}
            {subtitle && (
              <h3 className={`${getSubtitleClasses()} ${variant === 'centered' ? 'text-center' : ''}`}>{subtitle}</h3>
            )}

            {/* Linha decorativa */}
            <div
              className={`h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${variant === 'centered' ? 'mx-auto' : ''} mt-8`}
            />
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
