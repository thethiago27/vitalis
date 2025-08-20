'use client'

import { Button } from '@/components/ui/button'
import { TrainingItem } from '@/components/cards/training-item'
import Link from 'next/link'
import { trainingsData } from '@/lib/trainings'

export function TrainingSection() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {trainingsData.map((training) => (
          <TrainingItem key={training.id} name={training.name} hours={training.hours} id={training.id} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/treinamentos">
          <Button className="font-poppins bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800">
            Quero saber mais!
          </Button>
        </Link>
      </div>
    </div>
  )
}
