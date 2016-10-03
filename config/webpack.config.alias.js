const paths = require('./paths');

module.exports = {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
  // No more relative component imports
  components: paths.componentSrc,
  globals: paths.globalsSrc,
  utils: paths.utilsSrc
};