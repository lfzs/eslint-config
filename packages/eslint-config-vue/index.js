import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import configVanilla from '@jzfe/eslint-config-vanilla'

export default defineConfig([
  ...configVanilla,
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    files: ['**/*.{jsx,vue}'],
    ignores: ['dist'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/no-watch-after-await': 0,
      'vue/attribute-hyphenation': [1, 'never'],
      'vue/html-self-closing': 0,
      'vue/max-attributes-per-line': 0, // 和 prettier printWidth 冲突
      'vue/one-component-per-file': 0,
      'vue/prop-name-casing': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/v-on-event-hyphenation': [1, 'never'],
      'vue/no-lone-template': 1,
      'vue/this-in-template': 2,
      'vue/block-tag-newline': 1,
      'vue/component-api-style': 2,
      'vue/component-name-in-template-casing': 1,
      'vue/component-options-name-casing': 1,
      'vue/custom-event-name-casing': 1,
      'vue/enforce-style-attribute': 1,
      'vue/no-duplicate-attr-inheritance': 1,
      'vue/no-empty-component-block': 1,
      'vue/no-multiple-objects-in-class': 1,
      'vue/no-required-prop-with-default': 1,
      'vue/no-setup-props-reactivity-loss': 1,
      'vue/no-undef-properties': 1,
      'vue/no-unused-emit-declarations': 1,
      'vue/no-unused-properties': 1,
      'vue/no-unused-refs': 1,
      'vue/no-use-v-else-with-v-for': 2,
      'vue/no-useless-mustaches': 1,
      'vue/no-useless-v-bind': 1,
      'vue/no-v-text': 1,
      'vue/prefer-use-template-ref': 1,
      'vue/dot-notation': 1,
      'vue/eqeqeq': 2,
      'vue/no-constant-condition': 1,
      'vue/no-irregular-whitespace': 1,
      'vue/no-loss-of-precision': 1,
      'vue/no-sparse-arrays': 1,
      'vue/no-useless-concat': 1,
      'vue/prefer-template': 1,
    },
  },
])
