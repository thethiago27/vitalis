'use client'

import { useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackEvent,
  trackPageView,
  trackCTAClick,
  trackFormSubmission,
  trackSectionView,
  trackTrainingInteraction,
  trackDocumentInteraction,
  trackSearch,
  trackExternalLink,
  trackTimeOnPage,
  trackScroll,
  trackDeviceInfo,
} from './mixpanel'

export function useMixpanel() {
  const pathname = usePathname()
  const startTime = useRef<number>(Date.now())
  const lastScrollPosition = useRef<number>(0)

  // Rastrear visualização de página
  useEffect(() => {
    const pageName = getPageName(pathname)
    trackPageView(pageName, { pathname })
    trackDeviceInfo()
    
    // Rastrear tempo na página quando sair
    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
      trackTimeOnPage(pageName, timeSpent)
    }
  }, [pathname])

  // Rastrear scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = Math.round((scrollTop / docHeight) * 100)
      
      if (scrollPercentage > lastScrollPosition.current) {
        const pageName = getPageName(pathname)
        trackScroll(pageName, scrollPercentage)
        lastScrollPosition.current = scrollPercentage
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Funções de rastreamento
  const trackCTA = useCallback((ctaName: string, location: string, properties?: Record<string, any>) => {
    trackCTAClick(ctaName, location, properties)
  }, [])

  const trackForm = useCallback((formName: string, properties?: Record<string, any>) => {
    trackFormSubmission(formName, properties)
  }, [])

  const trackSection = useCallback((sectionName: string, properties?: Record<string, any>) => {
    trackSectionView(sectionName, properties)
  }, [])

  const trackTraining = useCallback((action: string, trainingName: string, properties?: Record<string, any>) => {
    trackTrainingInteraction(action, trainingName, properties)
  }, [])

  const trackDocument = useCallback((action: string, documentName: string, properties?: Record<string, any>) => {
    trackDocumentInteraction(action, documentName, properties)
  }, [])

  const trackSearchEvent = useCallback((searchTerm: string, category: string, properties?: Record<string, any>) => {
    trackSearch(searchTerm, category, properties)
  }, [])

  const trackExternal = useCallback((linkUrl: string, linkText: string, properties?: Record<string, any>) => {
    trackExternalLink(linkUrl, linkText, properties)
  }, [])

  const trackCustom = useCallback((eventName: string, properties?: Record<string, any>) => {
    trackEvent(eventName, properties)
  }, [])

  return {
    trackCTA,
    trackForm,
    trackSection,
    trackTraining,
    trackDocument,
    trackSearch: trackSearchEvent,
    trackExternal,
    trackCustom,
  }
}

// Função auxiliar para obter o nome da página
function getPageName(pathname: string): string {
  if (pathname === '/') return 'Home'
  if (pathname.startsWith('/treinamentos')) return 'Trainings'
  if (pathname.startsWith('/documentacoes')) return 'Documents'
  if (pathname.startsWith('/parceiros')) return 'Partners'
  return pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
}
