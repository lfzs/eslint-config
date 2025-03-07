import js from '@eslint/js'
import globals from 'globals'
import checkFile from 'eslint-plugin-check-file'
export default [
  js.configs.recommended,
  {
    rules: {
      'array-callback-return': 2,
      'no-async-promise-executor': 0,
      'no-constructor-return': 2,
      'no-duplicate-imports': 2,
      'no-inner-declarations': 2,
      'no-promise-executor-return': 2,
      'no-self-compare': 2,
      'no-unmodified-loop-condition': 2,
      'no-unreachable-loop': 2,
      'no-useless-assignment': 2,

      'class-methods-use-this': 1,
      'dot-notation': 1,
      eqeqeq: 2,
      'func-name-matching': 1,
      'no-alert': 1,
      'no-array-constructor': 1,
      'no-empty': [1, { allowEmptyCatch: true }],
      'no-extend-native': 1,
      'no-extra-label': 1,
      'no-lone-blocks': 1,
      'no-multi-assign': 1,
      'no-negated-condition': 1,
      'no-new': 1,
      'no-new-func': 1,
      'no-new-wrappers': 1,
      'no-proto': 1,
      'no-sequences': 1,
      'no-throw-literal': 1,
      'no-undef-init': 1,
      'no-unneeded-ternary': 1,
      'no-unused-expressions': [1, { allowShortCircuit: true, allowTernary: true }],
      'no-useless-computed-key': 1,
      'no-useless-concat': 1,
      'no-useless-rename': 1,
      'no-useless-return': 1,
      'no-var': 2,
      'no-void': 1,
      'prefer-const': 1,
      'prefer-rest-params': 1,
      'prefer-template': 1,
      'require-await': 1,
    },
  },
  {
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['src/**/*'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [2, {
        'src/**/*.{vue,jsx,tsx}': 'PASCAL_CASE',
        'src/**/*.{js,ts}': 'CAMEL_CASE',
      }],
      'check-file/folder-naming-convention': [2, {
        'src/**/': 'CAMEL_CASE'
      }],
    },
  },
  { ignores: ['dist'] },
]
