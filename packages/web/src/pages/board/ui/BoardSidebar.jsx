import { NewQuestModal } from './NewQuestModal'
import styles from './BoardSidebar.module.css'

export function BoardSidebar() {
  return (
    <aside class={styles.root}>
      <section class={styles.quests}>
        <div class={styles.questsHeader}>
          <h2 class={styles.questsTitle}>
            Quests
          </h2>
          <div>
            <NewQuestModal />
          </div>
        </div>
        <nav>
          <ul class={styles.questList}>
            <li>
              <a class={styles.questLink} href="/board/quest/fh34132sfd">
                Test
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  )
}
