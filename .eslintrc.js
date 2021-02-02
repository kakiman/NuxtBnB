module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // 'plugin:vue/recommended',
    // 'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier', 'html'],
  rules: {
    /*"unicorn/better-regex": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/consistent-destructuring": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/custom-error-definition": "off",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/filename-case": "error",
    "unicorn/import-index": "off",
    "unicorn/import-style": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-callback-reference": "error",
    "unicorn/no-array-for-each": "error",
    "unicorn/no-array-push-push": "error",
    "unicorn/no-array-reduce": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-lonely-if": "error",
    "no-nested-ternary": "off",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-null": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-this-assignment": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-useless-undefined": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-regexp-test": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "error",
    "unicorn/string-content": "off",
    "unicorn/throw-new-error": "error",*/
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    indent: ['off'],
    semi: ['off'],
    'no-unused-vars': ['off'],
    'no-tabs': ['off'],
    'space-before-function-paren': ['off'],
    'comma-dangle': ['off'],
    'spaced-comment': ['off'],
    'no-underscore-dangle': ['off'],
    'import/order': ['off'],
    'import/namespace': [2, { allowComputed: true }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/order-in-components': 'warn',
    'vue/v-bind-style': ['warn', 'shorthand'],
    'vue/v-on-style': ['warn', 'longform'],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': [
      'error',
      {
        // ? https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing
        html: {
          void: 'any',
          normal: 'never',
          component: 'any'
        },
        svg: 'any' //,
        // 'math': 'any'
      }
    ],
    // 'vue/require-prop-types': 'warn',
    // 'vue/require-default-prop': 'warn',
    // 'vue/html-quotes': 'double',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/adjacent-overload-signatures': ['off'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }
    ]
  },
  globals: {
    $nuxt: true
  }
}
