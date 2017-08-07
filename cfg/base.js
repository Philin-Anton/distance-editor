'use strict';
const path = require('path');
const sourcePath = path.join(__dirname, '../src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: sourcePath,
    devtool: 'eval',
    entry: {
        "app": [
            'react-hot-loader/patch',
            './index.tsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "assets/[name].bundle.js",
        publicPath: './'
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        noInfo: true,
        hot: true,
        lazy: true,
        inline: true,
        port: 8000,
        open: true,
        openPage: '',
        publicPath: "http://localhost:8000/"
        // proxy: {
        //     "/subject": "http://localhost:8000",
        //     "/tag": "http://localhost:8000",
        //     "/book": "http://localhost:8000",
        //     "/static": "http://localhost:8000"
        // }
    },
    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['react-hot-loader/webpack', 'babel-loader', 'ts-loader']
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