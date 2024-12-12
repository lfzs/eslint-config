import pluginVue from 'eslint-plugin-vue'
import configVanilla from '@jzfe/eslint-config-vanilla'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default [
  ...configVanilla,
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/no-watch-after-await': 0,
      'vue/attribute-hyphenation': [1, 'never'],
      'vue/max-attributes-per-line': 0, // 和 prettier printWidth 冲突
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
  {
    files: ['**/*.jsx'],
    plugins: {
      '@stylistic/jsx': stylisticJsx
    },
    rules: {
      '@stylistic/jsx/jsx-pascal-case': 2,
      // 在 .jsx 中忽略。因为无法检测到组件被使用
      // https://github.com/eslint-stylistic/eslint-stylistic/issues/547
      // https://eslint.vuejs.org/rules/jsx-uses-vars.html#vue-jsx-uses-vars
      'no-unused-vars': 0,
    }
  },
]
