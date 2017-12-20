const Router = require('koa-router');
const router = new Router()
const models = require('../models');

router.get('/', async (ctx, next) => {
	console.log(ctx.url, '...ctx-url');
	var users = await models.user.getUser();
	ctx.body = users;
})

router.get('/login', async (ctx, next) => {
	console.log(ctx.url, '...ctx-url');
	ctx.body = ctx.url;
})

module.exports = router
