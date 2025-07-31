import Koa from 'koa'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'Tank!'
})

app.listen(3000)
