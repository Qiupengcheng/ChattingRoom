var path = require('path');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

module.exports  = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist/assets/'),
		publicPath: './assets/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
                                autoprefixer(),
                                pxtorem({
                                    rootValue: 37.5,
                                    propList: ['*'],
								})
							]
						}
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{

			}

		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {}
	}
};