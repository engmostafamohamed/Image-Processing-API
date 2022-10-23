module.export = {
  env: {
    node: true,
    "es6": true
    // es2021: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    // quotes: ['error', 'single'],
    // 'prettier/prettier': 2, // Means error
    // 'no-console': 1, // Means warning
    // 'no-var': 'error',
    // 'prefer-const': 'error',
  },
}