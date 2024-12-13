// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      import: eslintPluginImport,
    },
    rules: {
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import/no-absolute-path': 'error',
      'import/no-relative-parent-imports': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/no-mutable-exports': 'warn',
    },
  },
];
