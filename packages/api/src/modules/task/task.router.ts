import Router from '@koa/router'
import type { TaskController } from './task.controller.ts'

export function createTaskRouter(taskController: TaskController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = taskController.getTasks()
  })

  return router
}
