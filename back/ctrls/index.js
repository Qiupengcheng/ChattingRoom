const Router = require('koa-router');
const router = new Router()


router.get('/', async (ctx, next) => {
	ctx.body = ctx.url
})

router.get('rxjs', async (ctx, next) => {
	ctx.body = 'rxjs'
})

router.get('getList', async (ctx, next) => {
	ctx.body = ctx.url
})


module.exports = router
