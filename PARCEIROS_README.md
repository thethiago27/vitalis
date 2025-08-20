# Seção de Empresas Parceiras

## Visão Geral

A seção de Empresas Parceiras foi implementada na página principal do site da Vitalis SSHO para exibir as logos e informações das empresas que trabalham em parceria conosco.

## Funcionalidades Implementadas

### 1. Exibição de Logos
- Grid responsivo de cards para cada empresa parceira
- Logos das empresas carregados da pasta `public/bussines/`
- Efeitos visuais modernos com hover e transições

### 2. Sistema de Filtros
- Filtro por indústria (Equipamentos de Proteção, Segurança Industrial, etc.)
- Botão "Todas as Indústrias" para visualizar todos os parceiros
- Interface intuitiva com botões estilizados

### 3. Informações das Empresas
- Nome da empresa
- Logo da empresa
- Descrição dos serviços
- Categoria/indústria
- Badge visual para identificação rápida

## Estrutura dos Arquivos

### Componente Principal
- **Localização**: `src/components/sections/partners-section.tsx`
- **Funcionalidade**: Renderiza a seção completa de parceiros

### Dados
- **Localização**: `src/lib/partners.ts`
- **Interface**: `Partner` com campos id, name, logo, description, industry
- **Funções**: `getPartnersByIndustry()`, `getPartnerById()`

### Integração na Página
- **Localização**: `src/app/(app)/page.tsx`
- **Posição**: Entre a seção de Documentos e FAQ
- **Estilo**: Fundo branco com título e subtítulo centralizados

## Empresas Parceiras Atuais

1. **SafetyTech Solutions** - Equipamentos de Proteção Individual
2. **Industrial Safety Pro** - Segurança Industrial
3. **SecureWork Systems** - Tecnologia de Segurança
4. **ProtectCorp Brasil** - Proteção Coletiva
5. **SafetyFirst Group** - Consultoria SST
6. **WorkSafe Academy** - Treinamentos

## Características de Design

### Responsividade
- Grid adaptativo: 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop)
- Espaçamento consistente com o design system do projeto

### Efeitos Visuais
- Hover com escala e sombra
- Transições suaves (500ms)
- Gradientes e bordas decorativas
- Badges coloridos para categorias

### Acessibilidade
- Alt text para todas as imagens
- Contraste adequado para textos
- Navegação por teclado nos filtros

## Como Adicionar Novos Parceiros

1. **Adicionar logo** na pasta `public/bussines/`
2. **Atualizar dados** em `src/lib/partners.ts`:
   ```typescript
   {
     id: 7,
     name: 'Nova Empresa',
     logo: '/bussines/nova-logo.avif',
     description: 'Descrição da empresa',
     industry: 'Categoria da Indústria',
   }
   ```

## Tecnologias Utilizadas

- **React** com hooks (useState, useMemo)
- **TypeScript** para tipagem
- **Tailwind CSS** para estilização
- **Next.js Image** para otimização de imagens
- **Componentes UI** do design system do projeto

## Padrões Seguidos

- ✅ Componentização modular
- ✅ Separação de dados e lógica
- ✅ Responsividade mobile-first
- ✅ Acessibilidade e SEO
- ✅ Consistência com design system
- ✅ Performance otimizada
- ✅ TypeScript para segurança de tipos

## Próximas Melhorias Sugeridas

1. **Links para websites** das empresas parceiras
2. **Testimonials** de cada parceiro
3. **Sistema de busca** por nome da empresa
4. **Animações de entrada** com Framer Motion
5. **Integração com CMS** para gestão de conteúdo
6. **Métricas de engajamento** com analytics
