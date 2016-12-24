'use strict';
const debug = process.env.NODE_ENV !== "production";
const build = process.env.NODE_ENV === "build";
const webpack = require('webpack');
console.log(build);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
    devtool: debug ? "inline-sourcemap" : null,

    entry: {"app": "./frontend/src/app/app.jsx"},
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {test: /\.css$/, exclude: /node_modules/,loader: "style-loader!css-loader"},
            {test: /\.png$/, exclude: /node_modules/, loader: "url-loader?limit=100000"},
            {test: /\.jpg$/, exclude: /node_modules/, loader: "file-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.css',]
    },
    publicPath: '',
    output: {
        path: "./frontend/src/public/scripts",
        filename: "[name].min.js"
    },
    devServer: {
        outputPath: path.join(__dirname, 'build'),
        contentBase: './frontend/src/public',
        historyApiFallback: true,
        stats: 'minimal'
    },
    plugins: debug? [new HTMLWebpackPlugin({
        template: './frontend/src/public/index.html',
        filename: '../index.html'

    }),new CopyWebpackPlugin([{
        from: './frontend/src/public', to: __dirname + '/../dist'
    }])]: [

        new webpack.NoErrorPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),

    ],
};

