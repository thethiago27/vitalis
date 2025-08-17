# Página de Documentações - VITALIS SSHO

## Funcionalidades Implementadas

### 1. Página Principal de Documentações (`/documentacoes`)

- **Hero Section**: Apresentação das documentações com estatísticas
- **Sistema de Filtros**: Filtros por categoria (Obrigatória, Recomendada, Especializada)
- **Barra de Busca**: Pesquisa por nome, descrição ou acrônimo das documentações
- **Grid de Cards**: Exibição das documentações em cards responsivos
- **Estatísticas**: Contadores de documentações, públicos alvo e obrigatórias
- **Seção CTA**: Call-to-action para contato

### 2. Página de Detalhes da Documentação (`/documentacoes/[id]`)

- **Informações Completas**: Nome, acrônimo, descrição, categoria
- **Propósitos**: Lista detalhada dos objetivos da documentação
- **Público Alvo**: Empresas que podem solicitar
- **Requisitos**: O que é necessário para elaboração
- **O que está Incluso**: Itens que compõem a documentação
- **Benefícios**: Vantagens de ter a documentação
- **Informações Técnicas**: Prazo de entrega e validade
- **Contatos**: Telefone, e-mail e endereço para orçamento

### 3. Componentes Criados

#### `DocumentCard`

- Card responsivo com informações da documentação
- Indicadores visuais por categoria
- Acrônimo destacado
- Botão para ver detalhes
- Hover effects e animações

#### `DocumentCategoryFilter`

- Filtros de categoria com contadores
- Estados ativos/inativos
- Design responsivo
- Cores específicas por categoria

#### `Section`

- Componente de seção reutilizável
- Diferentes backgrounds (white, gradient, dark)
- Variantes de layout (default, centered)

### 4. Estrutura de Dados

#### Interface `Document`

```typescript
interface Document {
  id: string;
  name: string;
  acronym: string;
  description: string;
  purpose: string[];
  targetAudience: string[];
  requirements: string[];
  benefits: string[];
  deliveryTime: string;
  validity: string;
  category: "Obrigatória" | "Recomendada" | "Especializada";
  includes: string[];
}
```

#### Categorias Disponíveis

- **Obrigatória**: Documentações obrigatórias por lei (10 documentações)
- **Recomendada**: Documentações recomendadas para segurança (1 documentação)
- **Especializada**: Documentações para casos específicos (0 documentações)

### 5. Documentações Disponíveis

#### Documentações Obrigatórias

- **AEP** - Avaliação Ergonômica Preliminar - 5-7 dias úteis
- **AET** - Análise Ergonômica do Trabalho - 10-15 dias úteis
- **APR** - Análise Preliminar de Risco - 3-5 dias úteis
- **LIP** - Laudo de Insalubridade e Periculosidade - 7-10 dias úteis
- **LTCAT** - Laudo Técnico das Condições do Ambiente - 5-7 dias úteis
- **OS** - Ordem de Serviço - 3-5 dias úteis
- **PCA** - Programa de Conservação Auditiva - 10-15 dias úteis
- **PCMSO** - Programa de Controle Médico de Saúde Ocupacional - 15-20 dias úteis
- **PET** - Permissão de Entrada e Trabalho - 3-5 dias úteis
- **PPR** - Programa de Proteção Respiratória - 10-15 dias úteis
- **PPP** - Perfil Profissiográfico Previdenciário - 5-7 dias úteis

#### Documentações Recomendadas

- **PGR** - Programa de Gerenciamento de Riscos - 20-30 dias úteis

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

- `/documentacoes` - Lista de todas as documentações
- `/documentacoes/[id]` - Detalhes de uma documentação específica

### 9. Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones SVG
- **React Hooks**: useState para gerenciamento de estado

### 10. Características Específicas das Documentações

#### Informações Técnicas

- **Prazo de Entrega**: Tempo necessário para elaboração
- **Validade**: Período de validade da documentação
- **Categoria**: Classificação por obrigatoriedade
- **Acrônimo**: Sigla identificadora da documentação

#### Conteúdo Incluso

- Relatórios técnicos detalhados
- Laudos técnicos assinados
- Documentação fotográfica
- Propostas de melhorias
- Medições técnicas quando necessário

### 11. Próximos Passos Sugeridos

- **Sistema de Solicitação**: Formulário para solicitar documentações
- **Área do Cliente**: Login para acompanhar documentações
- **Sistema de Aprovação**: Workflow de aprovação de documentos
- **Integração com CRM**: Sincronização de leads e contatos
- **Blog de Conteúdo**: Artigos sobre documentação técnica

## Como Usar

1. **Acesse a página**: `/documentacoes`
2. **Filtre por categoria**: Use os botões de filtro
3. **Busque documentações**: Use a barra de pesquisa
4. **Veja detalhes**: Clique em "Ver detalhes" em qualquer card
5. **Entre em contato**: Use os botões de contato para solicitar orçamento

## Manutenção

- **Adicionar documentações**: Edite o arquivo `src/lib/documents.ts`
- **Modificar categorias**: Atualize o array `documentCategories`
- **Personalizar design**: Modifique os componentes em `src/components/cards/`
- **Adicionar funcionalidades**: Estenda os componentes existentes

## Diferenciais das Documentações

### Conformidade Legal

- Todas as documentações seguem as Normas Regulamentadoras
- Laudos técnicos assinados por especialistas habilitados
- Validade conforme legislação vigente

### Especialização Técnica

- Equipe técnica especializada em SST
- Conhecimento profundo das NRs
- Experiência em diversos setores

### Agilidade

- Prazos de entrega otimizados
- Processo de elaboração eficiente
- Suporte técnico durante todo o processo
