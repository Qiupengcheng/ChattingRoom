module.exports = function(){
	return async function(ctx, next){
		const start = new Date();
		console.log(`*** url: ${ctx.url}, method: ${ctx.method}, start: ${start.toLocaleString()} ***`);
		await next();
		const end = new Date();
		console.log(`*** url: ${ctx.url}, method: ${ctx.method}, end: ${end.toLocaleString()}, used: ${end.getTime() - start.getTime()} ms ***`);
	}
}
