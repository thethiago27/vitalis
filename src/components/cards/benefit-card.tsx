import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'

interface BenefitCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <Card className="group relative h-full transform overflow-hidden rounded-2xl border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      {/* Background gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Borda gradiente animada */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="h-full w-full rounded-2xl bg-white" />
      </div>

      <CardContent className="relative z-10 p-8 text-center">
        {/* Ícone com efeito de brilho */}
        <div className="relative mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-lg transition-opacity duration-500 group-hover:scale-100 group-hover:opacity-50" />
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 shadow-lg">
              <div className="transform text-white transition-transform duration-300 group-hover:scale-110">{icon}</div>
            </div>
          </div>
        </div>

        {/* Título */}
        <h3 className="mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>

        {/* Descrição */}
        <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
          {description}
        </p>

        {/* Indicador de hover */}
        <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100" />
      </CardContent>
    </Card>
  )
}
