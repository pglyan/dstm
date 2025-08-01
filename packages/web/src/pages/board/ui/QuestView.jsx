import { useRoute } from 'preact-iso'
import styles from './QuestView.module.css'

export function QuestView() {
  const { params } = useRoute()

  return (
    <div class={styles.root}>
      <h1>Quest: {params.questId}</h1>
    </div>
  )
}
