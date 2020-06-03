const path = require('path');
const pkg = require('./package');

module.exports = (options, req) => ({
  entry: [
    'src/polyfills.js',
    'src/index.js',
  ],
  copy: false,
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs'),
    publicPath: './',
  },
  webpack(config) {
    if (options.mode === 'production') {
      config.output.publicPath = './';
    }
    return config;
  },
});
