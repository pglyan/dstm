import { UserController } from './user.controller.js'
import { UserRepository } from './user.repository.js'
import { createUserRouter } from './user.router.js'
import { UserService } from './user.service.js'

export function createUserModule(db) {
  const userRepository = new UserRepository(db)
  const userService = new UserService(userRepository)
  const userController = new UserController(userService)
  const userRouter = createUserRouter(userController)

  return {
    userRouter,
    userController,
    userService,
    userRepository
  }
}
