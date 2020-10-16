const Koa = require('koa')
const app = new Koa();
const router = require('./router/PCindex')
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000,()=>{
  console.log('服务器已启动','http://localhost:3000')
})