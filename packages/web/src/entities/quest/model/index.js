import { computed, signal } from '@preact/signals'

export const quests = signal([])

export function addNew(quest) {
  quests.value = [...quests.value, quest]
}

export function getById(id) {
  return computed(() => {
    return quests.value.find((quest) => quest.id === id)
  })
}
