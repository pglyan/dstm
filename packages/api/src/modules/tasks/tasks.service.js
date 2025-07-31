export class TasksService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository
  }

  getTasks() {
    return this.tasksRepository.findAll()
  }
}
