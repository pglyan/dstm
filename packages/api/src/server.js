import { createApp } from './app.js'
import { connectToDatabase } from './db/connection.js'
import { runDatabaseMigrations } from './db/migrate.js'

const dbPath = process.env.DB_PATH || ':memory:'
const port = process.env.PORT || 3000

async function start() {
  try {
    const db = connectToDatabase(dbPath)
    await runDatabaseMigrations(db)

    const app = createApp(db)

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Error starting the application:', error)
    process.exit(1)
  }
}

start()
