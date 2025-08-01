import Router from '@koa/router'

export function createUserRouter(userController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = userController.getUsers()
  })

  return router
}
