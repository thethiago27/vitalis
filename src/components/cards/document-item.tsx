import Link from 'next/link'

interface DocumentItemProps {
  name: string
  id: string
}

export function DocumentItem({ name, id }: DocumentItemProps) {
  return (
    <div className="group relative transform overflow-hidden rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50">
      {/* Background gradiente sutil no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <Link href={`/documentacoes/${id}`} className="relative z-10">
        <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-900">
          {name}
        </span>
      </Link>

      {/* Linha decorativa */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-gradient-to-r from-blue-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />

      {/* Ícone de documento */}
      <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400">
          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
