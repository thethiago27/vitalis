import { Card, CardContent } from '@/components/ui/card'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({ number, title, description, icon }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="font-poppins text-3xl font-bold text-blue-600">{number}</div>
          <div className="flex-1">
            <div className="mb-3 flex items-center">
              {icon}
              <h3 className="font-poppins ml-3 text-xl font-semibold text-blue-700">{title}</h3>
            </div>
            <p className="font-inter text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
