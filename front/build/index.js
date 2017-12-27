const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');
const dllConfig = require('./webpack.config.dll.js');

module.exports = {
	devConfig,
	prodConfig,
	dllConfig
};