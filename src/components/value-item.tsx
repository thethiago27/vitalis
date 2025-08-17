import { companyValues } from '@/lib/data'

interface ValueItemProps {
  title: string
  description: string
}

export function ValueItem({ title, description }: ValueItemProps) {
  return (
    <div className="text-center">
      <h4 className="font-poppins mb-2 text-lg font-semibold text-blue-700">{title}</h4>
      <p className="font-inter text-sm text-gray-600">{description}</p>
    </div>
  )
}
