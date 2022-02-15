module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'max-len': 'off',
        "no-param-reassign": [2, { "props": false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    
    
  },
};
