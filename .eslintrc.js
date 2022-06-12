module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  root: true,
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/no-unescaped-entities': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-pascal-case': ['off'],
    'react/forbid-prop-types': ['off'],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ]
  }
};
