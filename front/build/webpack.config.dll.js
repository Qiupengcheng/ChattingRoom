const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./webpack.config.base.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require("./config");

const vendors = [
    'react',
    'react-router',
    'react-router-dom',
    'react-redux',
    'redux',
    'redux-thunk',
    'redux-api-middleware'
];

const dllConfig = Object.assign({}, baseConfig, {
    entry: {
        vendor: vendors
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist/lib/'),
        library: '[name]_[chunkhash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "manifest.json"),
            name: '[name]_[chunkhash]',
            context: __dirname
        }),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
        })
    ]
});

console.log(dllConfig);


module.exports = dllConfig;