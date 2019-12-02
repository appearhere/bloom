import { extname, relative } from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcssCssnext from 'postcss-cssnext';
import postcssModules from 'postcss-modules';
import postcss from 'postcss';
import lost from 'lost';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import reactSvg from "rollup-plugin-react-svg";
import cssnano from 'cssnano';
import { readFileSync, writeFileSync } from 'fs';
import { parseString } from 'xml2js';

import cssMap from '@appearhere/common-styles';

const cssModules = (options = {}) => {
  const cssExportMap = {};
  const scopeNames = {};
  let css = '';

  const plugins = [
    postcssCssnext({
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

    ongenerate() {
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
      'react-dom': 'ReactDOM'
    }
  },
  // All the used libs needs to be here
  external: [
    '@appearhere/react-input-range',
    '@appearhere/react-stickynode',
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
    'moment',
    'moment-range',
    'prop-types',
    'react',
    'react-autosuggest',
    'react-container-query',
    'react-dom',
    'react-html5video',
    'react-moment-proptypes',
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
    reactSvg({
      svgo: {
        plugins: [],
        multipass: true
      },
      jsx: true,
    }),
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
    commonjs(),
  ]
}
