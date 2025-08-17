'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="group fixed bottom-8 right-8 z-50 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
      aria-label="Voltar ao topo"
    >
      <div className="relative">
        <ChevronUp className="h-6 w-6" />

        {/* Efeito de brilho */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

        {/* Anel de brilho */}
        <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-lg transition-opacity duration-300 group-hover:scale-100 group-hover:opacity-50" />
      </div>
    </button>
  )
}
