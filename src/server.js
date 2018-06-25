
const Koa = require('koa');
const staticServer = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const app = new Koa();
const router = require('./router');
const config = require('./config');


function start() {
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(staticServer(path.join(__dirname, "../static/")));

    app.listen(config.PORT, () => {
        console.log(`server is running at port ${config.PORT}`);

    });
}

exports.start = start;