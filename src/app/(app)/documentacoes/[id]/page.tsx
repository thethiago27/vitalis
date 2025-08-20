import { notFound } from 'next/navigation'
import { Header } from '../../components/header'
import { Footer } from '@/components/layout/footer'
import { documentsData } from '@/lib/documents'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import {
  Clock,
  Users,
  Award,
  Target,
  FileText,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  TrendingUp,
  MapPin,
  Calendar,
  Shield,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const documentId = (await params).id
  const document = documentsData.find((d) => d.id === documentId)

  if (!document) {
    return {
      title: 'Documentação não encontrada - Vitalis SSHO',
      description:
        'A documentação solicitada não foi encontrada. Consulte nossa lista completa de documentações em segurança e saúde ocupacional.',
      robots: 'noindex, nofollow',
    }
  }

  return {
    title: `${document.name} - Documentação - Vitalis SSHO`,
    description: document.description,
    alternates: {
      canonical: `https://vitalisseguranca.com.br/documentacoes/${documentId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://vitalisseguranca.com.br'),
    authors: [{ name: 'Vitalis SSHO' }],
    creator: 'Vitalis SSHO',
    publisher: 'Vitalis SSHO',
    other: {
      'geo.region': 'BR-SP',
      'geo.placename': 'São Paulo',
      'geo.position': '-23.5505;-46.6333',
      ICBM: '-23.5505, -46.6333',
      'DC.title': `${document.name} - Documentação - Vitalis SSHO`,
    },
  }
}

export function generateStaticParams() {
  return documentsData.map((document) => ({
    id: document.id,
  }))
}

export default async function DocumentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const documentId = (await params).id

  const document = documentsData.find((d) => d.id === documentId)

  if (!document) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Obrigatória':
        return 'from-red-500 to-pink-500'
      case 'Recomendada':
        return 'from-blue-500 to-cyan-500'
      case 'Especializada':
        return 'from-purple-500 to-indigo-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Obrigatória':
        return <Target className="h-8 w-8" />
      case 'Recomendada':
        return <Shield className="h-8 w-8" />
      case 'Especializada':
        return <FileText className="h-8 w-8" />
      default:
        return <FileText className="h-8 w-8" />
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Obrigatória':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'Recomendada':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Especializada':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section Modernizado */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-20">
          {/* Background com gradiente animado */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(document.category)}`} />

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
              {/* Breadcrumb */}
              <nav className="mb-8 flex items-center justify-center space-x-2 text-sm text-white/80">
                <Link href="/" className="transition-colors hover:text-white">
                  Início
                </Link>
                <span>/</span>
                <Link href="/documentacoes" className="transition-colors hover:text-white">
                  Documentações
                </Link>
                <span>/</span>
                <span className="font-medium text-white">{document.acronym}</span>
              </nav>

              {/* Badge de categoria */}
              <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <span
                  className={`mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full ${getCategoryBadge(document.category)}`}
                >
                  {getCategoryIcon(document.category)}
                </span>
                <span className="text-lg font-semibold">{document.category}</span>
              </div>

              {/* Header principal */}
              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-white shadow-lg backdrop-blur-sm">
                  {getCategoryIcon(document.category)}
                </div>
                <div className="text-center">
                  <div className="mb-3 text-5xl font-bold text-white drop-shadow-lg">{document.acronym}</div>
                  <span className="inline-flex items-center rounded-full border bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    {document.category}
                  </span>
                </div>
              </div>

              {/* Título principal */}
              <h1 className="mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl">
                {document.name}
              </h1>

              {/* Descrição */}
              <p className="mx-auto mb-12 max-w-4xl text-xl font-light leading-relaxed text-blue-50 md:text-2xl">
                {document.description}
              </p>

              {/* Estatísticas principais */}
              <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">{document.deliveryTime}</div>
                    <div className="font-medium text-blue-100">Prazo de Entrega</div>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">{document.validity}</div>
                    <div className="font-medium text-blue-100">Validade</div>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">✓</div>
                    <div className="font-medium text-blue-100">Conformidade</div>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/documentacoes">
                  <Button
                    variant="outline"
                    className="gap-2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar às documentações
                  </Button>
                </Link>
                <a href="tel:+5511992541052">
                  <Button
                    className={`gap-2 bg-gradient-to-r ${getCategoryColor(document.category)} transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    <Phone className="h-4 w-4" />
                    Solicitar orçamento
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Overlay de brilho */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </section>

        {/* Detalhes da Documentação */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Propósitos */}
                <Card className="h-fit transform border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      Propósitos da Documentação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {document.purpose.map((purpose, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="leading-relaxed text-gray-700">{purpose}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Público Alvo */}
                <Card className="h-fit transform border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      Público Alvo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {document.targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                            <div className="h-2 w-2 rounded-full bg-purple-600" />
                          </div>
                          <span className="leading-relaxed text-gray-700">{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requisitos e Inclusos */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-4000 absolute right-40 top-40 h-24 w-24 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Requisitos */}
                <Card className="group border-0 bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      Requisitos para Elaboração
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {document.requirements.map((requirement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 transition-colors duration-300 group-hover:bg-blue-100"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          <span className="font-medium leading-relaxed text-gray-700">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* O que está Incluso */}
                <Card className="group border-0 bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      O que está Incluso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {document.includes.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 rounded-2xl border border-green-100 bg-green-50 p-4 transition-colors duration-300 group-hover:bg-green-100"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          <span className="font-medium leading-relaxed text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Benefícios da Documentação
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
                Descubra como esta documentação pode transformar sua empresa
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {document.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex transform items-start gap-4 rounded-2xl border border-white/20 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${getCategoryColor(document.category)} flex-shrink-0 text-lg font-bold text-white`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-lg leading-relaxed text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Informações Técnicas */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(document.category)}`} />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-white/10 blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Card className="border-0 bg-white/90 shadow-2xl backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center justify-center gap-3 text-3xl text-gray-800">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    Informações Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
                      <h4 className="mb-2 font-semibold text-blue-900">Prazo de Entrega</h4>
                      <p className="font-medium text-blue-700">{document.deliveryTime}</p>
                    </div>
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
                      <h4 className="mb-2 font-semibold text-green-900">Validade</h4>
                      <p className="font-medium text-green-700">{document.validity}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <p className="text-lg font-medium text-green-800">
                        Documento técnico assinado por especialista habilitado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção de diferenciais */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-32 w-32 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Diferenciais da VITALIS
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">Conheça o que nos torna únicos no mercado</p>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Especialistas Habilitados</h3>
                  <p className="text-gray-600">Equipe com vasta experiência e certificações necessárias</p>
                </div>

                <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Atualização Constante</h3>
                  <p className="text-gray-600">Sempre em conformidade com as últimas NRs e legislações</p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Suporte Completo</h3>
                  <p className="text-gray-600">Acompanhamento durante todo o processo de adequação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section Modernizado */}
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
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Interessado nesta documentação?</h2>
              <p className="mx-auto mb-16 max-w-3xl text-xl text-blue-100">
                Entre em contato conosco para mais informações e orçamento personalizado
              </p>

              {/* Informações de contato */}
              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">Telefone</h3>
                    <p className="text-lg text-blue-100">(11) 99254-1052</p>
                    <p className="mt-2 text-sm text-blue-200">Atendimento 24/7</p>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">E-mail</h3>
                    <p className="text-lg text-blue-100">comercial@vitalisseguranca.com.br</p>
                    <p className="mt-2 text-sm text-blue-200">Resposta em até 2h</p>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">Endereço</h3>
                    <p className="text-lg text-blue-100">Av. Paulista, 777</p>
                    <p className="mt-2 text-sm text-blue-200">São Paulo - SP</p>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <a
                  href="tel:+5511992541052"
                  className="group inline-flex transform items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Ligar agora</span>
                  <div className="ml-2 h-5 w-5 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href="mailto:comercial.01@vitalisssho.org"
                  className="group inline-flex transform items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Enviar e-mail</span>
                  <div className="ml-2 h-5 w-5 rounded-full bg-white transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>

              {/* Informações adicionais */}
              <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">🎯</div>
                  <div className="text-blue-100">Personalizado</div>
                  <div className="text-sm text-blue-200">Para sua empresa</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">⚡</div>
                  <div className="text-blue-100">Rápido</div>
                  <div className="text-sm text-blue-200">Implementação</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">💎</div>
                  <div className="text-blue-100">Qualidade</div>
                  <div className="text-sm text-blue-200">Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  )
}
