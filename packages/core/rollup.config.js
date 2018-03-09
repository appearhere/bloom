import { extname, relative } from 'path';
import postcssCssnext from 'postcss-cssnext';
import postcssModules from 'postcss-modules';
import progress from 'rollup-plugin-progress';
import json from 'rollup-plugin-json';
import { readFileSync, writeFileSync } from 'fs';
import cssnano from 'cssnano';
import babel from 'rollup-plugin-babel';
import { parseString } from 'xml2js';
import postcss from 'postcss';
import reactSvg from "rollup-plugin-react-svg";
import lost from 'lost';

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
          scopeNames[hash] = `${name}_${i.toString(36)}`;
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
        // Append CSS to output
        css += result.css;

        // We can't yet export consts because some selector names aren't
        // valid js variable names (anything with a hyphen "foo-bar").
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
    'react',
    'react-dom',
    'classnames',
    'react-motion',
    'prop-types',
    'subscribe-ui-event',
    'react-transition-group',
    'classnames/bind',
    'exenv',
    'es6-symbol',
    'warning',
    'react-moment-proptypes',
    'key-mirror',
    '@appearhere/nuka-carousel',
    'react-container-query',
    'react-autosuggest',
    '@appearhere/react-input-range',
    'commonmark',
    'commonmark-react-renderer',
    '@appearhere/react-stickynode',
    'react-html5video',
    'lodash/fp/uniqueId'
  ],
  plugins: [
    progress(),
    reactSvg({
      svgo: {
        plugins: [], // passed to svgo
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
  ]
}
