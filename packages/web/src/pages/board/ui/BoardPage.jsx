import { Router, Route } from 'preact-iso'
import { BoardSidebar } from './BoardSidebar'
import { LatestQuests } from './LatestQuests'
import { QuestView } from './QuestView'
import styles from './BoardPage.module.css'

export function BoardPage() {
  return (
    <div class={styles.page}>
      <div class={styles.sidebar}>
        <BoardSidebar />
      </div>
      <main class={styles.content}>
        <Router>
          <Route path="/latest" component={LatestQuests} />
          <Route path='/quest/:questId' component={QuestView} />
        </Router>
      </main>
    </div>
  )
}
