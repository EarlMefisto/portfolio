import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import css from '@eslint/css'

export default tseslint.config([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.json', '**/*.jsonc'],
    plugins: {
      json,
    },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    rules: {
      ...css.configs.recommended.rules,
    },
  },
])
