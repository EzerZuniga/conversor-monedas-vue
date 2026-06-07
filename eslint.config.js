import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        crypto: 'readonly',
        setTimeout: 'readonly',
        Intl: 'readonly',
        localStorage: 'readonly',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
