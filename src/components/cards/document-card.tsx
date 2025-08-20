import { Document } from '@/lib/documents'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Users, Award, ArrowRight, FileText, Target, Shield, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface DocumentCardProps {
  document: Document
  onClick?: () => void
}

export function DocumentCard({ document, onClick }: DocumentCardProps) {
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
        return <Target className="h-6 w-6" />
      case 'Recomendada':
        return <Shield className="h-6 w-6" />
      case 'Especializada':
        return <FileText className="h-6 w-6" />
      default:
        return <FileText className="h-6 w-6" />
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

  const getPriorityIcon = (category: string) => {
    switch (category) {
      case 'Obrigatória':
        return <Star className="h-4 w-4 text-red-500" />
      case 'Recomendada':
        return <TrendingUp className="h-4 w-4 text-blue-500" />
      case 'Especializada':
        return <FileText className="h-4 w-4 text-purple-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="animate-fade-in">
      <Card className="group h-full transform overflow-hidden rounded-3xl border-0 bg-white/90 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/95 hover:shadow-2xl">
        {/* Header com gradiente */}
        <div className={`relative h-36 bg-gradient-to-r ${getCategoryColor(document.category)}`}>
          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5 blur-xl" />
            <div className="absolute right-4 top-4 h-2 w-2 animate-pulse rounded-full bg-white/30" />
            <div
              className="absolute bottom-4 left-4 h-1 w-1 animate-pulse rounded-full bg-white/20"
              style={{ animationDelay: '1s' }}
            />
          </div>

          {/* Conteúdo do header */}
          <div className="relative z-10 flex h-full items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                {getCategoryIcon(document.category)}
              </div>
              <div className="flex flex-col gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getCategoryBadge(document.category)}`}
                >
                  {document.category}
                </span>
                <div className="flex items-center gap-1">
                  {getPriorityIcon(document.category)}
                  <span className="text-xs font-medium text-white/80">
                    {document.category === 'Obrigatória'
                      ? 'Prioridade Alta'
                      : document.category === 'Recomendada'
                        ? 'Recomendado'
                        : 'Especializado'}
                  </span>
                </div>
              </div>
            </div>

            {/* Acrônimo flutuante */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              {document.acronym}
            </div>
          </div>
        </div>

        <CardHeader className="pb-4 pt-6">
          <CardTitle className="line-clamp-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
            {document.name}
          </CardTitle>
          <CardDescription className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {document.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-4">
          <div className="space-y-4">
            {/* Informações principais */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group/item flex items-center space-x-3 rounded-xl bg-blue-50 p-3 transition-colors duration-300 hover:bg-blue-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover/item:bg-blue-200">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-900">{document.deliveryTime}</div>
                  <div className="text-xs text-blue-600">Prazo</div>
                </div>
              </div>

              <div className="group/item flex items-center space-x-3 rounded-xl bg-purple-50 p-3 transition-colors duration-300 hover:bg-purple-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 transition-colors duration-300 group-hover/item:bg-purple-200">
                  <Award className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-purple-900">{document.validity}</div>
                  <div className="text-xs text-purple-600">Validade</div>
                </div>
              </div>
            </div>

            {/* Público alvo */}
            <div className="group/item flex items-center space-x-3 rounded-xl bg-green-50 p-3 transition-colors duration-300 hover:bg-green-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 transition-colors duration-300 group-hover/item:bg-green-200">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-green-900">Público Alvo</div>
                <div className="line-clamp-2 text-xs leading-relaxed text-green-600">{document.targetAudience[0]}</div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                Principais benefícios:
              </h4>
              <div className="space-y-2">
                {document.benefits.slice(0, 3).map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <div
                      className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r ${getCategoryColor(document.category)}`}
                    />
                    <span className="line-clamp-2 text-xs leading-relaxed text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Link href={`/documentacoes/${document.id}`} className="w-full">
            <Button
              className={`group w-full bg-gradient-to-r ${getCategoryColor(document.category)} rounded-2xl border-0 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              variant="default"
            >
              <span>Ver detalhes</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>

        {/* Borda gradiente sutil */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryColor(document.category)} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
        />

        {/* Indicador de status */}
        <div className="absolute right-4 top-4">
          <div
            className={`h-3 w-3 rounded-full ${
              document.category === 'Obrigatória'
                ? 'bg-red-500'
                : document.category === 'Recomendada'
                  ? 'bg-blue-500'
                  : 'bg-purple-500'
            } animate-pulse`}
          />
        </div>
      </Card>
    </div>
  )
}
