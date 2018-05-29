const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const autoprefixer = require('autoprefixer');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const lost = require('lost');

const cssMap = require('@appearhere/common-styles');

const postcss = (config, env) => {
  config.module.rules[2].oneOf[4].use[2].options.plugins = () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      flexbox: 'no-2009',
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
    }),
    customProperties({
      variables: cssMap.vars,
      preserve: false
    }),
    customMedia({
      extensions: cssMap.media,
    }),
    lost,
  ]

  return config;
}

const markdown = (config, env) => {
  config.module.rules[2].oneOf = [{
    test: /\.md$/,
    loader: 'raw-loader',
  }, ...config.module.rules[2].oneOf];

  console.log(config.module.rules);
  return config;
};

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);

  config = postcss(config, env);
  config = markdown(config, env);
  return config;
}
