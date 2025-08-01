import { TaskController } from './task.controller.js'
import { TaskRepository } from './task.repository.js'
import { createTaskRouter } from './task.router.js'
import { TaskService } from './task.service.js'

export function createTaskModule(db) {
  const taskRepository = new TaskRepository(db)
  const taskService = new TaskService(taskRepository)
  const taskController = new TaskController(taskService)
  const taskRouter = createTaskRouter(taskController)

  return {
    taskRouter,
    taskController,
    taskService,
    taskRepository
  }
}
