module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-globals': 0,
    'no-undef': 0,
    'no-prototype-builtins': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'no-new': 0,
    'no-console': 0,
  },
  ignorePatterns: ['jsonconfig.json'],
};
