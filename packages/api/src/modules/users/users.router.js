import Router from '@koa/router'

export function createUsersRouter(usersController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = usersController.getUsers()
  })

  return router
}
