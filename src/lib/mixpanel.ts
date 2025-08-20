import mixpanel from 'mixpanel-browser'
import { MIXPANEL_CONFIG } from './mixpanel-config'

// Inicializar Mixpanel com configurações centralizadas
mixpanel.init(MIXPANEL_CONFIG.TOKEN, {
  debug: MIXPANEL_CONFIG.DEBUG,
  track_pageview: MIXPANEL_CONFIG.TRACK_PAGEVIEW,
  persistence: MIXPANEL_CONFIG.PERSISTENCE as 'localStorage' | 'cookie',
})

// Função para obter propriedades padrão
const getDefaultProperties = () => {
  const properties: Record<string, any> = {}

  Object.entries(MIXPANEL_CONFIG.DEFAULT_PROPERTIES).forEach(([key, getter]) => {
    try {
      properties[key] = getter()
    } catch (error) {
      console.warn(`Erro ao obter propriedade padrão ${key}:`, error)
    }
  })

  return properties
}

// Funções de rastreamento de eventos
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  try {
    const finalProperties = {
      ...getDefaultProperties(),
      ...properties,
    }

    mixpanel.track(eventName, finalProperties)

    if (MIXPANEL_CONFIG.DEBUG) {
      console.log('🔍 Mixpanel Event:', eventName, finalProperties)
    }
  } catch (error) {
    console.error('Erro ao rastrear evento:', error)
  }
}

// Rastreamento de navegação de páginas
export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.PAGE_VIEW, {
    page_name: pageName,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    ...properties,
  })
}

// Rastreamento de cliques em botões CTA
export const trackCTAClick = (ctaName: string, location: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.CTA_CLICK, {
    cta_name: ctaName,
    location: location,
    ...properties,
  })
}

// Rastreamento de envio de formulários
export const trackFormSubmission = (formName: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.FORM_SUBMISSION, {
    form_name: formName,
    ...properties,
  })
}

// Rastreamento de visualização de seções
export const trackSectionView = (sectionName: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.SECTION_VIEW, {
    section_name: sectionName,
    ...properties,
  })
}

// Rastreamento de interações com treinamentos
export const trackTrainingInteraction = (action: string, trainingName: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.TRAINING_INTERACTION, {
    action: action,
    training_name: trainingName,
    ...properties,
  })
}

// Rastreamento de interações com documentos
export const trackDocumentInteraction = (action: string, documentName: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.DOCUMENT_INTERACTION, {
    action: action,
    document_name: documentName,
    ...properties,
  })
}

// Rastreamento de filtros e busca
export const trackSearch = (searchTerm: string, category: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.SEARCH, {
    search_term: searchTerm,
    category: category,
    ...properties,
  })
}

// Rastreamento de cliques em links externos
export const trackExternalLink = (linkUrl: string, linkText: string, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.EXTERNAL_LINK_CLICK, {
    link_url: linkUrl,
    link_text: linkText,
    ...properties,
  })
}

// Rastreamento de tempo de permanência na página
export const trackTimeOnPage = (pageName: string, timeSpent: number, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.TIME_ON_PAGE, {
    page_name: pageName,
    time_spent_seconds: timeSpent,
    ...properties,
  })
}

// Rastreamento de scroll
export const trackScroll = (pageName: string, scrollPercentage: number, properties?: Record<string, any>) => {
  trackEvent(MIXPANEL_CONFIG.EVENTS.SCROLL_DEPTH, {
    page_name: pageName,
    scroll_percentage: scrollPercentage,
    ...properties,
  })
}

// Rastreamento de dispositivos e navegadores
export const trackDeviceInfo = () => {
  if (typeof window !== 'undefined') {
    const userAgent = navigator.userAgent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    const isTablet = /iPad|Android/i.test(userAgent)

    trackEvent(MIXPANEL_CONFIG.EVENTS.DEVICE_INFO, {
      user_agent: userAgent,
      is_mobile: isMobile,
      is_tablet: isTablet,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
    })
  }
}

// Função para identificar usuários (quando necessário)
export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  try {
    mixpanel.identify(userId)
    if (userProperties) {
      mixpanel.people.set(userProperties)
    }
  } catch (error) {
    console.error('Erro ao identificar usuário:', error)
  }
}

// Função para definir propriedades do usuário
export const setUserProperties = (properties: Record<string, any>) => {
  try {
    mixpanel.people.set(properties)
  } catch (error) {
    console.error('Erro ao definir propriedades do usuário:', error)
  }
}

// Função para rastrear eventos de conversão
export const trackConversion = (conversionType: string, value?: number, properties?: Record<string, any>) => {
  trackEvent('Conversion', {
    conversion_type: conversionType,
    value: value,
    ...properties,
  })
}

export default mixpanel
