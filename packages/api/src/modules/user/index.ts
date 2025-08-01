import type { Database } from 'better-sqlite3'
import { UserController } from './user.controller.ts'
import { UserRepository } from './user.repository.ts'
import { createUserRouter } from './user.router.ts'
import { UserService } from './user.service.ts'

export function createUserModule(db: Database) {
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
