import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Global directory paths for the code linter engine to ignore entirely
  { ignores: ['dist'] },
  
  // Applies recommended Javascript code validation guidelines
  js.configs.recommended,
  
  // Applies standard rules for managing React Hooks dependencies safely
  ...reactHooks.configs.flat.recommended,
  
  // Custom parsing rules for matching browser execution context environments
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Confirms component files conform to single-direction component rendering reloads
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]