module.exports = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version),
  'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID),
};
