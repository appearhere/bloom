const path = require('path');

require('babel-polyfill');
require('babel-core/register')({
  presets: [
    // JSX, Flow
    require.resolve('babel-preset-react'),
    // Latest stable ECMAScript features
    require.resolve('babel-preset-latest'),
  ],
  plugins: [
    // Plugin to allow us to hot reload components
    require.resolve('react-hot-loader/babel'),
    // class { handleClick = () => { } }
    require.resolve('babel-plugin-transform-class-properties'),
    // { ...todo, completed: true }
    require.resolve('babel-plugin-transform-object-rest-spread'),
    // function* () { yield 42; yield 43; }
    [require.resolve('babel-plugin-transform-regenerator'), {
      // Async functions are converted to generators by babel-preset-latest
      async: false,
    }],
    // Polyfills the runtime needed for async/await and generators
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true,
      // Resolve the Babel runtime relative to the config.
      // You can safely remove this after ejecting:
      moduleName: path.dirname(require.resolve('babel-runtime/package')),
    }],
  ],
});

require('./server');