import Link from 'next/link'

interface DocumentsHeroProps {
  stats: Array<{
    icon: React.ComponentType<{ className?: string }>
    value: number
    label: string
    color: string
    description: string
  }>
}

export function DocumentsHero({ stats }: DocumentsHeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-20">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-2 w-2 animate-pulse rounded-full bg-white opacity-20" />
        <div className="absolute right-32 top-40 h-1 w-1 animate-ping rounded-full bg-white opacity-30" />
        <div className="absolute bottom-32 left-32 h-3 w-3 animate-bounce rounded-full bg-white opacity-20" />
        <div className="absolute bottom-20 right-20 h-1.5 w-1.5 animate-pulse rounded-full bg-white opacity-25" />
      </div>

      {/* Conteúdo principal */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-6xl">
          {/* Badge de destaque */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium">📋 Documentação Técnica Especializada</span>
          </div>

          {/* Título principal */}
          <h1 className="mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
            Nossas Documentações
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mb-12 max-w-4xl text-xl font-light leading-relaxed text-blue-50 md:text-2xl">
            Documentação técnica especializada que garante conformidade legal e segurança no trabalho
          </p>

          {/* Descrição adicional */}
          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-blue-100">
            Elaboramos toda a documentação técnica necessária para sua empresa estar em conformidade com as Normas
            Regulamentadoras e legislação trabalhista, desde documentos básicos até programas complexos de gestão.
          </p>

          {/* Estatísticas modernizadas */}
          <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mb-2 font-medium text-blue-100">{stat.label}</div>
                  <div className="text-sm text-blue-200 opacity-80">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center justify-center space-x-2 text-sm text-blue-100">
            <Link href="/" className="transition-colors hover:text-white">
              Início
            </Link>
            <span>/</span>
            <span className="font-medium text-white">Documentações</span>
          </nav>
        </div>
      </div>

      {/* Overlay de brilho */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </section>
  )
}
