import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso'
import { AppHeader } from '#/widgets/app-header'
import { NowPage } from '#/pages/now'
import { BoardPage } from '#/pages/board'
import { MePage } from '#/pages/me'
import { NotFoundPage } from '#/pages/404'
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <LocationProvider>
      <div className={styles.root}>
        <div className={styles.header}>
          <AppHeader />
        </div>
        <main className={styles.main}>
          <ErrorBoundary>
            <Router>
              <Route path="/" component={NowPage} />
              <Route path="/board" component={BoardPage} />
              <Route path="/me" component={MePage} />
              <Route default component={NotFoundPage} />
            </Router>
          </ErrorBoundary>
        </main>
      </div>
    </LocationProvider>
  )
}
