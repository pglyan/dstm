import { computed, signal } from '@preact/signals'

export class Quest {
  constructor(data) {
    this._id = data.id
    this.name = signal(data.name)
    this.status = signal(data.status)
  }

  get id() { return this._id }
}

export const quests = signal([])

export function addNew(quest) {
  quests.value = [...quests.value, quest]
}

export function getById(id) {
  return computed(() => {
    return quests.value.find((quest) => quest.id === id)
  })
}
