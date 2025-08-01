import type { TaskService } from './task.service.ts'

export class TaskController {
  private readonly _taskService: TaskService

  constructor(taskService: TaskService) {
    this._taskService = taskService
  }

  getTasks() {
    return this._taskService.getTasks()
  }
}
