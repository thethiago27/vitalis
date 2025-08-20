# Sistema de Rastreamento Mixpanel - Vitalis SSHO

Este documento descreve como o sistema de rastreamento do Mixpanel foi implementado em todo o site da Vitalis SSHO.

## 📊 Visão Geral

O sistema de rastreamento foi implementado para capturar dados de comportamento dos usuários, incluindo:
- Navegação e visualização de páginas
- Interações com formulários e botões CTA
- Busca e filtros
- Visualização de seções
- Scroll e tempo na página
- Dispositivos e navegadores
- Links externos e redes sociais

## 🏗️ Arquitetura

### Arquivos Principais

1. **`src/lib/mixpanel.ts`** - Funções principais de rastreamento
2. **`src/lib/mixpanel-config.ts`** - Configurações centralizadas
3. **`src/lib/use-mixpanel.ts`** - Hook React personalizado
4. **`src/components/providers/mixpanel-provider.tsx`** - Provider para o contexto

### Componentes Rastreados

- **Layout Principal** - Visualizações de página e navegação
- **Header** - Cliques em links e menu mobile
- **Hero Section** - CTAs principais
- **Formulário de Contato** - Envios e interações
- **Páginas de Treinamentos** - Busca, filtros e visualizações
- **Páginas de Documentos** - Busca, filtros e visualizações
- **Footer** - Links externos e contatos
- **Scroll to Top** - Interações com botão

## 🚀 Como Usar

### 1. Hook Personalizado (Recomendado)

```tsx
import { useMixpanel } from '@/lib/use-mixpanel'

function MeuComponente() {
  const { trackCTA, trackForm, trackSection } = useMixpanel()

  const handleClick = () => {
    trackCTA('Botão Principal', 'Seção Hero', {
      page: 'Home',
      custom_property: 'valor'
    })
  }

  return <button onClick={handleClick}>Clique Aqui</button>
}
```

### 2. Funções Diretas

```tsx
import { trackEvent, trackCTAClick } from '@/lib/mixpanel'

// Evento customizado
trackEvent('Custom Event', {
  action: 'click',
  location: 'sidebar'
})

// CTA Click
trackCTAClick('Download PDF', 'Página de Treinamentos', {
  training_name: 'NR 10'
})
```

## 📈 Eventos Disponíveis

### Navegação
- `Page View` - Visualização de página
- `Navigation Click` - Cliques em links de navegação
- `Mobile Menu Toggle` - Abertura/fechamento do menu mobile

### Interações
- `CTA Click` - Cliques em botões de call-to-action
- `Form Submission` - Envios de formulários
- `Section View` - Visualização de seções

### Conteúdo
- `Training Interaction` - Interações com treinamentos
- `Document Interaction` - Interações com documentos
- `Search` - Buscas e filtros

### Comportamento
- `Scroll Depth` - Profundidade de scroll
- `Time on Page` - Tempo na página
- `Device Info` - Informações do dispositivo

## ⚙️ Configuração

### Variáveis de Ambiente

```env
NEXT_PUBLIC_MIXPANEL_TOKEN=b0b56128e1b420bd4a4b483f4d040ccf
NODE_ENV=development
```

### Configurações Personalizadas

Edite `src/lib/mixpanel-config.ts` para:
- Alterar token do projeto
- Configurar eventos personalizados
- Ajustar thresholds de scroll
- Definir propriedades padrão

## 🔍 Debug e Monitoramento

### Console de Desenvolvimento

Em modo de desenvolvimento, todos os eventos são logados no console:

```
🔍 Mixpanel Event: Page View {
  page_name: "Home",
  timestamp: "2024-01-15T10:30:00.000Z",
  url: "https://vitalisseguranca.com.br",
  ...
}
```

### Dashboard do Mixpanel

Acesse [mixpanel.com](https://mixpanel.com) para visualizar:
- Eventos em tempo real
- Análises de comportamento
- Funnels de conversão
- Segmentação de usuários

## 📱 Rastreamento Automático

### Visualização de Seções

Adicione `data-section` aos elementos para rastreamento automático:

```tsx
<section data-section="Services Section" id="servicos">
  {/* Conteúdo da seção */}
</section>
```

### Scroll e Tempo

O hook `useMixpanel` rastreia automaticamente:
- Scroll progressivo (25%, 50%, 75%, 90%, 100%)
- Tempo de permanência na página
- Mudanças de rota

## 🎯 Eventos de Conversão

### Formulários

```tsx
const handleSubmit = (e) => {
  e.preventDefault()
  
  trackForm('Contact Form', {
    form_type: 'contact',
    has_company: !!formData.company,
    message_length: formData.message.length
  })
  
  // Lógica de envio
}
```

### CTAs

```tsx
const handleCTAClick = () => {
  trackCTA('Hero CTA', 'Hero Section', {
    cta_text: 'Solicitar Orçamento',
    page: 'Home'
  })
  
  // Ação do CTA
}
```

## 🔒 Privacidade e Compliance

### Dados Coletados

- **Não coletamos**: Nomes, emails, telefones
- **Coletamos**: Comportamento, dispositivos, navegação
- **Armazenamento**: Local (localStorage) + Mixpanel Cloud

### GDPR e LGPD

- Consentimento implícito para funcionalidade
- Dados anonimizados quando possível
- Opção de opt-out disponível

## 🚨 Troubleshooting

### Eventos não aparecem

1. Verifique o token do Mixpanel
2. Confirme se o debug está ativado
3. Verifique o console para erros
4. Teste em modo de desenvolvimento

### Performance

1. Eventos são debounced para scroll
2. Rastreamento de seções usa Intersection Observer
3. Propriedades padrão são cacheadas

### Debug

```tsx
// Ativar debug manualmente
localStorage.setItem('mixpanel_debug', 'true')

// Ver eventos no console
mixpanel.track('Test Event', { test: true })
```

## 📚 Recursos Adicionais

- [Documentação Mixpanel](https://developer.mixpanel.com/)
- [Mixpanel Browser SDK](https://github.com/mixpanel/mixpanel-js)
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 🤝 Contribuição

Para adicionar novos eventos:

1. Defina o evento em `mixpanel-config.ts`
2. Implemente a função em `mixpanel.ts`
3. Adicione ao hook `use-mixpanel.ts`
4. Documente no README
5. Teste em diferentes cenários

---

**Desenvolvido para Vitalis SSHO**  
*Sistema de rastreamento implementado em Janeiro de 2025*
