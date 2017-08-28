const config = require('deeson-webpack-config-starter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const postcssPlugins = [require('autoprefixer'), require('postcss-responsive-type'), require('postcss-inline-svg')];

config.output.publicPath = '/themes/custom/deeson_frontend_framework/assets/';

delete config.entry.pages;

config.module.rules = config.module.rules
  .filter(e => e.test.toString() !== /\.scss$/.toString());

config.module.rules.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract([
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'postcss-loader', options: { sourceMap: true, plugins: () => postcssPlugins } },
    { loader: 'sass-loader', options: { sourceMap: true } },
  ])
});

config.module.rules.push({
  loader: `webpack-modernizr-loader?useConfigFile`,
  test: /\.modernizrrc\.js$/
});

config.resolve = {
  alias: {
    modernizr$: path.resolve(__dirname, '.modernizrrc.js')
  }
}

module.exports = config;
