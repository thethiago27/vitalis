'use client'

import { CheckCircle, ShieldCheck, Target } from 'lucide-react'
import { BenefitCard } from '@/components/cards/benefit-card'
import { benefitsData } from '@/lib/data'

const iconMap = {
  ShieldCheck: <ShieldCheck className="h-12 w-12 text-blue-600" />,
  CheckCircle: <CheckCircle className="h-12 w-12 text-blue-600" />,
  Target: <Target className="h-12 w-12 text-blue-600" />,
}

export function BenefitsSection() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {benefitsData.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={iconMap[benefit.icon as keyof typeof iconMap]}
          />
        ))}
      </div>
    </div>
  )
}
