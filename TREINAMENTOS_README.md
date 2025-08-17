# Página de Treinamentos - VITALIS SSHO

## Funcionalidades Implementadas

### 1. Página Principal de Treinamentos (`/treinamentos`)

- **Hero Section**: Apresentação dos treinamentos com estatísticas
- **Sistema de Filtros**: Filtros por categoria (NR, Especializado, Básico)
- **Barra de Busca**: Pesquisa por nome ou descrição dos treinamentos
- **Grid de Cards**: Exibição dos treinamentos em cards responsivos
- **Estatísticas**: Contadores de treinamentos, públicos alvo e NRs
- **Seção CTA**: Call-to-action para contato

### 2. Página de Detalhes do Treinamento (`/treinamentos/[id]`)

- **Informações Completas**: Nome, descrição, duração, categoria
- **Objetivos**: Lista detalhada dos objetivos do treinamento
- **Público Alvo**: Profissionais que podem participar
- **Conteúdo Programático**: Estrutura completa do curso
- **Benefícios**: Vantagens de participar do treinamento
- **Certificação**: Informações sobre o certificado
- **Contatos**: Telefone, e-mail e endereço para orçamento

### 3. Componentes Criados

#### `TrainingCard`
- Card responsivo com informações do treinamento
- Indicadores visuais por categoria
- Botão para ver detalhes
- Hover effects e animações

#### `CategoryFilter`
- Filtros de categoria com contadores
- Estados ativos/inativos
- Design responsivo

#### `Section`
- Componente de seção reutilizável
- Diferentes backgrounds (white, gradient, dark)
- Variantes de layout (default, centered)

### 4. Estrutura de Dados

#### Interface `Training`
```typescript
interface Training {
  id: string
  name: string
  hours: string
  description: string
  objectives: string[]
  targetAudience: string[]
  content: string[]
  benefits: string[]
  certification: string
  category: 'NR' | 'Especializado' | 'Básico'
}
```

#### Categorias Disponíveis
- **NR**: Normas Regulamentadoras (10 treinamentos)
- **Especializado**: Cursos especializados (1 treinamento)
- **Básico**: Treinamentos básicos (2 treinamentos)

### 5. Treinamentos Disponíveis

#### Normas Regulamentadoras (NR)
- NR 05 – CIPA [Grau de Risco 1] - 8h
- NR 05 – CIPA [Grau de Risco 2] - 8h
- NR 06 – Equipamentos de Proteção Individual - 4h
- NR 10 – Segurança em Instalações Elétricas - 40h
- NR 10 – Reciclagem Bienal - 16h
- NR 11 – Transporte e Movimentação - 6h
- NR 12 – Segurança em Máquinas - 4h
- NR 20 – Curso Básico - 4h
- NR 23 – Prevenção e Combate a Incêndio - 8h
- NR 33 – Espaços Confinados - 16h
- NR 35 – Trabalho em Altura - 8h
- NR 38 – Limpeza Urbana - 7h

#### Cursos Especializados
- CIPAMIN - 40h

#### Treinamentos Básicos
- Noções de Primeiros Socorros - 2h

### 6. Funcionalidades de UX

- **Responsividade**: Design adaptável para mobile, tablet e desktop
- **Animações**: Transições suaves e hover effects
- **Navegação**: Breadcrumbs e botões de voltar
- **Acessibilidade**: Estrutura semântica e contrastes adequados
- **Performance**: Lazy loading e otimizações de renderização

### 7. Integração com o Sistema

- **Header**: Navegação consistente com o resto do site
- **Footer**: Informações de contato padronizadas
- **Design System**: Uso das cores e tipografias do projeto
- **Componentes UI**: Reutilização dos componentes existentes

### 8. Rotas Implementadas

- `/treinamentos` - Lista de todos os treinamentos
- `/treinamentos/[id]` - Detalhes de um treinamento específico

### 9. Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones SVG
- **React Hooks**: useState para gerenciamento de estado

### 10. Próximos Passos Sugeridos

- **Sistema de Agendamento**: Formulário para solicitar treinamentos
- **Área do Cliente**: Login para acompanhar treinamentos
- **Sistema de Avaliações**: Feedback dos participantes
- **Integração com CRM**: Sincronização de leads e contatos
- **Blog de Conteúdo**: Artigos sobre segurança do trabalho

## Como Usar

1. **Acesse a página**: `/treinamentos`
2. **Filtre por categoria**: Use os botões de filtro
3. **Busque treinamentos**: Use a barra de pesquisa
4. **Veja detalhes**: Clique em "Ver detalhes" em qualquer card
5. **Entre em contato**: Use os botões de contato para solicitar orçamento

## Manutenção

- **Adicionar treinamentos**: Edite o arquivo `src/lib/trainings.ts`
- **Modificar categorias**: Atualize o array `trainingCategories`
- **Personalizar design**: Modifique os componentes em `src/components/cards/`
- **Adicionar funcionalidades**: Estenda os componentes existentes
