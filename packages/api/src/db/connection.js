import Database from 'better-sqlite3'

export function connectToDatabase(dbPath) {
  const db = new Database(dbPath)
  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = ON')
  db.prepare('SELECT 1').get()
  console.log('Database connection established successfully.')
  return db
}
