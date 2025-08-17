# Vitalis SSHO - Website

Website institucional da Vitalis SSHO, empresa especializada em Segurança e Saúde Ocupacional.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones
- **shadcn/ui** - Componentes UI

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── (app)/            # Grupo de rotas da aplicação
│   │   ├── components/   # Componentes específicos da página
│   │   │   ├── header.tsx
│   │   │   ├── services.tsx
│   │   │   └── values.tsx
│   │   └── page.tsx      # Página principal
│   ├── globals.css       # Estilos globais
│   └── layout.tsx        # Layout raiz
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (shadcn/ui)
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── sections/         # Seções da página
│   │   ├── hero.tsx
│   │   ├── section.tsx
│   │   ├── benefits-section.tsx
│   │   ├── training-section.tsx
│   │   ├── documents-section.tsx
│   │   └── about-section.tsx
│   ├── cards/            # Componentes de cartão
│   │   ├── benefit-card.tsx
│   │   ├── training-item.tsx
│   │   └── document-item.tsx
│   ├── forms/            # Formulários
│   │   └── contact-form.tsx
│   ├── layout/           # Componentes de layout
│   │   └── footer.tsx
│   ├── value-item.tsx    # Item de valor da empresa
│   └── index.ts          # Exportações centralizadas
├── lib/                   # Utilitários e configurações
│   ├── data.ts           # Dados estáticos centralizados
│   ├── theme-provider.tsx
│   └── utils.ts
└── styles/                # Estilos adicionais
    └── globals.css
```

## 🧩 Componentização

### Componentes de Seção (`sections/`)

- **Hero**: Seção principal com título, subtítulo e CTA
- **Section**: Componente base para todas as seções com título e subtítulo
- **BenefitsSection**: Seção de benefícios com cards
- **TrainingSection**: Lista de treinamentos disponíveis
- **DocumentsSection**: Lista de documentos elaborados
- **AboutSection**: Seção sobre a empresa

### Componentes de Cartão (`cards/`)

- **BenefitCard**: Card para exibir benefícios
- **TrainingItem**: Item individual de treinamento
- **DocumentItem**: Item individual de documento

### Componentes de Formulário (`forms/`)

- **ContactForm**: Formulário de contato completo

### Componentes de Layout (`layout/`)

- **Footer**: Rodapé da página com informações da empresa

## 📊 Dados Centralizados

Todos os dados estáticos estão centralizados em `src/lib/data.ts`:

- Informações da empresa
- Dados do hero
- Lista de benefícios
- Lista de treinamentos
- Lista de documentos
- Valores da empresa

## 🎨 Estilização

- **Tailwind CSS** para estilização utilitária
- **Fontes**: Poppins (títulos) e Inter (texto)
- **Cores**: Paleta azul corporativa
- **Responsivo**: Design mobile-first

## 🚀 Como Executar

1. **Instalar dependências:**

   ```bash
   pnpm install
   ```

2. **Executar em desenvolvimento:**

   ```bash
   pnpm dev
   ```

3. **Build para produção:**
   ```bash
   pnpm build
   ```

## 🔧 Benefícios da Nova Componentização

### ✅ **Reutilização**

- Componentes modulares e independentes
- Fácil reutilização em outras páginas
- Props tipadas com TypeScript

### ✅ **Manutenibilidade**

- Código organizado e legível
- Separação clara de responsabilidades
- Fácil localização e modificação

### ✅ **Escalabilidade**

- Estrutura preparada para crescimento
- Componentes facilmente extensíveis
- Padrões consistentes

### ✅ **Performance**

- Componentes otimizados
- Lazy loading quando necessário
- Bundle splitting automático

### ✅ **Desenvolvimento**

- Desenvolvimento paralelo de componentes
- Testes unitários facilitados
- Debugging simplificado

## 📝 Próximos Passos

- [ ] Implementar testes unitários
- [ ] Adicionar animações e transições
- [ ] Implementar sistema de temas
- [ ] Adicionar internacionalização (i18n)
- [ ] Implementar CMS para conteúdo dinâmico
- [ ] Adicionar analytics e métricas
- [ ] Implementar PWA (Progressive Web App)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
