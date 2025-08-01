export class QuestService {
  constructor(questRepository) {
    this.questRepository = questRepository
  }

  getQuests() {
    return this.questRepository.findAll()
  }
}
