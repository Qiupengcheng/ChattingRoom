const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");
const config = require("./config");

const devConfig = Object.assign({}, baseConfig, {
    entry: {
        app: './src/index.js'
    },
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist/'),
		publicPath: '/dist/'
	},
	devServer: {
		compress: true,
		hot: true,
		port: config.port,
		inline: true,
		open: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
});


module.exports = devConfig;