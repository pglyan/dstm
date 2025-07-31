import Koa from 'koa'
import Router from '@koa/router'
import { bodyParser } from '@koa/bodyparser'
import { createUsersModule } from './modules/users/index.js'
import { createTasksModule } from './modules/tasks/index.js'

export function createApp(db) {
  const app = new Koa()

  app.use(bodyParser())

  const appRouterV1 = new Router({ prefix: '/api/v1' })

  const usersModule = createUsersModule(db)
  const tasksModule = createTasksModule(db)

  appRouterV1.use(
    '/users',
    usersModule.usersRouter.routes(),
    usersModule.usersRouter.allowedMethods()
  )

  appRouterV1.use(
    '/tasks',
    tasksModule.tasksRouter.routes(),
    tasksModule.tasksRouter.allowedMethods()
  )

  app.use(appRouterV1.routes())

  app.on('error', (err, ctx) => {
    console.error('Server error:', err, ctx)
  })

  return app
}
