const path = require('path');
const pkg = require('./package');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = (options, req) => ({
  entry: [
    'src/polyfills.js',
    'src/index.js',
  ],
  output: {
    html: {
      title: pkg.productName,
      template: path.join(__dirname, 'index.ejs'),
	  description: pkg.description,
      publicPath: './',
    },
  	publicUrl: './',
  },
  chainWebpack(config) {
    config.output.publicPath('./');
    // optionally `return config`
	config
      .plugin('preload-webpack')
      .use(PreloadWebpackPlugin)
      .end()
  },

  // or object
  // merged using `webpack-merge` module
  configureWebpack: {
  },
  plugins: [
//  new PreloadWebpackPlugin({
//    rel: 'preload',
//    include: 'allChunks' // or 'initial', or 'allAssets'
//  })
  ]
});
