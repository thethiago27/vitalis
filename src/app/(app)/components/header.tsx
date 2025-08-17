'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const links = [
    {
      label: 'Início',
      href: '/',
    },
    {
      label: 'Treinamentos',
      href: '/treinamentos',
    },
    {
      label: 'Documentos',
      href: '/documentacoes',
    },
    {
      label: 'Serviços',
      href: '#servicos',
    },
    {
      label: 'Sobre',
      href: '#sobre',
    },
    {
      label: 'Contato',
      href: '#contato',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/20 bg-white/80 shadow-lg backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-white'
              } group-hover:scale-105`}
            >
              VITALIS SSHO
            </h1>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`group relative px-3 py-2 font-medium transition-all duration-300 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {link.label}
                    {/* Linha decorativa no hover */}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão mobile menu */}
          <button
            className="rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="mt-4 rounded-xl border border-white/20 bg-white/90 py-4 shadow-xl backdrop-blur-xl md:hidden">
            <nav>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
