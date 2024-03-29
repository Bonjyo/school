module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react'],
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'import',
    'babel',
    'react',
    'react-hooks',
    'prettier',
    'simple-import-sort',
  ],
  settings: {
    react: {
      version: '16.9',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/'],
      },
    },
  },
  rules: {
    semi: [1, 'always'],
    'no-console': 'warn',
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error', {}],
    'simple-import-sort/sort': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
