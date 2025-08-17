interface TrainingItemProps {
  name: string
  hours: string
}

export function TrainingItem({ name, hours }: TrainingItemProps) {
  return (
    <div className="group relative transform overflow-hidden rounded-xl border border-blue-100/50 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50">
      {/* Background gradiente sutil no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
          {name}
        </span>
        <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
          {hours}
        </span>
      </div>

      {/* Linha decorativa */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-gradient-to-r from-blue-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  )
}
