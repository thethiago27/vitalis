import { notFound } from 'next/navigation'
import { Header } from '../../components/header'
import { trainingsData } from '@/lib/trainings'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import {
  Clock,
  Users,
  Award,
  Target,
  BookOpen,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const trainingId = params.id
  const training = trainingsData.find((t) => t.id === trainingId)

  if (!training) {
    return {
      title: 'Treinamento não encontrado - Vitalis SSHO',
      description:
        'O treinamento solicitado não foi encontrado. Consulte nossa lista completa de treinamentos em segurança do trabalho.',
      robots: 'noindex, nofollow',
    }
  }

  // Criar palavras-chave baseadas no conteúdo do treinamento
  const keywords = [
    training.name,
    training.category,
    'treinamento',
    'segurança do trabalho',
    'SSHO',
    'NR',
    'normas regulamentadoras',
    'prevenção de acidentes',
    'certificação',
    'Vitalis SSHO',
    ...training.targetAudience,
    ...training.content.slice(0, 3), // Primeiros 3 itens do conteúdo
  ].join(', ')

  // Criar descrição otimizada
  const optimizedDescription = `${training.name} - ${training.description} ${training.hours} de duração. Ideal para ${training.targetAudience.slice(0, 2).join(' e ')}. Certificação reconhecida pelo MTE.`

  // URL canônica
  const canonicalUrl = `https://vitalisseguranca.com.br/treinamentos/${training.id}`

  return {
    title: `${training.name} - Treinamento ${training.category} | Vitalis SSHO`,
    description: optimizedDescription,
    keywords: keywords,
    authors: [{ name: 'Vitalis SSHO' }],
    creator: 'Vitalis SSHO',
    publisher: 'Vitalis SSHO',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://vitalisseguranca.com.br'),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: canonicalUrl,
      siteName: 'Vitalis SSHO',
      title: `${training.name} - Treinamento ${training.category}`,
      description: optimizedDescription,
      images: [
        {
          url: 'https://vitalisseguranca.com.br/logo.png',
          width: 1200,
          height: 630,
          alt: `${training.name} - Vitalis SSHO`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vitalisssho',
      creator: '@vitalisssho',
      title: `${training.name} - Treinamento ${training.category}`,
      description: optimizedDescription,
      images: ['https://vitalisseguranca.com.br/logo.png'],
    },
    other: {
      'geo.region': 'BR-SP',
      'geo.placename': 'São Paulo',
      'geo.position': '-23.5505;-46.6333',
      ICBM: '-23.5505, -46.6333',
      'DC.title': training.name,
      'DC.creator': 'Vitalis SSHO',
      'DC.subject': training.category,
      'DC.description': training.description,
      'DC.publisher': 'Vitalis SSHO',
      'DC.contributor': 'Vitalis SSHO',
      'DC.date': new Date().toISOString(),
      'DC.type': 'Text',
      'DC.format': 'text/html',
      'DC.identifier': canonicalUrl,
      'DC.language': 'pt-BR',
      'DC.coverage': 'Brasil',
      'DC.rights': '© 2025 Vitalis SSHO. Todos os direitos reservados.',
    },
  }
}

export default function TrainingDetailPage({ params }: { params: { id: string } }) {
  const training = trainingsData.find((t) => t.id === params.id)

  if (!training) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'NR':
        return 'from-blue-500 to-cyan-500'
      case 'Especializado':
        return 'from-purple-500 to-pink-500'
      case 'Básico':
        return 'from-green-500 to-emerald-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'NR':
        return <Target className="h-8 w-8" />
      case 'Especializado':
        return <BookOpen className="h-8 w-8" />
      case 'Básico':
        return <Shield className="h-8 w-8" />
      default:
        return <BookOpen className="h-8 w-8" />
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'NR':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Especializado':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Básico':
        return 'bg-green-100 text-green-800 border-green-200'
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
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(training.category)}`} />

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
              {/* Badge de categoria */}
              <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <span
                  className={`mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full ${getCategoryBadge(training.category)}`}
                >
                  {getCategoryIcon(training.category)}
                </span>
                <span className="text-lg font-semibold">{training.category}</span>
              </div>

              {/* Título principal */}
              <h1 className="mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl">
                {training.name}
              </h1>

              {/* Descrição */}
              <p className="mx-auto mb-12 max-w-4xl text-xl font-light leading-relaxed text-blue-50 md:text-2xl">
                {training.description}
              </p>

              {/* Estatísticas principais */}
              <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">{training.hours}</div>
                    <div className="font-medium text-blue-100">Duração</div>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">{training.targetAudience.length}</div>
                    <div className="font-medium text-blue-100">Públicos Alvo</div>
                  </div>
                </div>

                <div className="group">
                  <div className="transform rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">✓</div>
                    <div className="font-medium text-blue-100">Certificado</div>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/treinamentos">
                  <Button
                    variant="outline"
                    className="gap-2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar aos treinamentos
                  </Button>
                </Link>
                <a href="tel:+5511992541052">
                  <Button
                    className={`gap-2 bg-gradient-to-r ${getCategoryColor(training.category)} transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
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

        {/* Detalhes do Treinamento */}
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
                {/* Objetivos */}
                <Card className="h-fit transform border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      Objetivos do Treinamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {training.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="leading-relaxed text-gray-700">{objective}</span>
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
                      {training.targetAudience.map((audience, index) => (
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

        {/* Conteúdo Programático */}
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
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  Conteúdo Programático
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-gray-600">
                  Programa completo e estruturado para maximizar o aprendizado
                </p>
              </div>

              <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {training.content.map((item, index) => (
                      <div
                        key={index}
                        className="group flex transform items-start gap-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-sm font-bold text-white">
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
                Benefícios do Treinamento
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
                Descubra como este treinamento pode transformar sua equipe e sua empresa
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {training.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex transform items-start gap-4 rounded-2xl border border-white/20 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${getCategoryColor(training.category)} flex-shrink-0 text-lg font-bold text-white`}
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

        {/* Certificação */}
        <section className="relative overflow-hidden py-20">
          {/* Background com gradiente */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(training.category)}`} />

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
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    Certificação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-8 text-xl leading-relaxed text-gray-700">{training.certification}</p>
                  <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
                    <p className="text-lg font-semibold text-green-800">
                      ✓ Certificado válido em todo território nacional
                    </p>
                    <p className="mt-2 text-green-700">Reconhecido pelo MTE e válido para todas as empresas</p>
                  </div>
                </CardContent>
              </Card>
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
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Interessado neste treinamento?</h2>
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

      <ScrollToTop />
    </div>
  )
}
