import Router from '@koa/router'

export function createTasksRouter(tasksController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = tasksController.getTasks()
  })

  return router
}
