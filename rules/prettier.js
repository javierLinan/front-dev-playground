module.exports = {
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true, printWidth: 120 }],
  },
};
