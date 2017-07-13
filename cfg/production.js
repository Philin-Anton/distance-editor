
const path = require('path');
const baseConfig = require('./base');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function isExternal(module) {
    const context = module.context;

    if (typeof context !== 'string') {
        return false;
    }
    if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
        return false;
    }

    return context.indexOf('node_modules') !== -1;
}

const config = Object.assign({}, baseConfig, {
  cache: true,
  devtool: "cheap-source-map",
  plugins: [
    new ProgressBarPlugin(),
    new webpack.ProvidePlugin({
        "react": "react",
        "prop-types": "prop-types",
        "redux": "redux",
        "redux-thunk": "redux-thunk",
        "redux-logger": "redux-logger",
        "react-hot-loader": "react-hot-loader",
        "react-redux": "react-redux",
        "react-dom": "react-dom",
        "react-router-dom": "react-router-dom",
        "Promise": 'imports?this=>global!exports?global.Promise!es6-promise'
    }),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        chunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors-web',
        chunks: ['vendors-web'],
        minChunks: function (module) {
            return isExternal(module);
        }
    }),
    new HtmlWebpackPlugin({
        title: "Distance Editor",
        hash: true,
        template: "./index.html"
    }),
    new ExtractTextPlugin('style-[contenthash:8].css')
  ]
});


module.exports = config;