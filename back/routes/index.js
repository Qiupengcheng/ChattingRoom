const router = require('koa-router')(),
	  path = require('path'),
	  {ctrlsPath, viewsPath, utilsPath} = require('../config/paths');

const fs = require('fs');
const {asyncReadFile} = require(path.join(utilsPath, '/utils'));

// 简化挂载路由的方式 make it easy to set child routers
router.__proto__.easySetRouter = function(prefix, childRouterName, {routes = {}, allowedMethods = []} = {}){
	const childRouter = require(childRouterName);
	this.use(prefix, childRouter.routes(routes), childRouter.allowedMethods(allowedMethods));
}

router.easySetRouter('/', path.join(ctrlsPath, './index.js'))
router.easySetRouter('/user', path.join(ctrlsPath, './user.js'));
router.easySetRouter('/goods', path.join(ctrlsPath, './goods.js'));

router.all('*', async function(ctx, next){
	let notFoundPage = await asyncReadFile(path.join(viewsPath, '/404.html')).catch(err => err);
	ctx.type = 'text/html';
	ctx.body = notFoundPage;
})

module.exports = router
