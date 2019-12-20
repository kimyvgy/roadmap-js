module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "react-app"],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'max-len': ['warn', 120],
    'no-param-reassign': 'off',
    'semi': ['error', 'never'],
    'no-extra-semi': 'error',
    'no-unused-vars': 'error'
  },
}
