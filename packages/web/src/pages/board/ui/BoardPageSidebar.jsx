import { NewProjectModal } from './NewProjectModal'
import styles from './BoardPageSidebar.module.css'

export function BoardPageSidebar() {
  return (
    <aside class={styles.root}>
      <section class={styles.projects}>
        <div class={styles.projectsHeader}>
          <h2 class={styles.projectsTitle}>
            Projects
          </h2>
          <div>
            <NewProjectModal />
          </div>
        </div>
        <nav>
          <ul class={styles.projectsList}>
            <li>
              <a class={styles.projectsLink} href="/board/fh34132sfd">
                Test
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  )
}

// function SidebarGroup(props) {
//   return (
//     <section class={styles.group}>
//       <header class={styles.header}>
//         <h2 class={styles.title}>
//           {props.title}
//         </h2>
//         <div class={styles.actions}>
//           {props.actions}
//         </div>
//       </header>
//       <div>
//         {props.children}
//       </div>
//     </section>
//   )
// }
