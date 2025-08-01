import SQLite, { type Database } from 'better-sqlite3'

export function connectToDatabase(dbPath: string): Database {
  const db = new SQLite(dbPath)
  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = ON')
  return db
}

export function testDatabaseConnection(db: Database): void {
  db.prepare('SELECT 1').get()
  console.log('Database connection is valid.')
}

export function closeDatabaseConnection(db: Database): void {
  db.close()
  console.log('Database connection closed successfully.')
}
