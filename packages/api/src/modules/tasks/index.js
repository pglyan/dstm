import { TasksController } from './tasks.controller.js'
import { TasksRepository } from './tasks.repository.js'
import { createTasksRouter } from './tasks.router.js'
import { TasksService } from './tasks.service.js'

export function createTasksModule(db) {
  const tasksRepository = new TasksRepository(db)
  const tasksService = new TasksService(tasksRepository)
  const tasksController = new TasksController(tasksService)
  const tasksRouter = createTasksRouter(tasksController)

  return {
    tasksRouter,
    tasksController,
    tasksService,
    tasksRepository
  };
}
