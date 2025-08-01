import Koa from 'koa'
import Router from '@koa/router'
import { bodyParser } from '@koa/bodyparser'
import { createUserModule } from './modules/user/index.js'
import { createTaskModule } from './modules/task/index.js'

export function createApp(db) {
  const app = new Koa()

  app.use(bodyParser())

  const appRouterV1 = new Router({ prefix: '/api/v1' })

  const userModule = createUserModule(db)
  const taskModule = createTaskModule(db)

  appRouterV1.use(
    '/users',
    userModule.userRouter.routes(),
    userModule.userRouter.allowedMethods()
  )

  appRouterV1.use(
    '/tasks',
    taskModule.taskRouter.routes(),
    taskModule.taskRouter.allowedMethods()
  )

  app.use(appRouterV1.routes())

  app.on('error', (err, ctx) => {
    console.error('Server error:', err, ctx)
  })

  return app
}
