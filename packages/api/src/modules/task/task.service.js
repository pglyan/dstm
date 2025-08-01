export class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository
  }

  getTasks() {
    return this.taskRepository.findAll()
  }
}
