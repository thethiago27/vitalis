import { Button } from './button'
import { trainingCategories } from '@/lib/trainings'

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
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

  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
      {trainingCategories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          className={`group relative overflow-hidden rounded-2xl px-6 py-3 font-semibold transition-all duration-300 ${
            selectedCategory === category.id
              ? `bg-gradient-to-r ${getCategoryColor(category.id)} scale-105 text-white shadow-lg`
              : 'border-2 border-gray-200 bg-white/80 text-gray-700 backdrop-blur-sm hover:border-blue-300 hover:bg-white hover:text-blue-700 hover:shadow-lg'
          }`}
        >
          {/* Background gradiente para categoria selecionada */}
          {selectedCategory === category.id && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50" />
          )}

          <span className="relative z-10 flex items-center">
            <span className="font-medium">{category.name}</span>
            <span
              className={`ml-3 rounded-full px-3 py-1 text-xs font-bold ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white backdrop-blur-sm'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {category.count}
            </span>
          </span>

          {/* Efeito de brilho no hover */}
          {selectedCategory !== category.id && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          )}
        </Button>
      ))}
    </div>
  )
}
