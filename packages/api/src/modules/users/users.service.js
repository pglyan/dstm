export class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  getUsers() {
    return this.usersRepository.findAll()
  }
}
