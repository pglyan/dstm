import type { TaskRepository } from './task.repository.ts'

export class TaskService {
  private readonly _taskRepository: TaskRepository

  constructor(taskRepository: TaskRepository) {
    this._taskRepository = taskRepository
  }

  getTasks() {
    return this._taskRepository.findAll()
  }
}
