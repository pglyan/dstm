export class TasksController {
  constructor(tasksService) {
    this.tasksService = tasksService
  }

  getTasks() {
    return this.tasksService.getTasks()
  }
}
