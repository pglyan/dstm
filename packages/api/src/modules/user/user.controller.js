export class UserController {
  constructor(userService) {
    this.userService = userService
  }

  getUsers() {
    return this.userService.getUsers()
  }
}
