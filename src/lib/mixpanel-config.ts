// Configurações do Mixpanel
export const MIXPANEL_CONFIG = {
  // Token do projeto
  TOKEN: 'b0b56128e1b420bd4a4b483f4d040ccf',

  // Configurações de debug
  DEBUG: process.env.NODE_ENV === 'development',

  // Configurações de persistência
  PERSISTENCE: 'localStorage',

  // Configurações de rastreamento automático
  TRACK_PAGEVIEW: true,

  // Configurações de eventos personalizados
  EVENTS: {
    // Navegação
    PAGE_VIEW: 'Page View',
    NAVIGATION_CLICK: 'Navigation Click',
    MOBILE_MENU_TOGGLE: 'Mobile Menu Toggle',

    // Interações com conteúdo
    CTA_CLICK: 'CTA Click',
    FORM_SUBMISSION: 'Form Submission',
    SECTION_VIEW: 'Section View',

    // Treinamentos
    TRAINING_INTERACTION: 'Training Interaction',
    TRAINING_VIEW: 'Training View',
    TRAINING_SEARCH: 'Training Search',

    // Documentos
    DOCUMENT_INTERACTION: 'Document Interaction',
    DOCUMENT_VIEW: 'Document View',
    DOCUMENT_SEARCH: 'Document Search',

    // Busca e filtros
    SEARCH: 'Search',
    CATEGORY_FILTER: 'Category Filter',
    CLEAR_FILTERS: 'Clear Filters',

    // Links externos
    EXTERNAL_LINK_CLICK: 'External Link Click',

    // Scroll e tempo
    SCROLL_DEPTH: 'Scroll Depth',
    TIME_ON_PAGE: 'Time on Page',

    // Dispositivos
    DEVICE_INFO: 'Device Info',

    // Eventos customizados
    SERVICE_HOVER: 'Service Hover',
    SCROLL_TO_TOP: 'Scroll to Top Click',
    FOOTER_CONTACT: 'Footer Contact Click',
  },

  // Propriedades padrão para todos os eventos
  DEFAULT_PROPERTIES: {
    timestamp: () => new Date().toISOString(),
    url: () => (typeof window !== 'undefined' ? window.location.href : ''),
    user_agent: () => (typeof navigator !== 'undefined' ? navigator.userAgent : ''),
    page_title: () => (typeof document !== 'undefined' ? document.title : ''),
    referrer: () => (typeof document !== 'undefined' ? document.referrer : ''),
  },

  // Configurações de rastreamento de scroll
  SCROLL_TRACKING: {
    THRESHOLDS: [25, 50, 75, 90, 100], // Percentuais de scroll para rastrear
    DEBOUNCE_MS: 100, // Debounce para evitar muitas chamadas
  },

  // Configurações de rastreamento de tempo
  TIME_TRACKING: {
    MINIMUM_TIME: 5000, // Tempo mínimo em ms para rastrear
    INTERVAL_MS: 30000, // Intervalo para rastrear tempo na página
  },

  // Configurações de rastreamento de seções
  SECTION_TRACKING: {
    THRESHOLD: 0.1, // 10% da seção deve estar visível
    ROOT_MARGIN: '0px 0px -100px 0px', // Margem para detecção
  },
}

// Tipos para eventos do Mixpanel
export interface MixpanelEvent {
  name: string
  properties?: Record<string, any>
}

// Interface para configuração de rastreamento
export interface TrackingConfig {
  enabled: boolean
  debug: boolean
  sampleRate?: number
}

// Configuração padrão de rastreamento
export const DEFAULT_TRACKING_CONFIG: TrackingConfig = {
  enabled: true,
  debug: MIXPANEL_CONFIG.DEBUG,
  sampleRate: 1.0, // 100% dos usuários
}
