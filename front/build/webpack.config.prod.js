const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");
const config = require("./config");

const prodConfig = Object.assign({}, baseConfig, {
	plugins: [
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
		}),
		new HtmlWebpackPlugin({
			title: config.tilte,
			inject: true,
			filename: "../index.html",
			template: "index-template.html",
            dll: (function () {
                let res = [];
                const dllName = require(path.resolve(__dirname, `./manifest.json`)).name.split('_');
                res.push(`./lib/${dllName[0]}.${dllName[1]}.js`);
                return res
            })()
		}),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
	]
});


module.exports = prodConfig;