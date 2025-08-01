import type { UserRepository } from './user.repository.ts'

export class UserService {
  private readonly _userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository
  }

  getUsers() {
    return this._userRepository.findAll()
  }
}
