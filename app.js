/**
 * Created by Administrator on 2016/8/25 0025.
 */
var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(8889);