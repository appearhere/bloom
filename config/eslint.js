module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  ecmaFeatures: {
    classes: true,
    jsx: true,
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
  },
  rules: {
    'eol-last': 0,
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-filename-extension': 0,

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/

    // TODO: import rules are temporarily disabled because they don't play well
    // with how eslint-loader only checks the file you change. So if module A
    // imports module B, and B is missing a default export, the linter will
    // record this as an issue in module A. Now if you fix module B, the linter
    // will not be aware that it needs to re-lint A as well, so the error
    // will stay until the next restart, which is really confusing.

    // This is probably fixable with a patch to eslint-loader.
    // When file A is saved, we want to invalidate all files that import it
    // *and* that currently have lint errors. This should fix the problem.

    // 'import/default': 'warn',
    // 'import/export': 'warn',
    // 'import/named': 'warn',
    // 'import/namespace': 'warn',
    // 'import/no-amd': 'warn',
    // 'import/no-duplicates': 'warn',
    // 'import/no-extraneous-dependencies': 'warn',
    // 'import/no-named-as-default': 'warn',
    // 'import/no-named-as-default-member': 'warn',
    // 'import/no-unresolved': ['warn', { commonjs: true }],

    // AirBnb config includes the imports plugin, so we actually have to
    // disable the rules manually
    'import/no-unresolved': 0,

    // We use a webpack alias to make using our components in the style guide a
    // nicer. import/no-extraneous-dependencies do NOT like that one bit.
    // We'll disable it until theres a decent work around
    'import/no-extraneous-dependencies': 0,
  },
};