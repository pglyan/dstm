import type { Database } from 'better-sqlite3'
import { TaskController } from './task.controller.ts'
import { TaskRepository } from './task.repository.ts'
import { createTaskRouter } from './task.router.ts'
import { TaskService } from './task.service.ts'

export function createTaskModule(db: Database) {
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
