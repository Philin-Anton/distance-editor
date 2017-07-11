const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './src');

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

module.exports = {
    context: sourcePath,
    entry: {
        "vendors-web": ['react', 'react-dom', 'prop-types', 'react-redux', 'redux', 'redux-thunk', 'redux-logger', 'react-hot-loader', 'react-router-dom'],
        "app": "./index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "cheap-source-map",
    // resolve: {
    //     // Add '.ts' as resolvable extensions.
    //     extensions: [".ts", ".tsx", ".js", ".jsx"]
    // },
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
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 8000
        // proxy: {
        //     "/subject": "http://localhost:8000",
        //     "/tag": "http://localhost:8000",
        //     "/book": "http://localhost:8000",
        //     "/static": "http://localhost:8000"
        // }
    },
    // Omit "externals" if you don't have any. Just an example because it's
    // common to have them.
    externals: [
        // Don't bundle giant dependencies, instead assume they're available in
        // the html doc as global variables node module name -> JS global
        // through which it is available
        // {
        //     "react": "react",
        //     "prop-types": "prop-types",
        // }
    ],
    plugins: [
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
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
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
        new ExtractTextPlugin('style-[contenthash:8].css'),
    ]
};