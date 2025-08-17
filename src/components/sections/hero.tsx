import { Button } from '@/components/ui/button'
import { designSystem } from '@/lib/design-system'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}

export function Hero({ title, subtitle, ctaText, onCtaClick }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background com gradiente animado */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"
        style={{
          background: designSystem.gradients.hero,
          animation: 'gradientShift 8s ease-in-out infinite alternate',
        }}
      />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-2 w-2 animate-pulse rounded-full bg-white opacity-20" />
        <div className="absolute right-32 top-40 h-1 w-1 animate-ping rounded-full bg-white opacity-30" />
        <div className="absolute bottom-32 left-32 h-3 w-3 animate-bounce rounded-full bg-white opacity-20" />
        <div className="absolute bottom-20 right-20 h-1.5 w-1.5 animate-pulse rounded-full bg-white opacity-25" />
      </div>

      {/* Conteúdo principal */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-5xl">
          {/* Badge de destaque */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 Soluções Inovadoras em SSHO</span>
          </div>

          {/* Título principal */}
          <h1
            className="mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mb-12 max-w-4xl text-xl font-light leading-relaxed text-blue-50 md:text-2xl">
            {subtitle}
          </p>

          {/* Botão CTA moderno */}
          <Button
            className="group relative transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/25"
            onClick={onCtaClick}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <span className="relative z-10">{ctaText}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-full bg-white transition-colors duration-300 group-hover:bg-transparent" />
          </Button>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
              <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay de brilho */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </section>
  )
}
