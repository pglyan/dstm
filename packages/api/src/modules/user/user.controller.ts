import type { UserService } from './user.service.ts'

export class UserController {
  private readonly _userService: UserService

  constructor(userService: UserService) {
    this._userService = userService
  }

  getUsers() {
    return this._userService.getUsers()
  }
}
