const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/login',(ctx)=>{
  ctx.body = 'HHAHHAHA'
})
module.exports = router