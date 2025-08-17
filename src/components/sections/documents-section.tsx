'use client'

import { Button } from '@/components/ui/button'
import { DocumentItem } from '@/components/cards/document-item'
import { documentsData } from '@/lib/data'

export function DocumentsSection() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {documentsData.map((document) => (
          <DocumentItem key={document} name={document} />
        ))}
      </div>
      <div className="text-center">
        <Button className="font-poppins bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800">
          Quero saber mais!
        </Button>
      </div>
    </div>
  )
}
