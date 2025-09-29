module.exports = {
  root: true,
  'parser': 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/no-arrow-functions-in-default': 'off',
    'vue/script-setup-uses-vars': 2,
    'vue/max-attributes-per-line': [2, {
      'singleline': {
        'max': 10
      }
    }],
    'vue/v-on-event-hyphenation': [2, 'never', {
      'autofix': false,
      'ignore': ['custom-event']
    }],
    'object-curly-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'arrow-spacing': 2,
    'vue/multi-word-component-names': [2, {
      'ignores': ['home',
        'login']
    }],
    indent: [2,
      2,
      {
        SwitchCase: 1
      }],
    'vue/block-tag-newline': [2, {
      'singleline': 'always',
      'multiline': 'always',
      'maxEmptyLines': 0,
      'blocks': {
        'script': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 0
        },
        'template': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 0
        },
        'my-block': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 0
        }
      }
    }],
    'vue/no-unused-properties': [2, {
      'groups': ['data', 'methods']
    }],
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'consistent-this': [2, 'self', 'that'],
    'curly': [2, 'multi-line', 'consistent'],
    'default-case': 2,
    'eqeqeq': [2, 'always', {'null': 'ignore'}],
    'for-direction': 2,
    'getter-return': [2, {allowImplicit: true}],
    'handle-callback-err': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'keyword-spacing': 2,
    'max-depth': [2, 5],
    'max-nested-callbacks': [2, 3],
    'max-params': [2, 8],
    'new-cap': [2, {
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-alert': 1,
    'no-array-constructor': 2,
    'no-buffer-constructor': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-confusing-arrow': [2, {'allowParens': true}],
    'no-constant-condition': [2, {'checkLoops': false}],
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-empty-character-class': 2,
    'no-empty-function': 0,
    'no-empty-pattern': 2,
    'no-empty': [2, {'allowEmptyCatch': true}],
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': [2, {'exceptions': ['Array', 'Object']}],
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-fallthrough': [2, {'commentPattern': '.'}],
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': [2, {
      'allow': ['+', '!!']
    }],
    'no-implied-eval': 2,
    'no-implicit-globals': 2,
    'no-inner-declarations': [2, 'both'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': [2, {
      'skipStrings': true,
      'skipComments': true,
      'skipRegExps': true,
      'skipTemplates': true
    }],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-mixed-operators': [2, {
      'groups': [['&&', '||']]
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      max: 3,
      maxEOF: 1,
      maxBOF: 1
    }],
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 'off',
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': [2,
      {
        'skipBlankLines': true,
        'ignoreComments': true
      }],
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {'defaultAssignment': false}],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-expressions': [2,
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true
      }],
    'no-unused-labels': 2,
    'no-unused-vars': [2,
      {
        'vars': 'all',
        'args': 'none',
        'ignoreRestSiblings': true,
        'caughtErrors': 'none'
      }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'nonblock-statement-body-position': 2,
    'one-var': [2, {
      'const': 'never'
    }],
    'prefer-promise-reject-errors': 2,
    'prefer-rest-params': 2,
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'radix': 2,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'semi-style': [2, 'last'],
    'semi': [2,
      'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [0, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'block': {
        exceptions: ['*'],
        balanced: true
      }
    }],
    'strict': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'symbol-description': 2,
    'unicode-bom': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': 2
  }
}
