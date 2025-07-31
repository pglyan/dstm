import styles from './AppHeader.module.css'

const navLinks = [
  { to: '/', text: 'now' },
  { to: '/board', text: 'board' },
  { to: '/me', text: 'me' }
]

export function AppHeader() {
  const renderedNavLinks = navLinks.map((link) => (
    <li key={link.to}>
      <a className={styles.link} href={link.to}>
        {link.text}
      </a>
    </li>
  ))

  return (
    <header className={styles.root}>
      <nav>
        <ul className={styles.list}>
          {renderedNavLinks}
        </ul>
      </nav>
    </header>
  )
}
