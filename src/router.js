
const Router = require('koa-router');
const router = new Router();

router.get('/hello', async (ctx, next) => {
    ctx.body = {
        msg: 'hello world'
    };

});
router.get('/zip', async (ctx, next) => {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('你好啊')
        }, 5000);

    });
    ctx.body = result;

})



module.exports = router;