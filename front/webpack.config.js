const argv = require('yargs').argv;
const webpackConfig = require('./build');

module.exports = env => {
	console.log(env);
	let config = {};
	if (env.NODE_ENV === 'dev') {
		config = webpackConfig.devConfig;
	}
	if (env.NODE_ENV === 'prod') {
		config = webpackConfig.prodConfig;
	}
    if (env.NODE_ENV === 'dll') {
        config = webpackConfig.dllConfig;
    }
	return Object.assign({}, config);
};