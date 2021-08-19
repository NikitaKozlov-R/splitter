module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true
  },

  globals: {
    localStorage: true,
    fetch: true
  },

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 120,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ],
    'no-unused-vars': 0,
    'trailing-comma': 0,
    'vue/valid-v-slot': 0
  },

  extends: ['plugin:prettier/recommended', 'plugin:vue/recommended', '@vue/prettier']
}
