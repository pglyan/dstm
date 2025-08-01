import Router from '@koa/router'

export function createTaskRouter(taskController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = taskController.getTasks()
  })

  return router
}
