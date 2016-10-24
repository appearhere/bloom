module.exports = {
  extends: [
    'airbnb',
    '@appearhere/appearhere',
  ],
  parser: 'babel-eslint',
  rules: {
    // AirBnb config includes the imports plugin, so we actually have to
    // disable the rules manually
    'import/no-unresolved': 0,

    // We use a webpack alias to make using our components in the style guide a
    // nicer. import/no-extraneous-dependencies do NOT like that one bit.
    // We'll disable it until theres a decent work around
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
  }
};