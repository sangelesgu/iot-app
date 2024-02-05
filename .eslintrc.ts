const Rules = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
} as const;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': Rules.OFF,
    'no-unused-vars': Rules.OFF,
    'empty-rules': Rules.OFF,
    'no-prototype-builtins': Rules.OFF,
    'max-len': Rules.OFF,
  },
} as const;
