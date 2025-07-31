import { UsersController } from './users.controller.js'
import { UsersRepository } from './users.repository.js'
import { createUsersRouter } from './users.router.js'
import { UsersService } from './users.service.js'

export function createUsersModule(db) {
  const usersRepository = new UsersRepository(db)
  const usersService = new UsersService(usersRepository)
  const usersController = new UsersController(usersService)
  const usersRouter = createUsersRouter(usersController)

  return {
    usersRouter,
    usersController,
    usersService,
    usersRepository
  }
}
