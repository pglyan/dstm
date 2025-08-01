import Koa from 'koa'
import Router from '@koa/router'
import type { Database } from 'better-sqlite3'
import { bodyParser } from '@koa/bodyparser'
import { createUserModule } from './modules/user/index.ts'
import { createTaskModule } from './modules/task/index.ts'

export function createApp(db: Database): Koa {
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
