const Router = require('koa-router');
const router = new Router()

router.get('/', async (ctx, next) => {
	console.log(ctx.url, '...ctx-url');
	ctx.body = ctx.url;
})

router.get('/login', async (ctx, next) => {
	console.log(ctx.url, '...ctx-url');
	ctx.body = ctx.url;
})

module.exports = router
