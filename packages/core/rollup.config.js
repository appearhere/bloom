import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import calc from 'postcss-calc';
import commonjs from '@rollup/plugin-commonjs';
import cssMap from '@appearhere/common-styles';
import customMedia from 'postcss-custom-media';
import customProperties from 'postcss-custom-properties';
import json from '@rollup/plugin-json';
import lost from 'lost';
import objectFitImages from 'object-fit-images';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import reactSvg from "rollup-plugin-react-svg";
import resolve from '@rollup/plugin-node-resolve';

const baseConfig = (cssDest) => {
  return {
    input: 'src/index.js',
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
      postcss({
        extract: cssDest,
        modules: {
          generateScopedName: "Bloom__[name]__[local]___[hash:base64:5]"
        },
        minimize: true,
        plugins: [
          autoprefixer(),
          customProperties({
            preserve: false,
            variables: cssMap.vars,
          }),
          customMedia({
            preserve: false,
            extensions: cssMap.media,
          }),
          calc(),
          lost,
          objectFitImages,
        ],
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
    ],
  };
};

export default [
  {
    ...baseConfig(path.resolve('./dist/module/bloom.css')),
    output: {
      format: 'esm',
      dir: 'dist/module',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      },
    },
    treeshake: {
      moduleSideEffects: false
    },
    preserveModules: true
  },
  {
    ...baseConfig(path.resolve('./dist/bloom.css')),
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'bloom',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      },
    },
  },
];