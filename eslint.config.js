import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default tseslint.config(
  // Configurações recomendadas do typescript-eslint
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  
  // Configurações específicas do projeto
  {
    files: ['**src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    }, 
    rules: {
      // Configurações específicas do projeto
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      
      // Regras específicas para TypeScript com verificação de tipo
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/return-await': 'error',
      
      // Configurações do Prettier
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'es5',
          arrowParens: 'always',
          semi: false,
          endOfLine: 'auto',
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
    },
  },

  // Configurações específicas para arquivos React
  {
    files: ['**/*.{tsx,jsx}'],
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Configurações do Next.js
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),

  // Configurações do Prettier (deve ser o último)
  eslintPluginPrettierRecommended,
)
