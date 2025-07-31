import { BoardPageSidebar } from './BoardPageSidebar'
import styles from './BoardPage.module.css'

export function BoardPage() {
  return (
    <div class={styles.page}>
      <div class={styles.sidebar}>
        <BoardPageSidebar />
      </div>
      <main class={styles.content}>
        <h1>Welcome to the Board Page</h1>
      </main>
    </div>
  )
}
