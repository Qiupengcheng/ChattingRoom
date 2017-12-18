const Koa = require('koa');
const {pathsConfig} = require('./config');
const serve = require('koa-static');
const app = new Koa();
const router = require('./routes');
const logger = require('./mw/logger');

app.on('error', (err, ctx) => {
	ctx.status = 500;
	ctx.body = err;
})

// 挂载logger中间件
app.use(logger());

app.use(serve(pathsConfig.viewsPath))
app.use(serve(pathsConfig.publicPath, {
	maxage: 600000
}))

// 挂载router
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)

console.log('start server at localhost:3000')
