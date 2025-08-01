import { computed, signal } from '@preact/signals'

export const tasks = signal([])

export function addNew(task) {
  tasks.value = [...tasks.value, task]
}

export function getById(id) {
  return computed(() => {
    return tasks.value.find((task) => task.id === id)
  })
}
