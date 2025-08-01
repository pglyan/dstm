import { QuestController } from './quest.controller.js'
import { QuestRepository } from './quest.repository.js'
import { createQuestRouter } from './quest.router.js'
import { QuestService } from './quest.service.js'

export function createQuestModule(db) {
  const questRepository = new QuestRepository(db)
  const questService = new QuestService(questRepository)
  const questController = new QuestController(questService)
  const questRouter = createQuestRouter(questController)

  return {
    questRouter,
    questController,
    questService,
    questRepository
  }
}
