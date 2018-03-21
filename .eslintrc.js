module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    jest: true,
  },
  parser: "babel-eslint",
  rules: {
    'no-console': 0,
    'react/jsx-filename-extension': 0,
    'arrow-parens': ['error', 'always'],
    'comma-dangle': 'warn',
    'semi': 'warn',
    'eol-last': 'warn',
    'quotes': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  }
}
