export class QuestController {
  constructor(questService) {
    this.questService = questService
  }

  getQuests() {
    return this.questService.getQuests()
  }
}
