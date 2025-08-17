import { Button } from './button'
import { documentCategories } from '@/lib/documents'

interface DocumentCategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function DocumentCategoryFilter({ selectedCategory, onCategoryChange }: DocumentCategoryFilterProps) {
  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
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

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'Obrigatória':
        return '🎯'
      case 'Recomendada':
        return '🛡️'
      case 'Especializada':
        return '📋'
      default:
        return '📚'
    }
  }

  const getCategoryBgColor = (categoryId: string) => {
    switch (categoryId) {
      case 'Obrigatória':
        return 'bg-red-50 border-red-200 hover:bg-red-100'
      case 'Recomendada':
        return 'bg-blue-50 border-blue-200 hover:bg-blue-100'
      case 'Especializada':
        return 'bg-purple-50 border-purple-200 hover:bg-purple-100'
      default:
        return 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }
  }

  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {documentCategories.map((category, index) => (
          <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <Button
              onClick={() => onCategoryChange(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`group relative min-w-[200px] overflow-hidden rounded-2xl px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${getCategoryColor(category.id)} scale-105 border-0 text-white shadow-xl`
                  : `border-2 ${getCategoryBgColor(category.id)} text-gray-700 backdrop-blur-sm hover:border-blue-300 hover:shadow-lg`
              }`}
            >
              {/* Background gradiente para categoria selecionada */}
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50 transition-opacity duration-300" />
              )}

              <span className="relative z-10 flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{getCategoryIcon(category.id)}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white backdrop-blur-sm'
                      : 'bg-blue-100 text-blue-800 group-hover:bg-blue-200'
                  }`}
                >
                  {category.count}
                </span>
              </span>

              {/* Efeito de brilho no hover */}
              {selectedCategory !== category.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              )}

              {/* Linha decorativa para categoria selecionada */}
              {selectedCategory === category.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transition-all duration-300" />
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Indicador de categoria ativa */}
      {selectedCategory !== 'all' && (
        <div className="animate-fade-in mt-6 text-center" style={{ animationDelay: '200ms' }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-blue-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>
            <span className="text-sm font-medium">
              Filtrando por: {documentCategories.find((c) => c.id === selectedCategory)?.name}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
