export class TaskController {
  constructor(taskService) {
    this.taskService = taskService
  }

  getTasks() {
    return this.taskService.getTasks()
  }
}
