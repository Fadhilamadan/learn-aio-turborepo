module.exports = {
  ignorePatterns: ['**/env.js', '**/*.config.js'],
  plugins: ['import', 'prettier', 'unused-imports', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'next',
    'turbo',
    'airbnb-typescript',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    // default rules
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'space-before-blocks': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'max-len': [
      'error',
      { code: 80, tabWidth: 1, ignoreComments: true, ignoreUrls: true },
    ],

    // react rules
    'react/jsx-key': ['error'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-indent-props': ['error', 2],
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': ['off'],
    'react/function-component-definition': ['off'],
    'react-hooks/exhaustive-deps': ['off'],

    // next rules
    '@next/next/no-html-link-for-pages': ['off'],

    // typescript eslint rules
    '@typescript-eslint/default-param-last': ['off'],

    // eslint-plugin-import
    'import/extensions': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['off'],

    // eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': ['error'],

    // eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      { tabWidth: 2, useTabs: false, endOfLine: 'auto' },
    ],

    // eslint-plugin-simple-import-sort
    'simple-import-sort/exports': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react.*', '^next.*', '^(?!src|.?./|.+\\.(s?css|less)$).*'],
          ['^src'],
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          ['^.+\\.(s?css|less)$'],
        ],
      },
    ],
  },
};
