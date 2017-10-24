const autoprefixer = require('autoprefixer');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const lost = require('lost');
const path = require('path');
const webpackPostcssTools = require('webpack-postcss-tools');

const paths = require('./paths');

const cssMap = webpackPostcssTools.makeVarMap(
  path.join(paths.globalsSrc, 'index.css')
);

module.exports = () => ({
  plugins: [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
    }),
    customProperties({
      variables: cssMap.vars,
    }),
    customMedia({
      extensions: cssMap.media,
    }),
    lost,
  ],
});
