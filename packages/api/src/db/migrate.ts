import fs from 'node:fs/promises'
import path from 'node:path'
import type { Database } from 'better-sqlite3'

const MIGRATIONS_DIR = path.join(import.meta.dirname, 'migrations')

type MigrationFileName = `${number}_${string}.sql`

export async function runDatabaseMigrations(db: Database): Promise<void> {
  const migrationFiles = await fs.readdir(MIGRATIONS_DIR)
  const validMigrationFiles = migrationFiles.filter(validateMigrationFileName)

  const orderedMigrations = validMigrationFiles.sort((a, b) => {
    const aNum = parseInt(a.split('_')[0]!, 10)
    const bNum = parseInt(b.split('_')[0]!, 10)
    return aNum - bNum
  })

  for (const file of orderedMigrations) {
    const filePath = path.join(MIGRATIONS_DIR, file)
    const sql = await fs.readFile(filePath, 'utf-8')
    db.exec(sql)
  }
}

export function validateMigrationFileName(fileName: string): fileName is MigrationFileName {
  const regex = /^\d+_.+\.sql$/
  return regex.test(fileName)
}
