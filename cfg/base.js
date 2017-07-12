'use strict';
const path = require('path');
const sourcePath = path.join(__dirname, '../src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: sourcePath,
  devtool: 'eval',
  entry: {
        "vendors-web": ['react', 'react-dom', 'prop-types', 'react-redux', 'redux', 'redux-thunk', 'redux-logger', 'react-hot-loader', 'react-router-dom'],
        "app": "./index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js",
        publicPath: './'
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        inline: true,
        port: 8000
        // proxy: {
        //     "/subject": "http://localhost:8000",
        //     "/tag": "http://localhost:8000",
        //     "/book": "http://localhost:8000",
        //     "/static": "http://localhost:8000"
        // }
    },
  
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx$/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                use: ["ts-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                module: true, // css-loader 0.14.5 compatible
                                modules: true,
                                localIdentName: '[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'collapsed',
                                sourceMap: true,
                                includePaths: [sourcePath],
                            },
                        },
                    ],
                })
            }
        ]
    },
    plugins: []
};