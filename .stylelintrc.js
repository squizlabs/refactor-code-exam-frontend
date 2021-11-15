module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-space-before': null,
    'declaration-empty-line-before': null,
    indentation: null,
    'max-empty-lines': null,
    'no-descending-specificity': null,
    'no-eol-whitespace': null,
    'number-leading-zero': null,
    'rule-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'no-empty-source': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'string-quotes': null,
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['$base-font-family'],
      },
    ],
  },
};
