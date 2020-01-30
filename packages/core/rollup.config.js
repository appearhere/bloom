import { extname, relative } from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcssPresetEnv from 'postcss-preset-env';
import postcssModules from 'postcss-modules';
import postcss from 'postcss';
import lost from 'lost';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import cssnano from 'cssnano';
import { writeFileSync } from 'fs';

import cssMap from '@appearhere/common-styles';

const cssModules = (options = {}) => {
  const cssExportMap = {};
  const scopeNames = {};
  let css = '';

  const plugins = [
    postcssPresetEnv({
      features: {
        customMedia: {
          extensions: cssMap.media,
        },
        customProperties: {
          variables: cssMap.vars,
        },
      },
    }),
    lost(),
    postcssModules({
      scopeBehavior: 'local',
      generateScopedName(name, filename) {
        const dir = relative(__dirname, filename);
        const hash = `${dir}:${name}`;
        if (!Object.prototype.hasOwnProperty.call(scopeNames, hash)) {
          // base 36 encode the unique scope name
          const i = Object.keys(scopeNames).length;
          scopeNames[hash] = `Bloom__${name}_${i.toString(36)}`;
        }

        return scopeNames[hash];
      },
      getJSON(path, exportTokens) {
        cssExportMap[path] = exportTokens;
      },
    }),
  ];

  const postcssParser = postcss(plugins);

  return {
    name: 'cssModules',
    transform(code, id) {
      if (extname(id) !== '.css') {
        return null;
      }

      const opts = {
        from: id,
        to: id,
        parser: options.parser,
      };

      return postcssParser.process(code, opts).then(result => {
        css += result.css;

        const js = `
          export default ${JSON.stringify(cssExportMap[result.opts.from])};
          `;
        const map = { mappings: '' };
        return { code: js, map };
      });
    },

    generateBundle() {
      cssnano.process(css).then(result => {
        writeFileSync(options.output, result.css);
      });
    },
  };
};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'bloom',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-motion': 'reactMotion$1',
      'subscribe-ui-event': 'subscribeUiEvent',
      'lodash/fp/uniqueId': 'uniqueId',
      'classnames': 'cx$2',
      'react-on-visible': 'OnVisible',
      'react-transition-group': 'reactTransitionGroup',
      'prop-types': 'PropTypes',
      'classnames/bind': 'classNames$1',
      'exenv': 'ExecutionEnvironment',
      'moment': 'moment$1',
      'moment-range': 'momentRange',
      'react-moment-proptypes': 'reactMomentProptypes',
      'key-mirror': 'keyMirror',
      'nuka-carousel': 'Carousel$1',
      'react-container-query': 'reactContainerQuery',
      'shortid': 'shortid',
      '@appearhere/react-input-range': 'ReactInputRange',
      'react-autosuggest': 'AutoSuggest',
      'warning': 'warning',
      'react-html5video': 'videoConnect',
      'lodash/fp/isEqual': 'isEqual',
      'lodash/fp/find': 'find',
      'lodash/fp/isArray': 'isArray',
      'commonmark': 'CommonMark',
      'commonmark-react-renderer': 'ReactRenderer',
      'lodash/fp/first': 'first',
      'lodash/fp/last': 'last',
      '@appearhere/react-stickynode': 'StickyNode',
    }
  },
  // All the used libs needs to be here
  external: [
    '@appearhere/react-input-range',
    '@appearhere/react-stickynode',
    'shortid',
    'nuka-carousel',
    'classnames',
    'classnames/bind',
    'commonmark',
    'commonmark-react-renderer',
    'dedent',
    'es6-symbol',
    'exenv',
    'key-mirror',
    'lodash/fp/find',
    'lodash/fp/first',
    'lodash/fp/flattenDeep',
    'lodash/fp/isArray',
    'lodash/fp/isEqual',
    'lodash/fp/last',
    'lodash/fp/uniqueId',
    'lodash/fp/throttle',
    'mapbox-gl',
    'moment',
    'moment-range',
    'prop-types',
    'react',
    'react-moment-proptypes',
    'react-autosuggest',
    'react-container-query',
    'react-dom',
    'react-html5video',
    'react-motion',
    'react-on-visible',
    'react-transition-group',
    'subscribe-ui-event',
    'warning'
  ],
  watch: {
    clearScreen: false
  },
  plugins: [
    cssModules({
      output: 'dist/bloom.css',
    }),
    json({
      preferConst: true,
    }),
    babel(),
    resolve({
      customResolveOptions: {
        moduleDirectory: '../../node_modules'
      }
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement']
      }
    }),
  ]
}
