export class UsersController {
  constructor(usersService) {
    this.usersService = usersService
  }

  getUsers() {
    return this.usersService.getUsers()
  }
}
