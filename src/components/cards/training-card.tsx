import { Training } from '@/lib/trainings'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Users, Award, ArrowRight, BookOpen, Target, Shield } from 'lucide-react'
import Link from 'next/link'

interface TrainingCardProps {
  training: Training
}

export function TrainingCard({ training }: TrainingCardProps) {
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
        return <Target className="h-6 w-6" />
      case 'Especializado':
        return <BookOpen className="h-6 w-6" />
      case 'Básico':
        return <Shield className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
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
    <Card className="group h-full transform overflow-hidden rounded-3xl border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Header com gradiente */}
      <div className={`relative h-32 bg-gradient-to-r ${getCategoryColor(training.category)}`}>
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5 blur-xl" />
        </div>

        {/* Conteúdo do header */}
        <div className="relative z-10 flex h-full items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
              {getCategoryIcon(training.category)}
            </div>
            <div>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getCategoryBadge(training.category)}`}
              >
                {training.category}
              </span>
            </div>
          </div>

          {/* Ícone de categoria flutuante */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            {getCategoryIcon(training.category)}
          </div>
        </div>
      </div>

      <CardHeader className="pb-4 pt-6">
        <CardTitle className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {training.name}
        </CardTitle>
        <CardDescription className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {training.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-4">
          {/* Informações principais */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 rounded-xl bg-blue-50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                <Clock className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-blue-900">{training.hours}</div>
                <div className="text-xs text-blue-600">Duração</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 rounded-xl bg-purple-50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                <Users className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-purple-900">{training.targetAudience.length}</div>
                <div className="text-xs text-purple-600">Públicos</div>
              </div>
            </div>
          </div>

          {/* Certificação */}
          <div className="flex items-center space-x-3 rounded-xl bg-green-50 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <Award className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-green-900">Certificação</div>
              <div className="line-clamp-2 text-xs text-green-600">{training.certification}</div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700">Principais benefícios:</h4>
            <div className="space-y-2">
              {training.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div
                    className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r ${getCategoryColor(training.category)}`}
                  />
                  <span className="line-clamp-2 text-xs leading-relaxed text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={`/treinamentos/${training.id}`} className="w-full">
          <Button
            className={`group w-full bg-gradient-to-r ${getCategoryColor(training.category)} rounded-2xl py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            variant="default"
          >
            <span>Ver detalhes</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>

      {/* Borda gradiente sutil */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryColor(training.category)} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
      />
    </Card>
  )
}
