'use client'

import { useMixpanel } from '@/lib/use-mixpanel'
import { useEffect } from 'react'

interface MixpanelProviderProps {
  children: React.ReactNode
}

export function MixpanelProvider({ children }: MixpanelProviderProps) {
  const { trackSection } = useMixpanel()

  // Rastrear visualização de seções principais
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section')
            if (sectionName) {
              trackSection(sectionName, {
                section_id: entry.target.id,
                visibility_ratio: entry.intersectionRatio,
              })
            }
          }
        })
      },
      {
        threshold: 0.1, // Rastrear quando 10% da seção estiver visível
        rootMargin: '0px 0px -100px 0px',
      }
    )

    // Observar todas as seções com data-section
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [trackSection])

  return <>{children}</>
}
