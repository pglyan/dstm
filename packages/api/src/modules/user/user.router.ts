import Router from '@koa/router'
import type { UserController } from './user.controller.ts'

export function createUserRouter(userController: UserController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = userController.getUsers()
  })

  return router
}
