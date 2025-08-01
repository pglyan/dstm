import process from 'node:process'
import {
  connectToDatabase,
  testDatabaseConnection,
  closeDatabaseConnection
} from './db/connection.ts'
import { runDatabaseMigrations } from './db/migrate.ts'
import { createApp } from './app.ts'

const dbPath = process.env.DB_PATH || ':memory:'
const port = process.env.PORT || 3000

async function startDatabase() {
  try {
    console.log(`Connecting to database at ${dbPath}...`)
    const db = connectToDatabase(dbPath)
    console.log('Testing database connection...')
    testDatabaseConnection(db)

    console.log('Running database migrations...')
    await runDatabaseMigrations(db)
    console.log('Database migrations completed successfully.')

    return db
  } catch (error) {
    console.error('Error initializing the database:', error)
    process.exit(1)
  }
}

async function start() {
  const db = await startDatabase()

  try {
    console.log('Creating application...')
    const app = createApp(db)

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Error starting the application:', error)
    closeDatabaseConnection(db)
    process.exit(1)
  }
}

start()
