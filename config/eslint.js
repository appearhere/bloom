module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  ecmaFeatures: {
    classes: true,
    jsx: true,
  },
  env: {
    jest: true,
  },
  plugins: [
    'flowtype',
    'jsx-a11y',
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    document: true,
    window: true,
    navigator: true,
  },
  rules: {
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'after-used',
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_',
    }],
    // https://github.com/yannickcr/eslint-plugin-react/issues/621
    'react/prop-types': ['warn', {
      'ignore': ['children']
    }],
    'react/require-extension': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      'optionalDependencies': false,
      'peerDependencies': false
    }],
    'react/no-unused-prop-types': ['error', {
      'skipShapeProps': true
    }],
    'react/forbid-prop-types': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn'
  },
};
